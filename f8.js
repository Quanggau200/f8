// add sự kiện bật tắt
// document.querySelector(".btn_sign_up").addEventListener("click", () => {});
const overlay = document.querySelector(".overlay");
const el = document.querySelector(".header_flex");
document.addEventListener("click", (event) => {
  if (el.contains(event.target)) {
    el.style.border = "2px solid black";
  } else {
    el.style.border = "2px solid rgb(232, 232, 232)";
  }
});
// sử lý xự kiện chuyển trang
// mở đăng ký
const formregister = document.querySelector(".signin");
const turnon = document.querySelector(".btn_sign_in");
if (turnon && formregister) {
  turnon.addEventListener("click", function () {
    formregister.style.display = "flex";
    document.body.classList.add("modal-open");
  });
} else {
  console.error("Không tìm thấy ");
}
// tắt đăng ký
const closeres = document.querySelector(".btn_close");
if (closeres && formregister) {
  closeres.addEventListener("click", function () {
    formregister.style.display = "none";
    document.body.classList.remove("modal-open");
  });
} else {
  console.error("Không tìm thấy ");
}

// chuyển trang từ đăng ký sang đăng nhập
const transformlogin = document.querySelector(".transform_login");
transformlogin.addEventListener("click", function () {
  formregister.style.display = "none";
  form_signin.style.display = "flex";
  turnonlogin.style.display = "flex";
  form_forget.style.display = "none";
});

//chuyển trang từ đăng ký sang quên mật khẩu

const transform_forget = document.querySelector(".transform_forget");
if (transform_forget) {
  transform_forget.addEventListener("click", function () {
    formregister.style.display = "none";
    turnonlogin.style.display = "flex";
    form_signin.style.display = "none";
    form_forget.style.display = "flex";
  });
}

// mở đăng nhập
const turnonlogin = document.querySelector(".signup");
const login = document.querySelector(".btn_sign_up");
const form_signin = document.querySelector(".login");
if (login && turnonlogin) {
  login.addEventListener("click", function () {
    turnonlogin.style.display = "flex";
    form_forget.style.display = "none";
    form_signin.style.display = "flex";
    document.body.classList.add("modal-open");
  });
} else {
  console.log("không tìm thấy");
}
// tắt đăng nhập
const closelogin = document.querySelector(".form_login");
if (closelogin && turnonlogin) {
  closelogin.addEventListener("click", function () {
    turnonlogin.style.display = "none";
    document.body.classList.remove("modal-open");
  });
  overlay.addEventListener("click", function () {
    turnonlogin.style.display = "none";
    document.body.classList.remove("modal-open");
  });
} else {
  console.error("Không tìm thấy ");
}

// chuyển từ đăng nhập sang đăng ký

const transformregister = document.querySelector(".transform_register");
transformregister.addEventListener("click", function () {
  turnonlogin.style.display = "none";
  formregister.style.display = "flex";
});

// chuyển từ trang đăng nhập sang quên mật khẩu

const forgetpassword = document.querySelector(".pass");
const form = document.querySelector(".login");
const form_forget = document.querySelector(".forgetpassword");
if (forgetpassword && form) {
  forgetpassword.addEventListener("click", function () {
    form_forget.style.display = "flex";
    form.style.display = "none";
  });
} else {
  console.log("không tìm thấy");
}

// tắt quên mật khẩu
const closeforget = document.querySelector(".forget");
if (form_forget && closeforget) {
  closeforget.addEventListener("click", function () {
    turnonlogin.style.display = "none";
    document.body.classList.remove("modal-open");
  });
} else {
  console.error("không tìm thấy");
}

// từ quên mật khẩu quay lại đăng nhập và đăng ký

const btnreturn = document.querySelector(".btn_return");
if (btnreturn) {
  btnreturn.addEventListener("click", function () {
    form_forget.style.display = "none";
    form.style.display = "flex";
  });
} else {
  console.log("test");
}

