'use strict'

// ************* Global Variables ****************
let votingRounds = 25
let array = [];


// ************** DOM References ****************
let imgContainer = document.getElementById('container')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
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

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');


// ************ Helper Function **********
function getRandomIndex(){

  return Math.floor(Math.random()* array.length);
}

function renderImgs(){
  let productOneIndex = getRandomIndex();
  let productTwoIndex = getRandomIndex();
  let productThreeIndex = getRandomIndex();

  
  while(productOneIndex === productTwoIndex){
    productTwoIndex = getRandomIndex();
  }

  imgOne.src = array[productOneIndex].image;
  imgOne.alt = array[productOneIndex].name;
  array[productOneIndex].views++;

  imgTwo.src = array[productTwoIndex].image;
  imgTwo.alt = array[productTwoIndex].name;
  goatArray[productTwoIndex].views++;

  imgThree.src = array[productThreeIndex].image;
  imgThree.alt = array[productThreeIndex].name;
  array[productTwoIndex].views++;
}

renderImgs();



// ********* Event Handlers ************
function handleClick(event){
  let imgClicked = event.target.alt;

  for(let i = 0; i < array.length; i++){
    if(imgClicked === array[i].name){
      array[i].clicks++;
    }
  }

  votingRounds--;
  if(votingRounds === 0){
    imgContainer.removeEventListener('click', handleClick);
    return;
  }

  renderImgs();
}


function handleShowResults(){
  if(votingRounds === 0){
    for(let i = 0; i < array.length; i++){
      let li = document.createElement('li');

      li.textContent = `${array[i].Name} was viewed ${array[i].views} times and clicked on ${array[i].clicks} times.`;
      resultsList.appendChild(li);
    }
  }
}
// ************* Event Listeners *************
imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
