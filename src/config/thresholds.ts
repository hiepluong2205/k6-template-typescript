export const ThresholdsConfig = {
  common: {
    http_req_duration: ["p(99)<1000"],
    http_req_failed: ["rate<0.01"],
  },
  pre: {
    instant: {
      http_req_duration: ["p(99)<300"],
    },
  },
  prod: {},
};
