// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.scrollTop > 50) {
//     document.getElementsByClassName("mySlider-1").className = "test";
//   } else {
//     document.getElementsByClassName("mySlider-1").className = "";
//   }
// }


// let Yo = document.getElementById("provo");
// console.log(Yo);


// function myFunction() {
//     if (document.scrollingElement > 50) {
//         Yo.className = "test";
//     }
    
// }

let main = document.querySelector('main');
let scrollSecond = main.offsetHeight * 0.1;
let secondSlider = document.querySelector('.second-slider');
let scrollThird = main.offsetHeight * 0.2;
let thirdSlider = document.querySelector('.third-slider');
let scrollFourth = main.offsetHeight * 0.3;
let fourthSlider = document.querySelector('.fourth-slider');

document.addEventListener('DOMContentLoaded', function() {
  
    function handleScroll() {
      let scrollPosition = window.pageYOffset;
  
      if (scrollPosition > scrollSecond) {
        secondSlider.style.visibility = 'visible';
        
    }  if (scrollPosition > scrollThird) {
        thirdSlider.style.visibility = 'visible';

        
    }  if (scrollPosition > scrollFourth) {
        fourthSlider.style.visibility = 'visible';
    }

    }
  
    window.addEventListener('scroll', handleScroll);
  });



  //prova barra di ricerca// non funziona

  function toggleSearch() {
    const searchBar = document.getElementsByClassName("myPlaceholder")
    searchBar.classList.toggle("bar-open")
}

window.addEventListener("DOMContentLoaded", function(evt) {
    const searchBtn = document.getElementsByClassName("mySearch")

    searchBtn.addEventListener("click", function () {
        toggleSearch()
    })

    const newBar = this.document.querySelector(".bar-open")
})


newBar.addEventListener("click", function() {
    newBar.classList.toggle("open")
})
  