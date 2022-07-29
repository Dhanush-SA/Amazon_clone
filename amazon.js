var images = [];
var i = 0;
images[0] =' 2.jpg';
images[1] = '3.jpg';
images[2] = '4.jpg';
images[3] = '5.jpg';
images[4] = '6.jpg';

function slider(){

    if(i < images.length()){
        i++;
        document.getElementsByClassName("slide").src = images[i];
    }else{
        i = 0;
        document.slide.src = images[i];
    }
}