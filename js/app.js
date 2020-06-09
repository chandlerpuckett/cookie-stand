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

var openHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function cookieRandomizer(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


// https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
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
      var randomizedCookieSale = cookieRandomizer(this.minNumCustomer,this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.seattleSalesArray.push(hourlyCookieSales);
    }
  },

  seattleRenderToPage : function(){
    var seattleList = document.getElementById('seattle-table');
    var newListItem = document.createElement('p');
    newListItem.textContent = this.name;
    seattleList.appendChild(newListItem);

    for (var i = 0; i < openHoursArray.length; i++){
      var hourTag = document.getElementById('seattle-table');
      var hourListItem = document.createElement('li');

      hourListItem.textContent = (openHoursArray[i] + ': ' + this.seattleSalesArray[i] + ' cookies');
      hourTag.appendChild(hourListItem);
    }
  },

  totalCookieSales : function(){
    var cookieTotal = arrSum(this.seattleSalesArray);

    var totalCookieList = document.getElementById('seattle-table');
    var totalCookieListItem = document.createElement('li');

    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
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
      var randomizedCookieSale = cookieRandomizer(this.minNumCustomer,this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.tokyoSalesArray.push(hourlyCookieSales);
    }
  },

  tokyoRenderToPage : function(){
    var tokyoList = document.getElementById('tokyo-table');
    var newListItem = document.createElement('p');
    newListItem.textContent = this.name;
    tokyoList.appendChild(newListItem);

    for (var i = 0; i < openHoursArray.length; i++){
      var hourTag = document.getElementById('tokyo-table');
      var hourListItem = document.createElement('li');

      hourListItem.textContent = (openHoursArray[i] + ': ' + this.tokyoSalesArray[i] + ' cookies');
      hourTag.appendChild(hourListItem);
    }
  },

  totalCookieSales : function(){
    var cookieTotal = arrSum(this.tokyoSalesArray);

    var totalCookieList = document.getElementById('tokyo-table');
    var totalCookieListItem = document.createElement('li');

    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
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
      var randomizedCookieSale = cookieRandomizer(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.dubaiSalesArray.push(hourlyCookieSales);
    }
  },

  dubaiRenderToPage : function(){
    var dubaiList = document.getElementById('dubai-table');
    var newListItem = document.createElement('p');
    newListItem.textContent = this.name;
    dubaiList.appendChild(newListItem);

    for (var i = 0; i < openHoursArray.length; i++){
      var hourTag = document.getElementById('dubai-table');
      var hourListItem = document.createElement('li');

      hourListItem.textContent = (openHoursArray[i] + ': ' + this.dubaiSalesArray[i] + ' cookies');
      hourTag.appendChild(hourListItem);
    }
  },

  totalCookieSales : function(){
    var cookieTotal = arrSum(this.dubaiSalesArray);

    var totalCookieList = document.getElementById('dubai-table');
    var totalCookieListItem = document.createElement('li');

    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
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
      var randomizedCookieSale = cookieRandomizer(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.parisSalesArray.push(hourlyCookieSales);
    }
  },

  parisRenderToPage : function(){
    var parisList = document.getElementById('paris-table');
    var newListItem = document.createElement('p');
    newListItem.textContent = this.name;
    parisList.appendChild(newListItem);

    for (var i = 0; i < openHoursArray.length; i++){
      var hourTag = document.getElementById('paris-table');
      var hourListItem = document.createElement('li');

      hourListItem.textContent = (openHoursArray[i] + ': ' + this.parisSalesArray[i] + ' cookies');
      hourTag.appendChild(hourListItem);
    }
  },

  totalCookieSales : function(){
    var cookieTotal = arrSum(this.parisSalesArray);

    var totalCookieList = document.getElementById('paris-table');
    var totalCookieListItem = document.createElement('li');

    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
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
      var randomizedCookieSale = cookieRandomizer(this.minNumCustomer, this.maxNumCustomer);

      var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

      this.limaSalesArray.push(hourlyCookieSales);
    }
  },

  limaRenderToPage : function(){
    var limaList = document.getElementById('lima-table');
    var newListItem = document.createElement('p');
    newListItem.textContent = this.name;
    limaList.appendChild(newListItem);

    for (var i = 0; i < openHoursArray.length; i++){
      var hourTag = document.getElementById('lima-table');
      var hourListItem = document.createElement('li');

      hourListItem.textContent = (openHoursArray[i] + ': ' + this.limaSalesArray[i] + ' cookies');
      hourTag.appendChild(hourListItem);
    }
  },

  totalCookieSales : function(){
    var cookieTotal = arrSum(this.limaSalesArray);

    var totalCookieList = document.getElementById('lima-table');
    var totalCookieListItem = document.createElement('li');

    totalCookieListItem.textContent = ('Total: ' + cookieTotal + ' cookies');
    totalCookieList.appendChild(totalCookieListItem);
  },
};



// ==================== INVOCATIONS ==================== //

seattleCookies.calculateAllCookieSales();
seattleCookies.seattleRenderToPage();
seattleCookies.totalCookieSales();

tokyoCookies.calculateAllCookieSales();
tokyoCookies.tokyoRenderToPage();
tokyoCookies.totalCookieSales();

dubaiCookies.calculateAllCookieSales();
dubaiCookies.dubaiRenderToPage();
dubaiCookies.totalCookieSales();

parisCookies.calculateAllCookieSales();
parisCookies.parisRenderToPage();
parisCookies.totalCookieSales();

limaCookies.calculateAllCookieSales();
limaCookies.limaRenderToPage();
limaCookies.totalCookieSales();

