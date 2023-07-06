
 document.getElementById("search-form").addEventListener("submit", function(event){    
      event.preventDefault(); // Impede o envio do formulário     

  var pesquisa = document.getElementById("search-input").value; 
      // Processar a pesquisa aqui (por exemplo, executar uma ação ou redirecionar para a página de resultados)  
         window.location.href = "/resultados?pesquisa=" + encodeURIComponent(pesquisa);   
        });