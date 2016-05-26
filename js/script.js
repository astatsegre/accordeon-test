var basicsLink = document.querySelector(".basics-link");
var funcionsLink = document.querySelector(".funcions-link");
var errorsLink = document.querySelector(".errors-link");
var objectsLink = document.querySelector(".objects-link");
var eventsLink = document.querySelector(".events-link");
var content1 = document.querySelector(".content-list-1");
var content2 = document.querySelector(".content-list-2");
var content3 = document.querySelector(".content-list-3");
var content4 = document.querySelector(".content-list-4");
var content5 = document.querySelector(".content-list-5");
var rectangle1 = document.querySelector(".rectangle-1");
var rectangle2 = document.querySelector(".rectangle-2");
var rectangle3 = document.querySelector(".rectangle-3");
var rectangle4 = document.querySelector(".rectangle-4");
var rectangle5 = document.querySelector(".rectangle-5");


basicsLink.addEventListener("click", function() {
    
    event.preventDefault();
    content1.classList.toggle("unhide");
    basicsLink.classList.toggle("active");
    rectangle1.classList.toggle("rectangle-active");
    
});

funcionsLink.addEventListener("click", function() {
    
    event.preventDefault();
    content2.classList.toggle("unhide");
    funcionsLink.classList.toggle("active");
    rectangle2.classList.toggle("rectangle-active");
    
});

errorsLink.addEventListener("click", function() {
    
    event.preventDefault();
    content3.classList.toggle("unhide");
    errorsLink.classList.toggle("active");
    rectangle3.classList.toggle("rectangle-active");
    
});

objectsLink.addEventListener("click", function() {
    
    event.preventDefault();
    content4.classList.toggle("unhide");
    objectsLink.classList.toggle("active");
    rectangle4.classList.toggle("rectangle-active");
    
});

eventsLink.addEventListener("click", function() {
    
    event.preventDefault();
    content5.classList.toggle("unhide");
    eventsLink.classList.toggle("active");
    rectangle5s.classList.toggle("rectangle-active");
    
});

