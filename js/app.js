$( document ).ready(function() {
	hamburguer();
     bLazyImg();
});
/*********************************
			General
*********************************/
function hamburguer() {
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
}

function bLazyImg (){
     window.bLazy = new Blazy({
          offset: 0,
          success: function(ele){
               //TODO: Hacer algo cuando terminé de cargar imagenes
          }
          , error: function(ele, msg){
               if(msg === 'missing'){
                    console.log("b-lazy ERROR: missing");
               }
               else if(msg === 'invalid'){
                    console.log("b-lazy ERROR: invalid");
               }
          },
          breakpoints: [{
               width: 767 // max-width
               , src: 'data-src-small'
          }
          , {
               width: 991 // max-width
               , src: 'data-src-medium'
          }]
     });
}
