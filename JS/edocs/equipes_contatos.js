const contatos = [{
    titulo: 'Companhia de Engenharia de Tráfego - CET',
    th:['Líder da Equipe',],
    src:'./Assets/nupubli/Story-PUBLICAÇÃO-INTERNA.mp4'
  },{
    poster: './Assets/nupubli/capa-story-PUBLICAÇÃO-EXTERNA.png',
    src:'./Assets/nupubli/Story-PUBLICAÇÃO-EXTERNA.mp4'
  },
  {
    poster: './Assets/nupubli/capa-story-MANUTENÇÃO.png',
    src:'./Assets/nupubli/Story-MANUTENÇÃO.mp4'
  },
  {
    poster: './Assets/nupubli/capa-story-TABELA.png',
    src:'./Assets/nupubli/Story-PUBLICAÇÃO-TABELA.mp4'
  }];

let container = document.getElementById('contatos');

for(let i = 0; i < storyTutoriais.length; i++){

container[0].innerHTML +=  `<button class="collapsible-equipes">${contatos[i].titulo}</button>
<div class="content-equipes ">

            <h3 class="equipes-h3">${contatos[i].titulo}</h3>
            <table>
                <thead> 
                  <tr>
                    <th>Líder da Equipe</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
                    <td>Rodrigo do Carmo Molina (Titular)</td>
                    <td>rmolina@cetsp.com.br</td>
                  </tr>
                </tbody> 
            </table> 
            `;
}

/*
<div class="card-secao" id="contatos">
          <button class="collapsible-equipes">Companhia de Engenharia de Tráfego - CET</button>
          <div class="content-equipes ">

            <h3 class="equipes-h3" >Companhia de Engenharia de Tráfego - CET</h3>
            <table>
              <tr>
                <th>Líder da Equipe</th>
              </tr>
              <tr>
                <td>Rodrigo do Carmo Molina (Titular)</td>
                <td>rmolina@cetsp.com.br</td>
              </tr>
              <tr>
                <td>Leonardo Pizzanelli (Suplente)</td>
                <td>tatiana@cetsp.com.br</td>
              </tr>
            </table> <!-- Líder da Equipe -->
            <table>
              <tr>
                <th>Administrador Local do SEI</th>
              </tr>
              <tr>
                <td>Edward Nogueira Junior (Titular)</td>
                <td>edwardj@cetsp.com.br</td>
              </tr>
              <tr>
                <td>Alexsandro Pereira de Almeida (Suplente) </td>
                <td>leonardopizzanelli@gmail.com</td>
              </tr>
            </table><!-- Administrador Local do SEI -->
            <table>
              <tr>
                <th>Submestre do SIMPROC</th>
              </tr>
              <tr>
                <td>Pedro Gabriel Sirna dos Santos</td>
                <td>pedrog@cetsp.com.br</td>
              </tr>
            </table><!-- Submestre do SIMPROC -->
            <table>
              <tr>
                <th>Responsável pelo Setor de Protocolo</th>
              </tr>
              <tr>
                <td>Valquíria dos Santos de Passos</td>
                <td>valquiriap@cetsp.com.br</td>
              </tr>
            </table> <!-- Responsável pelo Setor de Protocolo -->
            <table>
              <tr>
                <th>Pontos Focais da Tabela de Temporalidade</th>
              </tr>
              <tr>
                <td>Telma Paulino Senaubar (Titular)</td>
                <td>telmap@cetsp.com.br</td>
              </tr>
              <tr>
                <td>Ilza Harumi Tadano (Suplente)</td>
                <td>ilzah@cetsp.com.br</td>
              </tr>
            </table> <!-- Pontos Focais da Tabela de Temporalidade -->
            <table>
              <tr>
                <th>Responsável do Órgão Setorial do SAMSP</th>
              </tr>
              <tr>
                <td>Valquíria dos Santos de Passos</td>
                <td>valquiriap@cetsp.com.br</td>
              </tr>
            </table> <!-- Responsável do Órgão Setorial do SAMSP -->
          </div> 
          <!-- Companhia de Engenharia de Tráfego - CET fim tabela -->
</div> */