import * as flsFunctions from "./modules/function.js";
import "./index.js";
flsFunctions.isWebp();

import Swiper from "swiper";

const swiper = new Swiper(".slider", {
  wrapperClass: "slider__wrapper",
  slideClass: "slider__slide",
  slidesPerView: "auto",
  loop: true,
});
