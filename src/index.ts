import Axios from "axios";
import FormData from "form-data";

export type GFormData = {
  nameAttribute: string;
  value: any;
};

const gformsSubmit = (
  gformActionUrl: string,
  formFields: GFormData[] | GFormData,
  handleErrors: boolean = false
) => {
  return new Promise((resolve, reject) => {
    // Convert to an array if it's a single form field.
    if (!Array.isArray(formFields)) {
      formFields = [formFields];
    }
    const formData = new FormData();
    formFields.forEach((formField: GFormData) => {
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

export default gformsSubmit;
