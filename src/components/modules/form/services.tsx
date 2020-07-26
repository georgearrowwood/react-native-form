import { formValues } from "./index";

export default (options?) => {
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
