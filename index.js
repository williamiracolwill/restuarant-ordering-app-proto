import { menuArray } from "./data.js";

const menuList = document.getElementById('menu');
const addedItemsList = document.getElementById('added-items-list')
const paymentForm = document.getElementById('payment-form')






document.addEventListener('click', function(e) {
    if (e.target.dataset.pizza) {
        handleAddItem(e.target.dataset.pizza)
    } else if (e.target.dataset.hamburger) {
        handleAddItem(e.target.dataset.hamburger)
    } else if (e.target.dataset.beer) {
        handleAddItem(e.target.dataset.beer)
    } else if (e.target.dataset.removeBtn) {
        handleRemoveItem(e.target.dataset.removeBtn)
    } else if (e.target.id === 'complete-order-btn') {
        toggleModalDisplay()
    }
});

let isReadyToPay = false // in order to toggle modal display  

paymentForm.addEventListener('submit', e => {
    e.preventDefault()

    const paymentFormData = new FormData(paymentForm)
    const fullName = paymentFormData.get('fullName')
    toggleModalDisplay()
    document.getElementById('your-order').innerHTML = `
        <div class="complete-order-message align-center">
            <h5>Thanks, ${fullName}! Your order is on its way!</h5>
        </div>
        `
})

const myOrderItems = []

function toggleOrderDisplay() {
    const yourOrder = document.getElementById('your-order')
    myOrderItems.length > 0 ? 
    yourOrder.style.display = 'block' :
    yourOrder.style.display = 'none'
}

function handleAddItem(itemId) {
    const targetItemObj = menuArray.filter(menuItem => menuItem.id === Number(itemId))[0]
    myOrderItems.push(targetItemObj)
    updateTotalPrice()
    render()
}

function handleRemoveItem(itemId) {
    const index = myOrderItems.findIndex(obj => obj.id === Number(itemId))
    if (index !== -1) {
        myOrderItems.splice(index, 1);
    }
    updateTotalPrice()
    render()
}



function toggleModalDisplay() {
    const paymentModal = document.getElementById('payment-modal')
    isReadyToPay = !isReadyToPay
    isReadyToPay ? paymentModal.style.display = 'block' : paymentModal.style.display = 'none'
}

function getOrderHtml() {
    return myOrderItems.map(item => `
        <li class="list-item display-flex">
            <div class="display-flex">
                <h3>${item.name}</h3> 
                <button 
                    id="remove-btn-${item.id}" 
                    class="remove-btn"
                    data-remove-btn="${item.id}"
                    >remove</button>
            </div>
            <p>$${item.price}</p>
        </li>`).join('')
}

function updateTotalPrice() {
    const totalPrice = document.getElementById('total-price')
    const total = myOrderItems.reduce((sum, item) => sum + item.price, 0)
    totalPrice.textContent = `$${total}`
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
    addedItemsList.innerHTML = getOrderHtml()
    toggleOrderDisplay()
}

render();