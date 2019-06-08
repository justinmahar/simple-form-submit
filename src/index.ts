import FormData from "form-data";

const DEFAULT_METHOD: string = "POST";

export const submitFormData = (
  formActionUrl: string,
  formData: FormData,
  method: string = DEFAULT_METHOD,
  fetchOptions: any = {}
): Promise<any> => {
  return new Promise(
    (
      resolve: (value?: {} | PromiseLike<{}> | undefined) => void,
      reject: (reason?: any) => void
    ) => {
      const optionsToUse = {
        method: method,
        body: formData,
        ...fetchOptions
      };

      fetch(formActionUrl, optionsToUse)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    }
  );
};

export const submitForm = (
  formActionUrl: string,
  form: HTMLFormElement,
  method: string = DEFAULT_METHOD,
  fetchOptions: any = {}
): Promise<any> => {
  return submitFormData(
    formActionUrl,
    new FormData(form),
    method,
    fetchOptions
  );
};

export default {
  submitFormData: submitFormData,
  submitForm: submitForm
};
