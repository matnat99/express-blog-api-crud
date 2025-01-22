const port = 3000

const posts = [
    {
      id: 1,
      title: "Il mio ciambellone preferito 🍩",
      content: "Oggi ho preparato un soffice ciambellone al profumo di limone. Perfetto per la colazione o una merenda golosa! 🍋",
      image: `http://localhost:${port}/images/ciambellone.jpeg`,
      tags: ["dolci", "ciambellone", "colazione", "ricette"]
    },
    {
      id: 2,
      title: "Cracker alla barbabietola: uno snack sano e gustoso 🌱",
      content: "Croccanti cracker alla barbabietola, ideali per uno snack leggero o come accompagnamento a un aperitivo. Provare per credere! 😋",
      image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
      tags: ["snack", "barbabietola", "salutare", "ricette"]
    },
    {
      id: 3,
      title: "Pane fritto dolce: un classico irresistibile 🍞",
      content: "Chi non ama il pane fritto dolce? Una ricetta semplice e deliziosa che riporta indietro nel tempo. Da gustare con un po' di zucchero sopra! ✨",
      image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
      tags: ["dolci", "tradizione", "pane fritto", "ricette"]
    },
    {
      id: 4,
      title: "Pasta alla barbabietola: un tocco di colore in tavola 🍝",
      content: "Ho preparato una pasta cremosa alla barbabietola, dal colore intenso e dal sapore sorprendente. Perfetta per stupire gli ospiti! 🎨",
      image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
      tags: ["pasta", "barbabietola", "cremoso", "ricette"]
    },
    {
      id: 5,
      title: "Torta paesana: il gusto della tradizione 🍫",
      content: "Una torta rustica e ricca di sapore, fatta con pane raffermo, cacao, uvetta e pinoli. Il dessert perfetto per non sprecare nulla! 🥖",
      image: `http://localhost:${port}/images/torta_paesana.jpeg`,
      tags: ["dolci", "torta paesana", "tradizione", "ricette"]
    }
  ]

  module.exports = posts