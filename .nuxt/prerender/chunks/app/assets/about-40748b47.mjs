import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/devalue/index.js';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/scule/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/klona/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/johnny/work/Johnny-24.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("v2osk-1Z2niiBPg5A-unsplash.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)}><div><h1>About</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_0)} loading="lazy"></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-40748b47.mjs.map
