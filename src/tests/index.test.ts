import gformsSubmit, { GFormField } from "../index";

const formActionUrl =
  "https://docs.google.com/forms/d/e/abcdefgh12345678abcdefgh12345678abcdefgh12345678abcdefgh/formResponse";

test("it can submit form data for a single form field", () => {
  const emailFormField: GFormField = {
    nameAttribute: "emailAddress",
    value: "text@example.com"
  };

  expect.assertions(1);
  return gformsSubmit(formActionUrl, emailFormField)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can submit form data for an array of form fields", () => {
  const emailFormField: GFormField = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  const messageFormField: GFormField = {
    nameAttribute: "message",
    value: "This is a test message. " + new Date()
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return gformsSubmit(formActionUrl, formFields)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can handle errors when using a proxy", () => {
  const emailFormField: GFormField = {
    nameAttribute: "emailAddress",
    value: "text@example.com"
  };
  const messageFormField: GFormField = {
    nameAttribute: "message",
    value: "This is a message. " + new Date()
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return gformsSubmit(formActionUrl, formFields, true)
    .then(() => {
      fail("This should not have succeeded.");
    })
    .catch(err => {
      expect(true).toBeTruthy();
    });
});
