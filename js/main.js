
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    // const isOpen = dropDownMenu.classList.contains('open')

    // toggleBtn.classList = isOpen
    //  ?'fa-solid fa-mark'
    //  :'fa-solid fa-bars'
}


// var toggleBtn = document.getElementById('toggle_btn');
// var toggleBtn = document.getElementById('drodown_menu');

// toggleBtn.addEventListener('click',function(){
//     document.getElementByClass("navbar").style.display = "block";
//     document.getElementByClass("dropdown_menu").style.display = "none";
//     document.getElementByClass("toggle_btn").style.display = "block";

// })

// dropDownMenu.addEventListener('click',function(){
//     document.getElementByClass("navbar").style.display = "none";
//     document.getElementByClass("dropdown_menu").style.display = "block";
//     document.getElementByClass("toogle_btn").style.display = "none";
// })