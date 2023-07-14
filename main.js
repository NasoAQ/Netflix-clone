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

document.addEventListener('DOMContentLoaded', function() {
    let main = document.querySelector('body');
    let secondSlider = document.querySelector('.second-slider');
    let scrollThreshold = main.offsetHeight * 0.2;
  
    function handleScroll() {
      let scrollPosition = window.pageYOffset;
  
      if (scrollPosition > scrollThreshold) {
        secondSlider.style.display = 'block';
      }// else {
    //     secondSlider.style.display = 'none';
    //   }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  