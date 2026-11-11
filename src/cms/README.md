# Content collections (CMS layer)

Editable content lives in `src/content/` as typed TypeScript collections.
These schemas match the Payload CMS 3 collection design in the project plan so a
database-backed `/admin` can be wired later without changing page components.

## Collections

| Collection | File | Edit to… |
|---|---|---|
| Site settings | `site.ts` | phone, WhatsApp, address, stats, GA |
| Stories | `stories.ts` | Client Success Stories (canonical) |
| Testimonials | `testimonials.ts` | banner quotes (derived from stories) |
| Posts | `posts.ts` | Insights / blog |
| Certifications | `certifications.ts` | badge grid |
| Client logos | `client-logos.ts` | logo strip |
| About copy | `about.ts` | Who we are, vision, why us |
| Services | `services.ts` | solution & service pages |

After editing, restart `npm run dev` (or rebuild) to see changes.

## Payload upgrade path

1. Install Payload 3 with SQLite or Postgres.
2. Map each collection field 1:1 from `src/content/types.ts`.
3. Replace imports in pages with `getPayload()` queries.
4. Keep URL structure unchanged.
