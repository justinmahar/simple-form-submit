# formsubmit

**Submit your form data with a single JavaScript call!**

```js
  import FormSubmit from "formsubmit";

  const formActionUrl = "https://www.example.com/form";
  const formElement = document.getElementById("my-form");

  FormSubmit.submitForm(formActionUrl, formElement)
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
- Returns a Promise for handling response or error with `then()` and `catch()`.
- Customizable form method (default `POST`), with support for additional [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters).

## Installation

```bash
npm i formsubmit
```

## Usage

You can either:

- Submit a `<form>` using `FormSubmit.submitForm(actionUrl, form)`
- Submit `FormData` ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData)) using `FormSubmit.submitFormData(actionUrl, formData)`.

Both functions return a Promise so you can handle success/failure cases.

This library uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.

### Example

We want to use JavaScript to send data for this simple form when it's submitted:

```html
<form id="example-form" onSubmit="handleSubmit(e)">
  <div>Email: <input name="email" /></div>
  <div>Message: <input name="message" /></div>
  <button>Send</button>
</form>
```

We can submit the `<form>` to any URL, like so:

```js
import FormSubmit from "formsubmit";

const handleSubmit = e => {
  e.preventDefault();

  const formActionUrl = "https://www.example.com/form";
  const form = document.getElementById("example-form");

  FormSubmit.submitForm(formActionUrl, form)
    .then(response => {
      console.log("Response:", response);
    })
    .catch(err => {
      console.log("Error:", err);
    });
};
```

You can also submit using `FormData`. For example:

```js
const formActionUrl = "https://www.example.com/form";
const formData = new FormData(document.getElementById("example-form"));

FormSubmit.submitFormData(formActionUrl, formData)
  .then(response => {
    console.log("Response:", response);
  })
  .catch(err => {
    console.log("Error:", err);
  });
```

## Form Method (GET, POST) and Fetch Options

You can specify the method (such as GET or POST) and [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) if you'd like. The default method is `POST`.

```js
const formActionUrl = "https://www.example.com/form";
const form = document.getElementById("example-form");

// You can specify any Fetch API options here.
const fetchOptions = {
  mode: "no-cors"
};

FormSubmit.submitForm(formActionUrl, form, "GET", fetchOptions)
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
