
$(document).ready(function(){

$('input[type="checkbox"]').click(function(){
    $(this).is(":checked") ? $("table table").not('#popup-overlay').show() : $("table table").not('#popup-overlay').hide();
});
$('table table').hide();
$("td > .fa").on("click",function(e){   
    $(this).toggleClass("fa-angle-down");
    $(this).toggleClass("fa-angle-up");
    e.preventDefault();
    $(this).closest('tr').next().find('table:first').toggle(); 

 });





 $("td > .fa").hover(function(){
     var innerTableContent =  $(this).closest('tr').next().find('td:first').html();
     $(".popup-content").html('');
     $(".popup-content").append(innerTableContent);
     $(".popup-overlay").find('table:first').css('display','block');
     $(".popup-overlay").show();
     
 
 });

 $(".fa-close").on("click",function(e){   
    $(".popup-overlay").hide();
    });


});
