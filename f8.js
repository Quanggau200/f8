
        // add sự kiện bật tắt
        document.querySelector('.btn_sign_up').addEventListener('click', () => { });

        // thêm sự kiện ko bị cuộn trang
        const open = document.getElementById('openlogin')
        open.addEventListener('change', () => {
        if (open.checked) {
                document.body.classList.add('modal-open')
        }
        else {
                document.body.classList.remove('modal-open')
        }
        });

        const el = document.querySelector('.header_flex')
        document.addEventListener('click', (event) => {
        if (el.contains(event.target)) {
                el.style.border = "2px solid black";
        } else {

                el.style.border = "2px solid rgb(232, 232, 232)";
        }
        });


        // const itemsize=document.getElementsByClassName('item')
        // console.log(itemsize)
        // let currunt = 0;
        // function slide() {
        //     currunt++;
        //     if (currunt >= itemsize.length) {
        //         currunt = 0;
        //     }
        
        //     let width = itemsize[0].getBoundingClientRect().width;
        //     console.log(width)
        //     requestAnimationFrame(() => {
        //         listiem.style.transform = `translateX(${width * -1 * currunt}px)`;
        //     });
            
        // }
        
        // setInterval(slide, 2000);
        // const hoverItems = document.querySelectorAll('.select_item');

        // for(let item of hoverItems)
        // {
        //         if(item.classList.contains("active"))
        //         {

        //                 item.classList.add('active')
        //                 // for(let el of hoverItems)
        //                 // {
        //                 // el.classList.remove("avtive")
        //                 // }
                        
        //         }
               
        // }
        // document.querySelector('.btn_sign_up').addEventListener("click", () => {
        //         window.location.href = "https://forgetpassworld.html";
        // });
        