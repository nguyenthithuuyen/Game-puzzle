function changeImg(id){
    let img = document.getElementById("img"+id);
    let index= +img.alt;
    if(index<3){
        index++;
    }else {
        index=1;
    }
    img.src="image/anh"+index+".jpg";
    img.alt= index;
    checkWin();

}
function checkWin(){
    let img1=document.getElementById("img1");
    let img2=document.getElementById("img2");
    let img3=document.getElementById("img3");
    let img4=document.getElementById("img4");
    let img5=document.getElementById("img5");
    if(img1.alt===img2.alt&&img2.alt===img3.alt&&img3.alt===img4.alt&&img4.alt===img5.alt){
        setTimeout(alertWin,100);
    }
}

function alertWin() {
    alert("Win roi");
}