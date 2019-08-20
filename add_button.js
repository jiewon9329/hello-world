let el = document.getElementById("text")
let menu = document.createElement('ul');
menu.id = 'menupan';

let item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설령탕";

let item2 = document.createElement('li');
item2.id = 'menu2';
item2.innerHTML = "추어탕";

menu.appendChild(item1);
menu.appendChild(item2);

el.appendChild(menu);


let readInput = function() {
    let input = document.getElementById('input1');
    console.log(input.value);
}

let btn2 = document.createElement('button');
btn2.onclick = readInput;
let text2 = document.getElementById('text2');
text2.appendChild(document.createElement('br'));
text2.appendChild(btn2);
btn2.innerHTML="화귄";
