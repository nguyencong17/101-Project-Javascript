let notifycation = document.querySelector('.notifycation')
let btn = document.querySelector('.btn-push');

btn.addEventListener('click', active);

function active() {
  let add = Number(notifycation.getAttribute('data-count') || 0);
  notifycation.setAttribute('data-count', add + 1);
  if (add === 0) {
    notifycation.classList.add('add-number');
  }
}