window.addEventListener("load", function () {
  let topbar = document.querySelector(".header-top-bar");
  let main = document.querySelector("main");
  let buscador = document.querySelector(".header-buscador");
  let aCat = document.querySelector("#header-categoria");
  let dropdownCat = document.querySelector(".header-dropdown-display-cat");
  aCat.addEventListener("mouseover", function (e) {
    e.preventDefault();
    dropdownCat.classList.add("header-dropdown-categoria");
    dropdownCat.classList.remove("header-dropdown-display-cat");
    dropdownInfo.classList.add("header-dropdown-display-info");
  });
  main.addEventListener("mouseover", function () {
    dropdownCat.classList.add("header-dropdown-display-cat");
  });
  buscador.addEventListener("mouseover", function () {
    dropdownCat.classList.add("header-dropdown-display-cat");
  });
  topbar.addEventListener("mouseover", function () {
    dropdownCat.classList.add("header-dropdown-display-cat");
  });

  let info = document.querySelector("#header-info");
  let dropdownInfo = document.querySelector(".header-dropdown-display-info");
  info.addEventListener("mouseover", function (e) {
    e.preventDefault();
    dropdownInfo.classList.add("header-dropdown-info");
    dropdownCat.classList.add("header-dropdown-display-cat");
    dropdownInfo.classList.remove("header-dropdown-display-info");
  });
  topbar.addEventListener("mouseover", function () {
    dropdownInfo.classList.add("header-dropdown-display-info");
  });
  main.addEventListener("mouseover", function () {
    dropdownInfo.classList.add("header-dropdown-display-info");
  });
  buscador.addEventListener("mouseover", function () {
    dropdownInfo.classList.add("header-dropdown-display-info");
  });



  let hamburguesa = document.querySelector('.fa-bars')
  hamburguesa.addEventListener('click', function(){
      let dropdownCelu = document.querySelector('.header-dropdown-celu-display')
      hamburguesa.style.marginLeft = '-179%'
      dropdownCelu.classList.add('header-dropdown-celu')
      dropdownCelu.classList.remove('header-dropdown-celu')
  })

//   icon.addEventListener("click", () => {
//     icon.classList.toggle("clicked")
//     list.classList.toggle("opened")

//     if(icon.classList.contains("clicked")) {
//         icon.setAttribute('src', "./public/images/icon-close.svg");
//         headerImg.style.display = "none"
//         main.style.display = "none"
//         footer.style.display = "none"

//     } else {
//         icon.setAttribute('src', "./public/images/icon-hamburger.svg")
//         headerImg.style.display = "block"
//         main.style.display = "block"
//         footer.style.display = "block"
//     }
// })
// }

//   topbar.addEventListener("mouseover", function () {
//     dropdownInfo.classList.add("header-dropdown-celu-display");
//   });
//   main.addEventListener("mouseover", function () {
//     dropdownInfo.classList.add("header-dropdown-celu-display");
//   });
//   buscador.addEventListener("mouseover", function () {
//     dropdownInfo.classList.add("header-dropdown-celu-display");
//   });
});
