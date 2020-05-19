
function category (name){
  this.name = name;
  this.orders = [];
}

function order (type, quantity){
  this.type = type;
  this.quantity = quantity;
}
order.prototype.price = function () {
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
order.prototype.orderSummary = function () {
  return ("<ul>"+
          "<li> Type: "+ this.type +
          "<li> Quantity: "+ this.quantity +
           "<li> charge: "+ this.price() +
         +"</ul>");
};


$(document).ready(function(){
  $(".form1-customers").submit(function(event){
    event.preventDefault();
    var type = $(".animal-products").val();
    var amount = $(".quantity").val();
    newOrder = new order (type, amount);
    var categoryName = "Animal Products: ";
    animalProducts = new category(categoryName);
    animalProducts.orders.push(newOrder);
    $(".charge1-customers").append(newOrder.type + ": Kshs" + newOrder.price());
  });
});
