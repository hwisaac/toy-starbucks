const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus(); // 강제로 포커스 되게 하는 효과
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
//포커스가 해제됐을 때(blur)
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //   gsap.to(요소, 지속시간s, 요소) 해당요소가 지속시간에 걸쳐 요소에 해당하는 설정이 됨.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 문자밸류들은 따옴표로 묶어줘야 함
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _throttle(함수, 지연시간ms) 는 함수를 천천히 실행되게 만든다.

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //   gsap.to(요소, 지속시간s, 요소) 해당요소가 지속시간에 걸쳐 요소에 해당하는 설정이 됨.
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 순차적으로 딜레이s를 가지고 opacity가 1이된다.
    opacity: 1,
  });
});

// new Swiper(선택자 , 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
