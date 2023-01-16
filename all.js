//Swiper
function initSwiper() {
  /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
  const swiper = new Swiper("#comment-swiper", {
    autoplay: {
      delay: 2000,
    },
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3,
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      600: {
        slidesPerView: 2,
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1,
      },
    },
    /* 卡片元素的間隔 */
    spaceBetween: 18,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
      el: ".swiper-pagination",
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true,
    },
  });
}

initSwiper();

//Q&A toggle
const questions = document.querySelectorAll(".question-item");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("question-item-show");
  });
});

//fixed navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (this.scrollY <= 20) {
    nav.classList.remove("fixed");
  } else {
    nav.classList.add("fixed");
  }
});
