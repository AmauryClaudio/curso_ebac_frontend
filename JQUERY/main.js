$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaNovaAtividade = $('#campo-nome-atividade').val(); //Recuperando o valor do campo com o nome da atividade que preenchi
        $(`<li class="line-list" > ${nomeDaNovaAtividade} </li>`).appendTo(".list");
        $('#campo-nome-atividade').val('');
    })
    $(document).on("click", ".line-list", function () {
        if ($(this).css("text-decoration").includes("line-through")) {
            $(this).css("text-decoration", "none");
          } else $(this).css("text-decoration", "line-through");
      });
});