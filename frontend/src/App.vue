<template>
  <div class="container">
    <h1 class="text-2xl font-bold mb-4">Criação de Personagem</h1>
    <PersonagemForm @personagemCriado="atualizarFicha" />
    <PersonagemFicha v-if="ficha" :ficha="ficha" />
  </div>
</template>

<script>
import PersonagemForm from './components/PersonagemForm.vue';
import PersonagemFicha from './components/PersonagemFicha.vue';

export default {
  components: {
    PersonagemForm,
    PersonagemFicha
  },
  data() {
    return {
      ficha: null
    };
  },
  methods: {
    atualizarFicha(novaFicha) {
      this.ficha = novaFicha;
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
