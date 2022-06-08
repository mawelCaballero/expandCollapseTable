
$(document).ready(function(){
$('table table').hide();
$("td > .fa").on("click",function(e){
   
    $(this).toggleClass("fa-angle-down");
    $(this).toggleClass("fa-angle-up");
    e.preventDefault();
    $(this).closest('tr').next().find('table:first').toggle(); 

 });
});