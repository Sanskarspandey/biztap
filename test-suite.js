// test-suite.js — Comprehensive verification of BizTap data integrity & routes
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== BIZTAP COMPREHENSIVE AUTOMATED VERIFICATION ===\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. Verify Company Contact Info
const companyFile = fs.readFileSync(path.join(__dirname, 'src/data/company.ts'), 'utf8');
assert(companyFile.includes('+91 9372948245'), 'Official phone +91 9372948245 is present in company.ts');
assert(companyFile.includes('sanskar.p.work@gmail.com'), 'Official email sanskar.p.work@gmail.com is present in company.ts');
assert(companyFile.includes('Tap. Connect. Grow.'), 'Tagline is present in company.ts');

// 2. Verify Pricing Data File
const pricingFile = fs.readFileSync(path.join(__dirname, 'src/data/pricing.ts'), 'utf8');
const expectedPrices = [
  { name: 'Schools', price: '₹8,999' },
  { name: 'Clinics', price: '₹12,999' },
  { name: 'Shops & retail', price: '₹9,999' },
  { name: 'Photography', price: '₹4,999' },
  { name: 'Restaurants & cafés', price: '₹7,999' },
  { name: 'Gyms & fitness', price: '₹7,999' },
  { name: 'Salons', price: '₹9,999' },
  { name: 'Beauty parlours', price: '₹4,999' },
  { name: 'Builders & architects', price: '₹14,999' },
  { name: 'CA & tax consultants', price: '₹12,999' },
  { name: 'Lawyers & legal', price: '₹12,999' },
  { name: 'Personal portfolios', price: '₹3,999' },
  { name: 'NFC Smart Review Card', price: '3000' },
  { name: 'Smart Profile Starter', price: '4999' },
  { name: 'Smart Profile Pro', price: '8999' },
  { name: 'Website + Smart Profile Bundle', price: '11999' }
];

expectedPrices.forEach((ep) => {
  assert(pricingFile.includes(ep.price), `Pricing file contains expected price ${ep.price} for ${ep.name}`);
});

// 3. Verify All 15 Industries exist in industries.ts
const industriesFile = fs.readFileSync(path.join(__dirname, 'src/data/industries.ts'), 'utf8');
const requiredIndustries = [
  'schools', 'clinics', 'shops-retail', 'photography', 'restaurants-cafes',
  'gyms-fitness', 'salons', 'beauty-parlours', 'portfolios', 'builders-architects',
  'ca-tax-consultants', 'lawyers-legal', 'hotels-hospitality', 'real-estate', 'custom-business'
];

requiredIndustries.forEach((slug) => {
  assert(industriesFile.includes(`slug: '${slug}'`), `Industry slug '${slug}' exists in industries.ts`);
});

// 4. Verify All 13 Services exist in services.ts
const servicesFile = fs.readFileSync(path.join(__dirname, 'src/data/services.ts'), 'utf8');
const requiredServices = [
  'website-development', 'business-websites', 'ecommerce-websites', 'landing-pages',
  'website-redesign', 'nfc-smart-review-cards', 'digital-business-profiles', 'qr-code-solutions',
  'whatsapp-integration', 'booking-systems', 'seo', 'website-maintenance', 'custom-web-applications'
];

requiredServices.forEach((slug) => {
  assert(servicesFile.includes(`slug: '${slug}'`), `Service slug '${slug}' exists in services.ts`);
});

// 5. Verify All 4 Blog Articles exist in blog.ts
const blogFile = fs.readFileSync(path.join(__dirname, 'src/data/blog.ts'), 'utf8');
const requiredArticles = [
  'why-your-business-needs-a-website',
  'how-nfc-review-cards-work',
  'how-to-improve-your-online-presence',
  'website-cost-india'
];

requiredArticles.forEach((slug) => {
  assert(blogFile.includes(`slug: '${slug}'`), `Blog article slug '${slug}' exists in blog.ts`);
});

// 6. Check for Lorem Ipsum anywhere in src/
let hasLoremIpsum = false;
function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkDir(fullPath);
    } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('lorem ipsum')) {
        hasLoremIpsum = true;
        console.error(`Found lorem ipsum in ${fullPath}`);
      }
    }
  }
}
checkDir(path.join(__dirname, 'src'));
assert(!hasLoremIpsum, 'Zero "Lorem Ipsum" placeholder text across entire codebase');

// 7. Verify Sitemap has all URLs
const sitemapFile = fs.readFileSync(path.join(__dirname, 'public/sitemap.xml'), 'utf8');
requiredIndustries.forEach((slug) => {
  assert(sitemapFile.includes(`/industries/${slug}`), `Sitemap includes /industries/${slug}`);
});
requiredServices.forEach((slug) => {
  assert(sitemapFile.includes(`/services/${slug}`), `Sitemap includes /services/${slug}`);
});
requiredArticles.forEach((slug) => {
  assert(sitemapFile.includes(`/blog/${slug}`), `Sitemap includes /blog/${slug}`);
});

console.log(`\n=== TEST RESULTS: ${passedTests}/${totalTests} PASSED (${failedTests} FAILED) ===\n`);
if (failedTests > 0) process.exit(1);
