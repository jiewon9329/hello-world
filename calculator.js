let button1 = document.createElement("button");
button1.id = "plus";
button1.innerHTML = "더하기";


let sachic = document.getElementById("sachic");
sachic.appendChild(button1);
let plusGet = function() {
    document.write(Number(first) + Number(second));
  };
button1.onclick = plusGet;
