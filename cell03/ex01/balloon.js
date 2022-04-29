const balloon = document.getElementById('balloon');
var  grow = 10;
let style = window.getComputedStyle(balloon);
const colors = ["red", "green", "blue"];
var index = 0;
var width = parseInt(balloon.offsetWidth);
var height = parseInt(balloon.offsetHeight);

balloon.addEventListener('click', function onClick(){
    if (index >= 2)
        index = 0;
    else
        index ++;
    balloon.style.backgroundColor = colors[index];
    
    if (width + grow <= 420)
    {
        balloon.style.width = width + grow + "px";
        balloon.style.height = height + grow + "px";
        grow += 10;
    }
    else
    {
        grow = 0;
        balloon.style.width = width + grow + "px";
        balloon.style.height = height + grow + "px";
    }
    console.log( balloon.style.width);
   
});

balloon.addEventListener('mouseleave', function mouse(){
    
    if (index <= 0)
        index = 2;
    else
    index --;
    if (width + grow >= 200)
     {
         grow = grow - 5;
         balloon.style.width = width + (grow - 5) + "px";
         balloon.style.height = height + (grow - 5) + "px";
     }
     else
     {
         grow = 0;
         balloon.style.width = width + grow + "px";
         balloon.style.height = height + grow + "px";
     }
    balloon.style.backgroundColor = colors[index];
    
});
