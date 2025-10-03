import { menuArray } from "./data.js";
const menuList = document.getElementById('food-items');


const menuElements = menuArray.map(item => {
    return `<div class="item-container">
                <div class="item-info">
                    <span class="item-emoji">${item.emoji}</span>
                    <div>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-ingredients">${item.ingredients}</p>
                        <p class="item-price">$${item.price}</p>
                    </div>
                </div>
                <button class="add-item-btn">
                    <img src="assets/add-btn.png" alt="Add" />
                </button>
            </div>`
});

menuList.innerHTML = menuElements.join('');