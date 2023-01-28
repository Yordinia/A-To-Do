import './style.css';
import Page from './info.js';

const todotask = new Page();
todotask.display();

document.querySelector('#form-sector').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todotask.addWork(activity);
  e.target.reset();
});
document.querySelector('.clear-all').addEventListener('click', () => {
  todotask.clearCompletedActivity();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todotask.clearAll();
});
