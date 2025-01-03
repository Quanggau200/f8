
        const listiem = document.querySelector('.item_list');
        const itemsize=document.getElementsByClassName('item_track')
        console.log(itemsize)
        let currunt = 0
        setInterval( ()=>
        {       currunt++;
                let width=itemsize[0].offsetWidth
                listiem.style.transform = `translateX(${width*-1 * currunt}px)`;

        },4000)
