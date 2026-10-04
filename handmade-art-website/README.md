# Stitched & Painted — Website Project

A warm, handmade-style website for a custom crochet, embroidery & painting business.

## 📁 Folder structure

```
handmade-art-website/
├── index.html          ← All pages (Home, Services, Gallery, Order, About, Contact)
├── css/
│   └── style.css       ← All styling (colors, fonts, layout)
├── js/
│   └── script.js       ← Page navigation, gallery filter, order form logic
└── assets/
    └── images/
        ├── crochet/
        ├── embroidery/
        ├── painting/
        └── about/       ← put your own photos in these folders
```

This is a single-page site: every "page" (Home, Services, Gallery, etc.) lives inside
`index.html` and is shown/hidden with JavaScript — there's no page reload, so it stays fast
and simple to edit.

## ▶️ How to run it in VS Code

1. Open the `handmade-art-website` folder in VS Code (File → Open Folder).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel, if you
   don't already have it.
3. Right-click `index.html` → **"Open with Live Server"**.
4. Your site opens in the browser and auto-refreshes every time you save a change.

(You can also just double-click `index.html` to open it directly in a browser, without VS Code.)

## ✏️ The things you'll want to edit first

**1. Your contact details** — open `js/script.js`, top of the file:
```js
const CONFIG = {
  whatsappNumber: "910000000000", // your number, digits only, country code, no + or spaces
  instagramHandle: "yourhandle",
  instagramUrl: "https://instagram.com/yourhandle",
  email: "hello@yourbusiness.com"
};
```

**2. Your photos** — every dashed box labeled "Your photo" / "Crochet photo" etc. is a
placeholder. To swap one in:
- Drop your image file into the matching folder in `assets/images/...`
- In `index.html`, find the matching `<div class="photo-slot">...</div>` block and replace it
  with:
  ```html
  <img src="assets/images/crochet/your-photo.jpg" alt="Describe the piece" style="border-radius:14px; width:100%; height:100%; object-fit:cover;">
  ```
  (adjust the folder/filename to match what you uploaded)

**3. Your business name** — search `index.html` for "Stitched & Painted" and replace it with
your real business name (it appears in the header logo, page title, and footer).

**4. Embroidery pricing** — in `index.html`, search for "₹200 onwards" to edit the price note
shown on the Custom Order page.

**5. About page story & colors** — the About page text is in the `<section id="page-about">`
block in `index.html`. Colors live at the top of `css/style.css` inside `:root { ... }` —
change any hex value there and it updates across the whole site.

## 📝 Notes

- The **Submit Order** button opens a pre-filled WhatsApp chat with the customer's order
  details, using the WhatsApp number in `CONFIG` above. There's no backend/server — it's a
  static site, so no hosting database is required.
- There is no shopping cart/checkout, by design — this site is for showcasing work and
  collecting custom-order requests only.
- All fonts (Fraunces, Work Sans, Caveat) load from Google Fonts — an internet connection is
  needed for them to display correctly; if you need something that works fully offline,
  the fonts can be downloaded and self-hosted instead.
