$(document).ready(function() {
    
    $("ul.acoes-conta > li:first-child i").click(function(){
        window.location.href="/conta/favorito/listar";
    });
    
    $("ul.acoes-conta > li:nth-child(2) i").click(function(){
        window.location.href="/conta/index";
    });
    
    $("ul.acoes-conta > li:first-child i").attr('title', 'Lista de Desejos');
    $("ul.acoes-conta > li:nth-child(2) i").attr('title', 'Minha Conta');
    
});