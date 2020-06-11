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

// ==================== GLOBAL FUNCTIONS / VARIABLES / ARRAYS ==================== //

var openHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var columnTotals = [];
var allBranches = [];

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


function calculateAllCookieSales(){
  for (var i = 0; i < openHoursArray.length; i++){
    var randomizedCookieSale = cookieRandomizer(this.minNumCustomer,this.maxNumCustomer);

    var hourlyCookieSales = Math.round(randomizedCookieSale * this.averageNumCookies);

    this.hourlySalesArray.push(hourlyCookieSales);
  }
}


function totalCookieSales(){

  var cookieTotal = arrSum(this.hourlySalesArray);
  this.totalSalesArray.push(cookieTotal);
}


function renderToPage(){

  this.calculateAllCookieSales();
  this.totalCookieSales();
}


function masterHourlyTotalSum(){
  for (var i = 0; i < openHoursArray.length; i++){
    var hourlyCookieSales = 0;
    for (var j = 0; j < allBranches.length; j++){
      hourlyCookieSales += allBranches[j].hourlySalesArray[i];
    }

    columnTotals.push(hourlyCookieSales);
  }

}

function init(){
  for (var i = 0; i < allBranches.length; i++){
    allBranches[i].renderToPage();
    allBranches[i].renderStoreToTable();
  }
}

function totalAllSales(){
  var salesTotal = arrSum(columnTotals);
  return(salesTotal);
}


// ==================== TABLE RENDERS ==================== //

function renderHeadFootTable(){
  var table = document.getElementById('master-table');
  var head = document.createElement('thead');
  table.appendChild(head);

  for (var i = -1; i < openHoursArray.length; i++){
    var cell = document.createElement('th');
    cell.textContent = openHoursArray[i];
    head.appendChild(cell);
  }

  var dailyTotal = document.createElement('th');
  dailyTotal.textContent = ('Daily Location Total');
  head.appendChild(dailyTotal);

  var footer = document.createElement('tfoot');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('td');
  footerCell.textContent = ('Total Hourly Sales: ');

  table.appendChild(footer);
  footer.appendChild(footerRow);
  footerRow.appendChild(footerCell);

  for (var j = 0; j < openHoursArray.length; j++){
    var footerHourlyTotalCell = document.createElement('td');
    footerHourlyTotalCell.textContent = columnTotals[j];
    footerRow.appendChild(footerHourlyTotalCell);
  }

  function totalAllSales(){
    var salesTotal = arrSum(columnTotals);
    var salesTotalCell = document.createElement('td');
    salesTotalCell.textContent = salesTotal;
    footerRow.appendChild(salesTotalCell);
  }

  totalAllSales();

}


function renderStoreToTable(){
  var table = document.getElementById('master-table');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');

  tableRow.appendChild(tableCell);
  tableCell.textContent = this.name;
  table.appendChild(tableRow);

  for (var i = 0; i < this.hourlySalesArray.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = this.hourlySalesArray[i];
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
  }

  var locationTotal = document.createElement('td');
  locationTotal.textContent = this.totalSalesArray[0];
  tableRow.appendChild(locationTotal);

}

// ==================== CONSTRUCTORS ==================== //

function CookieStore (name, minNumCustomer, maxNumCustomer, averageNumCookies, openHoursArray, storeDisplayId, unorderedListId) {
  this.hourlySalesArray = [];
  this.totalSalesArray = [];
  this.name = name;
  this.minNumCustomer = minNumCustomer;
  this.maxNumCustomer = maxNumCustomer;
  this.averageNumCookies = averageNumCookies;
  this.openHoursArray = openHoursArray;
  this.storeDisplayId = storeDisplayId;
  this.unorderedListId = unorderedListId;

  allBranches.push(this);
}

CookieStore.prototype.calculateAllCookieSales = calculateAllCookieSales;
CookieStore.prototype.totalCookieSales = totalCookieSales;
CookieStore.prototype.renderToPage = renderToPage;
CookieStore.prototype.renderStoreToTable = renderStoreToTable;

// ==================== INPUT DATA ==================== //


new CookieStore('Seattle', 23, 65, 6.3, openHoursArray, 'seattle-name', 'seattle-data');

new CookieStore('Tokyo', 3, 24, 1.2, openHoursArray, 'tokyo-name', 'tokyo-data');

new CookieStore('Dubai', 11, 38, 3.7, openHoursArray, 'dubai-name', 'dubai-data');

new CookieStore('Paris', 20, 38, 2.3, openHoursArray, 'paris-name', 'paris-data');

new CookieStore('Lima', 2, 16, 4.6, openHoursArray, 'lima-name', 'lima-data');

// ==================== INVOCATIONS ==================== //

init();

masterHourlyTotalSum();
renderHeadFootTable();
