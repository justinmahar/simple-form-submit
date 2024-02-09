<h2 align="center">
  ✅ Simple Form Submit
</h2>
<h3 align="center">
  Submit your form data with a simple JavaScript call.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/simple-form-submit" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/simple-form-submit.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/simple-form-submit/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/simple-form-submit/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/simple-form-submit/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/simple-form-submit/)**.

## Overview

Submits both `<form/>` element and [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with a single JS call. Submitting forms couldn't be easier!

Uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch). Support for additional [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters), such as form method (`POST`, `GET`), headers, CORS modes, etc. Defaults to `POST`.

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for handling response or error with `then()` and `catch()`.

### Features include:

- **📃 Submit form data quickly and easily**
  - Just a simple call. Submitting forms couldn't be easier!
- **✅ Supports both `<form/>` element and `FormData`**
  - Submit your forms your way.
- **👍 Uses basic `fetch` API config with optional customization**
  - Use the default `POST` configuration, or customize the call to your heart's content.

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Example](#example)
    - [Submitting using a `<form/>` element](#submitting-using-a-form-element)
    - [Submitting using a `FormData` object](#submitting-using-a-formdata-object)
- [Fetch Options](#fetch-options)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i simple-form-submit
```

## Quick Start

You can either:

- Submit a `<form/>` element using `SimpleFormSubmit.submitForm(actionUrl, form)`
- Submit `FormData` ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData)) using `SimpleFormSubmit.submitFormData(actionUrl, formData)`. This is useful if you want to build form data manually or transform the form data before sending.

Both functions return a Promise so you can handle success/failure cases.

This library uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.

### Example

We want to use JavaScript to send data for this simple form when it's submitted:

![Example Form](https://justinmahar.github.io/simple-form-submit/example-form.png)

```html
<form id="example-form" onSubmit="handleSubmit(e)">
  <div>Email: <input name="email" /></div>
  <div>Message: <input name="message" /></div>
  <button>Send</button>
</form>
```

#### Submitting using a `<form/>` element

We can submit the `<form/>` element itself to any URL, like so:

```js
import SimpleFormSubmit from "simple-form-submit";

const handleSubmit = (e) => {
  e.preventDefault();

  const formActionUrl = "https://www.example.com/form";
  const form = document.getElementById("example-form");

  SimpleFormSubmit.submitForm(formActionUrl, form)
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
```

#### Submitting using a `FormData` object

You can also submit using a `FormData` object. This allows you to modify the form data before sending.

You can use `new FormData(form)` to extract the form data from an existing form. (Or, if you want, you can manually build your own `FormData` object.)

For example:

```js
import FormData from "form-data";

const formActionUrl = "https://www.example.com/form";
const formData = new FormData(document.getElementById("example-form"));

// Transform the data here if you'd like.
formData.set("email", formData.get("email").toLowerCase());
formData.append("date", new Date().toString());

SimpleFormSubmit.submitFormData(formActionUrl, formData)
  .then((response) => {
    console.log("Response:", response);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

## Fetch Options

You can specify the method (`GET` or `POST`), mode (such as `no-cors`), headers, and other [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) if you'd like. The default method is `POST`.

```js
const formActionUrl = "https://www.example.com/form";
const form = document.getElementById("example-form");

// You can specify any Fetch API options here.
const fetchOptions = {
  // method: "GET",
  // mode: "no-cors",
  // ...
};

SimpleFormSubmit.submitForm(formActionUrl, form, fetchOptions)
  .then((response) => {
    console.log("Response:", response);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/simple-form-submit/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/simple-form-submit/stargazers): [👉⭐](https://github.com/justinmahar/simple-form-submit/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/simple-form-submit/?path=/story/license--page).