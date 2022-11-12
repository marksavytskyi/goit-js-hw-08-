// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const refs = {
    picker: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.start.addEventListener('click', onStart)

refs.start.disabled = true;

let differenceTimeOut = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        // Текущая дата
        const dateNow = new Date()
        // Установленная дата
        // const differenceTime = selectedDates[0].getTime() - dateNow.getTime()

        differenceTimeOut = selectedDates[0].getTime();
        
        if (selectedDates[0].getTime() <= dateNow.getTime()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } 
         refs.start.disabled = false;
  },
};



flatpickr(refs.picker, options);

function onStart(e) {
    setInterval(() => {
        const dateNow = new Date()
        let dateObject = convertMs(differenceTimeOut - dateNow.getTime())
        refs.days.textContent = dateObject.days.toString();
        refs.hours.textContent = dateObject.hours.toString();
        refs.minutes.textContent = dateObject.minutes.toString();
        refs.seconds.textContent = dateObject.seconds.toString();

        refs.start.disabled = true;
   }, 1000); 
}

function ddLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = ddLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = ddLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = ddLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = ddLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}



