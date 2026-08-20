# UnionSolutions — Brand Book & Documentation

> **Tagline:** *Canadian technology. Built for labour. Designed for unions.*  
> **Mission:** To modernize and simplify the way Canadian unions operate by providing accessible, secure, Canadian-built technology through a single trusted partner.

---

## 🍁 PART 1: UNION SOLUTIONS BRAND BOOK

### 1. Brand Identity & Positioning

* **Company Name:** UnionSolutions
* **Tagline:** Canadian technology. Built for labour. Designed for unions.
* **Mission:** To modernize and simplify the way Canadian unions operate by providing accessible, secure, Canadian-built technology through a single trusted partner.
* **Core Value Proposition:** 
  * **100% Canadian Owned & Operated:** All vendor partners are 100% Canadian-exclusive.
  * **Data Sovereignty & Residency:** Every product and server is hosted exclusively within Canadian borders to maintain the highest levels of security, privacy, and regulatory compliance.
  * **Single Trusted Partner:** A unified hub for union technology implementation, onboarding, and ongoing support.

---

### 2. Visual Identity (Strictly Dark Mode)

The UI features **Strictly Dark Mode** to align with modern, sleek SaaS aesthetics (inspired by high-performance SaaS interfaces like Hoist.tech).

#### Color System & Design Tokens

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#0B0F17` | Deep Tech Black — Primary canvas background for all pages. |
| **Surface / Card** | `#151D2A` | Slate Surface — Background for cards, form containers, modal boxes. |
| **Surface Border** | `#2A364F` | Subtle Border Highlight — Outlines cards, inputs, and dividers. |
| **Primary Text** | `#F8FAFC` | Pure White — High contrast for headings (H1, H2, H3) and titles. |
| **Body / Secondary Text**| `#94A3B8` | Cool Gray — Body copy, subheadings, captions, and descriptions. |
| **Brand Navy (Logo)** | `#1B2A4A` | Deep Navy — Used primarily for the logo mark and subtle branding accents. |
| **Brand Primary Action** | `#FF4D4D` | Burnt Orange / Coral — Primary CTA buttons, key highlights, active tags. |
| **Brand Primary Hover** | `#FF6666` | Lighter Coral — Hover state for primary action buttons. |
| **Secondary Accent** | `#38BDF8` | Electric Blue — Secondary highlights, glowing accents, feature badges. |
| **Accent Glow / Soft** | `rgba(56, 189, 248, 0.15)` | Subtle ambient backdrops, badge tints, focus rings. |

#### Typography Hierarchy

* **Heading Font:** `Plus Jakarta Sans`, sans-serif (Weights: 600, 700, 800)
  * Hero Title: `3.25rem` / `52px` (Weight: 800)
  * Section Titles: `2rem` – `2.75rem` (Weight: 700)
  * Card Titles: `1.35rem` (Weight: 700)
* **Body Font:** `Inter`, sans-serif (Weights: 400, 500, 600)
  * Body Copy: `1rem` / `16px` – `1.125rem` / `18px` (Line height: 1.65)
  * Badges & Microcopy: `0.75rem` – `0.85rem` (Weight: 600, Uppercase tracking)

---

### 3. Logo & Favicon Elements

* **Primary Logo — "The Defined Grip":**
  * **Concept:** Interlocking geometric 'U' marks that form a handshake in the negative space between them.
  * **Colors:** Deep Brand Navy (`#1B2A4A`) paired with Burnt Orange/Coral (`#FF4D4D`).
  * **Typography:** Bold "Union" paired with accented "Solutions".
* **Favicon:**
  * Standalone interlocking 'U' mark, scaled down and optimized with a transparent background to pop crisp and clean in browser tabs.

---

### 4. Tone of Voice

* **Authoritative yet Supportive:** We believe technology should make union work easier, not more complicated.
* **Direct & Purposeful:** UnionSolutions isn't trying to make unions fit into generic business software; we build solutions around the way unions actually work.
* **Labour-Centric:** Clear, honest language that respects union constitution, steward workflows, member confidentiality, and executive accountability.

---

## 🛠️ THE UNIONSOLUTIONS ECOSYSTEM

The platform brings together four best-in-class standalone platforms:

1. **Union365 (Core Union CRM)**
   * Centralized member database, grievance tracking, deadline automation, contract indexing, and dues management.
2. **Infavour (Electronic Voting & Ratification)**
   * Legally compliant electronic voting, secret ballots, strike authorization votes, and AGM executive elections.
3. **Member Data (Data Sovereignty Engine & Portal)**
   * Secure, privacy-first repository for member profiles, steward access delegation, and encrypted document storage.
4. **Union Inbox (Direct Member Communications)**
   * High-delivery mass SMS dispatches, email broadcasts, and organized inquiry routing during bargaining campaigns.

---

## 🚀 Website Structure & Files

```text
quinnWebsite/
├── index.html        # Single-page application layout (Home, Services, Contact)
├── favicon.svg       # "The Defined Grip" transparent standalone favicon
├── css/
│   └── styles.css    # Global strictly dark mode design tokens & SaaS styles
├── script.js         # Page routing, contact handler, interactive UI utilities
├── info/             # Reference materials and documentation
└── README.md         # Brand book & technical guide
```

### Running Locally
Open `index.html` in any modern web browser or serve with any local HTTP server:
```bash
# Python local server
python3 -m http.server 8000
# or with Node npx serve
npx serve .
```
