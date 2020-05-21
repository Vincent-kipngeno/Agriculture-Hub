
$(document).ready(function(){

    $('.icons').click(function () {
        $(this).children('.toggle').slideToggle(400);
        $(this).children('.show').toggle();
      });
     });


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
    case "Peaches":
      productPrice = 1500;
      break;
    case "Kales":
      productPrice = 2000;
      break;
    case "cabbage":
      productPrice = 1500;
      break;
    case "Spinach":
      productPrice = 1200;
      break;
    case "Lettuce":
      productPrice = 1200;
      break;
    case "Cauliflower":
      productPrice = 1500;
      break;
    case "coriander":
      productPrice = 350;
      break;
    case "Black-beans":
      productPrice = 1900;
      break;
    case "Soy-beans":
      productPrice = 2000;
      break;
    case "Peas":
      productPrice = 2000;
      break;
    case "Peanuts":
      productPrice = 2400;
      break;
    case "Yellow-beans":
      productPrice = 1800;
      break;
    case "French-beans":
      productPrice = 1000;
      break;
    case "Chick-peas":
      productPrice = 2200;
      break;
    case "Lentils":
      productPrice = 1500;
      break;
    case "Lima-beans":
      productPrice = 2000;
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
      productPrice = 2000;
      break;
    case "Cauliflower":
      productPrice = 1500;
      break;
    case "Coriander":
      productPrice = 350;
      break;
    case "Black-beans":
      productPrice = 1200;
      break;
    case "Soy-beans":
      productPrice = 1500;
      break;
    case "Peas":
      productPrice = 1000;
      break;
    case "Peanuts":
      productPrice = 1800;
      break;
    case "Yellow-beans":
      productPrice = 1000;
      break;
    case "French-beans":
      productPrice = 800;
      break;
    case "Chick-peas":
      productPrice = 1500;
      break;
    case "Lentils":
      productPrice = 1000;
      break;
    case "Lima-beans":
      productPrice = 1400;
      break;
    default:
      productPrice = 0;
  }
  totalCharge = productPrice * this.quantity;
  return totalCharge;
};
order.prototype.orderSummaryCustomers = function () {
  return ("<ul class = 'prizes'>"+
          "<li> Type: "+ this.type + "</li>"+
          "<li> Quantity: "+ this.quantity +"</li>"+
           "<li> charge: Kshs" + "<span class = 'prize'>" + this.priceCustomers()+ "</span>" +"</li>"+
         "</ul>");
};
order.prototype.orderSummaryFamers = function () {
  return ("<ul class = 'pricees'>"+
          "<li> Type: "+ this.type + "</li>"+
          "<li> Quantity: "+ this.quantity +"</li>"+
           "<li> charge: Kshs" + "<span class = 'pricee'>" + this.priceFarmers()+"</span>" + "</li>"+
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
      allCategories.forEach(function(allCategory) {
        $(".customer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummaryCustomers());
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
      allCategories.forEach(function(allCategory) {
        $(".farmer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummaryFamers());
        })
      });
      allCategories.splice(0, allCategories.length);
      categoryName = "";
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
    var fruitName = "Fruits: ";
    collectorFruits(fruitName);
    $(".charge3-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceCustomers() + "</li>");
    $(".another-order3").show();
    $(".submit3").hide();
    $(".another-order3").off("click").on("click",function(){
      $(".fruits").val("");
      $(".quantity3").val("");
      $(".submit3").show();
    });
    $(".checkout-customers").off("click").on("click",function(){
      allCategories.forEach(function(allCategory) {
        $(".customer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummaryCustomers());
        })
      });
      allCategories.splice(0, allCategories.length);
      fruitName = "";
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
      allCategories.forEach(function(allCategory) {
        $(".farmer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummaryFamers());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
});

//Vegetables
function collectorVegetables (categoryName){
  var type = $(".vegetables").val();
  var amount = parseInt($(".quantity2").val());
  newOrder = new order (type, amount);
  productsType = new category(categoryName);
  productsType.orders.push(newOrder);
  allCategories.push(productsType);
};


$(document).ready(function(){
  $(".showForm2-customers").click(function(){
    $(".form2-customers").toggle();
  });
  $(".form2-customers").submit(function(event){
    event.preventDefault();
    var categoryName = "Vegetables: ";
    collectorVegetables(categoryName);
    $(".charge2-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceCustomers() + "</li>");
    $(".another-order2").show();
    $(".submit2").hide();
    $(".another-order2").off("click").on("click",function(){
      $(".vegetables").val("");
      $(".quantity2").val("");
      $(".submit2").show();
    });
    $(".checkout-customers").off("click").on("click",function(){
      allCategories.forEach(function(allCategory) {
        $(".customer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummaryCustomers());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
  $(".showForm2-farmers").click(function(){
    $(".form2-farmers").toggle();
  });
  $(".form2-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Vegetables: ";
    collectorVegetables(categoryName);
    $(".charge2-farmers").append("<li>" + newOrder.type + ": Kshs" +  newOrder.priceFarmers() + "</li>");
    $(".another-order2").show();
    $(".submit2").hide();
    $(".another-order2").off("click").on("click",function(){
      $(".vegetables").val("");
      $(".quantity2").val("");
      $(".submit2").show();
    });
    $(".checkout-farmers").off("click").on("click",function(){
      allCategories.forEach(function(allCategory) {
        $(".farmer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummaryFamers());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
});


//Legumes
function collectorLegumes (categoryName){
  var type = $(".legumes").val();
  var amount = parseInt($(".quantity4").val());
  newOrder = new order (type, amount);
  productsType = new category(categoryName);
  productsType.orders.push(newOrder);
  allCategories.push(productsType);
};

var allCategories = [];
$(document).ready(function(){
  $(".showForm4-customers").click(function(){
    $(".form4-customers").toggle();
  });
  $(".form4-customers").submit(function(event){
    event.preventDefault();
    var categoryName = "Legumes: ";

    collectorLegumes(categoryName);
    $(".charge4-customers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceCustomers() + "</li>");
    $(".another-order4").show();
    $(".submit4").hide();
    $(".another-order4").click(function(){
      $(".legumes").val("");
      $(".quantity4").val("");
      $(".submit4").show();
    });
    $(".checkout-customers").off("click").on("click",function(){
      allCategories.forEach(function(allCategory) {
        $(".customer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".customer-summary").append(order.orderSummaryCustomers());
        })
      });
      allCategories.splice(0, allCategories.length);
    });
  });
  $(".showForm4-farmers").click(function(){
    $(".form4-farmers").toggle();
  });
  $(".form4-farmers").submit(function(event){
    event.preventDefault();
    var categoryName = "Legumes: ";
    collectorLegumes(categoryName);
    $(".charge4-farmers").append("<li>" + newOrder.type + ": Kshs" + newOrder.priceFarmers() + "</li>");
    $(".another-order4").show();
    $(".submit4").hide();
    $(".another-order4").off("click").on("click",function(){
      $(".legumes").val("");
      $(".quantity4").val("");
      $(".submit4").show();
    });
    $(".checkout-farmers").off("click").on("click",function(){
      allCategories.forEach(function(allCategory) {
        $(".farmer-summary").append(allCategory.name);
          allCategory.orders.forEach(function(order){
          $(".farmer-summary").append(order.orderSummaryFamers());
        })
      });
      allCategories.splice(0, allCategories.length);
      categoryName = "";
    });
  });
});
