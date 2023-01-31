const apps = [
  {
    img:'cac.png',
    nome: 'CAC',
    link: 'https://admin.cacplus.prodam/Autenticacao?ReturnUrl=%2f'
  },{
    img:'DIARIO-OFICIAL-NOVO.png',
    nome: 'Diário Oficial NOVO',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio'
  },{
    img:'diario2.png',
    nome: 'Diário Oficial',
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx'
  },{
    img:'PORTAL-PROCESSOS.png',
    nome: 'Portal de Processos ',
    link: 'https://processos.prefeitura.sp.gov.br/Forms/Principal.aspx'
  },{
    img:'SEI.png',
    nome: 'SEI',
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'SEI-TREINAMENTO.png',
    nome: 'SEI TREINAMENTO',
    link: 'https://treinamentosip4.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'simproc-web.png',
    nome: 'Simproc Web',
    link: 'https://simproc.prefeitura.sp.gov.br/Forms/login.aspx'
  },{
    img:'simproc.png',
    nome: 'Simproc (Ambiente Anterior)',
    link: 'https://simprocantigo.prefeitura.sp.gov.br/SJ0934/servlet/LOGIN'
  },{
    img:'sip.png',
    nome: 'SIP',
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SIP&infra_url=L3NpcC8='
  },{
    img:'TID.png',
    nome: 'TID',
    link: 'http://tid.prodam.sp.gov.br'
  },
];
    
let container = document.getElementsByClassName('containerApps');

for(let i = 0; i < apps.length; i++){

  container[0].innerHTML +=  `
        <div class="sistemApps">
          <a target="_blank" href="${apps[i].link}">
            <img src="./Assets/arquip-na-mao/${apps[i].img}" alt="link sistema ${apps[i].nome}">
            <p>${apps[i].nome}</p>
          </a>
        </div>`;
}
