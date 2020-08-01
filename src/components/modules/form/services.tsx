import { formValues } from "./index";

export default (options?: any) => {
  return {
    submitForm: (params: formValues) => {
      return new Promise(res => {
        setTimeout(() => {
          res(true);
        }, 2000);
      });
    }
  };
};
