let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

/* everything in here will run when the page is loaded */
window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(function(){
    $("#header").load("html/header.html"); 
});

document.getElementById("economy-button").addEventListener("click", function() {
    window.location.href = "/html/book.html";
  });

  document.getElementById("business-button").addEventListener("click", function() {
    window.location.href = "/html/book.html";
  });

  document.getElementById("executive-button").addEventListener("click", function() {
    window.location.href = "/html/book.html";
  });