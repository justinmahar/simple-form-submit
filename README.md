# GForms Submit

Submit form data to Google Forms via JavaScript/TypeScript.

This project can be used to build simple serverless contact forms and mailing lists with very little overhead.

## Installation

```bash
npm i gforms-submit
```

## Usage

```js
import gformsSubmit from "../index";

const gformActionUrl =
  "https://docs.google.com/forms/d/e/abcdefgh12345678-abcdefgh/formResponse";

const emailFormField = {
  nameAttribute: "emailAddress",
  value: "test@example.com"
};

const messageFormField = {
  nameAttribute: "message",
  value: "This is a test message."
};

const formFields = [emailFormField, messageFormField];

gformsSubmit(gformActionUrl, formFields)
  .then(() => {
    console.log("Sent!");
  })
  .catch(err => {
    console.log(err);
  });
```

## CORS

Responses from Google's servers are blocked by modern browsers due to CORS restrictions. Because of this, there's no way to know whether or not the form submission succeeded, so all submissions are treated as successful. You will see a CORS error in the console, but the form will still receive the submission.

If you use/build a CORS proxy, you can turn on error handling for your request to the proxy server. Error responses can then be handled as you see fit.

You can specify `handleErrors` to turn on request error handling:

```js
// ...
const handleErrors = true;
// Note: This will always fail if you're not using a proxy!
gformsSubmit(gformActionUrl, formFields, handleErrors)
  .then(() => {
    console.log("Sent!");
  })
  .catch(err => {
    console.log(err);
  });
```

## Axios

This project uses [`axios`](https://www.npmjs.com/package/axios) to make requests.

## ISC License

Copyright 2019 Justin Mahar

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
