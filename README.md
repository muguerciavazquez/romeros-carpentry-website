# ROMERO'S CARPENTRY Website

Single-page website concept for a Jacksonville-area residential remodeling company.

Client slogan: Built Right. Built To Last.

## Current Status

- Main page: `index.html`
- Built as a direct black-and-gold remodeling website for customer leads.
- Sections included: hero, services, interactive 3D design preview, before-and-after comparisons, project gallery, FAQ, booking, and quote request.
- Customer actions include phone call, estimate request, and embedded Google Calendar booking.
- Booking uses the live Google Calendar appointment page: `https://calendar.app.google/Rxy2qoWPBhW81quF6`.
- Estimate requests use Netlify Forms and redirect to `thank-you.html`.
- Previous logo files are still in `assets/` for reference only.
- The full ROMERO'S CARPENTRY logo is stored in `assets/romeros-carpentry-logo.png`.
- The header uses the cropped symbol logo at `assets/romeros-carpentry-symbol.png`.
- Real Bathroom 1, Bathroom 2, Kitchen 1 photos/video, custom closet build, and exterior dormer project photos are stored in `assets/` and used in the transformation and gallery sections.
- The 3D design preview uses Three.js from a CDN and runs directly inside `index.html`.
- Support files included: `robots.txt`, `sitemap.xml`, and `site.webmanifest`.

## Next Build Priorities

1. In Netlify, enable form notifications for `estimate-request` and send submissions to `info@romeroscarpentry.com`.
2. Replace remaining temporary generated visuals with additional real ROMERO'S CARPENTRY project photos.
3. Add dedicated service pages only if the business needs more local search coverage later.
4. Add verified Google review content after client approval.
5. Replace the logo image with a transparent SVG or PNG when available for the cleanest production header.

## Trustbyte Notes

The site should focus on conversion for homeowners in Jacksonville, Ponte Vedra, Nocatee, St. Augustine, and nearby areas. The strongest proof will come from before-and-after remodeling photography, clear service categories, and a direct free-estimate call to action.


## Customer reviews

The Reviews section includes a 1–5 star review form and public review cards. No sample or invented endorsements are published.

Deploy the site to Netlify with form detection enabled. Confirm `customer-review` appears in Netlify Forms after deployment, and enable email notifications if desired. Submissions cannot be received from a local preview. Test a submission on the deployed site before launch.

To publish a review, open its submission in Netlify Forms, confirm publication consent, and add its public fields to `assets/reviews.json`, then redeploy. The array entries use this structure: `{"name":"Customer display name","rating":5,"project":"Kitchen","review":"Customer's original review text"}`. Publish only genuine submitted reviews; never copy the private email or other submission metadata into this file. Approval/publication is manual; marking a submission in Netlify does not automatically publish it. Remove an entry and redeploy to unpublish it.

The public section calculates the average from published reviews, displays rating cards, and shows an honest empty state until the first review is approved.

