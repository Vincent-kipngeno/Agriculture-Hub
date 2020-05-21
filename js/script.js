function category (name){
  this.name = name;
  this.orders = [];
}

function order (type, quantity){
  this.type = type;
  this.quantity = quantity;
}
order.prototype.priceCustomers = function () {
  var productPrice;
  switch (this.type) {
    case "Eggs":
      productPrice = 360;
      break;
    case "Beef":
      productPrice = 300;
      break;
    case "Mutton":
      productPrice = 350;
      break;
    case "Pork":
      productPrice = 400;
      break;
    case "Wool":
      productPrice = 200;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};
order.prototype.priceFarmers = function () {
  var productPrice;
  switch (this.type) {
    case "Eggs":
      productPrice = 300;
      break;
    case "Beef":
      productPrice = 200;
      break;
    case "Mutton":
      productPrice = 250;
      break;
    case "Pork":
      productPrice = 300;
      break;
    case "Wool":
      productPrice = 100;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};
order.prototype.orderSummary = function () {
  return ("<ul>"+
          "<li> Type: "+ this.type +
          "<li> Quantity: "+ this.quantity +
           "<li> charge: "+ this.price() +
         +"</ul>");
};

function collector (categoryName){
  var type = $(".animal-products").val();
  var amount = $(".quantity").val();
  newOrder = new order (type, amount);
  productsType = new category(categoryName);
  productsType.orders.push(newOrder);
  allCategories.push(productsType);
};

var allCategories = [];
$(document).ready(function(){
  $(".showForm1-customers").click(function(){
    $(".form1-customers").toggle();
  });
  $(".form1-customers").submit(function(event){
    event.preventDefault();
    var categoryName = "Animal Products: ";
    collector(categoryName);
    $(".charge1-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.price() + "</li>");
    $(".another-order").show();
    $(".submit").hide();
    $(".another-order").off("click").on("click",function(){
      $(".animal-products").val("");
      $(".quantity").val("");
      $(".submit").show();
    });
  });
  $(".showForm1-farmers").click(function(){
    $(".form7-farmers").toggle();
  });
  $(".form1-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Animal Products: ";
    collector(categoryName);
    $(".charge1-farmers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceFarmers() + "</li>");
    $(".another-order").show();
    $(".submit").hide();
    $(".another-order").off("click").on("click",function(){
      $(".animal-products").val("");
      $(".quantity").val("");
      $(".submit").show();
    });
  });
});

order.prototype.priceCustomers = function () {
  var productPrice;
  switch (this.type) {
    case "Kales":
      productPrice = 2000;
      break;
    case "Cabbage":
      productPrice = 1500;
      break;
    case "Spinach":
      productPrice = 1200;
      break;
    case "Lettuce":
      productPrice = 200;
      break;
    case "Cauliflower":
      productPrice = 1500;
      break;
    case "coriander":
      productPrice = 350;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};

order.prototype.priceFarmers = function () {
  var productPrice;
  switch (this.type) {
    case "Kales":
      productPrice = 2000;
      break;
    case "Cabbage":
      productPrice = 1500;
      break;
    case "Spinach":
      productPrice = 1200;
      break;
    case "Lettuce":
      productPrice = 200;
      break;
    case "Cauliflower":
      productPrice = 1500;
      break;
    case "coriander":
      productPrice = 350;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};

order.prototype.orderSummary = function () {
  return ("<ul>"+
          "<li> Type: "+ this.type +
          "<li> Quantity: "+ this.quantity +
           "<li> charge: "+ this.price() +
         +"</ul>");
};


function collectorVegetables (categoryName){
  var type = $(".vegetable-products").val();
  var amount = parent($(".quantity").val());
  newOrder = new order (type, amount);
  productsType = new category(categoryName);
  productsType.orders.push(newOrder);
  allCategories.push(productsType);
};

var allCategories = [];
$(document).ready(function(){
  $(".showForm7-customers").click(function(){
    $(".form7-customers").toggle();
  });
  $(".form7-customers").submit(function(event){
    event.preventDefault();
    var categoryName = "Vegetable Products: ";
    collectorVegetables(categoryName);
    $(".charge7-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.price() + "</li>");
    $(".another-order").show();
    $(".submit").hide();
    $(".another-order").off("click").on("click",function(){
      $(".vegetable-products").val("");
      $(".quantity").val("");
      $(".submit").show();
    });
  });
  $(".showForm7-farmers").click(function(){
    $(".form7-farmers").toggle();
  });
  $(".form7-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Vegetable Products: ";
    collector(categoryName);
    $(".charge7-farmers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceFarmers() + "</li>");
    $(".another-order").show();
    $(".submit").hide();
    $(".another-order").off("click").on("click",function(){
      $(".animal-products").val("");
      $(".quantity").val("");
      $(".submit").show();
    });
  });
});






















