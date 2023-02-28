function togglemenu(){
    document.getElementById('link-list').classList.toggle('link-list-visible')
    document.getElementById('burger').classList.toggle('burger-x')


}
document.getElementById('burger').addEventListener('click', togglemenu)








const SlideImg = document.getElementById("slide1")

document.getElementById("listerner-right").addEventListener("click",displayDate)
function displayDate(){
    console.log("hej")
    SlideImg.src="../img/slide/slide2.jpg"
}

document.getElementById("listerner-left").addEventListener("click",displayDate)
function displayDate(){
    console.log("hejdå")
    SlideImg.src="../img/slide/slide2.jpg"
}