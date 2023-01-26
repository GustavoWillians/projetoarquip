const icones = [
    {
        id: 1,
        nome: 'Incluir Documento',
        descricao: 'Usado para incluir novos documentos, seja internos ou externos, no processo'
    }, {
        id: 2,
        nome: 'Editar Conteúdo',
        descricao: 'Permite a edição do conteúdo do documento'
    }, {
        id: 3,
        nome: 'Assinar Documento',
        descricao: 'Usado para efetuar a assinatura dos documentos internos'
    }, {
        id: 4,
        nome: 'Versões do Documento',
        descricao: 'Mostra todas as versões do documentos, enquanto ainda não assinado.'
    }, {
        id: 5,
        nome: 'Consultar Assinatura',
        descricao: 'Mostra a identificação de todos as pessoas que assinaram o documento'
    }, {
        id: 6,
        nome: 'Excluir',
        descricao: 'Permite a exclusão dos documentos, inclusive enquanto não tiver sido visualizado por outras unidades.'
    }, {
        id: 7,
        nome: 'Enviar Processo',
        descricao: 'Tramita o processo para outra unidade'
    }, {
        id: 8,
        nome: 'Iniciar Processo Relacionado',
        descricao: 'Cria um novo processo já relacionado ao processo selecionado'
    }, {
        id: 9,
        nome: 'Consultar/Alterar Processo',
        descricao: 'Mostra a identificação de todos as pessoas que assinaram o documento'
    }, {
        id: 10,
        nome: 'Acompanhamento especial',
        descricao: 'Permite a exclusão dos documentos, inclusive enquanto não tiver sido visualizado por outras unidades.'
    }, {
        id: 11,
        nome: 'Atualizar Andamento',
        descricao: 'Cadastra texto para informar ao interessado o status do processo.'
    }, {
        id: 12,
        nome: 'Atribuir Processo',
        descricao: 'Na lista de processos da unidade, atribui o processo a um usuário especifico.'
    }, {
        id: 13,
        nome: 'Duplicar Processo',
        descricao: 'Cria um novo processos com os mesmos documentos do processo selecionado, porém sem documentos assinados.'
    }, {
        id: 14,
        nome: 'Gerenciar Disponibilizações de Acesso Externo',
        descricao: 'Envia ao interessado e-mail contendo o link de acesso ao processo, mesmo que contenha documentos restritos'
    }, {
        id: 15,
        nome: 'Anexar Processo',
        descricao: 'Insere um processo dentro de outro, como um documento composto.'
    }, {
        id: 16,
        nome: 'Concluir Processo Nesta Unidade',
        descricao: 'Fecha o processo na unidade, contudo não o encerra.'
    }, {
        id: 17,
        nome: 'Pesquisar no Processo',
        descricao: 'Busca de termos e informações no processo selecionado ou aberto.'
    }, {
        id: 18,
        nome: 'Sobrestar Processo',
        descricao: 'Marca o processo para a suspensão de prazos.'
    }, {
        id: 19,
        nome: 'Deferir ou Indeferir Requerimento',
        descricao: 'Deferir ou Indeferir (Despacho). Insere uma decisão no processo, junto com documento com texto da decisão. Funciona somente nos processos de Requerimento Externo ou iniciados pela função Formulário Padronizado.'
    }, {
        id: 20,
        nome: 'Comunique-se',
        descricao: 'Permite enviar um comunicado ao interessado, solicitando o complemento de informações ou anexação de documentos.'
    }, {
        id: 21,
        nome: 'Enviar Correspondência Eletrônica',
        descricao: 'Permite enviar um e-mail ao interessado, anexando documentos se for o caso.'
    }, {
        id: 22,
        nome: 'Comentários',
        descricao: 'Adiciona um comentário ao processo, que pode ser visto por todas da unidade.'
    }, {
        id: 23,
        nome: 'Liberação para Assinatura Externa via Portal',
        descricao: 'Envia documento para ser assinado por usuário externo mediante login no Portal de Processos.'
    }, {
        id: 24,
        nome: 'Ciência',
        descricao: 'Informa no processo que o usuário está ciente do conteúdo do documento ou do processo.'
    }, {
        id: 25,
        nome: 'Adicionar aos Favoritos',
        descricao: 'Adiciona o processo ou documento ao menu de favoritos do usuário.'
    }, {
        id: 26,
        nome: 'Incluir em Bloco',
        descricao: 'Inclui o processo em bloco interna da unidade ou bloco de reunião. Os blocos internos servem para organizar os processos por temas, e os blocos de reunião podem ser enviados para unidades para visualização dos processos.'
    }, {
        id: 27,
        nome: 'Ordenar Árvore do Processo',
        descricao: 'Permite alterar a ordem de leitura dos documentos do processo, na árvore. Atenção! Esta função não altera a ordem cronológica de inserção das informações, para efeito de tempestividade.'
    }, {
        id: 28,
        nome: 'Controle de Prazos',
        descricao: 'Adiciona prazo ao processo. Um processo com prazo passa a ser visualizado no Painel de Controle como dentro ou fora do prazo.'
    }, {
        id: 29,
        nome: 'Gerenciar Marcador',
        descricao: 'Marcadores permitem categorizar os processos na tela Controle de Processos, com esquema de cores criado pela unidade.'
    }, {
        id: 30,
        nome: 'Gerar Arquivo PDF do Processo',
        descricao: 'Faz o download de todos os documentos do processo em formato PDF. (Alguns formatos arquivos podem ser incompatíveis).'
    }, {
        id: 31,
        nome: 'Gerar Arquivo ZIP do Processo',
        descricao: 'Faz o download de todos os documentos do processo em pasta zipada.'
    }, {
        id: 32,
        nome: 'Remover Marcador',
        descricao: 'Remover marcadores criados pela unidade.'
    }, {
        id: 33,
        nome: 'Adicionar Marcador',
        descricao: 'Adicionar marcador em processo.'
    }, {
        id: 34,
        nome: 'Imprimir Web',
        descricao: 'Gera página de impressão web'
    }, {
        id: 35,
        nome: 'Gerenciar Liberações para Assinatura Externa',
        descricao: '-----'
    }, {
        id: 36,
        nome: 'Relacionamento de Processos',
        descricao: '-----'
    }, {
        id: 37,
        nome: 'Anotações',
        descricao: '-----'
    }, {
        id: 38,
        nome: 'Comunique-se',
        descricao: '-----'
    }, {
        id: 39,
        nome: 'Destaque',
        descricao: '-----'
    }, {
        id: 40,
        nome: 'Agendar Publicação',
        descricao: '-----'
    },

];

