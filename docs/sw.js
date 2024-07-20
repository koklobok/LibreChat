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
    const a = (s) => n(s, o),
      t = { module: { uri: o }, exports: r, require: a };
    e[o] = Promise.all(l.map((s) => t[s] || a(s))).then((s) => (i(...s), r));
  };
}
define(['./workbox-b23c3c24'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/anyscale.png', revision: null },
        { url: 'assets/apipie.png', revision: null },
        { url: 'assets/apple-touch-icon-180x180.png', revision: null },
        { url: 'assets/bingai-jb.png', revision: null },
        { url: 'assets/bingai.png', revision: null },
        { url: 'assets/cohere.png', revision: null },
        { url: 'assets/favicon-16x16.png', revision: null },
        { url: 'assets/favicon-32x32.png', revision: null },
        { url: 'assets/fireworks.png', revision: null },
        { url: 'assets/google-palm.svg', revision: null },
        { url: 'assets/groq.png', revision: null },
        { url: 'assets/huggingface.svg', revision: null },
        { url: 'assets/logo.svg', revision: null },
        { url: 'assets/maskable-icon.png', revision: null },
        { url: 'assets/mistral.png', revision: null },
        { url: 'assets/mlx.png', revision: null },
        { url: 'assets/ollama.png', revision: null },
        { url: 'assets/openrouter.png', revision: null },
        { url: 'assets/perplexity.png', revision: null },
        { url: 'assets/shuttleai.png', revision: null },
        { url: 'assets/together.png', revision: null },
        { url: 'assets/web-browser.svg', revision: null },
        { url: 'assets/index-DrrXKDni.css', revision: null },
        { url: 'assets/index-mQ7EiAMc.js', revision: null },
        { url: 'assets/Inter-Bold-CytjP_7U.woff2', revision: null },
        { url: 'assets/Inter-BoldItalic-B0T-BnK6.woff2', revision: null },
        { url: 'assets/Inter-Italic-B_ozvy2G.woff2', revision: null },
        { url: 'assets/Inter-Regular-B0QUfDW0.woff2', revision: null },
        { url: 'assets/Inter-SemiBold-_JLwM7Yv.woff2', revision: null },
        { url: 'assets/Inter-SemiBoldItalic-C4gNvuGw.woff2', revision: null },
        { url: 'assets/markdown_highlight-ByjxT0vp.js', revision: null },
        { url: 'assets/markdown_large-Dn83EM_N.js', revision: null },
        { url: 'assets/roboto-mono-latin-400-italic-B6BBQVPU.woff2', revision: null },
        { url: 'assets/roboto-mono-latin-400-normal-C_5wUCW5.woff2', revision: null },
        { url: 'assets/roboto-mono-latin-700-normal-DpzZ8rK9.woff2', revision: null },
        { url: 'assets/vendor-CRmMnSZD.js', revision: null },
        { url: 'fonts/Inter-Bold.woff2', revision: '279e5a64038565325a5fda8f14a9b9ec' },
        { url: 'fonts/Inter-BoldItalic.woff2', revision: '33083aa00dfe1e31f0ff2fb645dc75be' },
        { url: 'fonts/Inter-Italic.woff2', revision: '8944f8c2a3dd2373bd6351e19e699d23' },
        { url: 'fonts/Inter-Regular.woff2', revision: '46a1550a4bbaccd13a8eb46a359a9f89' },
        { url: 'fonts/Inter-SemiBold.woff2', revision: '01fdc3828f4efe9208e2149531a8933d' },
        { url: 'fonts/Inter-SemiBoldItalic.woff2', revision: '6fc9977f6a237a65e6caf218c87d6e01' },
        {
          url: 'fonts/roboto-mono-latin-400-italic.woff2',
          revision: 'd42634a24b5c8560a89c7a779fe152fe',
        },
        {
          url: 'fonts/roboto-mono-latin-400-normal.woff2',
          revision: '32cb6e15327552c8968f500de2911299',
        },
        {
          url: 'fonts/roboto-mono-latin-700-normal.woff2',
          revision: '5900c2f9140f24ce86f85cb6a6bbffc8',
        },
        { url: 'index.html', revision: 'b77d4b09b545a1e81598009f50d03b81' },
        { url: 'registerSW.js', revision: 'af042ac7a3502a37df515e949d9a33d2' },
        { url: 'assets/favicon-32x32.png', revision: 'eb123edfbf0477095fce9a584c3552bf' },
        { url: 'assets/favicon-16x16.png', revision: '576d6a43e8f233d830de116024acf33d' },
        {
          url: 'assets/apple-touch-icon-180x180.png',
          revision: '492ee09f6a0dfd5a3c1250a23679e6eb',
        },
        { url: 'assets/maskable-icon.png', revision: '71f40b9b2146da879df8f76068dc2566' },
        { url: 'manifest.webmanifest', revision: '6a3d2173c8437d1ba5580bd97cfe095a' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
