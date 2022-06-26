// ==UserScript==
// @name         Automate Gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Castynet
// @match        https://mail.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // Add event listener on keydown
  document.addEventListener('keydown', (event) => {
    let first = true;
    let second = true;
    if (event.key === 'w') {
      try {
        const senderClass = document.getElementsByClassName('go');
        let emailArray = [...senderClass];
        let senderAddress;
        if (emailArray[0].innerText[0] === '<') {
          senderAddress = emailArray[0].innerText.slice(1, -1);
        } else {
          senderAddress = emailArray[0].innerText;
        }
        let url = window.location.href;
        let newUrl =
          url.slice(0, url.indexOf('#')) + '#search/' + senderAddress;
        window.location.replace(newUrl);
      } catch (err) {
        first = false;
      }
      if (first === false) {
        try {
          const senderClass = document.getElementsByClassName('gD');
          let emailArray = [...senderClass];
          const senderAddress = emailArray[0].innerText;
          let url = window.location.href;
          let newUrl =
            url.slice(0, url.indexOf('#')) + '#search/' + senderAddress;
          window.location.replace(newUrl);
        } catch (err) {
          second = false;
        }
      }
    }
    if (first === false && second === false) {
      alert('Open a message');
    }
  });
})();
