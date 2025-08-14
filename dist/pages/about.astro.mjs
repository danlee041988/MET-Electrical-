/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGwnN-b5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DMJMLvGd.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About | MET Electrical", "description": "About Martin, owner of MET Electrical \u2014 qualified, insured electrician based in Shepton Mallet, Somerset." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-16"> <h1 class="text-3xl md:text-4xl font-bold">About MET Electrical</h1> <p class="mt-2 text-white/70">Shepton Mallet · Serving Taunton, Yeovil, Bridgwater, Frome, Wells, Glastonbury & nearby</p> <div class="grid md:grid-cols-2 gap-8 mt-8 items-start"> <div class="space-y-4"> <h2 class="text-2xl font-semibold">Meet Martin</h2> <p class="text-white/80">Martin founded MET Electrical to bring reliable, tidy and transparent electrical work to homes and small businesses across Somerset. He’s 18th Edition qualified, NAPIT & TrustMark registered, and fully insured.</p> <p class="text-white/80">Over the years, he’s delivered everything from landlord EICR testing and consumer unit upgrades to full rewires, fault finding, lighting design, and EV charging. Customers value his punctuality, clear communication and respect for their homes.</p> <ul class="list-disc pl-6 text-white/80"> <li>18th Edition (City & Guilds)</li> <li>NAPIT & TrustMark registered</li> <li>Public liability insurance</li> <li>DBS on request</li> </ul> </div> <div class="rounded-lg overflow-hidden border border-white/10 bg-white/5 aspect-video"> <img src="/Elec1.webp" alt="Professional electrician at work" class="w-full h-full object-cover"> </div> </div> </main> ` })}`;
}, "/Users/danlee/CascadeProjects/met-electrical-website/src/pages/about.astro", void 0);

const $$file = "/Users/danlee/CascadeProjects/met-electrical-website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
