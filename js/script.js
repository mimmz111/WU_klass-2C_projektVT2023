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