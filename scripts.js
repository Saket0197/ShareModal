const shareBtn = document.querySelector('.share-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cancelBtn = document.querySelector('.fa-xmark');

shareBtn.addEventListener('click',() => {
    overlay.style.cssText = 'visibility: visible;';
    modal.style.cssText = 'transform: scale(1,1);';
});

cancelBtn.addEventListener('click',() => {
    overlay.style.cssText = 'visibility: hidden;';
    modal.style.cssText = 'transform: scale(0,0);';
});

overlay.addEventListener('click',() => {
    overlay.style.cssText = 'visibility: hidden;';
    modal.style.cssText = 'transform: scale(0,0);';
});