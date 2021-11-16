var slider = document.getElementById("myRange");
var output = document.getElementById("value");

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

output.innerHTML = slider.value;
output2.innerHTML = slider2.value;


slider.oninput = function () {
    output.innerHTML = this.value;
}

slider2.oninput = function () {
    output2.innerHTML = this.value;
}

slider.addEventListener("mousemove",function(){
    var x = slider.value;
    let gradientColor = `255,0,0`;
     if (x >= 25 && x <= 50) gradientColor = '215,140,0';
     if (x >= 50 && x <= 75) gradientColor = '255,165,0';
     if ( x >= 75 && x < 100) gradientColor = '255,215,0';
     if (x == 100) gradientColor = '166,214,8';
    var color = `linear-gradient(90deg,rgb(${gradientColor})` + x +'%, rgb(214,214,214)' +x +'%)';
    slider.style.background = color;
});

slider2.addEventListener("mousemove",function(){
    var x = slider2.value;
    let newX =100 + x/100 *255;
    let gradientColor = `${newX},0,0`;
    var color = `linear-gradient(90deg,rgb(${gradientColor})` + x +'%, rgb(214,214,214)' +x +'%)';
    slider2.style.background = color;
});