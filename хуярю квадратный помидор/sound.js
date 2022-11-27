const createSound = (url) => {
  const pool = new Array(10).fill().map((_, i) => {
    const audio = new Audio(url);
    audio.addEventListener("ended", () => (pool[i].isReady = true));
    return {
      audio,
      isReady: true,
    };
  });

  function play() {
    const index = pool.findIndex((item) => item.isReady);
    console.log(index);
    if (index !== -1) {
      pool[index].isReady = false;
      pool[index].audio.play();
    }
  }

  return { play };
};
