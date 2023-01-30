const createTimer = (callback) => {
  let isPaused = true;
  let interval;

  const start = () => {
    if (isPaused) {
      isPaused = false;
      interval = setInterval(callback, 1000);
    }
  };

  const pause = () => {
    isPaused = true;
    clearInterval(interval);
    interval = undefined;
  };

  return {
    start,
    pause,
  };
};

const formatTime = (s) => {
  const min = 0 | (s / 60);
  return [min, s - min * 60].map((n) => `${n}`.padStart(2, "0")).join`:`;
};

function toNode(html) {
  // TODO: reuse dummy node.
  const dummy = document.createElement("div");
  dummy.innerHTML = html;
  return dummy.firstChild;
}
