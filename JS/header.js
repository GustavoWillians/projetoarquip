window.onload = function(e) {
    var offset = document.getElementsByClassName('menu-fixo')[0].offsetTop;
    var menu = document.getElementsByClassName('menu-fixo')[0];

    let logoMenu = document.getElementById('logo-arquip');
    
    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
            menu.style.width = '100%';
            menu.style.marginTop = '-95px';
            logoMenu.style.height = '60px';
            logoMenu.style.marginBottom = '10px';
        } else { // retorna os parametros iniciais
            menu.style.position = 'initial';
            menu.style.display = 'flex';
            menu.style.marginTop = '0';
            logoMenu.style.height = '80px';
            logoMenu.style.marginBottom = '3%';
        }

    });
   
    function logoFixo(tela) {
        if (tela.matches) { 
            menu.style.marginTop = '-45px';
            logoMenu.style.justifyContent = 'flex-end';
        } else {
        // retorna aos parâmetros anteriores
        }
      }
      
    var tela = window.matchMedia("(max-width: 350px)")
    logoFixo(tela) // Call listener function at run time */
    tela.addListener(logoFixo); //faz a verificação na "tela" pra atender os valores atribuídos  
      
}

/*
let dropdownMenu = document.getElementById('submenu');
let submenuAba = document.getElementsByClassName('submenu-aba');

dropdownMenu.addEventListener("mouseover", onMenu);

function onMenu(){
    submenuAba.style.display = "block";
    submenuAba.style.zIndex = "2";
}
*/