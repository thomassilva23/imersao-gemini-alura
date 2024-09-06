function pesquisar() {
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let section = document.getElementById("resultados-pesquisa");

  if (campoPesquisa == "") {
    section.innerHTML = "<h2>Nenhum alimento foi encontrado.</h2>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
<div class="item-resultado">
          <h2>
            <a href="${dado.link}">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <div class="flex">
            <div class="left">
              <p class="titulo">${dado.titulo}</p>
              <p class="calorias">Calorias: ${dado.calorias}</p>
              <p class="carboidratos">Carboidratos: ${dado.carboidratos}</p>
              <p class="proteinas">Proteínas: ${dado.proteinas}</p>
              <p class="gorduras">Gorduras: ${dado.gorduras}</p>
              <p class="fibra">Fibra: ${dado.fibra}</p>
              <p class="indice-glicemico">Índice glicêmico: ${dado.indice}</p>
              <a href="${dado.link}">Conheça mais</a>
            </div>

            <div class="right">
              <img src="${dado.imagem}" alt="${dado.titulo}" />
            </div>
          </div>
        </div>
`;
    }
  }

  if (!resultados) {
    resultados = "<h2>Nenhum alimento foi encontrado.</h2>";
  }

  section.innerHTML = resultados;
}