const container = document.getElementById('tabelasGeradas');

// conteúdos segmentados, array contem id's dos segmentos
const documentos = [1, 2, 3, 4, 5, 6];
const processos = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const comunicacao = [20, 21, 22, 23];
const controle = [24, 25, 27, 30, 31];
const novidades = [8, 19, 20, 22, 23, 27, 32, 33];


const select = document.querySelectorAll('.seletor');

for (let i = 0; i < select.length; i++) {
    
    const selecionado = select[i];
    
    selecionado.onclick = function () {

        for (let i = 0; i < select.length; i++) {
            select[i].classList.remove('selecionado');
        }
        
        switch (selecionado.classList[1]) {
            case '0': // todas as referências 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < icones.length; i++) {

                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[i].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[i].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[i].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[i].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
            case '1': // Documentos 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < documentos.length; i++) {
                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[documentos[i]].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[documentos[i]].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[documentos[i]].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[documentos[i]].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
            case '2': // Processos 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < processos.length; i++) {
                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[processos[i]].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[processos[i]].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[processos[i]].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[processos[i]].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
            case '3': // Comunicação 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < comunicacao.length; i++) {
                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[comunicacao[i]].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[comunicacao[i]].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[comunicacao[i]].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[comunicacao[i]].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
            case '4': // Controle 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < controle.length; i++) {
                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[controle[i]].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[controle[i]].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[controle[i]].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[controle[i]].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
            case '5': // Novidades 
                container.innerHTML = '';
                selecionado.classList.add('selecionado');
                for (let i = 0; i < novidades.length; i++) {
                    container.innerHTML += ` <table>
                    <tr>
                      <th colspan="2" class="titulo">${icones[novidades[i]].nome}</th>
                    </tr>
                    <tr>
                      <td class="tdPadrao">ANTIGO</td>
                      <td class="tdPadrao">NOVO</td>
                    </tr>
                    
                    <tr>
                      <td class="antigo"><img src="../../Assets/sobre-sei/icones_sei/antigo/${icones[novidades[i]].id}.png" alt="Imagem antiga"></td>
                      <td class="novo"><img src="../../Assets/sobre-sei/icones_sei/atual/${icones[novidades[i]].id}.png" alt="Imagem nova"></td>
                    </tr>
                    <tr>
                      <td colspan="2" rowspan="2" class="descricao">${icones[novidades[i]].descricao}</td>
                    </tr>
                  </table>
                    
                    `
                }
                break;
        }

    }
   
}
