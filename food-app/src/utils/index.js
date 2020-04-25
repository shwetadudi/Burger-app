export const menuItemsData = [
    {
        "id": "1",
        "name": "Maharaja Mac",
        "price": "299",
        "currency": "INR",
        "category": "veg",
        "quantity": "3",
        "preorder": true
    },
    {
        "id": "2",
        "name": "Mc Aloo Tikki",
        "price": "99",
        "currency": "INR",
        "category": "veg",
        "quantity": "30",
        "preorder": true
    },
    {
        "id": "3",
        "name": "Mc Chickedn",
        "price": "399",
        "currency": "INR",
        "category": "non-veg",
        "quantity": "2",
        "preorder": true
    },
    {
        "id": "4",
        "name": "Fries",
        "price": "199",
        "currency": "INR",
        "category": "veg",
        "quantity": "1",
        "preorder": false
    },
    {
        "id": "5",
        "name": "Mc Flurry",
        "price": "199",
        "currency": "INR",
        "category": "veg",
        "quantity": "30",
        "preorder": true
    },
    {
        "id": "6",
        "name": "Chicken wings",
        "price": "349",
        "currency": "INR",
        "category": "veg",
        "quantity": "1",
        "preorder": true
    },
    {
        "id": "7",
        "name": "Coke",
        "price": "59",
        "currency": "INR",
        "category": "drink",
        "quantity": "31",
        "preorder": false
    },
    {
        "id": "8",
        "name": "Slice",
        "price": "99",
        "currency": "INR",
        "category": "drink",
        "quantity": "3",
        "preorder": true
    },
    {
        "id": "9",
        "name": "Pepsi",
        "price": "99",
        "currency": "INR",
        "category": "drink",
        "quantity": "3",
        "preorder": true
    },
    {
        "id": "10",
        "name": "Bag",
        "price": "9",
        "currency": "INR",
        "category": "n/a",
        "quantity": "300",
        "preorder": false
    }
];

export const filters = [
    {
        name: "search",
        input: true
    },
    {
        name: "category",
        values: ["veg", "non-veg", "drink"]
    },
    {
        name: "price",
        values: ["0-99", "100-199", "200-299", "300-399"]
    },
    {
        name: "available",
        values: ["available", "out of stock"]
    }
];
export const OrderItems = [
    {
        name: null,
        quantity: null,
        price: null
    }
];