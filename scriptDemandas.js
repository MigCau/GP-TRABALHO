 function salvarFormulario() {
      // Obter os valores dos campos do formulário
      var tipoMaterial = document.getElementById("tipo_material").value;
      var corMaterial = document.getElementById("cor_material").value;
      var adesivos = document.getElementById("adesivos").value;
      var tipoTinta = document.getElementById("tipo_tinta").value;
      var corTinta = document.getElementById("cor_tinta").value;
      var corLinha = document.getElementById("cor_linha").value;
      var espessuraLinha = document.getElementById("espessura_linha").value;
      var espacamentoCostura = document.getElementById("espacamento_costura").value;
      var tamanhoCostura = document.getElementById("tamanho_costura").value;
      var preparacaoPecas = document.getElementById("preparacao_pecas").value;
      var tempoSecagem = document.getElementById("tempo_secagem").value;
      var temperaturaEquipamento = document.getElementById("temperatura_equipamento").value;
      var regulagemEquipamentos = document.getElementById("regulagem_equipamentos").value;
      var padraoQualidade = document.getElementById("padrao_qualidade").value;
      var padraoProcedimento = document.getElementById("padrao_procedimento").value;

      // Criar um objeto para armazenar as informações da demanda
      var demanda = {
        tipoMaterial: tipoMaterial,
        corMaterial: corMaterial,
        adesivos: adesivos,
        tipoTinta: tipoTinta,
        corTinta: corTinta,
        corLinha: corLinha,
        espessuraLinha: espessuraLinha,
        espacamentoCostura: espacamentoCostura,
        tamanhoCostura: tamanhoCostura,
        preparacaoPecas: preparacaoPecas,
        tempoSecagem: tempoSecagem,
        temperaturaEquipamento: temperaturaEquipamento,
        regulagemEquipamentos: regulagemEquipamentos,
        padraoQualidade: padraoQualidade,
        padraoProcedimento: padraoProcedimento
      };

      // Adicionar a demanda à lista de demandas
      var listaDemandas = document.getElementById("demandas");
      var itemLista = document.createElement("li");
      itemLista.innerHTML = JSON.stringify(demanda);
      listaDemandas.appendChild(itemLista);

      // Limpar os campos do formulário
      document.getElementById("formulario").reset();
    }