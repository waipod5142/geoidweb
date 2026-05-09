# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## Screenshot Workflow (Mac)
- Puppeteer is at `/Users/waipodyeamkeaw/Documents/logistics/node_modules/puppeteer`
- Chrome: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- To capture a specific element (e.g. hero section), write a temp `.mjs` script using the puppeteer path above, run it, then delete it.

---

## Site Content Record
*Current values in `index.html` — update this section whenever content changes.*

### Company
- **Name (TH):** บริษัท จีโอไอดี (ประเทศไทย) จำกัด
- **Name (EN):** Geoid (Thailand) Co., Ltd
- **Registration No.:** 0145568001277
- **Affiliate badge:** ตัวแทนที่ได้รับการรับรองอย่างเป็นทางการจาก Geoid Asia / Authorized Affiliate of Geoid Asia

### Contact
- **Email:** geoid.thailand2025@gmail.com
- **Phone:** +66 81 4998528
- **Address:** 242/2 หมู่ 3 ต.บ้านเลน อ.บางปะอิน จ.พระนครศรีอยุธยา 13160
- **Hours:** จันทร์–ศุกร์ 8:30–17:30 น.

### Hero Stats
- **Clients:** 900+
- **Vehicles tracked:** 15K+
- **Years experience:** 14+ (sub-label: "ผู้นำด้านเทเลแมติกส์ในเอเชีย" / "Telematics Leader in Asia")

### Hero Section
- **Background:** Unsplash truck/highway photo (`photo-1592838064575-70ed626d3a0e`) with dark gradient overlay
- **Right panel:** SVG live-tracking dashboard widget (restored — not a photo)

### Technology Partners (8 cards with logos via Google favicon service)
1. Teltonika Networks — อุปกรณ์ IoT
2. Queclink — อุปกรณ์ GPS
3. Google Maps Platform — แผนที่และการนำทาง
4. Amazon Web Services — โครงสร้างพื้นฐานคลาวด์
5. Jimi IoT — เครื่องติดตาม GPS (`jimiiot.com`)
6. Wialon — แพลตฟอร์มเทเลแมติกส์
7. True — การเชื่อมต่อ 4G/LTE
8. Overleap — การแปลงสู่ดิจิทัล / Digital Transformation (logo: `overleap.tech/wp-content/uploads/2024/11/overleap.png`)

### Certifications
- **DLT:** กรมขนส่งทางบก — link: `https://www.dlt.go.th/th` — logo: `dlt.go.th/logo.png`
- **NBTC:** สำนักงานคณะกรรมการกิจการกระจายเสียง กิจการโทรทัศน์ และกิจการโทรคมนาคมแห่งชาติ — link: `https://nbtc.go.th/Home.aspx?lang=th-th` — logo: Google favicon service
- Displayed in footer as white-card badges under "รับรองโดย"
- Also referenced in: why5 card ("พร้อมสำหรับการรับรอง DLT และ NBTC"), comparison table row ("รับรองโดย DLT และ NBTC")

### Case Studies
1. **Logistics Fleet** — โลจิสติกส์
2. **Construction Fleet** — ก่อสร้าง
3. **Mining Fleet** — เหมืองแร่ (quarry & mining industry — replaced "Government Fleet")
