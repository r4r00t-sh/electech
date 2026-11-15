# QA report — final master (15 Nov 2026)

Build: local `npm run build` OK (40 routes). Deploy: push to `main` → Vercel Production.

## Source phrase scan (Batch 3)

| Phrase | Visitor-facing? |
|--------|-----------------|
| Since 2012 / Established 2012 | No (docs only) |
| one-stop / weekly / drills / Luxurious / lorem / design-led / Developer note | No matches in `src/` |
| Al Karama / Bur Dubai | Removed from pages (Oud Metha) |
| `[CLIENT TO PROVIDE]` | Only in `data/clients.json` sector field; mapped to “Other” and logos gated by `approved` |

## Forms

- Contact: fields per master; privacy consent; honeypot hidden; drawings via email (no public upload) → `drawing_upload` event unused until secure upload exists.
- Careers: CV PDF/DOC/DOCX ≤5 MB; privacy; honeypot; Resend attachment when configured.
- Recipients: `FORM_TO_EMAIL` (fallback `CONTACT_TO_EMAIL` → `info@electechmep.com`); optional `FORM_CC_EMAIL`.

## Analytics events (consent-gated)

`quote_submit`, `click_to_call`, `whatsapp_click`, `email_click`, `project_to_contact`, `careers_submit`. (`drawing_upload` reserved.)

## Open photo gaps

See `docs/image-todo.md` — villa heroes/galleries still navy tiles; welding stock orphaned on disk (`why-choose-workshop.jpg`) not wired.
