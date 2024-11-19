// Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// set subtotal & tax
let subtotal = 0
let tax = .07

// grab the menu types
const menuTypes = [
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides'
]

// create menu items; array objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'onion blossom',
        desc: 'fresh onion blossom',
        imgUrl: '',
        price: 9.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'mozzarella sticks',
        desc: 'deep fried mozzarella sticks with marinara sauce',
        imgUrl: '',
        price: 5.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'buffalo chicken wings',
        desc: 'deep fried buffalo chicken wings',
        imgUrl: '',
        price: 7.99,
        qty: 0 
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'Loaded Nachos',
        desc: 'Loaded Nachos with tortilla chips topped with melted cheese and other savoury toppings',
        imgUrl: '',
        price: 6.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'Cheeseburger',
        desc: 'Cheeseburger with your choice of condiment and other toppings',
        imgUrl: 'cheeseburger.jpeg',
        price: 10.99,
        qty: 0 
    },
    {
        id: 6,
        type: 'entrees',
        item: 'Rib eye steak',
        desc: 'a cut of beef from the rib section of a cow thats known if its rich flavor, tenderness, and juiciness',
        imgUrl: 'ribeye steak.jpeg',
        price: 21.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'Spaghetti and meatballs',
        desc: 'Spaghetti and mealballs with tomato sauce',
        imgUrl: 'spaghetti and meatballs,jpeg',
        price: 7.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'catfish',
        desc: 'deep fried catfish',
        imgUrl: 'catfish.jpeg',
        price: 5.99,
        qty: 0
    },
    {
        id: 9,
        type: 'Drinks',
        item: 'Water',
        desc: 'a calorie-free drink',
        imgUrl: 'water.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'Drinks',
        item: 'Coke',
        desc: 'a carbonated soft drink',
        imgUrl: 'coke.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'Desserts',
        item: 'Chocolate chip cookie',
        desc: 'Cookie with delicious chocolate chips',
        imgUrl: 'chocolate chip cookie-dew.jpeg',
        price: 4.99,
        qty: 0
    },
    {
        id: 12,
        type: 'Desserts',
        item: 'Fruit punch',
        desc: 'A punch made of fruit juices mixed with water or soda water.',
        imgUrl: 'fruit punch.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 13,
        type: 'Desserts',
        item: 'orange soda',
        desc: 'A carbonated non-alcoholic beverage with an orange flavor.',
        imgUrl: 'chocolate chip soda.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 14,
        type: 'Desserts',
        item: 'Cheesecake',
        desc: 'A dessert made with soft fresh cheese, eggs and sugars',
        imgUrl: 'cheesecake soda.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 15,
        type: 'Desserts',
        item: 'ice cream',
        desc: 'A creamy, sweet dessert made with dairy, eggs, sugar, and sorbet powder.',
        imgUrl: 'ice cream soda.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 16,
        type: 'sides',
        item: 'Season fries',
        desc: 'deep fries seasoned fries',
        imgUrl: 'seasoned fries.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'corn on a cob',
        desc: 'A cooked ear of sweet corn thats eaten from the cob',
        imgUrl: 'corn on a cob.jpeg',
        price: 5.99,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'baked beans',
        desc: 'a dish of beans that are stewed or baked in a sauce with seasonings and sometimes meat or flat',
        imgUrl: 'baked beans fries.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'deviled eggs',
        desc: 'hard-boiled eggs that have been peeled, cut in half, then stuffed with a paste made from the yolk and other ingredients.',
        imgUrl: 'devilled eggd.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'Roasted sweet potatoes',
        desc: '',
        imgUrl: 'Roasted sweet potatoes.jpeg',
        price: 7.99,
    }
]

// confirm Button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('click')
})

// load the menu items
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDivs[i])
}
// grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

// build cols and cards
menuItems.forEach(item => {
    //  do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.desc}</p>
        </div>
    `
})
