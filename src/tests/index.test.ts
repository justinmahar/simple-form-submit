import gformsSubmit, { GFormData } from "../index";

const gformActionUrl =
  "https://docs.google.com/forms";

test("it can submit form data for a single form field", () => {
  const emailFormField: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, emailFormField)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can submit form data for an array of form fields", () => {
  const emailFormField: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  const messageFormField: GFormData = {
    nameAttribute: "entry.12345678901",
    value: "Hello! This is my message."
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, formFields)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can handle errors when using a proxy", () => {
  const emailFormField: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  const messageFormField: GFormData = {
    nameAttribute: "entry.12345678901",
    value: "Hello! This is my message."
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, formFields, true)
    .then(() => {
      fail("This should not have succeeded.");
    })
    .catch(err => {
      expect(true).toBeTruthy();
    });
});
