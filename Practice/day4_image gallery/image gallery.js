const imgAll = document.querySelectorAll('.image img')
const iconPrevGallery = document.querySelector('.prev')
const iconNextGallery = document.querySelector('.next')
const iconCloseGallery = document.querySelector('.close')
const galleryimg = document.querySelector('.gallery_inner img')
const gallery = document.querySelector('.gallery')

const currentIndex = 0

function showGallery(){
    if(currentIndex == 0){
        iconPrevGallery.classList.add('hide')
    }else{
        iconPrevGallery.classList.remove('hide')
    }
    if(currentIndex == imgAll.length-1){
        iconNextGallery.classList.add('hide')
    }else{
        iconNextGallery.classList.remove('hide')
    }
    //display
    galleryimg.src = imgAll[currentIndex].src
    gallery.classList.add('show') 
}
imgAll.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})

iconCloseGallery.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

iconPrevGallery.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})
iconNextGallery.addEventListener('click', function(){
    if(currentIndex < imgAll.length-1){
        currentIndex++
        showGallery()
    }
})
