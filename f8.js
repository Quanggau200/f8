// add sự kiện bật tắt
// document.querySelector(".btn_sign_up").addEventListener("click", () => {});
const overlay=document.querySelector('.overlay')
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
  turnon.addEventListener('click', function () {
    formregister.style.display = "flex";
    document.body.classList.add("modal-open")
  });
} else {
  console.error("Không tìm thấy ");
}
// tắt đăng ký
const closeres = document.querySelector(".btn_close");
if (closeres && formregister) {
  closeres.addEventListener('click', function () {
    formregister.style.display = "none";
    document.body.classList.remove("modal-open")
  });
} else {
  console.error("Không tìm thấy ");
}

// chuyển trang từ đăng ký sang đăng nhập 
const transformlogin = document.querySelector(".transform_login")
transformlogin.addEventListener('click', function () {
  formregister.style.display = "none";
  form_signin.style.display="flex";
  turnonlogin.style.display="flex";
  form_forget.style.display="none"
})

//chuyển trang từ đăng ký sang quên mật khẩu 

const transform_forget=document.querySelector(".transform_forget")
if(transform_forget){
  transform_forget.addEventListener('click',function(){
    formregister.style.display="none"
    turnonlogin.style.display="flex";
    form_signin.style.display="none"
    form_forget.style.display="flex"
  })
}

// mở đăng nhập
const turnonlogin = document.querySelector(".signup");
const login = document.querySelector(".btn_sign_up");
const form_signin =document.querySelector(".login");
if (login && turnonlogin) {
  login.addEventListener('click', function () {
    turnonlogin.style.display = "flex";
    form_forget.style.display="none";
    form_signin.style.display="flex";
    document.body.classList.add("modal-open");

  });
} else {
  console.log("không tìm thấy")
}
// tắt đăng nhập
const closelogin = document.querySelector(".form_login");
if (closelogin && turnonlogin) {
  closelogin.addEventListener('click', function () {
    turnonlogin.style.display = "none";
    document.body.classList.remove("modal-open")

  });
  overlay.addEventListener('click',function(){
    turnonlogin.style.display='none'
     document.body.classList.remove("modal-open")
  });
} else {
  console.error("Không tìm thấy ");
}

// chuyển từ đăng nhập sang đăng ký

const transformregister = document.querySelector(".transform_register")
transformregister.addEventListener('click', function () {
  turnonlogin.style.display = "none"
  formregister.style.display = "flex"
})

// chuyển từ trang đăng nhập sang quên mật khẩu

const forgetpassword = document.querySelector('.pass')
const form = document.querySelector('.login')
const form_forget=document.querySelector(".forgetpassword")
if(forgetpassword && form){
    forgetpassword.addEventListener('click',function()
  {
    form_forget.style.display='flex'
    form.style.display='none'
  })
}else {
  console.log('không tìm thấy')
}

// tắt quên mật khẩu 
const closeforget=document.querySelector(".forget")
if (form_forget && closeforget) {
  closeforget.addEventListener('click', function () {
    turnonlogin.style.display="none";
    document.body.classList.remove("modal-open")
  })
  } else {
  console.error("không tìm thấy")
}

// từ quên mật khẩu quay lại đăng nhập và đăng ký

const btnreturn = document.querySelector('.btn_return')
if(btnreturn){
  btnreturn.addEventListener('click',function(){
      form_forget.style.display="none"
      form.style.display="flex";
  }
  )
} else{
    console.log('test')
}

//check ô email người dùng
//validate form 
//đối tượng validate
function validate(option)
{
  var formelemnt=document.querySelector(option.form)
  console.log(formelemnt)
  var changecolor=formelemnt.parentElement.querySelector(".right_pass")
  if(formelemnt)
  {
        option.rules.forEach(function(rule)
      {
        var inputuser=formelemnt.querySelector(rule.selector)
        var inputform=inputuser.parentElement
        var errorelemnt=inputform.parentElement.querySelector('.message')
        var animationinput=inputuser.parentElement.querySelector('.user_input svg')
        
        
        if(inputuser)
          {
              inputuser.onblur=function()
              {
                var errormessage=rule.test(inputuser.value)
                  if ( errormessage){
                    errorelemnt.innerText=errormessage;
                    inputuser.classList.add('invaild')
                    animationinput.style.display='block'
                    animationinput.classList.add('svg_active')
                    changecolor.classList.remove('disabile')
                  }
                  
                  else{
                     errorelemnt.innerText=''
                     inputuser.classList.remove('invaild')
                      animationinput.style.display='none'
                     animationinput.classList.remove('svg_active')
                     
                    changecolor.classList.add('disabile')
                  }
              }
              
             
          }
      })
      transform_forget.addEventListener('click', function () {
        formelemnt.reset();
      })

  } 

}
//định nghĩa
 validate.isemail = function(selector){
    return {
      selector: selector,
      test:function (value) {
          return value.trim() ?undefined : 'Trường này không được để trống'
      }
    }
  }

  validate.iscode = function (selector) {
    return {
        selector: selector,
        test: function () {
            
        }
    };
}

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