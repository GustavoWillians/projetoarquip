const cards_sistemas = [
  {
    img:'./Assets/sistemas/CAC.png',
    titulo: 'CAC',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://admin.cacplus.prodam/Autenticacao?ReturnUrl=%2f'
  },{
    img:'./Assets/sistemas/DIARIO-OFICIAL-NOVO.png',
    titulo: 'Diário Oficial NOVO',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio'
  },{
    img:'./Assets/sistemas/diario2.png',
    titulo: 'Diário Oficial',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx'
  },{
    img:'./Assets/sistemas/PORTAL-PROCESSOS.png',
    titulo: 'Portal de Processos ',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://processos.prefeitura.sp.gov.br/Forms/Principal.aspx'
  },{
    img:'./Assets/sistemas/SEI.png',
    titulo: 'SEI',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'./Assets/sistemas/SEI-TREINAMENTO.png',
    titulo: 'SEI TREINAMENTO',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://treinamentosip4.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'./Assets/sistemas/simproc-web.png',
    titulo: 'Simproc Web',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://simproc.prefeitura.sp.gov.br/Forms/login.aspx'
  },{
    img:'./Assets/sistemas/simproc.png',
    titulo: 'Simproc Antigo',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://simprocantigo.prefeitura.sp.gov.br/SJ0934/servlet/LOGIN'
  },{
    img:'./Assets/sistemas/sip.png',
    titulo: 'SIP',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SIP&infra_url=L3NpcC8='
  },{
    img:'./Assets/sistemas/TID.png',
    titulo: 'TID',
    descricao:'descrição descrição descrição descrição descrição descrição',
    link: 'http://tid.prodam.sp.gov.br'
  },
];
    
let cards = document.getElementsByClassName('card-sistema-container');

for(let i = 0; i < cards_sistemas.length; i++){

  cards[0].innerHTML +=  `<hr>
  <a href="${cards_sistemas[i].link}" target="_blank" class="card-sistema">
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