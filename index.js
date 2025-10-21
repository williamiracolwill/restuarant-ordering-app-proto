import { menuArray } from "./data.js";
const menuList = document.getElementById('food-items');

menuList.addEventListener('click', function(e) {
    if (e.target.dataset.pizza) {
        console.log(e.target.dataset.pizza)
    } else if (e.target.dataset.hamburger) {
        console.log(e.target.dataset.hamburger)
    } else if (e.target.dataset.beer) {
        console.log(e.target.dataset.beer)
    }
});



function getMenuHtml() {
    return menuArray.map(item => `
        <div class="item-container">
                <div class="item-info">
                    <span class="item-emoji">${item.emoji}</span>
                    <div>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-ingredients">${item.ingredients}</p>
                        <p class="item-price">$${item.price}</p>
                    </div>
                </div>
                <button class="add-item-btn">
                    <img src="assets/add-btn.png" alt="Add" data-${item.name}="${item.id}" />
                </button>
            </div>`
        ).join('');
};


function render() {
    menuList.innerHTML = getMenuHtml();
}

render();