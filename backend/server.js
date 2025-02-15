const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/criar-personagem", (req, res) => {
    const { nome, raca, classe, descricao, golpes } = req.body;
  
    const atributos = distribuirAtributos(descricao, classe);
    const poderes = golpes.map(golpe => ({
      nome: golpe.nome,
      ...analisarGolpe(golpe.descricao)
    }));
  
    const ficha = {
      nome,
      raca,
      classe,
      descricao,
      atributos,
      poderes
    };
  
    res.json(ficha);
  });
  

function distribuirAtributos(descricao, classe) {
  let atributos = {
    força: 10,
    destreza: 10,
    constituição: 10,
    inteligência: 10,
    sabedoria: 10,
    carisma: 10
  };

  const palavrasChave = {
    força: ["musculoso", "forte", "gigante", "poderoso"],
    destreza: ["rápido", "ágil", "leve", "silencioso"],
    constituição: ["resistente", "durável", "forte"],
    inteligência: ["inteligente", "sábio", "astuto", "calculista"],
    sabedoria: ["espiritual", "místico", "sensato"],
    carisma: ["persuasivo", "cativante", "líder", "encantador"]
  };

  for (const atributo in palavrasChave) {
    palavrasChave[atributo].forEach(palavra => {
      if (descricao.toLowerCase().includes(palavra)) {
        atributos[atributo] += 2;
      }
    });
  }

  switch (classe.toLowerCase()) {
    case "guerreiro":
      atributos.força += 2;
      atributos.constituição += 2;
      break;
    case "mago":
      atributos.inteligência += 3;
      atributos.sabedoria += 1;
      break;
    case "ladino":
      atributos.destreza += 3;
      atributos.carisma += 1;
      break;
  }

  return atributos;
}

function analisarGolpe(descricao, supremo = false) {
  let rolagem = "1d6";
  let efeito = "Dano";

  const palavrasChave = {
    "1d4": ["fraco", "rápido", "preciso"],
    "1d6": ["normal", "equilibrado"],
    "1d8": ["forte", "poderoso", "impactante"],
    "1d10": ["arrasador", "devastador", "letal"]
  };

  for (const dado in palavrasChave) {
    palavrasChave[dado].forEach(palavra => {
      if (descricao.toLowerCase().includes(palavra)) {
        rolagem = dado;
      }
    });
  }

  if (supremo) {
    rolagem = "2" + rolagem;
  }

  const debuffs = {
    "Queimadura": ["fogo", "chama", "incendiar"],
    "Sangramento": ["corte", "lâmina", "ferida"],
    "Paralisia": ["choque", "relâmpago", "eletricidade"],
    "Veneno": ["tóxico", "veneno", "envenenar"],
    "Atordoamento": ["impacto", "forte", "golpe"]
  };

  for (const debuff in debuffs) {
    debuffs[debuff].forEach(palavra => {
      if (descricao.toLowerCase().includes(palavra)) {
        efeito = "Dano + " + debuff;
      }
    });
  }

  return { nome: descricao, rolagem, efeito };
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
