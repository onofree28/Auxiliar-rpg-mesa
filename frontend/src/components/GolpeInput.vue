<template>
    <div class="golpe">
      <label>Nome do Golpe</label>
      <input v-model="golpe.nome" type="text" class="input" required />
  
      <label>Descrição</label>
      <textarea v-model="golpe.descricao" class="input" required></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Object,
        default: () => ({ nome: '', descricao: '' }) // Garante um objeto válido
      }
    },
    computed: {
      golpe: {
        get() {
          return this.modelValue || { nome: '', descricao: '' };
        },
        set(valor) {
          this.$emit('update:modelValue', valor);
        }
      }
    }
  };
  </script>
  

  
  <style scoped>
  .golpe {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 6px;
    background: #2e2e3e;
  }
  </style>
  