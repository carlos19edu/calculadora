$(function () {
    $("#form").submit(function (e) {
          
        e.preventDefault();
        var capital = parseFloat($("#c").val());
        var taxaJuros = parseFloat($("#juros").val());
        var qtdmeses = parseFloat( $("#qtdmeses").val());
        
       

        var taxaJuros = taxaJuros/100;

        var montante = capital * Math.pow((1 + taxaJuros), qtdmeses);
        
        var montante = montante; 
        var parcela = (montante/qtdmeses); 
        var rendimento = (montante - capital);

        $("#valortotal").text("Valor total R$ "+ montante.toFixed(2).replace(".",","));
        $("#parcela").text("Valor mensal R$ "+ parcela.toFixed(2).replace(".",","));
        $("#rendimento").text("Rendimento R$ "+rendimento.toFixed(2).replace(".",","));


        $("#relatorio").show();

    });
});



function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}