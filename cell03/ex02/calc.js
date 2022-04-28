
const input = document.getElementById('inputs');
const screen = document.getElementById('screen');
const symbol = document.getElementById('symbol-select');

const result = document.getElementById('result');




var res = 0;

result.addEventListener('click', function(){
    var inputl = Number(document.getElementById('inputL').value);
    var inputr = Number(document.getElementById('inputR').value);

    if (inputl < 0 || inputr < 0 )
    {
        alert("'Error : (");
        return ;
    }
    if (symbol.value == '%' && inputr == 0)
    {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return ;
    }
    if (symbol.value == '/' && inputr == 0)
    {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return ;
    }
    if (symbol.value == '+')
    {
        res = inputl + inputr;
        console.log('here');
    }
    if (symbol.value == '-')
        res = inputl - inputr;
    if (symbol.value == '*')
        res = inputl * inputr;
    if (symbol.value == '/')
        res = inputl / inputr;
    if (symbol.value == '%')
        res = inputl % inputr;
        screen.innerHTML = res;
    console.log(res);
    alert(res);
})   

input.addEventListener('input', function write() {
    var inputl = Number(document.getElementById('inputL').value);
    var inputr = Number(document.getElementById('inputR').value);
    screen.innerHTML = `${inputl} ${symbol.value} ${inputr}`;
})
