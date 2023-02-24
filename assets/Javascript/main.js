const botaoMenu = document.querySelector('.click--menu-mobile');
const menuMobile = document.querySelector(".menu-mobile");
const fundoEscuroDoMenu = document.querySelector('.menu-mobile--foco');
const botaoSairDoMenu = document.querySelector('.menu-mobile--sair')


function abrirMenu(){
    menuMobile.classList.add('aparece');
    fundoEscuroDoMenu.classList.add('aparece')
    document.querySelector('body').style.overflow = 'hidden';
}
botaoMenu.addEventListener('click', abrirMenu)


function fecharMenu(){
    menuMobile.classList.remove('aparece');
    fundoEscuroDoMenu.classList.remove('aparece')
    document.querySelector('body').style.overflow = '';
}

botaoSairDoMenu.addEventListener('click', fecharMenu)

function teste(){
    document.querySelector('body').style.overflowX = 'hidden';
}

teste()