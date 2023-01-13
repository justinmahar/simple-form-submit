import FormData from 'form-data';

export const DEFAULT_METHOD = 'POST';

export const submitFormData = (
  formActionUrl: string,
  formData: FormData,
  fetchRequestInit: RequestInit = {},
): Promise<Response> => {
  return fetch(formActionUrl, {
    // Fetch can accept FormData as a body. See: https://javascript.info/formdata
    body: formData as any,
    method: DEFAULT_METHOD,
    ...fetchRequestInit,
  });
};

export const submitForm = (
  formActionUrl: string,
  form: HTMLFormElement,
  fetchRequestInit: RequestInit = {},
): Promise<Response> => {
  return submitFormData(formActionUrl, new FormData(form), fetchRequestInit);
};

export default {
  submitFormData,
  submitForm,
};
