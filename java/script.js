// active Class
let current_page_name = document.getElementsByClassName(document.title);
current_page_name[0].classList.add("actv");

// header scroll
let header = document.querySelector(".header");
let triangle = document.querySelectorAll(".t1");
window.onscroll = function () {
  if (window.scrollY >= 200) {
    header.classList.add("header-st");
    header.classList.add("animation-down");
    header.style.display = "block";
    triangle[0].style.display = "none";
  } else {
    header.classList.remove("animation-down");
    header.classList.remove("header-st");
    triangle[0].style.display = "block";
  }
  if (window.scrollY > 400 && window.scrollY < 1100) {
    if (triangle[1] != undefined) {
      triangle[1].style.display = "block";
    }
  } else {
    if (triangle[1] != undefined) {
      triangle[1].style.display = "none";
    }
  }
};

// triangle
window.onload = function () {
  if (window.scrollY >= 200) {
    header.classList.add("header-st");
    header.classList.add("animation-down");

    header.style.display = "block";
    triangle[0].style.display = "none";
  } else {
    header.classList.remove("header-st");
    triangle[0].style.display = "block";
  }
};

// display main-item in mobile
// document.querySelector(".main-item").style.height ="fit-content";
let hei;
document.querySelector(".btn-item").onclick = function () {
  if (document.querySelector(".main-item").style.height == "0px") {
    document.querySelector(".main-item").style.height = "282px";
  } else {
    document.querySelector(".main-item").style.height = "0px";
  }
};

// rating star
let rate = document.querySelectorAll(".w-rate");
if (rate != null) {
  rate.forEach(function (e) {
    // let num_rate = Number(e.getAttribute("num-rate"));
    let num_rate = Math.floor(Math.random() *5 +1 ) ;
    for (var i = 0; i < rate[0].children.length ; i++) {
      if (i < num_rate) {
        e.children[i].classList.add("actv-star");
      }
    }
  });
}
let rate_me = document.querySelectorAll(".rate-me i");

rate_me.forEach(function (e) {
  e.onclick = function () {
    rate_me.forEach(function (ele) {
      if (ele.getAttribute("num_star") <= e.getAttribute("num_star")) {
        ele.classList.add("actv-star");
      }
      else {
        ele.classList.remove("actv-star");

      }
    });
  };
  e.onmouseover = function () {
    rate_me.forEach(function (ele) {
      if (ele.getAttribute("num_star") <= e.getAttribute("num_star")) {
        ele.classList.add("actv-star");
      }
      else {
        ele.classList.remove("actv-star");
      }
    });
  };
});
