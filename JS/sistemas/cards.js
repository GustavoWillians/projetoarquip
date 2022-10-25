const cards_sistemas = [
    {
      img:'./Assets/sistemas/SEI.png',
      titulo: 'SEI',
      descricao:'descrição descrição descrição descrição descrição descrição',
      link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
    },
];
    
let cards = document.getElementsByClassName('card-sistema-container');

for(let i = 0; i < cards_sistemas.length; i++){

  cards[0].innerHTML +=  `<a href="${cards_sistemas[i].link}" target="_blank" class="card-sistema">
  <div>
      <img class="img-card" src="${cards_sistemas[i].img}" alt="${cards_sistemas[i].titulo}">
  </div>
  <div class="text-card">
      <h3>${cards_sistemas[i].titulo}</h3>
      <p>${cards_sistemas[i].descricao}</p>
  </div>
</a>`;
}

let cards_link = document.getElementsByClassName('botoes');

for(let i = 0; i < btn_iframe.length; i++){
  btn_iframe[i].onclick = () => {troca(iframes[i].link)};
}