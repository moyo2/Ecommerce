document.addEventListener("DOMContentLoaded", requestCategories);

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
