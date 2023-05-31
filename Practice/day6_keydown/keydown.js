var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

var ekey = document.querySelector('.card.key p:last-child')
var elocation = document.querySelector('.card.location p:last-child')
var ewhich = document.querySelector('.card.which p:last-child')
var ecode = document.querySelector('.card.code p:last-child')

document.addEventListener('keydown', e =>{
    console.log(e);
    ekey.innerText = e.key
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code

    result.innerHTML = e.code

    alert.classList.add('hide')
    box.classList.remove('hide')
})

