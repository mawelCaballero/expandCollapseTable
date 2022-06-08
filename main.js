
$(document).ready(function(){

$('input[type="checkbox"]').click(function(){
    $(this).is(":checked") ? $('table table').show() : $('table table').hide();
});
$('table table').hide();
$("td > .fa").on("click",function(e){   
    $(this).toggleClass("fa-angle-down");
    $(this).toggleClass("fa-angle-up");
    e.preventDefault();
    $(this).closest('tr').next().find('table:first').toggle(); 

 });
});