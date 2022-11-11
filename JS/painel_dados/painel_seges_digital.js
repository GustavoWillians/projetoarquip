const iframes = [
  {
    titulo: 'Fisico',
    link: 'https://app.powerbi.com/reportEmbed?reportId=39948c4b-ae11-4c27-a86b-572773c98697&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063'
  },{
    titulo:'SEGES DIGITAL',
    link:'https://app.powerbi.com/reportEmbed?reportId=e00dad84-eba8-4e72-9af9-f15e194452de&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063'
  },{
    titulo: 'SEI',
    link:'https://sip.prefeitura.sp.gov.br'
  },{
    titulo: 'Gestão Documental',
    link:'http://gestaodocumental.prefeitura.sp.gov.br/'
  },{
    titulo: 'Diário Oficial',
    link:'http://gestaodocumental.prefeitura.sp.gov.br/diario-2-0/'
  },{
    titulo: 'forms',
    link:'https://forms.office.com/Pages/ResponsePage.aspx?id=nN-Y8wz9KUigA8dwocSgYycsRMAyBIdLiNtcu4EKCcxUQ0tNMjI0NjcyR01VSUJMRk8yRjRJVjdKNy4u&embed=true'
  }];


let botoes = document.getElementsByClassName('controls-iframe');
let iframe_atual = document.getElementById('iframe_dados');

for(let i = 0; i < iframes.length; i++){

  botoes[0].innerHTML +=  '<div class="botoes"><button>'+ iframes[i].titulo + '</button></div>';
}

let btn_iframe = document.getElementsByClassName('botoes');

function troca(troca){
  iframe_atual.src = troca;
}

for(let i = 0; i < btn_iframe.length; i++){
  btn_iframe[i].onclick = () => {troca(iframes[i].link)};
}