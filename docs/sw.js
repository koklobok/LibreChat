if (!self.define) {
  let s,
    e = {};
  const n = (n, l) => (
    (n = new URL(n + '.js', l).href),
    e[n] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = n), (s.onload = e), document.head.appendChild(s);
        } else (s = n), importScripts(n), e();
      }).then(() => {
        let s = e[n];
        if (!s) throw new Error(`Module ${n} didn’t register its module`);
        return s;
      })
  );
  self.define = (l, i) => {
    const o = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (e[o]) return;
    let r = {};
    const t = (s) => n(s, o),
      a = { module: { uri: o }, exports: r, require: t };
    e[o] = Promise.all(l.map((s) => a[s] || t(s))).then((s) => (i(...s), r));
  };
}
define(['./workbox-b23c3c24'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'LibreChat/assets/anyscale.png', revision: null },
        { url: 'LibreChat/assets/apipie.png', revision: null },
        { url: 'LibreChat/assets/apple-touch-icon-180x180.png', revision: null },
        { url: 'LibreChat/assets/bingai-jb.png', revision: null },
        { url: 'LibreChat/assets/bingai.png', revision: null },
        { url: 'LibreChat/assets/cohere.png', revision: null },
        { url: 'LibreChat/assets/favicon-16x16.png', revision: null },
        { url: 'LibreChat/assets/favicon-32x32.png', revision: null },
        { url: 'LibreChat/assets/fireworks.png', revision: null },
        { url: 'LibreChat/assets/google-palm.svg', revision: null },
        { url: 'LibreChat/assets/groq.png', revision: null },
        { url: 'LibreChat/assets/huggingface.svg', revision: null },
        { url: 'LibreChat/assets/logo.svg', revision: null },
        { url: 'LibreChat/assets/maskable-icon.png', revision: null },
        { url: 'LibreChat/assets/mistral.png', revision: null },
        { url: 'LibreChat/assets/mlx.png', revision: null },
        { url: 'LibreChat/assets/ollama.png', revision: null },
        { url: 'LibreChat/assets/openrouter.png', revision: null },
        { url: 'LibreChat/assets/perplexity.png', revision: null },
        { url: 'LibreChat/assets/shuttleai.png', revision: null },
        { url: 'LibreChat/assets/together.png', revision: null },
        { url: 'LibreChat/assets/web-browser.svg', revision: null },
        { url: 'LibreChat/assets/index-B69h-FNj.css', revision: null },
        { url: 'LibreChat/assets/index-Sg_Q_TL1.js', revision: null },
        { url: 'LibreChat/assets/Inter-Bold-CytjP_7U.woff2', revision: null },
        { url: 'LibreChat/assets/Inter-BoldItalic-B0T-BnK6.woff2', revision: null },
        { url: 'LibreChat/assets/Inter-Italic-B_ozvy2G.woff2', revision: null },
        { url: 'LibreChat/assets/Inter-Regular-B0QUfDW0.woff2', revision: null },
        { url: 'LibreChat/assets/Inter-SemiBold-_JLwM7Yv.woff2', revision: null },
        { url: 'LibreChat/assets/Inter-SemiBoldItalic-C4gNvuGw.woff2', revision: null },
        { url: 'LibreChat/assets/markdown_highlight-ByjxT0vp.js', revision: null },
        { url: 'LibreChat/assets/markdown_large-Dn83EM_N.js', revision: null },
        { url: 'LibreChat/assets/roboto-mono-latin-400-italic-B6BBQVPU.woff2', revision: null },
        { url: 'LibreChat/assets/roboto-mono-latin-400-normal-C_5wUCW5.woff2', revision: null },
        { url: 'LibreChat/assets/roboto-mono-latin-700-normal-DpzZ8rK9.woff2', revision: null },
        { url: 'LibreChat/assets/vendor-CRmMnSZD.js', revision: null },
        { url: 'LibreChat/fonts/Inter-Bold.woff2', revision: '279e5a64038565325a5fda8f14a9b9ec' },
        { url: 'LibreChat/fonts/Inter-BoldItalic.woff2', revision: '33083aa00dfe1e31f0ff2fb645dc75be' },
        { url: 'LibreChat/fonts/Inter-Italic.woff2', revision: '8944f8c2a3dd2373bd6351e19e699d23' },
        { url: 'LibreChat/fonts/Inter-Regular.woff2', revision: '46a1550a4bbaccd13a8eb46a359a9f89' },
        { url: 'LibreChat/fonts/Inter-SemiBold.woff2', revision: '01fdc3828f4efe9208e2149531a8933d' },
        { url: 'LibreChat/fonts/Inter-SemiBoldItalic.woff2', revision: '6fc9977f6a237a65e6caf218c87d6e01' },
        {
          url: 'LibreChat/fonts/roboto-mono-latin-400-italic.woff2',
          revision: 'd42634a24b5c8560a89c7a779fe152fe',
        },
        {
          url: 'LibreChat/fonts/roboto-mono-latin-400-normal.woff2',
          revision: '32cb6e15327552c8968f500de2911299',
        },
        {
          url: 'LibreChat/fonts/roboto-mono-latin-700-normal.woff2',
          revision: '5900c2f9140f24ce86f85cb6a6bbffc8',
        },
        { url: 'index.html', revision: '3a226a385783d28c7738cb501b11a827' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'LibreChat/assets/favicon-32x32.png', revision: 'eb123edfbf0477095fce9a584c3552bf' },
        { url: 'LibreChat/assets/favicon-16x16.png', revision: '576d6a43e8f233d830de116024acf33d' },
        {
          url: 'LibreChat/assets/apple-touch-icon-180x180.png',
          revision: '492ee09f6a0dfd5a3c1250a23679e6eb',
        },
        { url: 'LibreChat/assets/maskable-icon.png', revision: '71f40b9b2146da879df8f76068dc2566' },
        { url: 'manifest.webmanifest', revision: '3928927c68f7f83a4d3b0c079ab9219b' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
