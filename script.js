var last = null;
$(document).ready(function(){
   $('div').click(function(){
     //$(this).addClass('rreth');
    var myClass =$(this).attr('class');
    //alert(myClass);
    if (myClass != 'bosh') {
		$(this).addClass('rreth');
	}
   });
});       
