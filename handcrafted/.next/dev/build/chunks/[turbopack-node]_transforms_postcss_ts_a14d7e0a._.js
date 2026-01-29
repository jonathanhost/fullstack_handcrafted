module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/fullstack_handcrafted/handcrafted/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/df911__pnpm_28bd403c._.js",
  "chunks/[root-of-the-server]__3ea25c76._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/fullstack_handcrafted/handcrafted/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];