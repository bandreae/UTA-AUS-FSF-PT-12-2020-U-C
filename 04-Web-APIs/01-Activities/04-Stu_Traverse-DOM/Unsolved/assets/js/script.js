// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");
var imgClass  = document.getElementsByClassName("fashion");

var articlesDiv2 = document.querySelector("#articles");
var imgClass2 = document.querySelector(".fashion");

// Change style by accessing style object's properties
console.log(articlesDiv.children[0].children[1])
articlesDiv.children[0].children[1].style.fontSize = "50px";
// mainDiv.style.color = "white";
console.log(mainDiv.children[0]);
mainDiv.children[0].style.color = "white";
