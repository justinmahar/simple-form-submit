import gformsSubmit, { GFormData } from "../index";

const gformActionUrl =
  "https://docs.google.com/forms";

test("it can submit form data for a single form data", () => {
  const emailFormData: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, emailFormData)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can submit form data for an array of form datas", () => {
  const emailFormData: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  const messageFormData: GFormData = {
    nameAttribute: "entry.12345678901",
    value: "Hello! This is my message."
  };

  const formDatas = [emailFormData, messageFormData];

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, formDatas)
    .then(() => {
      expect(true).toBeTruthy();
    })
    .catch(err => {
      fail(err);
    });
});

test("it can handle errors when using a proxy", () => {
  const emailFormData: GFormData = {
    nameAttribute: "emailAddress",
    value: "test@example.com"
  };

  const messageFormData: GFormData = {
    nameAttribute: "entry.12345678901",
    value: "Hello! This is my message."
  };

  const formDatas = [emailFormData, messageFormData];

  expect.assertions(1);
  return gformsSubmit(gformActionUrl, formDatas, true)
    .then(() => {
      fail("This should not have succeeded.");
    })
    .catch(err => {
      expect(true).toBeTruthy();
    });
});
