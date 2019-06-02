import Axios from "axios";
import FormData from "form-data";

export type GFormField = {
  nameAttribute: string;
  value: any;
};

const submitGForm = (
  gformActionUrl: string,
  formFields: GFormField[] | GFormField,
  handleErrors: boolean = false
) => {
  return new Promise((resolve, reject) => {
    // Convert to an array if it's a single form field.
    if (!Array.isArray(formFields)) {
      formFields = [formFields];
    }
    const formData = new FormData();
    formFields.forEach((formField: GFormField) => {
      formData.append(formField.nameAttribute, formField.value);
    });
    Axios.post(gformActionUrl, formData)
      .then(() => {
        resolve();
      })
      .catch(err => {
        if (handleErrors) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
};

export default submitGForm;
