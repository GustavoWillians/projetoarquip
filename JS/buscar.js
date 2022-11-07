const busca = [{
    buscado: 'diário oficial',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diário oficial',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diário oficial',
    link: './nupubli.html',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario oficial',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario oficial',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario oficial',
    link: './nupubli.html',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diário',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diário',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diário',
    link: './nupubli.html',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx',
    descricao:'sua busca foi encontrada neste link'
},{
    buscado: 'diario',
    link: './nupubli.html',
    descricao:'sua busca foi encontrada neste link'
}];

let submitBtn = document.getElementById('btn-submit');
let links = document.getElementsByClassName('resultado-busca');

submitBtn.onclick = function buscadorLista(){
    
    links[0].innerHTML =  '';
    let buscaUsuario = document.getElementById('buscadorSite');
    
    for(let i = 0; i < busca.length; i++){

        if(buscaUsuario.value === busca[i].buscado){
            links[0].innerHTML +=  `<li class="links-resultado">
            <a href="${busca[i].link}"> ${busca[i].buscado}  </a>
            <p> ${busca[i].descricao} </p>
            </li>`;
        }
        console.log(buscaUsuario.value);
    } 
    
    let resultado = document.getElementsByClassName('links-resultado');

    if (resultado.length == 0 ) {
        links[0].innerHTML +=  `<li class="links-resultado"> Nenhum link foi encontrado com a sua busca, tente novamente. </li>`;
    }   
}

