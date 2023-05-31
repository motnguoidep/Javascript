
const searchBtn = document.querySelector('search-btn') 
searchBtn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')//tra ve phan tu cha cua phan tu da dinh
    this.previousElementSibling.focus()//tra ve phan tu truoc do trong cung 1 cap do
    
})