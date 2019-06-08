# submit-form-simple

**Submit your form data with a simple JavaScript call!**

```js
  import SubmitFormSimple from "submit-form-simple";

  const formActionUrl = "https://www.example.com/form";
  const formElement = document.getElementById("my-form");

  SubmitFormSimple.submitForm(formActionUrl, formElement)
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
- Customizable form method (default `POST`), with support for additional [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters).

## Installation

```bash
npm i submit-form-simple
```

## Usage

You can either:

- Submit a `<form>` using `SubmitFormSimple.submitForm(actionUrl, form)`
- Submit `FormData` ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData)) using `SubmitFormSimple.submitFormData(actionUrl, formData)`. This is useful if you want to build form data manually or transform the form data before sending.

Both functions return a Promise so you can handle success/failure cases.

This library uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.

### Example

We want to use JavaScript to send data for this simple form when it's submitted:

![Example Form](https://raw.githubusercontent.com/justinmahar/submit-form-simple/master/images/example-form.png)

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
import SubmitFormSimple from "submit-form-simple";

const handleSubmit = e => {
  e.preventDefault();

  const formActionUrl = "https://www.example.com/form";
  const form = document.getElementById("example-form");

  SubmitFormSimple.submitForm(formActionUrl, form)
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

// Transform the data if you need here.

SubmitFormSimple.submitFormData(formActionUrl, formData)
  .then(response => {
    console.log("Response:", response);
  })
  .catch(err => {
    console.log("Error:", err);
  });
```

## Form Method (GET, POST) and Fetch Options

You can specify the method (such as `GET` or `POST`) and [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) if you'd like. The default method is `POST`.

```js
const formActionUrl = "https://www.example.com/form";
const form = document.getElementById("example-form");

// You can specify any Fetch API options here.
const fetchOptions = {
  mode: "no-cors"
};

SubmitFormSimple.submitForm(formActionUrl, form, "GET", fetchOptions)
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
