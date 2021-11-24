Install ngx-markdown and prismjs

```
npm i -S ngx-markdown prismjs
```

Investigate this componentent and markdown-renderer.component.ts in the SharedModule
Investigate its registration and usage in DemoModule

For nicer formatting prismjs is also registered in angular.json and could be further formatted

```
"styles": [
    "src/styles.scss",
    "node_modules/prismjs/themes/prism-okaidia.css"
],
"stylePreprocessorOptions": {
    "includePaths": ["src/theme"]
},
"scripts": [
    "node_modules/marked/lib/marked.js",
    "node_modules/prismjs/prism.js",
    "node_modules/prismjs/components/prism-typescript.min.js",
    "node_modules/prismjs/components/prism-css.min.js"
]
```
