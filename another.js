setTimeout(function () {
  const Element = document.querySelector('tbody');
  const myArray = Element.querySelectorAll('.deviceName');
  myArray.forEach(function (item) {
    const text = item.innerText;
    console.log(text);
  });
}, 5000);
