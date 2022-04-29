
li = document.querySelectorAll("li");
ul = document.getElementById('ft_todo');

printDate();

function printDate(){
    var d = new Date();
    var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var day = dayArray[d.getDay()];
    var month = monthArray[d.getMonth()];
    var daymonth = d.getDate();

    document.getElementById('month').innerHTML = month;
    document.getElementById('today').innerHTML = day + " ";
    document.getElementById('daymonth').innerHTML = daymonth + "th";
   
}

const btn = document.getElementById('todo-btn');

btn.addEventListener('click', function addtodo(){
    var value = window.prompt("Enter new task");
    var li = document.createElement('li');
    var t = document.createTextNode(value);
    let count = 0;

    if (document.cookie)
    {
        cookies = document.cookie.split(';');
        count = cookies.length + 1;
    }
    else
        count = 1;
    console.log(count);
    li.appendChild(t);
    if (value == ''){
        alert("please write something");
    } 
    else {
        console.log("Count is : " + count);
        setCookie("task" + count, value, 30);
        document.getElementById('ft_todo').appendChild(li);
    }
    li.addEventListener('click', function removeTodo(){
    if (confirm("Are you sure you want to remove ?"))
        {
            li.parentNode.removeChild(li);
            deleteAllCookies();
            setAllCookie();
        }
    });

});


function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); 
    const ca = cDecoded .split('; ');
    let res;
    ca.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
    console.log(cname, cvalue, expires)
	document.cookie = cname+"="+cvalue+"; "+expires;
}

function removeToDo(){
    list = document.querySelectorAll("li");
    for(i = 0; i < list.length; i++)
    {
        list[i].onclick =
        function(){
             if (confirm("ARe you srue ?"))
             {
               deleteAllCookies();
                this.remove();
                setAllCookie();
             }
        }
    }
}

window.onload = function UpdatePge() {
    if (document.cookie)
    {
        let cookies = document.cookie.split(";");
        for (i = 1; i < cookies.length + 1; i++)
        {
            let task = getCookie("task" + i);
            let area = document.getElementById("ft_todo");
            ul.innerHTML += `
            <li onClick=removeToDo()>${task}</li> `;
        }
    }
}

function setAllCookie() {
    let tasks = document.querySelectorAll("li");
    console.log(tasks);
    let count = 1;
    let i = 0;

    while (i < tasks.length)
    {
        setCookie("task" + count, tasks[i].textContent, 30);
        count++;
        i++;
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}