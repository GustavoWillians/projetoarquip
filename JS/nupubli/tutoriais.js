const storyTutoriais = [
    {   poster: './Assets/nupubli/capa-story-PUBLICAÇÃO-INTERNA.png',
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

let container = document.getElementsByClassName('container-tutoriais');

for(let i = 0; i < storyTutoriais.length; i++){

  container[0].innerHTML +=  `<div class="card-story">
  <video class="story-video" controls poster="${storyTutoriais[i].poster}">
    <source src="${storyTutoriais[i].src}" type="video/mp4">
    Desculpa, o seu navegador não suporta vídeos incorporados,
    mas você pode <a href="${storyTutoriais[i].src}" download >baixá-lo</a>
    e assistir pelo seu reprodutor de mídia favorito!
  </video>
  <button><a href="${storyTutoriais[i].src}" download >Download</a></button>
</div>`;
}