var car = {
    name : "Toyota Corolla",
    price :10000,
    tax : 30,
    carColor : "Red wine",
    wheelSize : "14",
    adBanner : function (amaderDiscount){
       var carPrice = this.price;
       var tax = this.tax;
       var pricewithTax = carPrice / 100 * tax + carPrice
       var myDiscount = amaderDiscount;
       var reduceMoney = pricewithTax / 100 *myDiscount;
       var finalPrice = pricewithTax-reduceMoney;
       return finalPrice;

    }
}
document.querySelector("#color").innerHTML=car.carColor;
document.querySelector("#size").innerHTML=car.wheelSize;
document.querySelector("#price").innerHTML=car.price;
document.querySelector("#name").innerHTML=car.name;
document.querySelector("#method").innerHTML=car.adBanner(15 );