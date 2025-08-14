/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGwnN-b5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../chunks/Layout_DMJMLvGd.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank You | Message Received | MET Electrical", "description": "Thank you for contacting MET Electrical. We've received your message and will respond shortly." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-16 text-center"> <div class="max-w-2xl mx-auto"> <!-- Success Icon --> <div class="mb-8"> <div class="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-full border border-green-600/40 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-10 h-10 text-green-400" })} </div> <h1 class="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1> <p class="text-lg text-white/70">Your message has been received successfully.</p> </div> <!-- Next Steps --> <div class="bg-white/5 rounded-lg p-6 border border-white/10 mb-8"> <h2 class="text-xl font-semibold mb-4">What happens next?</h2> <div class="space-y-3 text-left"> <div class="flex items-start gap-3"> <span class="bg-brand-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span> <div> <h4 class="font-medium">We'll review your enquiry</h4> <p class="text-white/70 text-sm">Our team will carefully read through your requirements.</p> </div> </div> <div class="flex items-start gap-3"> <span class="bg-brand-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span> <div> <h4 class="font-medium">We'll get back to you</h4> <p class="text-white/70 text-sm">Typically within 2-4 hours during business hours, or next working day.</p> </div> </div> <div class="flex items-start gap-3"> <span class="bg-brand-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span> <div> <h4 class="font-medium">Free written quote</h4> <p class="text-white/70 text-sm">We'll provide a detailed, transparent quote for the work required.</p> </div> </div> </div> </div> <!-- Emergency Contact --> <div class="bg-red-600/10 rounded-lg p-6 border border-red-600/20 mb-8"> <div class="flex items-center justify-center gap-2 mb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-circle", "class": "w-6 h-6 text-red-400" })} <h3 class="text-lg font-semibold text-red-300">Need Urgent Help?</h3> </div> <p class="text-red-200 mb-4 text-sm">If you have an electrical emergency, don't wait for our response - call immediately:</p> <a href="tel:07464336661" class="btn bg-red-600 text-white hover:bg-red-500"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:phone", "class": "w-4 h-4 mr-1" })}
Emergency: 07464 336661
</a> </div> <!-- Quick Actions --> <div class="space-y-4"> <h3 class="text-lg font-semibold">While you wait, you might find these helpful:</h3> <div class="grid md:grid-cols-3 gap-4"> <a href="/faq" class="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:help", "class": "w-8 h-8 text-brand-yellow mx-auto mb-2" })} <h4 class="font-medium mb-1">FAQ</h4> <p class="text-white/60 text-xs">Common electrical questions</p> </a> <a href="/services" class="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:tools", "class": "w-8 h-8 text-brand-yellow mx-auto mb-2" })} <h4 class="font-medium mb-1">Our Services</h4> <p class="text-white/60 text-xs">Full range of electrical work</p> </a> <a href="/about" class="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-brand-yellow/30 transition"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-8 h-8 text-brand-yellow mx-auto mb-2" })} <h4 class="font-medium mb-1">About Us</h4> <p class="text-white/60 text-xs">Meet the team</p> </a> </div> </div> <!-- Alternative Contact --> <div class="mt-8 pt-8 border-t border-white/10"> <p class="text-white/60 text-sm mb-4">Prefer to contact us directly?</p> <div class="flex flex-wrap justify-center gap-4"> <a href="tel:07464336661" class="btn-secondary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:phone", "class": "w-4 h-4 mr-1" })}
Call 07464 336661
</a> <a href="mailto:info@metelectrical.co.uk" class="btn-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-4 h-4 mr-1" })}
Email Us
</a> <a href="https://wa.me/447464336661?text=Hi%20MET%20Electrical%2C%20I%27d%20like%20a%20quote" class="btn bg-green-600 text-white hover:bg-green-500"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-4 h-4 mr-1" })}
WhatsApp
</a> </div> </div> <!-- Return Home --> <div class="mt-8"> <a href="/" class="inline-flex items-center gap-2 text-brand-yellow hover:text-white transition"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-left", "class": "w-4 h-4" })}
Return to Homepage
</a> </div> </div> </main> ` })}`;
}, "/Users/danlee/CascadeProjects/met-electrical-website/src/pages/thank-you.astro", void 0);

const $$file = "/Users/danlee/CascadeProjects/met-electrical-website/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
