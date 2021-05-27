
// single element
// const form = document.getElementById('my-form');
// console.log(form);

// const form = document.querySelector('.container');
// console.log(form);

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent= 'hello';
ul.children[1].innerText = 'brad';
ul.lastElementChild.innerHTML = '<h1>hello</h1>';
