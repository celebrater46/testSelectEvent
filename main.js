"use strict";

const h1 = document.getElementById("hw");
h1.innerHTML = "Hello World from JS"; // succeeded

const select = document.querySelector('[name="member"]');

select.onchange = event => {
    console.log(select.selectedIndex);
}

// console.log("hello");