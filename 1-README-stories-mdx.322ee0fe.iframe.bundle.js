/*! For license information please see 1-README-stories-mdx.322ee0fe.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksimple_form_submit=self.webpackChunksimple_form_submit||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  ✅ Simple Form Submit\n</h2>\n<h3 align="center">\n  Submit your form data with a simple JavaScript call.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/simple-form-submit" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/simple-form-submit.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/simple-form-submit/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/simple-form-submit/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/simple-form-submit/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/simple-form-submit/)**.\n\n## Overview\n\nSubmits both `<form/>` element and [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with a single JS call. Submitting forms couldn\'t be easier!\n\nUses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch). Support for additional [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters), such as form method (`POST`, `GET`), headers, CORS modes, etc. Defaults to `POST`.\n\nReturns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for handling response or error with `then()` and `catch()`.\n\n### Features include:\n\n- **📃 Submit form data quickly and easily**\n  - Just a simple call. Submitting forms couldn\'t be easier!\n- **✅ Supports both `<form/>` element and `FormData`**\n  - Submit your forms your way.\n- **👍 Uses basic `fetch` API config with optional customization**\n  - Use the default `POST` configuration, or customize the call to your heart\'s content.\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped save you time, please consider buying me a coffee, which powers my development (and life). Your support is much appreciated!\n\n<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n  - [Example](#example)\n    - [Submitting using a `<form/>` element](#submitting-using-a-form-element)\n    - [Submitting using a `FormData` object](#submitting-using-a-formdata-object)\n- [Fetch Options](#fetch-options)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i simple-form-submit\n```\n\n## Quick Start\n\nYou can either:\n\n- Submit a `<form/>` element using `SimpleFormSubmit.submitForm(actionUrl, form)`\n- Submit `FormData` ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData)) using `SimpleFormSubmit.submitFormData(actionUrl, formData)`. This is useful if you want to build form data manually or transform the form data before sending.\n\nBoth functions return a Promise so you can handle success/failure cases.\n\nThis library uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.\n\n### Example\n\nWe want to use JavaScript to send data for this simple form when it\'s submitted:\n\n![Example Form](https://justinmahar.github.io/simple-form-submit/example-form.png)\n\n```html\n<form id="example-form" onSubmit="handleSubmit(e)">\n  <div>Email: <input name="email" /></div>\n  <div>Message: <input name="message" /></div>\n  <button>Send</button>\n</form>\n```\n\n#### Submitting using a `<form/>` element\n\nWe can submit the `<form/>` element itself to any URL, like so:\n\n```js\nimport SimpleFormSubmit from "simple-form-submit";\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n\n  const formActionUrl = "https://www.example.com/form";\n  const form = document.getElementById("example-form");\n\n  SimpleFormSubmit.submitForm(formActionUrl, form)\n    .then((response) => {\n      console.log("Response:", response);\n    })\n    .catch((err) => {\n      console.log("Error:", err);\n    });\n};\n```\n\n#### Submitting using a `FormData` object\n\nYou can also submit using a `FormData` object. This allows you to modify the form data before sending.\n\nYou can use `new FormData(form)` to extract the form data from an existing form. (Or, if you want, you can manually build your own `FormData` object.)\n\nFor example:\n\n```js\nimport FormData from "form-data";\n\nconst formActionUrl = "https://www.example.com/form";\nconst formData = new FormData(document.getElementById("example-form"));\n\n// Transform the data here if you\'d like.\nformData.set("email", formData.get("email").toLowerCase());\nformData.append("date", new Date().toString());\n\nSimpleFormSubmit.submitFormData(formActionUrl, formData)\n  .then((response) => {\n    console.log("Response:", response);\n  })\n  .catch((err) => {\n    console.log("Error:", err);\n  });\n```\n\n## Fetch Options\n\nYou can specify the method (`GET` or `POST`), mode (such as `no-cors`), headers, and other [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) if you\'d like. The default method is `POST`.\n\n```js\nconst formActionUrl = "https://www.example.com/form";\nconst form = document.getElementById("example-form");\n\n// You can specify any Fetch API options here.\nconst fetchOptions = {\n  // method: "GET",\n  // mode: "no-cors",\n  // ...\n};\n\nSimpleFormSubmit.submitForm(formActionUrl, form, fetchOptions)\n  .then((response) => {\n    console.log("Response:", response);\n  })\n  .catch((err) => {\n    console.log("Error:", err);\n  });\n```\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/simple-form-submit/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/simple-form-submit/stargazers): [👉⭐](https://github.com/justinmahar/simple-form-submit/stargazers)\n\n\x3c!-- [lock:support] 🚫--------------------------------------- --\x3e\nWant to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:\n\n<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>\n\n\x3c!-- [/lock:support] ---------------------------------------🚫 --\x3e\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/simple-form-submit/?path=/docs/license--docs).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);