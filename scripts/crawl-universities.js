const fs = require('fs');
const path = require('path');

const API_BASE_URL = 'https://duhocnga.org/wp-json/wp/v2';

async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.log(`⚠️  Attempt ${i + 1} failed for ${url}: ${error.message}`);
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

function createExcerpt(content, maxLength = 200) {
  const text = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

async function getAllUniversities() {
  console.log('🚀 Starting to crawl universities...');

  try {
    const allUniversities = [];
    let page = 1;
    const perPage = 100;
    let hasMore = true;

    console.log('📄 Fetching all universities with pagination...');
    
    while (hasMore) {
      console.log(`📖 Fetching page ${page}...`);
      
      const response = await fetchWithRetry(`${API_BASE_URL}/truong?page=${page}&per_page=${perPage}&_embed`);
      const universities = await response.json();

      if (universities.length === 0) {
        hasMore = false;
        break;
      }

      allUniversities.push(...universities);
      console.log(`✅ Page ${page}: Found ${universities.length} universities (Total: ${allUniversities.length})`);

      // Check if we have more pages
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      if (page >= totalPages) {
        hasMore = false;
      } else {
        page++;
        // Add small delay between requests to be respectful
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    console.log(`🎯 Crawling completed! Total universities found: ${allUniversities.length}`);

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('📁 Created data directory');
    }

    const allUniversitiesFile = path.join(dataDir, 'universities.json');
    fs.writeFileSync(allUniversitiesFile, JSON.stringify(allUniversities, null, 2));
    console.log('💾 Saved full universities data');

    const universitiesList = allUniversities.map(university => ({
      id: university.id,
      slug: university.slug,
      title: university.title.rendered,
      excerpt: createExcerpt(university.content.rendered),
      date: university.date,
      modified: university.modified,
      link: university.link,
      featured_media: university.featured_media,
      featured_image: university._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    }));

    const universitiesListFile = path.join(dataDir, 'universities-list.json');
    fs.writeFileSync(universitiesListFile, JSON.stringify({
      universities: universitiesList
    }, null, 2));
    console.log('📋 Saved universities list');

    const meta = {
      total: allUniversities.length,
      lastUpdated: new Date().toISOString(),
      apiBaseUrl: API_BASE_URL,
      crawledAt: new Date().toISOString()
    };

    const metaFile = path.join(dataDir, 'meta.json');
    fs.writeFileSync(metaFile, JSON.stringify(meta, null, 2));
    console.log('📊 Saved metadata');

    console.log('✨ Crawl completed successfully!');
    console.log(`📈 Total universities: ${allUniversities.length}`);
    console.log(`🗄️  Files saved to: ${dataDir}/`);
    console.log('🎯 Ready to run: npm run dev');

  } catch (error) {
    console.error('❌ Error crawling universities:', error);
    throw error;
  }
}

if (require.main === module) {
  getAllUniversities()
    .then(() => {
      console.log('🎉 All done!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { getAllUniversities }; 