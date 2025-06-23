import { LocalUniversityData } from '@/libs/local-data';
import { notFound } from 'next/navigation';
import Script from 'next/script';

interface UniversityDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const slugs = LocalUniversityData.getAllSlugs();
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: UniversityDetailPageProps) {
  const resolvedParams = await params;
  const university = LocalUniversityData.getUniversityBySlug(resolvedParams.slug);

  if (!university) {
    return {
      title: 'University not found',
    };
  }

  return {
    title: university.title,
    description: university.modified,
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover',
  };
}

export default async function UniversityDetailPage({ params }: UniversityDetailPageProps) {
  const resolvedParams = await params;
  const university = LocalUniversityData.getUniversityBySlug(resolvedParams.slug);

  if (!university) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Du học Nga và học bổng Nga với chất lượng cao bên cạnh chi phí hợp lý",
    "@id": "https://duhocnga.org/",
    "logo": "https://duhocnga.org/wp-content/uploads/2023/12/logo-duhocnga.webp",
    "image": "https://duhocnga.org/wp-content/uploads/2023/12/logo-duhocnga.webp",
    "description": "Du học Nga là đơn vị hỗ trợ xin học bổng Nga, hướng dẫn thi Olympic tiếng Nga, đem lại cơ hội du học Nga chất lượng cao với chi phí hợp lý nhất",
    "hasMap": "https://www.google.com/maps?cid=13395499265109758090",
    "url": "https://duhocnga.org/",
    "telephone": "0943835358",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "65 P. Quán Sứ, Trần Hưng Đạo",
      "addressLocality": "Hoàn Kiếm",
      "addressRegion": "Hà Nội",
      "postalCode": "10000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.0239898,
      "longitude": 105.845206
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "16:30"
    }, {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:30",
      "closes": "12:00"
    }],
    "sameAs": [
      "https://www.facebook.com/duhocnga.org/",
      "https://x.com/duhocngaorg",
      "https://duhocnga.tumblr.com/",
      "https://www.youtube.com/@duhocnga_org",
      "https://sites.google.com/view/duhocnga/",
      "https://duhocngaorg.blogspot.com/",
      "https://www.behance.net/duhocnga",
      "https://duhocnga.quora.com/",
      "https://gravatar.com/duhocngaorg",
      "https://duhocnga.weebly.com/",
      "https://www.instagram.com/duhocnga_org/",
      "https://www.threads.net/@duhocnga_org",
      "https://www.tiktok.com/@duhocnga_org"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSQHKV9Q');
          `
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TB05BKHK00"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TB05BKHK00');
          `
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-941173477"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config-aw"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-941173477');
          `
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6CT3X5FX5H"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config-g"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6CT3X5FX5H');
          `
        }}
      />

      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        strategy="afterInteractive"
      />

      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="afterInteractive"
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PSQHKV9Q"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <div className="min-h-screen bg-gray-50">
        <div 
          dangerouslySetInnerHTML={{ 
            __html: university.content.rendered 
          }}
        />
      </div>

      <div id="button-contact-vr" className="">
        <div id="gom-all-in-one">
          <div id="messenger-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a target="_blank" href="http://m.me/duhocnga.org">
                  <img alt="messenger" src="https://duhocnga.org/wp-content/plugins/button-contact-vr/img/messenger.png" />
                </a>
              </div>
            </div>
          </div>
          <div id="zalo-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a target="_blank" href="https://zalo.me/0946785266">
                  <img alt="Zalo" src="https://duhocnga.org/wp-content/plugins/button-contact-vr/img/zalo.png" />
                </a>
              </div>
            </div>
          </div>
          <div id="whatsapp-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a target="_blank" href=" https://wa.me/84943835358">
                  <img alt="Whatsapp" src="https://duhocnga.org/wp-content/plugins/button-contact-vr/img/whatsapp.png" />
                </a>
              </div>
            </div>
          </div>
          <div id="phone-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a href="tel:0943835358">
                  <img alt="Phone" src="https://duhocnga.org/wp-content/plugins/button-contact-vr/img/phone.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        id="contact-button-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const allInOneBtn = document.getElementById('all-in-one-vr');
              const buttonContactVr = document.getElementById('button-contact-vr');
              const contactFormBtn = document.getElementById('contact-form-vr');
              const popupFormContact = document.getElementById('popup-form-contact-vr');
              const contactShowroomBtn = document.getElementById('contact-showroom');
              const popupShowroom = document.getElementById('popup-showroom-vr');
              
              if (allInOneBtn && buttonContactVr) {
                allInOneBtn.addEventListener('click', function() {
                  buttonContactVr.classList.toggle('active');
                });
              }
              
              if (contactFormBtn && popupFormContact) {
                contactFormBtn.addEventListener('click', function() {
                  popupFormContact.classList.add('active');
                });
              }
              
              const popupClosers = document.querySelectorAll('div#popup-form-contact-vr .bg-popup-vr, div#popup-form-contact-vr .content-popup-vr .close-popup-vr');
              popupClosers.forEach(function(closer) {
                closer.addEventListener('click', function() {
                  if (popupFormContact) {
                    popupFormContact.classList.remove('active');
                  }
                });
              });
              
              if (contactShowroomBtn && popupShowroom) {
                contactShowroomBtn.addEventListener('click', function() {
                  popupShowroom.classList.add('active');
                });
              }
              
              const showroomClosers = document.querySelectorAll('div#popup-showroom-vr .bg-popup-vr, .content-popup-vr .close-popup-vr');
              showroomClosers.forEach(function(closer) {
                closer.addEventListener('click', function() {
                  if (popupShowroom) {
                    popupShowroom.classList.remove('active');
                  }
                });
              });
            });
          `
        }}
      />


    </>
  );
} 