const apps = [
  {
    img:'DIARIO-OFICIAL-NOVO.png',
    nome: 'Diário Oficial NOVO',
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio'
  },{
    img:'novodoc.png',
    nome: 'Novodoc',
    link: 'https://arquip.prefeitura.sp.gov.br/novodoc/'
  },{
    img:'suporte.png',
    nome: 'Suporte',
    link: 'https://arquip.prefeitura.sp.gov.br/chat/'
  },{
    img:'PORTAL-PROCESSOS.png',
    nome: 'Portal de Processos ',
    link: 'https://processos.prefeitura.sp.gov.br/Forms/Principal.aspx'
  },{
    img:'SEI.png',
    nome: 'SEI',
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'Dados.png',
    nome: 'DADOS',
    link: 'https://arquip.prefeitura.sp.gov.br/app/painel_dados/'
  },{
    img:'PGDOC.png',
    nome: 'PGDOC',
    link: 'https://arquip.prefeitura.sp.gov.br/app/pgdoc/'
  },{
    img:'SAMSP.png',
    nome: 'SAMSP',
    link: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/gestao/arquivo_publico/institucional/index.php'
  },{
    img:'sistemas.png',
    nome: 'Sistemas',
    link: 'https://arquip.prefeitura.sp.gov.br/sistemas.html'
  },{
    img:'infograficos.png',
    nome: 'Infográficos',
    link: ''
  },/*{
    img:'----.png',
    nome: '------',
    link: ''
  },{
    img:'----.png',
    nome: '------',
    link: ''
  },{
    img:'----.png',
    nome: '------',
    link: ''
  },*/
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
