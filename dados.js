let dados = [
  {
    titulo: "Arroz branco",
    descricao:
      "O arroz branco é um cereal amplamente consumido e fonte de energia. É rico em carboidratos e possui baixo teor de fibras.",
    calorias: "130kcal",
    carboidratos: "28g",
    proteinas: "2,6g",
    gorduras: "0,3g",
    fibra: "0,4g",
    indice: "Alto",
    link: "https://pt.wikipedia.org/wiki/Arroz_branco#:~:text=Arroz%20branco%20é%20o%20arroz,uma%20aparência%20brilhante%20e%20branca.",
    tags: "carboidrato carboidratos",
    imagem:
      "https://acdn.mitiendanube.com/stores/002/491/154/products/arroz_branco1-b287f0fb1f275d988a16769185991739-640-0.jpg",
  },
  {
    titulo: "Batata doce",
    descricao:
      "A batata doce é rica em carboidratos complexos, fibras e vitaminas. É uma excelente fonte de energia e possui baixo índice glicêmico.",
    calorias: "86kcal",
    carboidratos: "20g",
    proteinas: "1,6g",
    gorduras: "0,2g",
    fibra: "3g",
    indice: "Moderado",
    link: "https://pt.wikipedia.org/wiki/Batata-doce",
    tags: "carboidrato carboidratos",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oCD2rL8kY4HC3p6F-pg3itqoDw&s",
  },
  {
    titulo: "Mandioca/Aipim",
    descricao:
      "A mandioca é um tubérculo rico em carboidratos e uma boa fonte de energia. É importante consumir a mandioca cozida para reduzir a quantidade de ácido cianídrico.",
    calorias: "112kcal",
    carboidratos: "27g",
    proteinas: "1,4g",
    gorduras: "0,2g",
    fibra: "2g",
    indice: "Alto",
    link: "https://pt.wikipedia.org/wiki/Mandioca",
    tags: "carboidrato carboidratos",
    imagem:
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia28539/mandioca-cpt.jpg",
  },
  {
    titulo: "Filé de peito de frango",
    descricao:
      "O filé de peito de frango é uma excelente fonte de proteína magra e vitaminas do complexo B.",
    calorias: "165kcal",
    carboidratos: "0g",
    proteinas: "31g",
    gorduras: "3,6g",
    fibra: "0g",
    indice: "Baixo",
    link: "https://pt.wikipedia.org/wiki/Frango",
    tags: "proteína proteínas proteina proteina carne carnes",
    imagem:
      "https://www.sabornamesa.com.br/wp-content/uploads/2019/02/peito-de-frango-grelhado-1.jpg",
  },
  {
    titulo: "Alcatra",
    descricao:
      "A alcatra é uma carne bovina magra e rica em proteínas, ferro e vitaminas do complexo B.",
    calorias: "217kcal",
    carboidratos: "0g",
    proteinas: "29g",
    gorduras: "11g",
    fibra: "0g",
    indice: "Baixo",
    link: "https://pt.wikipedia.org/wiki/Alcatra",
    tags: "proteína proteínas proteina proteina carne carnes",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=frutas?q=tbn:ANd9GcRmNZEeQSt9oCD2rL8kY4HC3p6F-pg3itqoDw&s",
  },
  {
    titulo: "Pernil suíno",
    descricao:
      "O pernil suíno é uma carne rica em proteínas e gorduras, sendo uma boa fonte de energia.",
    calorias: "250kcal",
    carboidratos: "0g",
    proteinas: "25g",
    gorduras: "15g",
    fibra: "0g",
    indice: "Alto",
    link: "https://pt.wikipedia.org/wiki/Pernil",
    tags: "proteína proteínas proteina proteina carne carnes",
    imagem:
      "https://www.sabornamesa.com.br/wp-content/uploads/2019/02/peito-de-frango-grelhado-1.jpg", // Substitua pela imagem correta
  },
  {
    titulo: "Banana caturra",
    descricao:
      "A banana caturra é rica em potássio e fibras, além de ser uma boa fonte de energia.",
    calorias: "105kcal",
    carboidratos: "27g",
    proteinas: "1.3g",
    gorduras: "0.3g",
    fibra: "3.1g",
    indice: "Médio",
    link: "https://pt.wikipedia.org/wiki/Banana",
    tags: "carboidratos carboidrato fruta frutas",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oDw&s", // Substitua pela imagem correta
  },
  {
    titulo: "Maçã gala",
    descricao:
      "A maçã gala é rica em fibras e vitamina C, além de ser uma fruta versátil e saborosa.",
    calorias: "52kcal",
    carboidratos: "14g",
    proteinas: "0.3g",
    gorduras: "0.2g",
    fibra: "2.4g",
    indice: "Médio",
    link: "https://pt.wikipedia.org/wiki/Maçã",
    tags: "carboidratos carboidrato fruta frutas",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oDw&s",
  },
  {
    titulo: "Mamão formosa",
    descricao:
      "O mamão formosa é rico em vitamina C e enzimas digestivas, sendo uma fruta refrescante e nutritiva.",
    calorias: "43kcal",
    carboidratos: "11g",
    proteinas: "0.7g",
    gorduras: "0.2g",
    fibra: "2.8g",
    indice: "Baixo",
    link: "https://pt.wikipedia.org/wiki/Mamão",
    tags: "carboidratos carboidrato fruta frutas",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q.g=tbn:ANd9GcRmNZEeQSt9oDw&s",
  },
  {
    titulo: "Pepino japonês",
    descricao:
      "O pepino japonês é baixo em calorias e rico em água, sendo um alimento ideal para dietas.",
    calorias: "16kcal",
    carboidratos: "3.6g",
    proteinas: "0.7g",
    gorduras: "0.1g",
    fibra: "0.6g",
    indice: "Baixo",
    link: "https://pt.wikipedia.org/wiki/Pepino",
    tags: "carboidratos carboidrato verduras verdura",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oDw&s",
  },
  {
    titulo: "Tomate longa vida",
    descricao:
      "O tomate longa vida é rico em vitamina C e licopeno, um antioxidante importante.",
    calorias: "22kcal",
    carboidratos: "4.6g",
    proteinas: "0.9g",
    gorduras: "0.2g",
    fibra: "1.2g",
    indice: "Baixo",
    tags: "carboidratos carboidrato verduras verdura",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oDw&s",
  },
  {
    titulo: "Cenoura",
    descricao:
      "A cenoura é rica em betacaroteno, que o corpo converte em vitamina A, importante para a visão.",
    calorias: "41kcal",
    carboidratos: "9.6g",
    proteinas: "0.9g",
    gorduras: "0.2g",
    fibra: "2.8g",
    indice: "Médio",
    tags: "carboidratos carboidrato verduras verdura",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNZEeQSt9oDw&s",
  },
];
