window.addEventListener('load', function(){
    let aCat = document.querySelector('#header-categoria')
    let dropdownCat = document.querySelector('.header-dropdown-display-cat')
    aCat.addEventListener('mouseover', function(e){
        e.preventDefault()
        dropdownCat.classList.add('header-dropdown-categoria')
        dropdownCat.classList.remove('header-dropdown-display-cat')
    })
    aCat.addEventListener('click', function(){
        dropdownCat.classList.add('header-dropdown-display-cat')
    })


    let aInfo = document.querySelector('#header-info')
    let dropdownInfo = document.querySelector('.header-dropdown-display-info')
    aInfo.addEventListener('mouseover', function(e){
        e.preventDefault()
        dropdownInfo.classList.add('header-dropdown-info')
        dropdownInfo.classList.remove('header-dropdown-display-info')
    })
    aInfo.addEventListener('click', function(){
        dropdownInfo.classList.add('header-dropdown-display-info')
    })
})