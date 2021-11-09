var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove",function(){
    var x = slider.value;
    let gradientColor = '255,0,0';
    if (x >= 25 && x <= 50) gradientColor = '215,140,0';
    if (x >= 50 && x <= 75) gradientColor = '255,165,0';
    if ( x >= 75 && x < 100) gradientColor = '255,215,0';
    if (x == 100) gradientColor = '166,214,8';
    var color = `linear-gradient(90deg,rgb(${gradientColor})` + x +'%, rgb(214,214,214)' +x +'%)';
    slider.style.background = color;
})