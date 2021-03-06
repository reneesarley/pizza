# _Pizza Order Form_

#### _An application to place pizza orders, 6/15/18_

#### By _**Renee Sarley**_

## Description

_This application will take input from the customer and create their pizza order. It will collect information on the pizza and customer._

## Setup/Installation Requirements

* _Clone from GitHub here: https://github.com/reneesarley/pizza_
* _View in gh pages here: https://reneesarley.github.io/pizza/_

## Specifications

* _This application will allow the user to choose toppings and size for the pizza they'd like to order._
* _This will include a pizza object constructor with properties for toppings and size._
* _This will include a prototype method for the cost of a pizza depending on the selections chosen._

|Behavior  |     Input     | Output|
|:----------:|:-------------:|:------:|
| Customer selects a topping and the topping is added to the order for that pizza | mushroom | toppings: ["mushroom"]|
| Customer selects a size and it is added to the pizza  | Medium | size: "medium" |
| Customer selects type of cheese and it is added to the pizza | vegan cheese | cheese: "vegan"|
| Customer selects multiple toppings and they are all added to the pizza | mushroom, basil, olives | toppings: ["mushroom", "basil", "olives"] |
| Add Customer's Name, phone and special instructions to customer object | Sam Jones, 503.888.1234, "Please call when you arrive" | name: "Same Jones", phone: "503.888.1234", deliveryNotes: "Please call when you arrive" |
| Add Customer's address to Address object | 1234 Alder St, Portland OR 97214 | street: "1234 Alder St", city: "Portland", state: "OR", zip: 97214 |
| Charge customer $12 base price for small pizzas, $15 for medium, $18 for large | large  | $18  |
| Charge customer 50 cents per topping for small pizzas | mushrooms, olives, basil  | $1.50  |
| Charge customer 75 cents per topping for medium pizzas | mushrooms, olives, basil  | $2.25  |
| Charge customer $1 per topping for large pizzas | mushrooms, olives, basil  | $3  |
| Calculate pizza cost based on size and number of toppings | small 3 topping  | $13.50 |

## Known Bugs

_No know bugs at this time._

## Support and contact details

_Please contact me via GitHub with any questions._

## Technologies Used

* _JavaScript_
* _JQuery_
* _Bootstrap_

### License

*This application is licensed under the MIT License*

Copyright (c) 2018 **_Renee Sarley_**
