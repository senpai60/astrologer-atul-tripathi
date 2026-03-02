import Link from "next/link";
import React from "react";

const Footer = () => {
  const recentPosts = [
    "3 मार्च 2026: आज का लव राशिफल — कैसी रहेगी आपकी लव लाइफ?",
    "शुक्र राशि परिवर्तन: 2 मार्च 2026 से 5 राशियों के जीवन में लौटेंगे EX-PARTNER, शनि देव के साथ मिलकर शुक्र करेंगे 100 गुना चमत्कार!",
    "3 मार्च 2026 का विनाशकारी 'ब्लड मून': खग्रास ग्रहण लाएगा विश्व युद्ध का भयावह संकट—इतिहास गवाह है!",
    "3 मार्च 2026 खग्रास चंद्र ग्रहण: सूतक काल और 12 राशियों पर असर—जानें अतुल त्रिपाठी के साथ ग्रहण की पूरी सच्चाई!",
    "2 March 2026 आज का लव राशिफल: अतुल त्रिपाठी से जानें थर्ड पार्टी का सच और प्यार की वापसी की खुशखबरी!",
  ];

  const quickLinks = [
    "About Us",
    "Blog",
    "दैनिक लव राशिफल",
    "Call Consultation",
    "Cart",
    "Checkout",
    "Disclaimer",
    "Featured",
    "Home & Contact",
    "My account",
    "My Take",
    "News",
    "Online Puja Services",
    "Privacy Policy",
    "Refund and Returns Policy",
    "Services",
    "Shop",
  ];

  const bottomLinks = [
    "Services",
    "daily love reading",
    "love remedies",
    "Astro Remedies",
    "dharmik news",
    "CONTACT",
    "my take",
    "Products",
    "About Us",
    "Featured",
    "Privacy Policy",
    "Disclaimer",
    "News",
  ];

  return (
    <footer className="w-full bg-(--bg-surface) border-t border-(--bg-body) text-(--text-primary) relative z-10 mt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left Column - Recent Posts */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-4 text-(--accent) uppercase tracking-wide">
              Recent Highlights
            </h3>
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="border-t border-(--text-light)/20 pt-4 first:border-0 first:pt-0"
              >
                <Link
                  href="#"
                  className="text-sm font-semibold hover:text-(--accent) transition-colors inline-block leading-relaxed"
                >
                  {post}
                </Link>
              </div>
            ))}
          </div>

          {/* Middle Column - Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-bold text-xl mb-4 text-(--accent) uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  href="#"
                  key={index}
                  className="text-sm font-medium text-(--text-light) hover:text-(--accent) transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Badges / Protect */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-600 bg-green-50 text-green-700 font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              DMCA Protected
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/90 text-white/80 py-6 border-t border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-center lg:text-left">
          <div className="font-medium tracking-wide">
            Copyright BY ASTROLOGER ATUL TRIPATHI
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-2 gap-y-2 font-medium">
            {bottomLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href="#"
                  className="hover:text-(--accent-light) transition-colors uppercase tracking-wider"
                >
                  {link}
                </Link>
                {index !== bottomLinks.length - 1 && (
                  <span className="text-white/30 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
