import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form')
}


refs.firstDelay.addEventListener('input', onFirstDelay);
refs.step.addEventListener('input', onStep);
refs.amount.addEventListener('input', onAmount);
refs.form.addEventListener('submit', onSubmit);

let firstDelay = null;
let step = null;
let amount = null;
let position = null;


function createPromise(position, delay) {


  return new Promise((resolve, reject) => {

  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    resolve({ position, delay })
  } else {
    reject({ position, delay })
  }
  }, delay);
    
  })
  
};

function onSubmit(e) {
  e.preventDefault();
  
  for (let i = 0; i < amount; i++) {
    createPromise(position += 1, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    firstDelay += step;
  }
}

function onFirstDelay(e) {
  firstDelay = Number(e.currentTarget.value);
}
function onStep(e) {
  step = Number(e.currentTarget.value);
}
function onAmount(e) {
  amount = Number(e.currentTarget.value);
}