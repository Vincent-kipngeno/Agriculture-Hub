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
    $(".form1-farmers").toggle();
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
