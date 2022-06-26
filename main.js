// ==UserScript==
// @name         Automate Gmail
// @description  try to take over the world!
// @version      0.1
// @author       Castynet
// @match        https://mail.google.com/*
// ==/UserScript==

const addErrorElement = () => {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-popup';
  errorElement.innerHTML = '<div class="error-popup-text">Please open this page in a new tab</div>';
  console.log(errorElement);
  document.body.appendChild(errorElement);
};

const searchEmail = ({ key }) => {
  addErrorElement();

  if (key === 'w') {
    try {
      // const senderAddresses = document.getElementsByClassName('go') || document.getElementsByClassName('gD');
      let senderAddresses = document.getElementsByClassName('go');
      senderAddresses = senderAddresses.length > 0 ? senderAddresses : document.getElementsByClassName('gD');

      const email = senderAddresses[0].innerText;
      const senderAddress = email === '<' ? email.slice(1, -1) : email;
      const url = window.location.href;
      const newUrl = url.slice(0, url.indexOf('#')) + '#search/' + senderAddress;

      window.location.replace(newUrl);
    } catch (err) {
      console.log(err);
    }
  }
};

document.addEventListener('keydown', searchEmail);