//check ô email người dùng
//validate form
//đối tượng validate
function validate(option) {
  var formelemnt = document.querySelector(option.form);
  console.log(formelemnt);
  var changecolor = formelemnt.parentElement.querySelector(".right_pass");
  if (formelemnt) {
    option.rules.forEach(function (rule) {
      var inputuser = formelemnt.querySelector(rule.selector);
      var inputform = inputuser.parentElement;
      var errorelemnt = inputform.parentElement.querySelector(".message");
      var animationinput =
        inputuser.parentElement.querySelector(".user_input svg");

      if (inputuser) {
        inputuser.onblur = function () {
          var errormessage = rule.test(inputuser.value);
          if (errormessage) {
            errorelemnt.innerText = errormessage;
            inputuser.classList.add("invaild");
            animationinput.style.display = "block";
            animationinput.classList.add("svg_active");
            changecolor.classList.remove("disabile");
          } else {
            errorelemnt.innerText = "";
            inputuser.classList.remove("invaild");
            animationinput.style.display = "none";
            animationinput.classList.remove("svg_active");

            changecolor.classList.add("disabile");
          }
        };
      }
    });
    transform_forget.addEventListener("click", function () {
      formelemnt.reset();
    });
  }
}
//định nghĩa
validate.isemail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Trường này không được để trống";
    },
  };
};

validate.iscode = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};

//active class
const nav = document.querySelector(".slider_bar_item");
const navlink = nav.querySelectorAll(".select_item");
if (typeof navlink == "null") {
  console.log("không tồn tại");
}
const currunt = window.location.href;
navlink.forEach((link) => {
  if (link.href == currunt) {
    link.classList.add("active");
  }
});

//active slideshow

// const item3=document.querySelectorAll(".chua")
// let currentIndex = 0;
// function activateSlide() {

//   item3.forEach(item => {
//       item.classList.remove('active-slide');
//   });
//   item3[currentIndex].classList.add('active-slide');
//   currentIndex = (currentIndex + 1) % item3.length;
// }

// setInterval(
//   activateSlide,4000
// )

// đưa dữ liệu từ json
const item_column = document.querySelector(".item_column");
const jsonflie = "./data.js";
fetch(jsonflie)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((product) => {
      const {
        id,
        name,
        oldprice,
        main_price,
        nameauthor,
        image,
        image_author,
        timetolearn,
        view,
      } = product;
      console.log();
      item_column.innerHTML += `
        <div class="col" id=${id}>
                                            <div class="col_item" >
                                                <a href="" class="col_item_img">
                                                    <img src="${image}"
                                                        alt="" style="max-width: 100%;">

                                                </a>
                                                <div class="content">
                                                    <h3 class="title_item">
                                                        <a href="">${name}</a>
                                                    </h3>
                                                    <div class="price">

                                                        <span class="old_price">${oldprice}</span>
                                                        <span class="main_price">${main_price}</span>
                                                    </div>
                                                    <div class="infor_item">
                                                        <div class="infor_1">
                                                            <div class="infor_mentor">
                                                                <div>
                                                                    <img src="https://fullstack.edu.vn/images/founder.jpeg"
                                                                        alt="">
                                                                </div>
                                                            </div>
                                                            <span>${nameauthor}</span>
                                                        </div>
                                                        <div class="infor_1"><svg aria-hidden="true" focusable="false"
                                                                data-prefix="fas" data-icon="circle-play"
                                                                class="svg-inline--fa fa-circle-play " role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512">
                                                                <path fill="currentColor"
                                                                    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z">
                                                                </path>
                                                            </svg>
                                                            <span>${view}</span>
                                                        </div>
                                                        <div class="infor_1">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                                data-icon="clock" class="svg-inline--fa fa-clock "
                                                                role="img" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512">
                                                                <path fill="currentColor"
                                                                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                                                                </path>
                                                            </svg>
                                                            <span>${timetolearn}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
          </div>
    `;
    });
  });
