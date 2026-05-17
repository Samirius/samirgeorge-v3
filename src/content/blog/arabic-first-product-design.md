---
title: "Building Arabic-First Products: It's Not Just Translation"
description: "Why localizing software for Arabic speakers requires fundamentally different design decisions. Practical lessons from building bilingual products for the MENA market."
pubDate: 2026-04-01
tags: ["Localization", "Arabic", "Product Design", "UX", "RTL"]
draft: false
---

I've been building products for Arabic-speaking users for years. Every time someone says "we'll just translate it to Arabic," I know the product is going to fail in this market.

Here's why — and what to do instead.

## Translation ≠ Localization

Translation converts words. Localization converts experience.

When you translate an English product into Arabic, you get:

- Text that runs the wrong direction (Arabic is RTL)
- Layouts that feel wrong (mirrored isn't the same as designed for RTL)
- Cultural references that don't land
- UX patterns that don't match how Arabic speakers actually use software
- Search that doesn't work (Arabic search behavior is fundamentally different)

None of these are translation problems. They're design problems.

## The RTL Problem Is Deeper Than You Think

Most developers handle RTL by adding `dir="rtl"` to the HTML tag and calling it a day. That handles text direction, but it doesn't handle:

### Visual Weight

In LTR layouts, the eye starts at the top-left and scans right. In RTL, it starts at the top-right and scans left. This means:

- **Navigation** should have the most important items on the right, not the left
- **Call-to-action buttons** should be on the left side of forms (the "end" of the reading flow in RTL)
- **Sidebar content** should be on the left instead of the right

### Number Direction

Arabic text is RTL, but Arabic numerals (0-9) are written LTR — left to right. This creates mixed-direction text that requires careful handling:

```
السعر: ١٢٥٠٠ ريال
```

The "السعر:" (Price:) is RTL, the number reads LTR, and "ريال" (Riyal) is RTL again. This needs proper Unicode bidirectional text handling, not just CSS.

### Form Design

Forms in Arabic products need special attention:

- Labels should be right-aligned (or floating) instead of left-aligned
- Error messages need to appear in the right position relative to RTL text
- Placeholder text direction needs to match the expected input language
- Date pickers need to support Hijri calendar alongside Gregorian

## Arabic Search Behavior Is Different

Arabic users don't search the way English users do. Key differences:

1. **Mixed language queries** are the norm, not the exception: "شراء iPhone 15 برو الرياض" (Buy iPhone 15 Pro Riyadh)
2. **Dialect matters** — Egyptian Arabic, Saudi Arabic, and Levantine Arabic are different enough to affect search results
3. **Diacritics are rarely used** in search queries, but your search needs to handle text with and without them
4. **Voice search** in Arabic has different patterns than text search

If your search engine doesn't handle these patterns, your Arabic users will find your product through Google, not through your site search. And they may find a competitor first.

## Cultural Design Patterns

### Color Meanings

Colors carry different cultural weight:

- **Green** is strongly positive (associated with Islam, growth, prosperity)
- **Red** can signal danger but is also used for celebrations
- **Gold/amber** is associated with luxury and quality (widely used in Gulf branding)
- **Blue** is generally safe and professional

### Trust Signals

Arabic-speaking users have different trust signals:

- **Local phone numbers** matter more than email addresses
- **WhatsApp** is more trusted than contact forms
- **Social proof** from local influencers carries more weight than generic testimonials
- **Company registration** details (CR number in Saudi, commercial register in Egypt) are expected

### Content Density

Arabic text is typically 25-30% longer than English equivalent text. This means:

- Buttons need to be wider (or text needs to be shorter)
- Navigation items need more space
- Card layouts need to accommodate longer titles
- Form labels need more room

If your English design has tight spacing, it will break with Arabic text.

## The Technical Stack That Works

Here's what I use for building Arabic-first products:

```
Typography:    Noto Sans Arabic or IBM Plex Sans Arabic
Framework:     Astro / Next.js (good i18n support)
CSS:           Logical properties (margin-inline-start, not margin-left)
Direction:     dir="rtl" on <html> + per-element overrides
Fonts:         Variable fonts with Arabic glyphs
Testing:       Real devices in Saudi Arabia and Egypt (BrowserStack or real devices)
```

### Key CSS Rules

```css
/* Use logical properties everywhere */
.element {
  margin-inline-start: 1rem;    /* Not margin-left */
  padding-inline-end: 0.5rem;   /* Not padding-right */
  border-inline-start: 2px solid; /* Not border-left */
  text-align: start;            /* Not text-align: left */
}

/* Arabic font sizing */
[lang="ar"] {
  font-size: 1.1em;  /* Arabic needs ~10% larger size for equivalent readability */
  line-height: 1.9;  /* Higher line-height for Arabic */
  letter-spacing: 0; /* Arabic doesn't need letter-spacing */
}
```

## The Design Process That Works

1. **Design Arabic first** — Start with the Arabic layout, then adapt for English. It's always easier to simplify from RTL than to retrofit.
2. **Test with real users** — Not bilingual designers who think they know what Arabs want. Actual users in your target market.
3. **Use logical CSS properties** — Stop using left/right. Use start/end. Future-you will thank present-you.
4. **Separate content from layout** — Your translation system should handle content. Your design system should handle layout direction.
5. **Don't mirror everything** — Some things shouldn't be mirrored (progress bars, timelines, media controls). Use your judgment.

## The Business Case

If you're not convinced, consider the numbers:

- **Arabic** is the 5th most spoken language globally (420M+ speakers)
- **MENA e-commerce** is growing at 20%+ annually
- **Saudi Arabia's** Vision 2030 is driving massive digital transformation
- **Egypt** has 100M+ population with rapidly growing internet penetration
- **Most competitors** are still doing Arabic translation, not Arabic localization

Building Arabic-first isn't just the right thing to do — it's a competitive advantage.

## Bottom Line

If you're building for Arabic speakers, start with Arabic. Not as an afterthought, not as a translation layer — as the primary design target. The tools, techniques, and patterns are well-established. The only thing missing is the intention.

And intention is free.

---

*Building a product for the Arabic-speaking market? [I can help](/contact) — I've been doing this for years and I actually care about getting it right.*
