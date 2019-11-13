;(function gallery(){
//var lefslide = document.getElementById("lefslide"),
  //  rightslide = document.getElementById("rightslide");
    initImgNumber = 1;
    maxImgNumber = 6;

    lefslide.addEventListener("click", moveBackward);
    rightslide.addEventListener("click", moveForward);

    function moveBackward() {
    //var image = document.getElementById("image");
    initImgNumber --;
    if(initImgNumber == 0)(initImgNumber = maxImgNumber);
    image.setAttribute("src","img/gallery1/" + initImgNumber + ".png");
    } ;

    function moveForward() {
    //var image = document.getElementById("image");
    initImgNumber++ ;
    if(initImgNumber > maxImgNumber){initImgNumber = 1}
    image.setAttribute("src","img/gallery1/" + initImgNumber + ".png");
    } ;

})()