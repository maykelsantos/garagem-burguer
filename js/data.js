/* Conteúdo da Garagem Burguer.
   Preços e ingredientes tirados do cardápio online (Anota AI) em nov/2026.
   Itens marcados com "confirmar" precisam ser checados com a Garagem. */
window.GB = {
  links: {
    pedido: "https://pedido.anota.ai/loja/garagem-burger-11?f=ms",
    whatsapp: "https://wa.me/5581993637707",
    whatsappTexto: "81 99363-7707",
    instagram: "https://www.instagram.com/garagemburguerofc/",
    instagramUser: "@garagemburguerofc",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Almirante+Paulo+Moreira%2C+559+Garapu%2C+Cabo+de+Santo+Agostinho+PE",
    mapaEmbed: "https://www.google.com/maps?q=Av.+Almirante+Paulo+Moreira,+559,+Garapu,+Cabo+de+Santo+Agostinho+-+PE&output=embed",
    waze: "https://waze.com/ul?q=Av.%20Almirante%20Paulo%20Moreira%20559%20Cabo%20de%20Santo%20Agostinho"
  },
  endereco: {
    linha1: "Av. Alm. Paulo Moreira, 559",
    linha2: "Garapu, Cabo de Santo Agostinho – PE"
  },
  // 0 = domingo ... 6 = sábado. null = fechado (terça: confirmar com a Garagem)
  horarios: { 0: [18, 22], 1: [18, 22], 2: null, 3: [18, 22], 4: [18, 22], 5: [18, 23], 6: [18, 23] },
  dias: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],

  burgers: [
    { slug: "mclaren", nome: "McLaren", preco: 43, destaque: true,
      frase: "Crocância, queijo e bacon em uma combinação que chega acelerando.",
      ficha: ["Hambúrguer bovino 120 g", "Queijo empanado crocante", "Bacon em fatias", "Molho especial", "Pão brioche"] },
    { slug: "maserati", nome: "Maserati", preco: 41, destaque: true,
      frase: "Pesado no sabor. Intenso como deve ser.",
      ficha: ["Dois blends de carne", "Cheddar derretido", "Bacon crocante", "Molho especial e mostarda"] },
    { slug: "mustang", nome: "Mustang", preco: 40, semFoto: true,
      frase: "Dois blends e potência dobrada.",
      ficha: ["2 hambúrgueres bovinos 120 g", "Bacon", "Mussarela", "Cebola caramelizada", "Alface", "Molho especial", "Pão brioche"] },
    { slug: "kadett", nome: "Kadett", preco: 37, semFoto: true,
      frase: "Costela angus de 200 g, o mais encorpado da garagem.",
      ficha: ["Hambúrguer de costela angus 200 g", "Mussarela", "Molho especial", "Pão brioche"] },
    { slug: "opala", nome: "Opala", preco: 36, destaque: true,
      frase: "Brasileiro, marcante e suculento.",
      ficha: ["Hambúrguer bovino 120 g", "Blend de queijo coalho maçaricado", "Fios de mel de engenho", "Farofa de charque", "Molho especial", "Pão brioche"] },
    { slug: "monza", nome: "Monza", preco: 35,
      frase: "Combinação que entrega sabor do começo ao fim.",
      ficha: ["Hambúrguer de frango 140 g", "Mussarela", "Molho especial de alho", "Alface, tomate e cebola roxa", "Bacon em tiras", "Pão brioche"] },
    { slug: "jaguar", nome: "Jaguar", preco: 35, destaque: true,
      frase: "Intenso, marcante e suculento.",
      ficha: ["Hambúrguer bovino 120 g", "Farofa crocante de bacon", "Blend de queijos maçaricado", "Calda de vinho", "Molho especial", "Pão brioche"] },
    { slug: "porsche", nome: "Porsche", preco: 31,
      frase: "Crocante na medida. Cremoso sem moderação.",
      ficha: ["Hambúrguer bovino 120 g", "Bacon em cubos crocante", "Cheddar derretido", "Cebola caramelizada", "Pão australiano"] },
    { slug: "fusca", nome: "Fusca", preco: 28,
      frase: "Clássico que nunca sai de moda. Sabor que sempre dá vontade.",
      ficha: ["Hambúrguer bovino 140 g", "Mussarela", "Bacon crocante", "Alface", "Molho especial", "Pão brioche"] },
    { slug: "mini-cooper", nome: "Mini Cooper", preco: 28,
      frase: "Um smash cheio de sabor.",
      ficha: ["2 blends bovinos 60 g no estilo smash", "Mussarela", "Bacon", "Alface", "Molho especial", "Pão brioche"] },
    { slug: "camaro", nome: "Camaro", preco: null,
      frase: "Crocante, cremoso e cheio de sabor.",
      ficha: ["Camarão empanado crocante", "Molho de camarão com especiarias", "Crispy de couve"] }
  ],

  combos: [
    { nome: "Combo Fusca", preco: 51, desc: "1 Fusca e 1 batata tradicional. Veja todos os itens no pedido online." },
    { nome: "Combo Kids", preco: 35, desc: "Hambúrguer de pão, carne e queijo, batata e refrigerante menores. Versões menino e menina." }
  ],

  categorias: [
    { id: "burgers", nome: "Burgers" },
    { id: "combos", nome: "Combos" },
    { id: "entradas", nome: "Entradas" },
    { id: "adicionais", nome: "Adicionais" },
    { id: "bebidas", nome: "Bebidas" },
    { id: "milk-shake", nome: "Milk Shake" },
    { id: "sobremesa", nome: "Sobremesa" }
  ]
};
