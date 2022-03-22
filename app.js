'use strict'

// ************* Global Variables ****************
let votingRounds = 15
let array = [];


// ************** DOM References ****************
let imgContainer = document.getElementById('container')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2');
// wrote this in and commented out because im not sure which way to go
// let img3 = document.getElementById('img3');
// let img4 = document.getElementById('img4');
// let img5 = document.getElementById('img5');
// let img6 = document.getElementById('img6');
// let img7 = document.getElementById('img7');
// let img8 = document.getElementById('img8');
// let img9 = document.getElementById('img9');
// let img10 = document.getElementById('img10');
// let img11 = document.getElementById('img11');
// let img12 = document.getElementById('img12');
// let img13 = document.getElementById('img13');
// let img14 = document.getElementById('img14');
// let img15 = document.getElementById('img15');
// let img16 = document.getElementById('img16');
// let img17 = document.getElementById('img17');
// let img18 = document.getElementById('img18');
// let img19 = document.getElementById('img19');
let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('display-results-list');
// ************ Constructor **************
function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.img = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  array.push(this);
}
// ************ Helper Function **********
// ********* Event Handlers ************
// ************* Event Listeners *************