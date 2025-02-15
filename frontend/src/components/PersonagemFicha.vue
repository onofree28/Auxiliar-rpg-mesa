<template>
    <div class="ficha">
      <h2 class="text-xl font-bold mt-4">Ficha do Personagem</h2>
      <p><strong>Nome:</strong> {{ ficha.nome }}</p>
      <p><strong>Raça:</strong> {{ ficha.raca }}</p>
      <p><strong>Classe:</strong> {{ ficha.classe }}</p>
      <p><strong>Descrição:</strong> {{ ficha.descricao }}</p>
  
      <h3 class="text-lg font-bold mt-2">Atributos</h3>
      <ul>
        <li v-for="(valor, atributo) in ficha.atributos" :key="atributo">
          <strong>{{ atributo }}:</strong> {{ valor }}
        </li>
      </ul>
  
      <h3 class="text-lg font-bold mt-2">Poderes</h3>
      <ul>
        <li><strong>{{ ficha.poderes.comum1.nome }}:</strong> Rolagem {{ ficha.poderes.comum1.rolagem }}</li>
        <li><strong>{{ ficha.poderes.comum2.nome }}:</strong> Rolagem {{ ficha.poderes.comum2.rolagem }}</li>
        <li><strong>{{ ficha.poderes.supremo.nome }}:</strong> Rolagem {{ ficha.poderes.supremo.rolagem }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      ficha: Object
    }
  };
  </script>
  
  <style scoped>
  .ficha {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
  }
  </style>
  