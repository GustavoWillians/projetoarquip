const busca = [
    {
        buscado: 'diário oficial',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'diário oficial',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'diário oficial',
        link: './app/nupubli/',
        descricao:'Arquip.nupubli'
    },{
        buscado: 'diario oficial',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'diario oficial',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'diario oficial',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'diário',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'diário',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'diário',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'diario',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'diario',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'diario',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'Diário Oficial',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'Diário Oficial',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'Diário Oficial',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'Diario oficial',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'Diario oficial',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'Diario oficial',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'Diário',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'Diário',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'www.docidadesp.imprensaoficial.com.br'
    },{
        buscado: 'Diário',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'Diario',
        link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
        descricao:'epubli.prefeitura.sp.gov.br'
    },{
        buscado: 'Diario',
        link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
        descricao:'sua busca foi encontrada neste link'
    },{
        buscado: 'Diario',
        link: './app/nupubli/',
        descricao:'sua busca foi encontrada neste link'
    }];

let submitBtn = document.getElementById('btn-submit');
let links = document.getElementsByClassName('resultado-busca');
let caixaBusca = document.getElementById('buscador');



submitBtn.onclick = function buscadorLista(){
    
    caixaBusca.style.marginTop = "1%";

    links[0].innerHTML =  '';
    let buscaUsuario = document.getElementById('buscadorSite');
    
    for(let i = 0; i < busca.length; i++){

        if(buscaUsuario.value === busca[i].buscado){
            links[0].innerHTML +=  `<li class="links-resultado">
            <a href="${busca[i].link}"> ${busca[i].buscado}  </a>
            <p class="descricao-links-resultado" > ${busca[i].descricao} </p>
            </li>`;
        }
        console.log(buscaUsuario.value);
    } 
    
    let resultado = document.getElementsByClassName('links-resultado');

    if (resultado.length == 0 ) {
        links[0].innerHTML +=  `<li class="links-resultado"> Nenhum link foi encontrado com a sua busca, tente novamente. </li>`;
    }   
}

