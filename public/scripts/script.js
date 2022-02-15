var i = setInterval(function () {
    
    clearInterval(i);
  
    document.getElementById("loader").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 4000);