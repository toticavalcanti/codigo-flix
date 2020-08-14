/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
<<<<<<< HEAD
=======

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

>>>>>>> helloworld
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
<<<<<<< HEAD
=======

>>>>>>> helloworld
      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
<<<<<<< HEAD
=======
  getAll,
>>>>>>> helloworld
};
