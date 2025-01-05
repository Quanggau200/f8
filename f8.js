
        // const listiem = document.querySelector('.test');
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
        const hoverItems = document.querySelectorAll('.select_item');

        for(let item of hoverItems)
        {
                if(item.classList.contains("active"))
                {

                        item.classList.add('active')
                        // for(let el of hoverItems)
                        // {
                        // el.classList.remove("avtive")
                        // }
                        
                }
               
        }
        document.querySelector('.btn_sign_up').addEventListener("click", () => {
                window.location.href = "https://forgetpassworld.html";
        });
        