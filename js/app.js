'use strict';

console.log('howdy');

/*

5 object literals as array's, one for each store

- Seattle
- Tokyo
- Dubai
- Paris
- Lima

1. stores min/max hourly customers & average cookies per customer in object properties
2. uses method of that object to generate random # of customers per hour


display as unordered lists
*/

// ==================== GLOBAL ==================== //

var openHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total:'];


function getRandomIntInclusive(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// ==================== OBJECTS ==================== //

// ========== SEATTLE ========== //

var seattleCookies = {
  name : 'Seattle',
  minNumCustomer : 23,
  maxNumCustomer : 65,
  averageNumCookies : 6.3,
  seattleSalesArray : [],

  calculateAllCookieSales : function(){
    for (var i = 0; i < openHoursArray.length; i++){
      var randomizedCookieSale = getRandomIntInclusive(this.minNumCustomer,this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.seattleSalesArray.push(hourlyCookieSales);
    }
  }
};

// ========== TOKYO ========== //

var tokyoCookies = {
  name : 'Tokyo',
  minNumCustomer : 3,
  maxNumCustomer : 24,
  averageNumCookies : 1.2,
  tokyoSalesArray : [],

  calculateAllCookieSales : function(){
    for (var i = 0; i < openHoursArray.length; i++){
      var randomizedCookieSale = getRandomIntInclusive(this.minNumCustomer,this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.tokyoSalesArray.push(hourlyCookieSales);
    }
  }
};

// ========== DUBAI ========== //

var dubaiCookies = {
  name : 'Dubai',
  minNumCustomer : 11,
  maxNumCustomer : 38,
  averageNumCookies : 3.7,
  dubaiSalesArray : [],

  calculateAllCookieSales : function(){
    for (var i = 0; i < openHoursArray.length; i++){
      var randomizedCookieSale = getRandomIntInclusive(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.dubaiSalesArray.push(hourlyCookieSales);
    }
  }
};

// ========== PARIS ========== //

var parisCookies = {
  name : 'Paris',
  minNumCustomer : 20,
  maxNumCustomer : 38,
  averageNumCookies : 2.3,
  parisSalesArray : [],

  calculateAllCookieSales : function(){
    for (var i = 0; i < openHoursArray.length; i++){
      var randomizedCookieSale = getRandomIntInclusive(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.parisSalesArray.push(hourlyCookieSales);
    }
  }
};

// ========== LIMA ========== //

var limaCookies = {
  name : 'Lima',
  minNumCustomer : 2,
  maxNumCustomer : 16,
  averageNumCookies : 4.6,
  limaSalesArray : [],

  calculateAllCookieSales : function(){
    for (var i = 0; i < openHoursArray.length; i++){
      var randomizedCookieSale = getRandomIntInclusive(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.limaSalesArray.push(hourlyCookieSales);
    }
  }
};



// ==================== INVOCATIONS ==================== //

seattleCookies.calculateAllCookieSales();
console.log('seattle hourly sales array: ' + seattleCookies.seattleSalesArray);

tokyoCookies.calculateAllCookieSales();
console.log('tokyo hourly sales array: ' + tokyoCookies.tokyoSalesArray);

dubaiCookies.calculateAllCookieSales();
console.log('dubai hourly sales array: ' + dubaiCookies.dubaiSalesArray);

parisCookies.calculateAllCookieSales();
console.log('paris hourly sales array: ' + parisCookies.parisSalesArray);

limaCookies.calculateAllCookieSales();
console.log('lima hourly sales array: '+ limaCookies.limaSalesArray);