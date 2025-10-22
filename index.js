import { menuArray } from "./data.js";

const menuList = document.getElementById('menu');

menuList.addEventListener('click', function(e) {
    if (e.target.dataset.pizza) {
        handleAddItem(e.target.dataset.pizza)
    } else if (e.target.dataset.hamburger) {
        handleAddItem(e.target.dataset.hamburger)
    } else if (e.target.dataset.beer) {
        handleAddItem(e.target.dataset.beer)
    }
});

const myOrderItems = []

function handleAddItem(itemId) {
    console.log(itemId)
}


function getMenuHtml() {
    return menuArray.map(item => `
        <div class="item-container display-flex">
            <div class="display-flex">
                <span class="item-emoji">${item.emoji}</span>
                <div>
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
            </div>
            <button class="add-item-btn" >
                <img src="assets/add-btn.png" alt="Add" data-${item.name}="${item.id}" />
            </button>
        </div>`
    ).join('');
};


function render() {
    menuList.innerHTML = getMenuHtml();
}

render();