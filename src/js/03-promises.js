import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onSubmit);

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

  let firstDelay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);
  
  let position = null;
  
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
