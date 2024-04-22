const btn = document.getElementById('switchColor')
const body = document.body;
const header = document.querySelector('.headerWhite')



btn.addEventListener('click', () => {
    if (body.classList.contains('bodyDark')) {
        body.classList.remove('bodyDark');
        body.classList.add('bodyWhite');
        header.classList.remove('headerDark')
        header.classList.add('headerWhite')
    } else{
        body.classList.remove('bodyWhite');
        body.classList.add('bodyDark');
        header.classList.remove('headerWhite')
        header.classList.add('headerDark')
        
    }
})