const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //   gsap.to(요소, 지속시간s, 요소) 해당요소가 지속시간에 걸쳐 요소에 해당하는 설정이 됨.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 문자밸류들은 따옴표로 묶어줘야 함
        display: "none",
      });
      //스크롤 버튼 나타나기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //스크롤 버튼 오른쪽으로 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _throttle(함수, 지연시간ms) 는 함수를 천천히 실행되게 만든다.

toTopEl.addEventListener("click", function () {
  //윈도우를 0.7초 동안
  gsap.to(window, 0.7, {
    scrollTo: 0, // 스크롤의 위치를 0으로
  });
});

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
  slidesPerView: 1,
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

//awards 스와이프
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  //버튼 설정
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 프로모션 토글 시키기
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  // 단순한 효과는 css 제어만으로 하는게 좋다.
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// youtube__floating
//랜덤함수 (소수점 2자리)
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: 20,
    repeat: -1, //무한반복
    yoyo: true, // 아래로 내려오면 위로 올라가기
    ease: Power1.easeInOut, //자연스럽게 이징
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook: 0.8, // 0~1사이 중 어느 위치에서 감시할것인가
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
