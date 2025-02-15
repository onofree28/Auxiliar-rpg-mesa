import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  async criarPersonagem(personagem) {
    const resposta = await axios.post(`${API_URL}/criar-personagem`, personagem);
    return resposta.data;
  }
};
