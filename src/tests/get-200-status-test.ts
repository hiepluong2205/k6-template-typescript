import { sleep, check } from "k6";
import { Options } from "k6/options";
import http from "k6/http";
import { WorkloadConfig } from "../config/workload";
import { ThresholdsConfig } from "../config/thresholds";

const BASE_URL = __ENV.BASE_URL || "https://test-api.k6.io";
const workload = WorkloadConfig[__ENV.WORKLOAD] || WorkloadConfig.smoke;
let thresholds = Object.assign(
  {},
  ThresholdsConfig.common,
  ThresholdsConfig.pre.instant
);
let scenarios = {
  my_scenario1: {
    executor: "constant-arrival-rate",
    duration: "30s", // total duration
    preAllocatedVUs: 50, // to allocate runtime resources     preAll

    rate: 50, // number of constant iterations given `timeUnit`
    timeUnit: "1s",
  },
};
export let options: Options = {
  ...workload,
  thresholds: thresholds,
  ...scenarios,
};

export default () => {
  const res = http.get(BASE_URL);
  check(res, {
    "status is 200": () => res.status === 200,
  });
  sleep(1);
};
