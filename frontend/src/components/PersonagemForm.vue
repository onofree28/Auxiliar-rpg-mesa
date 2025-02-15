<template>
    <div class="container">
      <h1 class="titulo">Criação de Personagem</h1>
  
      <form @submit.prevent="criarPersonagem">
        <div class="campo">
          <label>Nome do Personagem</label>
          <input v-model="personagem.nome" type="text" class="input" required />
        </div>
  
        <div class="campo">
          <label>Raça</label>
          <select v-model="personagem.raca" class="input" required>
            <option v-for="raca in racas" :key="raca" :value="raca">{{ raca }}</option>
          </select>
        </div>
  
        <div class="campo">
          <label>Classe</label>
          <select v-model="personagem.classe" class="input" required>
            <option v-for="classe in classes" :key="classe" :value="classe">{{ classe }}</option>
          </select>
        </div>
  
        <div class="campo">
          <label>Descrição do Personagem</label>
          <textarea v-model="personagem.descricao" class="input" required></textarea>
        </div>
  
        <h2 class="subtitulo">Golpes</h2>
  
        <GolpeInput v-for="(golpe, index) in personagem.golpes" 
            :key="index" 
            v-model="personagem.golpes[index]" />


  
        <button type="submit" class="btn">Criar Personagem</button>
      </form>
    </div>
  </template>
  
  <script>
  import GolpeInput from './GolpeInput.vue';
  import api from '../services/api';
  
  export default {
    components: { GolpeInput },
    data() {
  return {
    personagem: {
      nome: '',
      raca: '',
      classe: '',
      descricao: '',
      golpes: [
        { nome: '', descricao: '' },
        { nome: '', descricao: '' },
        { nome: '', descricao: '' }
      ]
    }, 
        racas: ["Humano", "Elfo", "Anão", "Orc", "Tiefling", "Halfling", "Draconato", "Gnomo"],
        classes: ["Guerreiro", "Mago", "Ladino", "Clérigo", "Bárbaro", "Paladino", "Feiticeiro", "Druida"]
      };
    },
    methods: {
      async criarPersonagem() {
        try {
          const resposta = await api.criarPersonagem(this.personagem);
          this.$emit('personagemCriado', resposta);
        } catch (erro) {
          console.error("Erro ao criar personagem:", erro);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 480px;
    margin: auto;
    padding: 20px;
    background: #1e1e2e;
    color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .titulo {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  
  .subtitulo {
    margin-top: 20px;
    font-size: 1.2em;
  }
  
  .campo {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input {
    width: 100%;
    padding: 8px;
    border: 1px solid #444;
    border-radius: 4px;
    background: #2e2e3e;
    color: white;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    background: #ff6b6b;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn:hover {
    background: #ff4b4b;
  }
  </style>
  