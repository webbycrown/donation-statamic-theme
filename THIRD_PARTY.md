# Third-party libraries

## Bundled in `/public/assets/`

The following libraries are bundled with this theme and served from local files. No external CDN call is made for these.

| Library | Version | Licence |
|---|---|---|
| [jQuery](https://jquery.com/) | 3.6.0 | MIT |
| [Bootstrap](https://getbootstrap.com/) | 5.x | MIT |
| [Swiper](https://swiperjs.com/) | Bundle | MIT |
| [AOS — Animate on Scroll](https://michalsnik.github.io/aos/) | 2.x | MIT |
| [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/) | 1.x | MIT |
| [Waypoints](http://imakewebthings.com/waypoints/) | 4.x | MIT |
| [Isotope](https://isotope.metafizzy.co/) | 3.x | GPL-3.0 |
| [MixItUp](https://www.kunkalabs.com/mixitup/) | 3.x | Commercial (or MIT for open-source projects) |
| [Font Awesome Free](https://fontawesome.com/) | 5.x / 6.x | Font Awesome Free Licence (icons: CC BY 4.0, fonts: SIL OFL, code: MIT) |
| [jQuery UI](https://jqueryui.com/) | 1.x | MIT |

> **Note:** The Font Awesome Pro CDN (`pro.fontawesome.com`) that was present in the original HTML template has been **removed**. The theme uses the bundled Free Font Awesome files from `/public/assets/css/all.min.css` instead. Do not reintroduce a Pro CDN link.

## Loaded via Google Fonts CDN

| Font | URL |
|---|---|
| Poppins (100–900) | `https://fonts.googleapis.com/css2?family=Poppins:...` |

Google Fonts is loaded via a standard `<link>` tag. The font is not cached locally. End users' browsers will make a request to `fonts.googleapis.com`. If this is a concern for your privacy policy, self-host the font instead.

## Licence notes

- **Isotope** is GPL-3 for open-source projects. If you ship a commercial product with it, purchase a commercial licence from Metafizzy.
- **MixItUp** follow the same pattern — open-source MIT, commercial projects require a licence from KunkaLabs.
- All other libraries are MIT or similarly permissive.
