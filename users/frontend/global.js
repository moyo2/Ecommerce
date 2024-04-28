document.addEventListener("DOMContentLoaded", requestCategories);
document.addEventListener("DOMContentLoaded", bannerCategories);
function requestCategories() {
    fetch("../backend/menu.php", { 
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        const nav = document.querySelector('.navigation');
        if(data.category){
            const ul = document.createElement('ul');
            data.category.forEach(cat  => {
                const li = document.createElement('li');
                li.className=cat;
                li.textContent=cat;
                li.addEventListener('click', getcategoryproducts);
                ul.appendChild(li);
              
                
            });

            nav.appendChild(ul);
        }


    })
    .catch((err) => console.log(err));
}

function getcategoryproducts(){
    console.log('cat clicked');
}


function bannerCategories() {
    fetch("../backend/banner.php", { 
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {

        if(data.banners){
            const banners = data.banners;
            banners.forEach(banner => {
                const slide = document.createElement('div')
                slide.className = 'swiper-slide';
                slide.style.backgroundImage = `url('../images/banner${banner.images}')`; // Using backticks for template literals
                slide.style.height = "20vh";
                const bannerSection = document.querySelector(".banner");
                bannerSection.append(slide);

                console.log('slide');
            });

        }
    })
    .catch((err) => console.log(err));
}
