let button1 = document.createElement("button");
button1.id = "plus";
button1.innerHTML = "더하기";


let sachic = document.getElementById("sachic");
sachic.appendChild(button1);
let plusGet = function() {
    document.write(Number(first) + Number(second));
  };
button1.onclick = plusGet;


let button2 = document.createElement("button");
button2.id = "minus";
button2.innerHTML = "빼기";
sachic.appendChild(button2);
let minusGet = function() {
    document.write(Number(first) - Number(second));
  };
button2.onclick = minusGet;


let button3 = document.createElement("button");
button3.id = "multiply";
button3.innerHTML = "곱하기";
sachic.appendChild(button3);
let multiplyGet = function() {
    document.write(Number(first) * Number(second));
  };
button3.onclick = multiplyGet;

let button4 = document.createElement("button");
button4.id = "divide";
button4.innerHTML = "나누기";
sachic.appendChild(button4);
let divideGet = function() {
    document.write(parseInt(Number(first) / Number(second)));
  };
button4.onclick = divideGet;
