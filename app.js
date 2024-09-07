function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let infosHTML = document.getElementById("resultados-pesquisa");
    let CampoPesquisa = document.getElementById("campo-pesquisa").value;
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";
    CampoPesquisa = CampoPesquisa.toLowerCase()

    if (!CampoPesquisa){
      infosHTML.innerHTML = "<p>Nada Foi Encontrado. Você Não Digitou Nada, É Necessário Digitar Para Obter Resultados</p>"
      return;
    }
    // Itera sobre cada elemento "dado" no array "dados"
      for (let dado of dados) {
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(título.includes(CampoPesquisa) || descrição.includes(CampoPesquisa) || tags.includes(CampoPesquisa)) {
          // Concatena HTML para cada resultado, formatando com template literals
          resultados += `
          <div class=""> <h2> <a href="${dado.link_Ex}" target="_blank">${dado.título}</a> </h2>
          <p class="descricao-meta"> ${dado.descrição} </p>
          </div>
        `;
        }
        
      }

      if (!resultados) {
        resultados = "<p>Nada Foi Encontrado</p>"
      }

    // **Importante:** Essa linha sobrescreve todos os resultados anteriores
    // com uma string vazia. Isso faz com que apenas o último resultado
    // seja exibido. Para exibir todos os resultados, remova essa linha.
    infosHTML.innerHTML = resultados;
  }