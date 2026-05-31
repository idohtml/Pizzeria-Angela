import { c as createComponent, $ as $$Image } from './_astro_assets_CUEcf6E8.mjs';
import 'piccolore';
import { c as createRenderInstruction, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, u as unescapeHTML } from './entrypoint_GBegR7u0.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const Allergies = new Proxy({"src":"/_astro/allergies.LuOEDpbt.jpg","width":1280,"height":854,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jacob/github/Pizzeria-Angela/public/images/allergies.jpg";
							}
							
							return target[name];
						}
					});

const menuGroups = [
  {
    id: "btnScroll",
    name: "Grupp 1",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "125kr",
    items: [
      { name: "Margherita" },
      { name: "Vesuvio", description: "Skinka" },
      { name: "Romana", description: "Bacon, lök" },
      { name: "Bolognese", description: "Köttfärs" },
      { name: "Altonno", description: "Tonfisk" },
      { name: "Funghi", description: "Champinjoner" },
      { name: "Capricciosa", description: "Skinka, champinjoner" },
      { name: "Pescatore", description: "Skinka, tonfisk" },
      { name: "Calzone", description: "Skinka(inbakad)" },
      {
        name: "Vegetariano",
        description: "Champinjoner, paprika, oliver, lök"
      },
      { name: "La bella", description: "Tonfisk, räkor" },
      { name: "Teodora", description: "Räkor, champinjoner" },
      { name: "Bussola", description: "Skinka, räkor" },
      { name: "Hawaii", description: "Skinka, ananas" }
    ]
  },
  {
    id: "G2",
    name: "Grupp 2",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "129kr",
    items: [
      { name: "Pazza", description: "Skinka, champinjoner, lök" },
      { name: "Marinara", description: "Räkor, musslor" },
      { name: "Salerno", description: "Skinka, tonfisk, räkor" },
      { name: "Banana", description: "Skinka, banan, currykrydda" },
      { name: "Angela", description: "Skinka, räkor, champinjoner, ananas" },
      { name: "Tomaso", description: "Skinka, räkor, champinjoner" },
      {
        name: "Quattro Stagione",
        description: "Skinka, musslor, räkor, champinjoner, oliver"
      },
      { name: "Jaris", description: "Skinka, räkor, ananas" },
      { name: "Pugliesé", description: "Bacon, lök, ägg" },
      { name: "Hot-hot", description: "Cayennepeppar, köttfärs, tomat, lök" },
      { name: "Orient", description: "Salami, lök, champinjoner" },
      { name: "Armenia", description: "Salami, köttfärs, paprika, lök" }
    ]
  },
  {
    id: "G3",
    name: "Grupp 3",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "139kr",
    items: [
      { name: "Inter", description: "Salami, salladsost, soltorkade tomater" },
      { name: "Napoli", description: "Skinka, tonfisk, räkor, champinjoner" },
      {
        name: "Peperonipizzza",
        description: "Pepperonikorv, lök, grön paprika"
      },
      {
        name: "Kebabpizza",
        description: "Nötkött, lök, champinjoner, stark sås"
      },
      {
        name: "Indiana",
        description: "Kyckling, purjolök, champinjoner, paprika, currysås"
      },
      { name: "Kycklingpizza", description: "Kyckling, banan, currysås" },
      {
        name: "Tacopizza",
        description: "Tacofärs, lök, tomat, jalapeño, vitlökssås"
      },
      {
        name: "Vegetariano Special",
        description: "Gorgonzola, tomat, paprika, champinjoner, purjolök"
      },
      {
        name: "Mexicana",
        description: "Skinka, köttfärs, paprika, jalapeño, tabasco"
      },
      {
        name: "Siemens Special",
        description: "Salami, skinka, champinjoner, bearnaisesås"
      }
    ]
  },
  {
    id: "G4",
    name: "Grupp 4",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "149kr",
    items: [
      {
        name: "Vesuvio special",
        description: "Lufttorkad skinka, mozzarella, ruccola"
      },
      { name: "Gyrospizza", description: "Gyros, lök, champinjoner, mild sås" },
      {
        name: "Kycklingkebabpizza",
        description: "Kycklingkebab, lök, champinjoner, mild sås"
      },
      {
        name: "Afrikana",
        description: "Kyckling, skinka, räkor, banan, currysås"
      },
      {
        name: "Fläskfilé Special",
        description: "Fläskfilé, tomat, purjolök, färsk vitlök, bearnaisesås"
      },
      {
        name: "Ciao Ciao",
        description: "Fläskfilé, champinjoner, färsk vitlök, bearnaisesås"
      },
      {
        name: "Gorgonzola",
        description: "Fläskfilé, gorgonzola, skinka, purjolök, paprika"
      },
      {
        name: "Lasse Special",
        description: "Skinka, champinjoner, räkor, ananas, bacon, köttfärs, bearnaisesås"
      },
      {
        name: "Americana",
        description: "Fläskfilé, räkor, bacon, champinjoner, färsk vitlök"
      }
    ]
  },
  {
    id: "G5",
    name: "Grupp 5",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "159kr",
    items: [
      {
        name: "Black & White",
        description: "Oxfilé, fläskfilé, champinjoner, bearnaisesås"
      },
      {
        name: "Peppe Special",
        description: "Pepperonikorv, salami, oliver, rå rödlök, ruccola"
      },
      {
        name: "Husets Special",
        description: "Oxfilé, champinjoner, bearnaisesås"
      },
      {
        name: "Pugliesé Special",
        description: "Bacon, lök, 2st ägg, pepperonikorv, salami"
      },
      {
        name: "Kebabpizza Special",
        description: "Nötkött, isbergssallad, tomat, gurka, rödlök, feferoni, vitlökssås"
      },
      {
        name: "Capricciosa Special",
        description: "Lufttorkad skinka, champinjoner, mozzarella, ruccola"
      },
      {
        name: "Samira",
        description: "Oxfilé, champinjoner, lök, färsk vitlök, mozzarella, bearnaisesås, ruccola"
      },
      {
        name: "Bari",
        description: "Fläskfilé, lök, gorgonzola, soltorkade tomater, ruccola"
      },
      {
        name: "Tutto Bello",
        description: "Oxfilé, skinka, gorgonzola, purjolök, körsbärstomater"
      },
      {
        name: "Halloumi",
        description: "Lufttorkad skinka, halloumi, körsbärstomater, rödlök, mozzarella, oliver, ruccola"
      },
      {
        name: "Jerevan",
        description: "Mozzarella, salami, halloumi, rödlök, körsbärstomater, ruccola"
      }
    ]
  },
  {
    id: "kebab",
    name: "Kebab / Kyckling / Gyros / Falafel",
    items: [
      {
        name: "Kebab med bröd",
        description: "Nötkött, sallad, rödlök, tomat, feferoni, stark sås",
        price: "129kr"
      },
      {
        name: "Kebabtallrik / Rulle",
        description: "Nötkött, sallad, rödlök, feferoni, stark sås",
        price: "129kr"
      },
      {
        name: "Hawaiitallrik / Rulle / Bröd",
        description: "Nötkött, sallad, rödlök, tomat, ananas, feferoni, bearnaisesås",
        price: "135kr"
      },
      {
        name: "Grekisktallrik / Rulle / Bröd",
        description: "Nötkött, sallad, rödlök, feferoni, salladsost, tomat, vitlökssås",
        price: "135kr"
      },
      {
        name: "Iskanderrulle",
        description: "Nötkött, sallad, rödlök, feferoni, inlagd gurka, tomat, vitlökssås",
        price: "135kr"
      },
      {
        name: "Kycklingrulle / Bröd",
        description: "Kyckling, sallad, rödlök, tomat, ananas, feferoni, currysås",
        price: "135kr"
      },
      {
        name: "Kycklingkebabtallrik / Rulle",
        description: "Kycklingkebab, sallad, rödlök, feferoni, mild sås",
        price: "135kr"
      },
      {
        name: "Kycklingkebab med bröd",
        description: "Kycklingkebab, sallad, rödlök, tomat, feferoni, mild sås",
        price: "135kr"
      },
      {
        name: "Gyrostallrik / Rulle / Bröd",
        description: "Gyroskött, sallad, rödlök, feferoni, mild sås",
        price: "135kr"
      },
      {
        name: "Falafeltallrik / Rulle / Bröd",
        description: "Falafel, sallad, rödlök, feferoni, tomat, mild sås",
        price: "120kr"
      }
    ]
  },
  {
    id: "LAC",
    name: "À La Carte",
    items: [
      {
        name: "Lövstek",
        description: "Stekpotatis/pommes & aromsmör",
        price: "139kr"
      },
      {
        name: "Schnitzel",
        description: "Stekpotatis/pommes & aromsmör",
        price: "139kr"
      },
      {
        name: "Pannbiff",
        description: "Stekpotatis, brunsås & lingonsylt",
        price: "139kr"
      },
      {
        name: "Rödspätta",
        description: "Stekpotatis/pommes & remouladsås",
        price: "139kr"
      },
      {
        name: "Kycklingfilé",
        description: "Pommes/klyftpotatis/ris & bearnaisesås",
        price: "139kr"
      },
      {
        name: "Fläskfilé",
        description: "Pommes/klyftpotatis/ris & bearnaisesås",
        price: "149kr"
      },
      {
        name: "Kycklingspett",
        description: "Pommes/klyftpotatis/ris & tzatziki",
        price: "139kr"
      },
      {
        name: "Pyttipanna",
        description: "Stekt ägg & rödbetor",
        price: "139kr"
      },
      {
        name: "Raggmunk",
        description: "Stekt fläsk & lingonsylt (Hemlagad)",
        price: "139kr"
      },
      { name: "Lasagne", description: "Hemlagad", price: "149kr" },
      { name: "Spaghetti Bolognese", price: "139kr" },
      { name: "Hamburgertallrik 90g", price: "110kr" },
      { name: "Hamburgertallrik 150g", price: "120kr" },
      {
        name: "Paella kyckling",
        description: "Ris, kyckling, majs, lök, paprika, champinjoner",
        price: "139kr"
      },
      {
        name: "Paella kebab",
        description: "Ris, nötkött, majs, lök, paprika, champinjoner",
        price: "139kr"
      },
      {
        name: "Paella mix",
        description: "Ris, räkor, kyckling, majs, lök, paprika, champinjoner",
        price: "139kr"
      }
    ]
  },
  {
    id: "sallader",
    name: "Sallader",
    description: "Isbergssallad, tomat & gurka samt valfri dressing ingår till samtliga sallader",
    price: "125kr",
    items: [
      { name: "Ost & skinksallad", description: "Ost, skinka, ananas, majs" },
      {
        name: "Tonfisksallad",
        description: "Tonfisk, citron, ägg, rödlök, oliver, majs"
      },
      {
        name: "Räksallad",
        description: "Räkor, paprika, ägg, oliver, citron, majs"
      },
      {
        name: "Grekisksallad",
        description: "Salladsost, rödlök, oliver, paprika"
      },
      {
        name: "Kycklingsallad",
        description: "Kyckling, rödlök, ananas, paprika, majs, ris"
      },
      { name: "Kebabsallad", description: "Nötkött, rödlök, feferoni" },
      {
        name: "Kycklingkebabsallad",
        description: "Kycklingkebab, rödlök, feferoni",
        price: "+9kr"
      },
      {
        name: "Gyrossallad",
        description: "Gyroskött, rödlök, feferoni",
        price: "+9kr"
      }
    ]
  },
  {
    id: "sallader-special",
    name: "Sallader special",
    items: [
      {
        name: "Kyckling special",
        description: "Kycklingspett, soltorkade tomater, rödlök, salladsost, avokado",
        price: "139kr"
      },
      {
        name: "Naddas special",
        description: "Kycklingfilé, soltorkade tomater, rödlök, salladsost, avokado, oliver",
        price: "139kr"
      }
    ]
  },
  {
    id: "barnmeny",
    name: "Barnmeny",
    description: "Ingår tetra dryck",
    price: "92kr",
    items: [
      { name: "Pizzagrupp 1" },
      { name: "Hamburgertallrik 90g" },
      { name: "Kebabtallrik" },
      { name: "Köttbullar med lingon & mos" },
      { name: "Nuggets med pommes" }
    ]
  }
];

