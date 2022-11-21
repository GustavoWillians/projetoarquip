const iframes = [
  {
    titulo: 'SEI',
    link:'https://app.powerbi.com/reportEmbed?reportId=849fd5bb-a9d3-42f1-9e94-27cb507d3e57&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063'
  },{
    titulo: 'SIMPROC',
    link:'https://app.powerbi.com/reportEmbed?reportId=bbc9f652-da28-42db-9823-454b859734a8&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063'
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
  let select;
  btn_iframe[i].onclick = () => {
    troca(iframes[i].link)
    btn_iframe[i].style.backgroundColor = "#0b2768";
    select = i;
    for(let i = 0; i < btn_iframe.length; i++){
      if (i != select){
        btn_iframe[i].style.backgroundColor = "#fa8d5b";
      }
    }
  }
}
