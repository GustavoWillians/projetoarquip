const storyTutoriais = [{
      poster: '../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-REGISTRAR-UM-EVENTO-capa.png',
      src:'../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-REGISTRAR-UM-EVENTO-Story.mp4'
    },
    {
      poster: '../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-ALTERAR-PROCESSO-capa.png',
      src:'../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-ALTERAR-PROCESSO-Story.mp4'
    },
    {
      poster: '../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-MIGRAR-capa.png',
      src:'../../Assets/negocios/PUBLICAÇÃO-LICITAÇÃO-MIGRAR-Story.mp4'
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
