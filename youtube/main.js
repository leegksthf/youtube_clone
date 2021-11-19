const thumbsUpBtn = document.querySelector('.thumbsUpBtn');
const thumbsUpIcon = document.querySelector('.fa-thumbs-up')

thumbsUpBtn.addEventListener('click', () => { 
    thumbsUpIcon.classList.toggle('active');
});
