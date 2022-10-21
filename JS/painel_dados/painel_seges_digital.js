const iframes_titulos = ['Fisico','SEGES DIGITAL', 'SEGES DIGITAL Atualizado'];

const iframes_links = [
"https://app.powerbi.com/reportEmbed?reportId=39948c4b-ae11-4c27-a86b-572773c98697&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063",
"https://app.powerbi.com/reportEmbed?reportId=e00dad84-eba8-4e72-9af9-f15e194452de&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063",
"https://app.powerbi.com/reportEmbed?reportId=f9997d95-f14d-4dd5-bb0a-dc0292c44dc5&autoAuth=true&ctid=f398df9c-fd0c-4829-a003-c770a1c4a063"
]
let botoes = document.getElementsByClassName('controls-iframe');
let iframe_atual = document.getElementById('iframe_dados');

for(let i = 0; i < iframes_titulos.length; i++){

  botoes[0].innerHTML +=  '<div class="botoes"><button>'+ iframes_titulos[i] + '</button></div>';
}
function troca(){
  
}
