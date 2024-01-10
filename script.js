// Exibir/ocultar conteúdo ao clicar no botão de navegação
$(".navbar-toggler").on("click", function() {
    $(".conteudonav").toggleClass("show");
});


// Manter a barra de navegação fixa no topo
$(document).ready(() => {
    var navbar = $(".pos-f-t");

    // Certifique-se de que o evento scroll está dentro do $(document).ready()
    $(window).scroll(() => {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 50){
            $('nav').css('background-color', '#5d9ef8')
        }else{
            $('nav').css('background-color', 'transparent')
        }
        // Adiciona a classe "fixed-top" para manter a barra de navegação fixa no topo
        navbar.toggleClass("fixed-top", true);
    });
});
