
# Basic Object-Oriented Programming (OOP) in JavaScript
![]()

This README discusses the principles of Basic Object-Oriented Programming (OOP) as implemented in the `script.js` file of the Shopping Cart project.

## Overview
Object-Oriented Programming is a programming paradigm that uses "objects" to represent data and methods to manipulate that data. OOP helps in organizing code in a more manageable way and promotes code reusability through inheritance and encapsulation.

## Key Concepts of OOP

### 1. Objects
In JavaScript, an object is a standalone entity, with properties and type. Objects can represent real-world entities and can contain data in the form of key-value pairs. In `script.js`, we utilize objects to represent the cart and its items.

### 2. Classes
Classes are a blueprint for creating objects. They encapsulate data for the object and methods to manipulate that data. In the `script.js`, we define classes to represent the `Cart` and `Product`:

```javascript
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.taxRate = 8.25;
    }

    addItem(id, products) {
        // Logic to add item to cart
    }

    getCounts() {
        return this.items.length;
    }

    clearCart() {
        // Logic to clear the cart
    }

    calculateTaxes(amount) {
        return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }

    calculateTotal() {
        // Logic to calculate total
    }
}
```

### 3. Inheritance
Inheritance allows a class to use properties and methods of another class. While the current implementation may not showcase inheritance, it can be useful for extending functionality in complex applications.

### 4. Encapsulation
Encapsulation is the bundling of data (properties) and methods that operate on that data within one unit, such as a class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data. In `script.js`, methods like `addItem` and `calculateTotal` encapsulate the behavior of the `Cart` class.

## Implementation in script.js
- **Product Class**: Represents a product with properties like `id`, `name`, and `price`.
- **Cart Class**: Manages the shopping cart, allowing items to be added and calculating totals.
  - **Methods**:
    - `addItem(id, products)`: Adds an item to the cart based on its ID.
    - `getCounts()`: Returns the total number of items in the cart.
    - `clearCart()`: Clears all items from the cart after user confirmation.
    - `calculateTaxes(amount)`: Calculates the tax amount based on the subtotal.
    - `calculateTotal()`: Calculates the total amount including taxes and updates the display.
- **Event Handling**: The script uses event listeners to respond to user actions, such as adding items to the cart.

## Conclusion
Understanding the basic principles of OOP in JavaScript is essential for building scalable and maintainable applications. The use of classes and objects in the Shopping Cart project demonstrates how OOP can be applied to manage state and behavior effectively.
