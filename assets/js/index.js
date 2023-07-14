const bttn = document.querySelector('#btnReadMore');

bttn.addEventListener('click', () => {
    const card = document.querySelector('.content');
    if (card.classList.contains('contentReadingMore') === false) {
        bttn.textContent = 'Read less';
        console.log('apareceu');
        card.classList.add('contentReadingMore');
    } else {
        bttn.textContent = 'Read more';
        console.log('escondeu');
        card.classList.remove('contentReadingMore');
    }
});