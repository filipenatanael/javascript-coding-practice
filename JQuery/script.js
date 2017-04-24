$(function(){
  //Especificado pelo ID(#) do elemento: $('#ID_Elemento').bind('click', function(){
  //Especificado pelo elemento: $('Elemento').bind('click', function(){
  $('button').bind('click', function(){
    $('.div').load("testing.html");
  });
});
