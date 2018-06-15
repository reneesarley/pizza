function Customer(name, phone, notes) {
  this.name = name
  this.phone = phone
  this.deliveryNotes = notes
}

function Pizza(size, cheese, toppings){
  this.size = size
  this.cheese = cheese
  this.toppings = toppings
}
var newCustomer = new Customer("Sam Jones", "503-888-1234", "Please call when you get here")
var samsPizza = new Pizza("medimum", "vegan", "mushroom")
