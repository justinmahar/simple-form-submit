import submitGForm, { GFormField } from "../index";

const formActionUrl = "https://www.google.com/";

test("it can submit form data for a single form field", () => {
  const emailFormField: GFormField = {
    nameAttribute: "emailAddress",
    value: "text@example.com"
  };

  expect.assertions(1);
  return submitGForm(formActionUrl, emailFormField)
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
    value: "text@example.com"
  };
  const messageFormField: GFormField = {
    nameAttribute: "message",
    value: "This is a message."
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return submitGForm(formActionUrl, formFields)
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
    value: "This is a message."
  };

  const formFields = [emailFormField, messageFormField];

  expect.assertions(1);
  return submitGForm(formActionUrl, formFields, true)
    .then(() => {
      fail("This should not have succeeded.");
    })
    .catch(err => {
      expect(true).toBeTruthy();
    });
});
