export const scrollToSmoothly = (pos: number, time: number) => {
  // 현재 스크롤 위치
  let currentPos = window.pageYOffset;
  // 이동 거리
  let distance = pos - currentPos;
  // 애니메이션 시작시간
  let startTime: null | number = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    // 애니메이션 진행 시간
    let timeElapsed = currentTime - startTime;
    // 현재 위치
    let ease = easeInOutQuad(timeElapsed, currentPos, distance, time);
    window.scrollTo(0, ease);
    if (timeElapsed < time) requestAnimationFrame(animation);
  };

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

// ex) scrollToSmoothly(100, 1000); // 1000ms 동안 100px 아래로 부드럽게 스크롤
