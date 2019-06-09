import FormData from "form-data";

const DEFAULT_METHOD: string = "POST";

export const submitFormData = (
  formActionUrl: string,
  formData: FormData,
  fetchRequestInit: RequestInit = {}
): Promise<any> => {
  return new Promise(
    (
      resolve: (value?: {} | PromiseLike<{}> | undefined) => void,
      reject: (reason?: any) => void
    ) => {
      const mergedFetchRequestInit: any = {
        body: formData,
        method: DEFAULT_METHOD,
        ...fetchRequestInit
      };

      fetch(formActionUrl, mergedFetchRequestInit)
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
  fetchRequestInit: RequestInit = {}
): Promise<any> => {
  return submitFormData(formActionUrl, new FormData(form), fetchRequestInit);
};

export default {
  submitFormData: submitFormData,
  submitForm: submitForm
};
