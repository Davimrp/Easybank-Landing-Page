const botaoMenu = document.querySelector('.click--menu-mobile');
const menuMobile = document.querySelector(".menu-mobile");
const fundoEscuroDoMenu = document.querySelector('.menu-mobile--foco');
const botaoSairDoMenu = document.querySelector('.menu-mobile--sair')
const botoesMenu = menuMobile.querySelectorAll('a')


function clickMenu(){
    let teste = ''
    for (let i of botoesMenu){
            i.addEventListener('click', fecharMenu)
        }
}

function fecharMenu(){
    menuMobile.classList.remove('aparece');
    fundoEscuroDoMenu.classList.remove('aparece')
    document.querySelector('body').style.overflow = '';
}
botaoSairDoMenu.addEventListener('click', fecharMenu)

function abrirMenu(){
    menuMobile.classList.add('aparece');
    fundoEscuroDoMenu.classList.add('aparece')
    document.querySelector('body').style.overflow = 'hidden';

    clickMenu()
}
botaoMenu.addEventListener('click', abrirMenu)


function solucionaBugOverflow(){
    document.querySelector('body').style.overflowX = 'hidden';
}
solucionaBugOverflow()