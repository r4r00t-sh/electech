# ElecTech MEP — Handover

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content (no UI code changes)

All marketing content is in **`src/content/`**. See [`src/cms/README.md`](src/cms/README.md).

### Add a Client Success Story

1. Open `src/content/stories.ts`.
2. Copy an existing story object.
3. Set `slug`, `primaryBucket`, optional `secondaryBuckets`, facts, `summary`, `body`, testimonial.
4. Add hero image under `public/images/projects/`.
5. The story appears on `/projects`, filtered solution widgets, and `/projects/[slug]` automatically.

### Add a blog post

Edit `src/content/posts.ts` and add an image in `public/images/insights/`.

### Update contact details / stats

Edit `src/content/site.ts`.

### Replace certificates & logos

Swap files in `public/images/certs/` and `public/images/clients/`, and update the matching content files.

## Contact form

- Posts to `/api/contact`.
- Honeypot field `website` blocks bots.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to send mail to `info@electechmep.com`.
- Without Resend, submissions are logged server-side (dev/staging).

## Analytics & cookies

- Set `NEXT_PUBLIC_GA_ID`.
- GA4 loads only after the visitor accepts cookies.

## SEO

- Per-page metadata via `pageMetadata()`.
- `app/sitemap.ts`, `app/robots.ts`.
- Organization / LocalBusiness JSON-LD in the root layout.
- Article + BreadcrumbList on story and insight pages.
- 301 redirects from legacy WP paths in `next.config.ts`.

## Address confirmation

Site uses **Hamsah Building, Oud Metha, P.O. Box 87556, Dubai, UAE**. Confirm with the client before launch (old WP site listed a Bur Dubai address).

## Arabic / RTL (later)

Structure pages and copy so a `[locale]` segment can be added. Prefer logical CSS (`ms`/`me`, `ps`/`pe`) when introducing RTL. Do not hard-code left/right in new components when avoidable.

## Deploy

Build with `npm run build` and host on Vercel, Netlify, or any Node host supporting Next.js 15. Set environment variables from `.env.example`.

## Placeholder checklist before launch

- [x] Official logo PNG (from electechmep.com)
- [x] Service photography downloaded locally
- [x] Story testimonials loaded from client docx
- [x] Vision & mission wording from client docx
- [ ] Dedicated project photography per story (currently reusing service photos)
- [ ] Real certification badges / PDFs
- [ ] Project counts / sectors stats numbers
- [ ] Confirm office address (Hamsah Building vs Al Makhawi Building)
- [ ] Official client logo files (wordmarks are temporary)
- [ ] Resend + GA4 production keys

## Images that still need client replacement

**Legacy old-site photos:** nothing under `/public/images/services/` is referenced any more; the site uses `/public/images/pages/*` and `/public/images/projects/works/*`.

**Story heroes — currently subject-matched page / works photos; need real project shots:**

- All 12 stories under `/projects/[slug]` (alts already marked `[CLIENT TO PROVIDE project photo]`)
