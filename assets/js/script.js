/* CHANGEMENT ICÔNE BURGER */
var imageBurger = document.getElementsByClassName('burger');
//console.log(imageBurger);

var sideMenu = document.getElementsByClassName('sideMenu');
//console.log(sideMenu);

var sideMenuLinks = document.getElementsByClassName('sideMenuLinks');
//console.log(sideMenuLinks);

var closeButton = document.getElementsByClassName('closeButton');
//console.log(closeButton);

imageBurger[0].addEventListener('click', openSideMenu);

function openSideMenu() {
    if (sideMenu[0].style.display == 'none') {
        sideMenu[0].classList.add('fadeIn');
        sideMenu[0].style.display = 'block';
        sideMenuLinks[0].style.display = 'flex';
        sideMenu[0].classList.remove('fadeOut');
    } else{
        sideMenu[0].style.display = 'none';
        sideMenuLinks[0].style.display = 'none';
    }
}

closeButton[0].addEventListener('click', closeSideMenu);

function closeSideMenu(){
    if(sideMenu[0].style.display== 'block'){
        sideMenu[0].classList.add('fadeOut');
        sideMenu[0].classList.remove('fadeIn');
        setTimeout(function(){ 
            sideMenu[0].style.display = 'none';
            sideMenuLinks[0].style.display = 'none';
        }
        , 1000);
    } else{
        sideMenu[0].style.display = 'block';
        sideMenuLinks[0].style.display = 'none';
    }
}
