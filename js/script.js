
$(document).ready(function(){
   $("button#final-order").click(function(event){
     event.preventDefault();
     let person = $("input#name").val();
     let phone = $("input#phone").val();
     let email = $("input#email").val();
       if ($("input#name").val() && $("input#phone").val() && $("input#email").val()!=""){
         alert(person+", We have recieved your request.One of our officers will get back to you in a few.Thank you");
       }
         else {
      alert("Please fill in the details!!!");
    }
  });
  event.preventDefault();
 });








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
    case "Apples":
      productPrice = 3000;
      break;
    case "Oranges":
      productPrice = 1000;
      break;
    case "Grapes":
      productPrice = 1000;
      break;
    case "Plums":
      productPrice = 2000;
      break;
    case "Lemons":
      productPrice = 2300;
      break;
    case "Peach":
      productPrice = 1500;
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
    case "Apples":
      productPrice = 3000;
      break;
    case "Oranges":
      productPrice = 1000;
      break;
    case "Grapes":
      productPrice = 1000;
      break;
    case "Plums":
      productPrice = 2000;
      break;
    case "Lemons":
      productPrice = 2300;
      break;
    case "Peaches":
      productPrice = 1500;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};
order.prototype.orderSummary = function () {
  return ("<ul>"+
          "<li> Type: "+ this.type + "</li>"+
          "<li> Quantity: "+ this.quantity +"</li>"+
           "<li> charge:" + "</li>"+
         "</ul>");
};

function collectorAnimals (categoryName){
  var type = $(".animal-products").val();
  var amount = parseInt($(".quantity1").val());
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
    collectorAnimals(categoryName);
    $(".charge1-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceCustomers() + "</li>");
    $(".another-order1").show();
    $(".submit1").hide();
    $(".another-order1").click(function(){
      $(".animal-products").val("");
      $(".quantity1").val("");
      $(".submit1").show();
    });
    $(".checkout-customers").off("click").on("click",function(){
      $(".customer-summary").append(allCategories[1].name);
      allCategories.forEach(function(allCategory) {
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummary());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
  $(".showForm1-farmers").click(function(){
    $(".form1-farmers").toggle();
  });
  $(".form1-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Animal Products: ";
    collectorAnimals(categoryName);
    $(".charge1-farmers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceFarmers() + "</li>");
    $(".another-order1").show();
    $(".submit1").hide();
    $(".another-order1").off("click").on("click",function(){
      $(".animal-products").val("");
      $(".quantity1").val("");
      $(".submit1").show();
    });
    $(".checkout-farmers").off("click").on("click",function(){
      $(".farmer-summary").append(allCategories[1].name);
      allCategories.forEach(function(allCategory) {
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummary());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
});

//...*fruits section...
function collectorFruits (categoryName){
  var type = $(".fruits").val();
  var amount = parseInt($(".quantity3").val());
  newOrder = new order (type, amount);
  productsType = new category(categoryName);
  productsType.orders.push(newOrder);
  allCategories.push(productsType);
};
$(document).ready(function(){
  $(".showForm3-customers").click(function(){
    $(".form3-customers").toggle();
  });
  $(".form3-customers").submit(function(event){
    event.preventDefault();
    var categoryName = "Fruits: ";
    collectorFruits(categoryName);
    $(".charge3-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceCustomers() + "</li>");
    $(".another-order3").show();
    $(".submit3").hide();
    $(".another-order3").off("click").on("click",function(){
      $(".fruits").val("");
      $(".quantity3").val("");
      $(".submit3").show();
    });
    $(".checkout-customers").off("click").on("click",function(){
      $(".customer-summary").append(allCategories[1].name);
      allCategories.forEach(function(allCategory) {
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummary());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
  $(".showForm3-farmers").click(function(){
    $(".form3-farmers").toggle();
  });
  $(".form3-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Fruits: ";
    collectorFruits(categoryName);
    $(".charge3-farmers").append("<li>" + newOrder.type + ": Kshs" +  newOrder.priceCustomers() + "</li>");
    $(".another-order3").show();
    $(".submit3").hide();
    $(".another-order3").off("click").on("click",function(){
      $(".fruits").val("");
      $(".quantity3").val("");
      $(".submit3").show();
    });
    $(".checkout-farmers").off("click").on("click",function(){
      $(".farmer-summary").append(allCategories[1].name);
      allCategories.forEach(function(allCategory) {
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummary());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
});
