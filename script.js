
//movimento da navbar
$(document).ready(() => {
    // Certifique-se de que o evento scroll está dentro do $(document).ready()
    $(window).scroll(() => {
        // ToggleClass para alternar a classe
        $(".navbar").toggleClass("navbar-colored", $(this).scrollTop() > 50);
    });
});