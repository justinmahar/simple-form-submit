import submitForm, { submitFormData } from "../index";

const formActionUrl = "https://docs.google.com/forms";

test("it can submit form data (unimplemented!)", () => {
  // const emailFormData: GFormData = {
  //   nameAttribute: "emailAddress",
  //   value: "test@example.com"
  // };

  // expect.assertions(1);
  // return gformsSubmit(gformActionUrl, emailFormData)
  //   .then(() => {
  //     expect(true).toBeTruthy();
  //   })
  //   .catch(err => {
  //     fail(err);
  //   });
  expect(formActionUrl).toBeTruthy();
  expect(submitForm).toBeTruthy();
  expect(submitFormData).toBeTruthy();
});
