# simple-form-submit [![npm version](https://badge.fury.io/js/simple-form-submit.svg)](https://badge.fury.io/js/simple-form-submit)

**Submit your form data with a simple JavaScript call.**

```js
  import SimpleFormSubmit from "simple-form-submit";

  const formActionUrl = "https://www.example.com/form";
  const formElement = document.getElementById("my-form");

  SimpleFormSubmit.submitForm(formActionUrl, formElement)
    .then((response) => {
      console.log("Response:", response);
    })
    .catch(err => {
      console.log("Error:", err);
    });
  }
```

### Overview:

- Submits both `<form>` and [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with a single JS call.
- Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for handling response or error with `then()` and `catch()`.
- Support for additional [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters), such as form method (`POST`, `GET`), headers, CORS modes, etc. Defaults to `POST`.

## Installation

```bash
npm i simple-form-submit
```

## Usage

You can either:

- Submit a `<form>` using `SimpleFormSubmit.submitForm(actionUrl, form)`
- Submit `FormData` ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData)) using `SimpleFormSubmit.submitFormData(actionUrl, formData)`. This is useful if you want to build form data manually or transform the form data before sending.

Both functions return a Promise so you can handle success/failure cases.

This library uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.

### Example

We want to use JavaScript to send data for this simple form when it's submitted:

![Example Form](https://raw.githubusercontent.com/justinmahar/simple-form-submit/master/images/example-form.png)

```html
<form id="example-form" onSubmit="handleSubmit(e)">
  <div>Email: <input name="email" /></div>
  <div>Message: <input name="message" /></div>
  <button>Send</button>
</form>
```

#### Submitting using a `<form>` element

We can submit the `<form>` itself to any URL, like so:

```js
import SimpleFormSubmit from "simple-form-submit";

const handleSubmit = e => {
  e.preventDefault();

  const formActionUrl = "https://www.example.com/form";
  const form = document.getElementById("example-form");

  SimpleFormSubmit.submitForm(formActionUrl, form)
    .then(response => {
      console.log("Response:", response);
    })
    .catch(err => {
      console.log("Error:", err);
    });
};
```

#### Submitting using a `FormData` object

You can also submit using a `FormData` object. This allows you to modify the form data before sending.

You can use `new FormData(form)` to extract the form data from an existing form. (Or, if you want, you can manually build your own `FormData` object.)

For example:

```js
const formActionUrl = "https://www.example.com/form";
const formData = new FormData(document.getElementById("example-form"));

// Transform the data here if you'd like.
formData.set("email", formData.get("email").toLowerCase());
formData.append("date", new Date().toString());

SimpleFormSubmit.submitFormData(formActionUrl, formData)
  .then(response => {
    console.log("Response:", response);
  })
  .catch(err => {
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
  .then(response => {
    console.log("Response:", response);
  })
  .catch(err => {
    console.log("Error:", err);
  });
```

## TypeScript Support

This project is written in TypeScript and compiled to JavaScript. Type definitions are available in `dist/index.d.ts`.

## ISC License

Copyright 2019 Justin Mahar

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
