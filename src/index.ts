import Axios from "axios";
import FormData from "form-data";

export type GFormData = {
  nameAttribute: string;
  value: any;
};

const gformsSubmit = (
  gformActionUrl: string,
  gformDatas: GFormData[] | GFormData,
  handleErrors: boolean = false
) => {
  return new Promise((resolve, reject) => {
    // Convert to an array if it's a single form field.
    if (!Array.isArray(gformDatas)) {
      gformDatas = [gformDatas];
    }
    const xhrFormData = new FormData();
    gformDatas.forEach((gformData: GFormData) => {
      xhrFormData.append(gformData.nameAttribute, gformData.value);
    });
    Axios.post(gformActionUrl, xhrFormData)
      .then(() => {
        resolve();
      })
      .catch(err => {
        if (handleErrors) {
          reject(err);
          console.log("Error:", err);
        } else {
          resolve();
        }
      });
  });
};

export default gformsSubmit;
