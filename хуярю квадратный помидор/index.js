document.addEventListener("DOMContentLoaded", main);

function bruh() {
  const faces = document.querySelectorAll(".face");

  for (const face of faces) {
    face.innerHTML = `<span>${face.textContent}</span>`;
  }
}

function main() {
  // initMarquee();

  const timerNode = document.querySelector(".pomodoro__timer");
  const button_toggle = document.querySelector(".control__toggle");
  const button_skip = document.querySelector(".control__skip");

  function render({ time }) {
    timerNode.textContent = formatTime(time);
  }

  const timer = createTimer(handleTimerTick);
  const notification = createSound("./static/notification.wav");

  // Update state.
  function triggerEffectCallbacks() {
    const isTimeSpanEnded = selectors.currentTimespanRemainingTime() <= 0;
    if (isTimeSpanEnded) {
      state.secondsPassed = 0;
      state.timespanIndex += 1;
    }

    const isCycleEnded = state.timespanIndex >= cycle.length;
    if (isCycleEnded) {
      state.timespanIndex = 0;
    }

    onSecondEnded();
    if (isTimeSpanEnded) {
      onTimespanEnded();
    }
    if (isCycleEnded) {
      onCycleEnded();
    }
  }

  function handleTimerTick() {
    state.secondsPassed += 1;
    triggerEffectCallbacks();
  }

  // Side effects.
  function onSecondEnded() {
    console.log("second ended");
    const time = selectors.currentTimespanRemainingTime();

    render({ time });
  }

  function onTimespanEnded() {
    console.log("timespan ended");
    const time = selectors.currentTimespanRemainingTime();

    notification.play();
    timer.pause();
    render({ time });
    timer.start();
  }

  function onCycleEnded() {
    console.log("cycle ended");
  }

  // Event handlers.
  button_toggle.addEventListener("click", function () {
    const isPause = this.classList.contains("pause");

    this.classList.toggle("play");
    this.classList.toggle("pause");

    isPause ? timer.pause() : timer.start();
  });

  button_skip.addEventListener("click", function () {
    state.secondsPassed = selectors.currentTimespan().length;
    triggerEffectCallbacks();
  });
}

// Функция сломана.
function initMarquee() {
  function countTimespanLengths() {
    // 3p * w_length + 3p * b_length + 1p * lb_length = 50vw
    // p * (3 * w_length + 3 * b_length + lb_length) = 50vw
    // p = 50vw / (3 * w_length + 3 * b_length + lb_length)

    // in vw
    const half_screen_width = 50;
    const p =
      half_screen_width /
      cycle.map((ts) => ts.length).reduce((a, b) => a + b, 0);

    return Object.fromEntries(
      Object.entries(lengths).map(([key, value]) => [key, value * p])
    );
  }

  const timespanLengths = countTimespanLengths(cycle, lengths);

  function renderTimespan(name) {
    const length = timespanLengths[name] + "vw";
    const html = `<div class="timespan timespan--${name}" style="width:${length}">${length}</div>`;
    return toNode(html);
  }

  const marquee = document.querySelector(".marquee");

  marquee.append(...cycle.map(renderTimespan));
}
