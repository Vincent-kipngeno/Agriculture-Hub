
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
});
