// ==UserScript==
// @name         Automate Gmail
// @description  try to take over the world!
// @version      0.1
// @author       Castynet
// @match        https://mail.google.com/*
// ==/UserScript==
let errorElement;

const addErrorElement = () => {
  document
    .getElementsByTagName('head')[0]
    .insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="https://castynet-studios.github.io/Automate-Gmail/styles.css" />'
    );

  const errorElement = document.createElement('div');
  errorElement.className = 'error-popup';
  errorElement.innerHTML =
    '<p class="error-popup-text">An error occurred fetching emails, check that you have an email open, if you do contact the developer.</p>';
  document.body.appendChild(errorElement);

  return errorElement;
};

const searchEmail = ({ key }) => {
  errorElement = errorElement || addErrorElement();

  if (key === 'w') {
    try {
      // const senderAddresses = document.getElementsByClassName('go') || document.getElementsByClassName('gD');
      let senderAddresses = document.getElementsByClassName('go');
      senderAddresses = senderAddresses.length > 0 ? senderAddresses : document.getElementsByClassName('gD');

      const email = senderAddresses[0].innerText.replace('@', '%40');

      const senderAddress = email === '<' ? email.slice(1, -1) : email;
      const url = window.location.href;
      const newUrl = url.slice(0, url.indexOf('#')) + '#search/' + senderAddress;

      window.location.href = newUrl;
    } catch (err) {
      errorElement.style.top = '90%';
      setTimeout(() => {
        errorElement.style.top = '110vh';
      }, 5000);
    }
  }
};

document.addEventListener('keydown', searchEmail);