const Logo = new Proxy({"src":"/_astro/logo.BnVrFI8J.png","width":1671,"height":456,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jacob/github/Pizzeria-Angela/public/images/logo.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-row" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Var befinner vi oss?</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a data-astro-cid-sz7xmlte>Leverstorpsvägen 2</a></li> <li data-astro-cid-sz7xmlte><a data-astro-cid-sz7xmlte>612 44 Finspång</a></li> <li data-astro-cid-sz7xmlte> <a data-astro-cid-sz7xmlte>Telefon: <strong data-astro-cid-sz7xmlte> 0122 - 173 71</strong></a> </li> <li data-astro-cid-sz7xmlte> <a href="https://goo.gl/maps/P5ahZJcGbS2boC4U9" target="_blank" data-astro-cid-sz7xmlte>Hitta oss via Google Maps</a> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2072.664220336663!2d15.8068143!3d58.702061300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46594f9bd487d00b%3A0x2a72279df9da9137!2sPizzeria%20%26%20Restaurang%20Angela!5e0!3m2!1ssv!2sse!4v1670877240617!5m2!1ssv!2sse" width="300" height="250" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-sz7xmlte></iframe> </li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Öppettider</h2> <ul class="open-hours" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a data-astro-cid-sz7xmlte>Mån-Fre: 11-21</a></li> <li data-astro-cid-sz7xmlte><a data-astro-cid-sz7xmlte>Lör-Sön: 12-21</a></li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Följ oss på sociala medier</h2> <div class="social-links" data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/pizzeriaangelafinspang" target="_blank" data-astro-cid-sz7xmlte>${renderComponent($$result, "ion-icon", "ion-icon", { "size": "large", "name": "logo-facebook", "data-astro-cid-sz7xmlte": true })}</a> </div> </div> <div class="footer-col" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Pizzeria & Restaurang Angela", "data-astro-cid-sz7xmlte": true })} <p data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>&amp; 2023 All rights reserved ${" "}</span> <span data-astro-cid-sz7xmlte>By: Sevak Yousef</span> </p> </div> </div> </div> </footer>`;
}, "/Users/jacob/github/Pizzeria-Angela/src/components/Footer.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-bbe6dxrz> <div class="text-box" data-astro-cid-bbe6dxrz> <h1 class="heading-primary" data-astro-cid-bbe6dxrz> <span class="heading-primary-main" data-astro-cid-bbe6dxrz>Pizzeria</span> <span class="heading-primary-sub" data-astro-cid-bbe6dxrz>Angela</span> </h1> <a class="btn btn-white btn-animated" href="/" id="menu" data-astro-cid-bbe6dxrz>Se meny</a> </div> </header>`;
}, "/Users/jacob/github/Pizzeria-Angela/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script><title>', "</title>", "</head> <body> ", " ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Hero", $$Hero, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/jacob/github/Pizzeria-Angela/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/jacob/github/Pizzeria-Angela/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pizzeria & Restaurang Angela | Finspång", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <section class="menu" data-astro-cid-j7pv25f6> <div class="allergies" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Allergies, "alt": "Allergies", "class": "allergies", "data-astro-cid-j7pv25f6": true })} <h2 class="allergies-heading" data-astro-cid-j7pv25f6>Vid allergier fråga personalen</h2> </div> </section> ${menuGroups.map((group) => renderTemplate`<section class="menu" data-astro-cid-j7pv25f6> <h2 class="menu-group-heading"${addAttribute(group.id, "id")} data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>${group.name}</span> ${group.price && renderTemplate`<span class="group-price" data-astro-cid-j7pv25f6>${group.price}</span>`} </h2> ${group.description && renderTemplate`<p class="menu-group-description" data-astro-cid-j7pv25f6>${unescapeHTML(group.description)}</p>`} <div class="menu-group" data-astro-cid-j7pv25f6> ${group.items.map((item) => renderTemplate`<div class="menu-item" data-astro-cid-j7pv25f6> <div class="menu-item-text" data-astro-cid-j7pv25f6> <h3 class="menu-item-heading" data-astro-cid-j7pv25f6> <span class="menu-item-name" data-astro-cid-j7pv25f6>${unescapeHTML(item.name)}</span> <span class="menu-item-price" data-astro-cid-j7pv25f6> ${item.price || ""} </span> </h3> ${item.description && renderTemplate`<p class="menu-item-description" data-astro-cid-j7pv25f6>${unescapeHTML(item.description)}</p>`} </div> </div>`)} </div> </section>`)} </div> </main> ` })}`;
}, "/Users/jacob/github/Pizzeria-Angela/src/pages/index.astro", void 0);

const $$file = "/Users/jacob/github/Pizzeria-Angela/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
