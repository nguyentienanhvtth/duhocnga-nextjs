import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Du học Nga - Thông tin du học Nga chính thống",
  description: "Thông tin chính thống về du học Nga, học bổng du học Nga, các trường đại học tại Nga và hướng dẫn đăng ký học bổng du học Nga 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        
        {/* WordPress/Blocksy CSS from test.html */}
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/cac50a769d933a1538d8a3cb4aa93524.css?ver=93524" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/3b6514fc8c676c3db58b4b350bf2a990.css?ver=2a990" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/4b457d7c8b9443ca97a29bf93464b5e5.css?ver=4b5e5" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/f4826affac54b353ff8672e9f5d521db.css?ver=521db" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/2f6a4194a15c5b0b4d2daa0089fea182.css?ver=ea182" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/251a812dfa2f389d137712a5001b9550.css?ver=b9550" media="all" />
        
        {/* Elementor CSS */}
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/10e3f1d61dfbb4c9e46e1b399a2674bc.css?ver=674bc" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/c16875d734b83c7ad8b0a3b03c30744a.css?ver=0744a" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/2f14fc27c10c1b12ee27cfcbedb4c9d4.css?ver=4c9d4" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/a78eb5c25478b29e95e0d38cdfc1c8ad.css?ver=1c8ad" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/cfb1c16d7e7781c9eaa0d74656bce817.css?ver=ce817" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/89444455ed78c0766819cc42e816c791.css?ver=6c791" media="all" />
        
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/e7e3447cf8671a5d4dbdf27ad0191c63.css?ver=91c63" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/21300b6ddd1df2937c2c97bc2942e8bd.css?ver=2e8bd" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/20dfc65ebe242fd3694d06e8f7e220c9.css?ver=220c9" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/5395cac0bb3250181b37cfa7942914df.css?ver=914df" media="all" />
        
        {/* Blocksy Theme CSS */}
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/dd43c192e2660f907f32b0a7f9d0d5ac.css?ver=0d5ac" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/cfcb13fa60c6cc899465b7c6719170f8.css?ver=170f8" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/be2cadcd8eab7468a36af733f3d843bc.css?ver=843bc" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/a25d969be2b2bd15c814f0845bdd9931.css?ver=d9931" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/5559395efb85362fbe51f583342a1414.css?ver=a1414" media="all" />
        
        {/* Additional Elementor CSS for animations */}
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/7ef72d0af5fe753e1b0268c3dafd1547.css?ver=d1547" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/f5cfb55dcb004d5610bbebf4d68abe91.css?ver=abe91" media="all" />
        <link rel="stylesheet" href="https://duhocnga.org/wp-content/litespeed/css/5630cd8975f18ee919f9a635488e34c2.css?ver=e34c2" media="all" />
        
        {/* No-script CSS fallback */}
        <noscript>
          <link rel="stylesheet" href="https://duhocnga.org/wp-content/themes/blocksy/static/bundle/no-scripts.min.css" type="text/css" />
        </noscript>
        
        {/* Favicon */}
        <link rel="icon" href="https://duhocnga.org/wp-content/uploads/2023/12/icon.png" sizes="32x32" />
        <link rel="icon" href="https://duhocnga.org/wp-content/uploads/2023/12/icon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://duhocnga.org/wp-content/uploads/2023/12/icon.png" />
        <meta name="msapplication-TileImage" content="https://duhocnga.org/wp-content/uploads/2023/12/icon.png" />
        
        {/* Additional inline styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            img:is([sizes="auto" i], [sizes^="auto," i]) {
              contain-intrinsic-size: 3000px 1500px;
            }
            
            .wp-block-rank-math-toc-block nav ol {
              counter-reset: item;
            }
            .wp-block-rank-math-toc-block nav ol li {
              display: block;
            }
            .wp-block-rank-math-toc-block nav ol li:before {
              content: counters(item, ".") ". ";
              counter-increment: item;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} ${robotoSlab.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
