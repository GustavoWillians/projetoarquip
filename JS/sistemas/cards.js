const cards_sistemas = [
  {
    img:'./Assets/sistemas/cac.png',
    titulo: 'CAC',
    descricao: `O Controle de Acesso Corporativo é um sistema 
                utilizado para restringir o acesso dos usuários 
                às aplicações desenvolvidas pela Prodam.`,
    link: 'https://admin.cacplus.prodam/Autenticacao?ReturnUrl=%2f'
  },{
    img:'./Assets/sistemas/DIARIO-OFICIAL-NOVO.png',
    titulo: 'Diário Oficial NOVO',
    descricao: `O Diário Oficial publica diariamente os atos oficiais no âmbito 
                do governo municipal, tais como leis, decretos, portarias, 
                editais de licitação, nomeações e exonerações dentre outros. 
                Mas agora de cara nova.`,
    link: 'https://epubli.prefeitura.sp.gov.br/md_epubli_controlador.php?acao=inicio'
  },{
    img:'./Assets/sistemas/diario2.png',
    titulo: 'Diário Oficial',
    descricao: `O Diário Oficial publica diariamente os atos 
                oficiais no âmbito do governo municipal, 
                tais como leis, decretos, portarias, editais 
                de licitação, nomeações e exonerações dentre outros.`,
    link: 'http://www.docidadesp.imprensaoficial.com.br/Busca.aspx'
  },{
    img:'./Assets/sistemas/GLPI.png',
    titulo: 'GLPI',
    descricao: `Esta plataforma reúne serviços prestados aos servidores 
                de SG para a abertura de chamados para Assessoria de 
                Informática; Reservas de salas no Ed. Jockey e no 
                Ed. Matarazzo; e Cadastro de Usuários (GLPI) de CGDOC.`,
    link: 'https://smgsuporte.prefeitura.sp.gov.br/'
  },{
    img:'./Assets/sistemas/PORTAL-PROCESSOS.png',
    titulo: 'Portal de Processos ',
    descricao: `Efetue consultas a processos administrativos municipais, 
                solicite vistas e copias de processos arquivados, complemente 
                documentos e acompanhe o andamento de processo administrativo.`,
    link: 'https://processos.prefeitura.sp.gov.br/Forms/Principal.aspx'
  },{
    img:'./Assets/sistemas/SEI.png',
    titulo: 'SEI',
    descricao: `O Sistema Eletrônico de Informações (SEI), é uma ferramenta de gestão 
                de documentos e processos eletrônicos, e tem como objetivo promover a 
                eficiência administrativa. O SEI integra o Processo Eletrônico Nacional 
                (PEN), uma iniciativa conjunta de órgãos e entidades de diversas esferas 
                da administração pública, com o intuito de construir uma infraestrutura 
                pública de processos e documentos administrativos eletrônicos. Cedido gratuitamente pelo TRF4 em 2015.`,
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'./Assets/sistemas/SEI-TREINAMENTO.png',
    titulo: 'SEI TREINAMENTO',
    descricao: `Um sistema de treinamento para o Sistema Eletrônico 
                de Informações (SEI) cedido gratuitamente pelo TRF4 em 2015.`,
    link: 'https://treinamentosip4.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SEI&infra_url=L3NlaS8='
  },{
    img:'./Assets/sistemas/simproc-web.png',
    titulo: 'Simproc Web',
    descricao: `O Sistema Municipal de Processos - SIMPROC controla os 
                processos administrativos desde 1997, mostrando a 
                localização, despachos, comunique-se e a situação 
                atual do processo em um ambiente mais moderno.`,
    link: 'https://simproc.prefeitura.sp.gov.br/Forms/login.aspx'
  },{
    img:'./Assets/sistemas/simproc.png',
    titulo: 'Simproc (Ambiente Anterior)',
    descricao: `SIMPROC controla os processos administrativos 
                desde 1997, mostrando a localização, despachos, 
                comunique-se e a situação atual do processo.`,
    link: 'https://simprocantigo.prefeitura.sp.gov.br/SJ0934/servlet/LOGIN'
  },{
    img:'./Assets/sistemas/sip.png',
    titulo: 'SIP',
    descricao: `Sistema de Permissões - SIP, faz parte das atribuições dos gestores, 
                gerenciar usuários internos e externos, gerar pontos de controle e 
                outras funcionalidades que estão disponíveis para consulta. O Sistema 
                SIP permite realizar o cadastro inicial das unidades, a montagem da 
                hierarquia das unidades, cadastro dos usuários e a concessão das 
                respectivas permissões de acesso. No que se refere ao Sistema SEI`,
    link: 'https://sip.prefeitura.sp.gov.br/sip/login.php?sigla_orgao_sistema=PMSP&sigla_sistema=SIP&infra_url=L3NpcC8='
  },{
    img:'./Assets/sistemas/TID.png',
    titulo: 'TID',
    descricao: `O sistema TID - Tramitação Interna de Documentos - é um sistema de informações, 
                operado em ambiente WEB. Seu conceito é o controle das tramitações de documentos. 
                O  TID  destina-se  exclusivamente  ao  registro  e  acompanhamento  de  
                documentos em  circulação nas unidades da Secretaria`,
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