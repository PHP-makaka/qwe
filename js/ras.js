


 function Complete()
        {
          var Elem=document.Sel1.Family.value;
           if (Elem != String(Number(Elem))) {
            alert("Введите число!!!")}
            else{
              $('.qaq').fadeIn(1001);
              var sum= 5*Elem;
              document.getElementsByClassName("qaq")[0].innerHTML = "Итог:"+sum+"$"
            }            
            $('.qaq').fadeOut(5000);
           }
           

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});