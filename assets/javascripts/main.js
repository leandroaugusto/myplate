/* ==========================================================================
 * PROJETO
 * Created: 2014/11/09
 * Version: 1.0
 * Author:  Designer: Nome - nome@gmail.com - www.nome.com
 * 			Front-end: Nome - nome@gmail.com - www.nome.com
 * 			Back-end: Nome - nome@gmail.com - www.nome.com
 * Notes:
 * ========================================================================== */

(function($) {

	//TEST MODERNIZR
	if (Modernizr.geolocation) {
		console.log("Aceita");
	} else {
		console.log("Não Aceita");
	}

	//MYPLATE
	var myPlate = function() {
		console.log("exemplo");
	};

	init = (function() {
		myPlate();
	}());

})(window.jQuery);