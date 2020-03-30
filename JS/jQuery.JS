$(document).ready(function(){

    var resultado=$('#resultado');

    $('.btn-primary').click(function(){
        resultado.animate({
            left: '250px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
            },3000,function(){
                resultado.animate({
                    left: '-20px',
                    opacity: '1',
                    height: '-=150px',
                    width: '-=150px'
            },1000)
            });
        })
    });