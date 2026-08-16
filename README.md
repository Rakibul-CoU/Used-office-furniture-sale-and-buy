# Used Office Furniture Qatar — Website

A static, mobile-friendly website for **usedofficefurnitureqatar.com**, built for Doha-local SEO.

## What's inside
- `index.html` — Home page
- `products.html` — Inventory listing (filterable by category)
- `about.html` — About / story page
- `contact.html` — Contact form + FAQ (with FAQ schema markup)
- `css/style.css` — All styling (single stylesheet)
- `js/main.js` — Mobile menu, product filter, contact form handling
- `images/` — **Placeholder images** — replace these with real photos of your furniture and showroom (keep the same filenames, or update the `src=` paths in the HTML)
- `robots.txt` — Tells search engines they can crawl the site
- `sitemap.xml` — Lists all pages for Google Search Console

## Replace these before going live
1. **Images** — swap every file in `/images` with real photos (same filenames = zero code changes needed).
2. **Phone/email** — currently set to `+974 5514 0610` and `info@usedofficefurnitureqatar.com`. Search-and-replace if different.
3. **Prices & inventory** — edit the product cards in `index.html` and `products.html` directly with your real stock.
4. **Google Maps embed** — the map already searches for your business name; once your GBP is fully set up it should resolve correctly. You can also grab a precise embed code from Google Maps → Share → Embed a map.

## Deploying to Cloudflare Pages (free)
1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Upload this entire folder (or connect a GitHub repo if you'd rather manage it with git).
3. Once deployed, go to **Custom domains** in your Pages project and add `usedofficefurnitureqatar.com` (and `www` if you want both) — since the domain is already in your Cloudflare account, DNS connects automatically.
4. Cloudflare issues free SSL (HTTPS) automatically — no extra steps needed.

## After launch — SEO checklist
- [ ] Submit `sitemap.xml` in **Google Search Console** (Search Console → Sitemaps → enter `sitemap.xml`)
- [ ] Add the live website URL to your **Google Business Profile** ("Add website" button)
- [ ] Make sure your business Name, Address, Phone (NAP) match **exactly** across the website, Google Business Profile, and any directories (Bikroy, Qatar Living, etc.)
- [ ] Replace placeholder images with real, compressed photos (keep under ~300KB each for fast loading)
- [ ] Verify domain ownership in Search Console using the Cloudflare DNS TXT record method

## Notes
- The contact form currently opens the visitor's email app (`mailto:`) since this is a static site with no backend. If you want real form submissions without a server, connect a free service like Cloudflare Pages Forms, Formspree, or Web3Forms — ask and this can be wired up.
- Structured data (`schema.org` LocalBusiness + FAQPage) is already embedded in `index.html` and `contact.html` to help Google understand your business for rich results.
