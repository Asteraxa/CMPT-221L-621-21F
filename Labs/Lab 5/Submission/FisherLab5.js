document.querySelector("h1").innerHTML = "Hello H1 Title. I'm [REDACTED]";
document.getElementById("description").innerHTML = "Nicholas Fisher";
document.getElementById("bossy").innerHTML = "Sorry to bother you, but could you please alter the list elements below? Thanks!";

document.querySelector('body').style.backgroundColor = "gray";

let listelements = Array.from(document.querySelectorAll('li'));

listelements[0].style.color = "blue";
listelements[1].style.backgroundColor = "#FFE6C9";
listelements[3].style.textTransform = "uppercase";
listelements[4].classList.add("title");



