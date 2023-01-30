const cycle = [
  workTimespan,
  breakTimespan,
  workTimespan,
  breakTimespan,
  workTimespan,
  breakTimespan,
  longBreakTimespan,
];

const state = {
  timespanIndex: 0,
  secondsPassed: 0,
};

const selectors = {
  currentTimespan() {
    return cycle[state.timespanIndex];
  },

  cycleTimePassed() {
    return (
      state.secondsPassed +
      cycle
        .slice(0, state.timespanIndex)
        .map((ts) => ts.length)
        .reduce((a, b) => a + b, 0)
    );
  },

  currentTimespanRemainingTime() {
    return this.currentTimespan().length - state.secondsPassed;
  },
};
