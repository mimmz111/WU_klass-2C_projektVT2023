function togglemenu(){
    document.getElementById('link-list').classList.toggle('link-list-visible')
    document.getElementById('burger').classList.toggle('burger-x')


}
document.getElementById('burger').addEventListener('click', togglemenu)


img_src_array = ["img/slide/0_slide1.jpg", "img/slide/1_slide2.jpg"]

function changePhotoRight() {
    var length = document.getElementById('slide_img').src.length
    
    var index = eval(document.getElementById('slide_img').src[length - 12])
    if (index < img_src_array.length - 1) {document.getElementById('slide_img').src = img_src_array[index + 1]}
    else {document.getElementById('slide_img').src = img_src_array[0]}
    
}

function changePhotoLeft() {
    var length = document.getElementById('slide_img').src.length
    
    var index = eval(document.getElementById('slide_img').src[length - 12])
    if (index > 0) {document.getElementById('slide_img').src = img_src_array[index - 1]}
    else {document.getElementById('slide_img').src = img_src_array[img_src_array.length - 1]}
        
    
}


document.getElementById('listerner-left').addEventListener("click", changePhotoLeft)

document.getElementById('listerner-right').addEventListener("click", changePhotoRight)




