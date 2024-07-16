export const WorkloadConfig = {
  smoke: { stages: [{ duration: "10s", target: 1 }] },
  load: {
    stages: [
      { duration: "5m", target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
      { duration: "30m", target: 100 }, // stay at 100 users for 30 minutes
      { duration: "5m", target: 0 }, // ramp-down to 0 users
    ],
  },
  stress: {
    stages: [
      { duration: "10m", target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
      { duration: "30m", target: 200 }, // stay at higher 200 users for 30 minutes
      { duration: "5m", target: 0 }, // ramp-down to 0 users
    ],
  },
  soak: {
    stages: [
      { duration: "5m", target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
      { duration: "8h", target: 100 }, // stay at 100 users for 8 hours!!!
      { duration: "5m", target: 0 }, // ramp-down to 0 users
    ],
  },
  spike: {
    stages: [
      { duration: "2m", target: 2000 }, // fast ramp-up to a high point
      // No plateau
      { duration: "1m", target: 0 }, // quick ramp-down to 0 users
    ],
  },
  breakpoint: {
    executor: "ramping-arrival-rate", //Assure load increase if the system slows
    stages: [
      { duration: "2h", target: 20000 }, // just slowly ramp-up to a HUGE load
    ],
  },
};
