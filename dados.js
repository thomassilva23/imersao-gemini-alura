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
    link: "https://pt.wikipedia.org/wiki/Arroz_branco",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fn49WMXzSWsVMC4YLIHjyevB8rTnetGY7umZkXrV_JvnPiT5siiNL6tJqtQeABKdmwU&usqp=CAU",
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
      "https://loja.srfilet.com.br/cdn/shop/products/SrFilet-10_700x700.jpg?v=1620239410",
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
      "https://cheiadesegredos.com.br/wp-content/uploads/2022/04/Pernil-assado-na-churrasqueira-a-bafo-Divulgacao-Rede-Oba-scaled.jpg",
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
      "https://cdn.awsli.com.br/600x450/18/18885/produto/102523124/6ba7072878.jpg",
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
      "https://images.tcdn.com.br/img/img_prod/450860/muda_de_maca_gala_climas_frios_ou_amenos_1m_enxertadas_566_1_20190611093558.jpg",
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
    link: "https://pt.wikipedia.org/wiki/Caricaceae",
    tags: "carboidratos carboidrato fruta frutas",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/350075/muda_de_mamao_formosa_feita_de_semente_9734_1_20220412114239.jpg",
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
    tags: "carboidratos carboidrato verduras verdura",
    link: "https://pt.wikipedia.org/wiki/Pepino",
    imagem:
      "https://mercadoorganico.com/6261-large_default/pepino-japones-organico-300g-a-400g-osm.jpg",
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
      "https://superpao.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fsuperpao.vtexassets.com%2Farquivos%2Fids%2F428157%2FTomate-Longa-Vida-Kg.png%3Fv%3D638481778640100000",
    link: "https://pt.wikipedia.org/wiki/Tomate",
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
      "https://www.quitandatomio.com.br/upload/408933518-7-beneficios-da-cenoura-para-saude.jpg",
    link: "https://pt.wikipedia.org/wiki/Cenoura",
  },
];
