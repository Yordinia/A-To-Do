/* eslint-disable no-unused-vars */
/* eslint func-names: ["error", "never", { "generators": "always" }] */
const myNodelist = document.getElementsByTagName('LI');
let i;
/* eslint-disable-next-line no-plusplus */
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName('close');
/* eslint-disable-next-line no-plusplus */
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = 'none';
  };
}

const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  /* eslint-disable-next-line no-plusplus */
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

function removeAll() {
  const lst = document.getElementsByTagName('ul');
  lst[0].innerHTML = '';
}