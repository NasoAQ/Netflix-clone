window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.scrollTop > 50) {
//     document.getElementsByClassName("mySlider-1").className = "test";
//   } else {
//     document.getElementsByClassName("mySlider-1").className = "";
//   }
// }


let Yo = document.getElementById("provo");
console.log(Yo);


function myFunction() {
    if (document.scrollingElement > 50) {
        Yo.className = "test";
    }
    
}