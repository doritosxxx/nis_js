class Timespan {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const workTimespan = new Timespan("work", 25 * 60);
const breakTimespan = new Timespan("break", 10 * 60);
const longBreakTimespan = new Timespan("long break", 30 * 60);
