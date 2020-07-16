import servicesInstance from '../../../lib/services';

export default (options) => {
  return {
    checkPayment: (params) => {
      return servicesInstance().post('finalpayment/check', params);
    },
    pay: (params) => {
      return servicesInstance().post('finalpayment/payment', params);
    },
    sendEmail: (params) => {
      return servicesInstance().post('email', params);
    },
    getProfileInfo: (params) => {
      return servicesInstance().post('getBookingNames', params);
    }
  };
};
