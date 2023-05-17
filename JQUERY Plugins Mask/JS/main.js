$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    $('#CEP').mask('00.000-000', {
        placeholder: 'xx.xxx-xxx'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CEP: {
                required: true,
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})