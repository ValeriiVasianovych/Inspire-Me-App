'use strict';

const btn = document.querySelector('.dice__button');
const quoteContent = document.querySelector('.quote__container');
const quoteNumber = document.querySelector('.quote__number');

function renderQuotes(index) {
   quotes.forEach((el) => {
      if (el.number == Number(index)) {
         quoteNumber.innerHTML = `ADVISE <span>#${el.number}</span>`;
         quoteContent.innerHTML = `<p class="quote__text">${el.text}</p>`;
      }
   });
}

btn.onclick = () => {
   const randomIndex = Math.floor(Math.random() * quotes.length);
   renderQuotes(randomIndex == 0 ? 1 : randomIndex);
};
renderQuotes(0);
