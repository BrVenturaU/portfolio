export const flip = (animationChangeCb, firstEls, lastEls = firstEls) => {
  const firstRects = firstEls.map((el) => el.getBoundingClientRect());

  animationChangeCb();

  requestAnimationFrame(() => {
    const lastRects = lastEls.map((el) => el.getBoundingClientRect());

    lastEls.forEach((el, i) => {
      const dy = firstRects[i].y - lastRects[i].y;
      const dx = firstRects[i].x - lastRects[i].x;
      const dw = firstRects[i].width / lastRects[i].width;
      const dh = firstRects[i].height / lastRects[i].height;


      el.style.setProperty("--dy", `${dy}px`);
      el.style.setProperty("--dx", `${dx}px`);
      el.style.setProperty("--dw", `${dw}`);
      el.style.setProperty("--dh", `${dh}`);
      el.dataset.flip = "invert";
    });

    requestAnimationFrame(() => {
      lastEls.forEach((el) => {
        el.dataset.flip = "play";
      });
    });
  });
};