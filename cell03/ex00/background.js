const btn = document.getElementById('btn');
const meh = document.getElementById('meh');
let rotation = 0;
let grow = 1.1;

meh.addEventListener('click', function onClick(event) {
    if (rotation == 40)
        rotation = -40;
    rotation += 40;
    meh.style.transform = `scale(${grow})`;
    console.log(grow)
    grow += 0.1;
    document.querySelector("#pokemon").style.transform = `rotate(${rotation}deg)`;
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}