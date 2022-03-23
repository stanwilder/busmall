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

// canvas/chart element
let chart = document.getElementById('chart')
// ************ Constructor **************
function Product(name, fileExtension = 'jpg') {
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
function getRandomIndex() {

  return Math.floor(Math.random() * array.length);
}
let globalArr = [];
function renderImgs() {
  while (globalArr.length < 6) {
    let randomNum = getRandomIndex();
    if (!globalArr.includes(randomNum)) {
      globalArr.push(randomNum);

    }
  }
  console.log('before', globalArr);
  let productOneIndex = globalArr.shift();
  let productTwoIndex = globalArr.shift();
  let productThreeIndex = globalArr.shift();
  console.log('after', globalArr);

// Stacks - first in last out
// Queues - first in first out


  // while(productOneIndex === productTwoIndex){
  //   productTwoIndex = getRandomIndex();
  // }

  img1.src = array[productOneIndex].img;
  img1.alt = array[productOneIndex].name;
  array[productOneIndex].views++;

  img2.src = array[productTwoIndex].img;
  img2.alt = array[productTwoIndex].name;
  array[productTwoIndex].views++;

  img3.src = array[productThreeIndex].img;
  img3.alt = array[productThreeIndex].name;
  array[productTwoIndex].views++;
}

renderImgs();


// ********* Event Handlers ************
function handleClick(event) {
  let imgClicked = event.target.alt;

  for (let i = 0; i < array.length; i++) {
    if (imgClicked === array[i].name) {
      array[i].clicks++;
    }
  }

  votingRounds--;
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
    return;
  }

  renderImgs();
}


function handleShowResults() {
  if (votingRounds === 0) {
    for (let i = 0; i < array.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${array[i].Name} was viewed ${array[i].views} times and clicked on ${array[i].clicks} times.`;
      resultsList.appendChild(li);
    }
  }
}
// ************* Event Listeners *************
imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);


// *************** chart ****************

let myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: array,

        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});