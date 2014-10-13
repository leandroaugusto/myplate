/*
	Author: @author
	Project: projeto
*/


(function($) {

	var nomeAqui = function() {
		console.log("exemplo");
	};

	init = (function() {
		nomeAqui();
	}());


})(window.jQuery);


// test modernizr
// if (Modernizr.geolocation) {
//        alert("Aceita")
// } else {
//        alert("Não Aceita")
// }

// $(document).ready(function(){});
// $(window).load(function(){});
// $(window).resize(function(){});


// var NOMEDOPROJETO = NOMEDOPROJETO || {};
// NOMEDOPROJETO.history = NOMEDOPROJETO.history || {};
// NOMEDOPROJETO.history.init = function() {
// }

// NOMEDOPROJETO.products = NOMEDOPROJETO.products || {};
// NOMEDOPROJETO.products.init = function() {
// }

// //INIT
// NOMEDOPROJETO.init = function() {
// 	NOMEDOPROJETO.products.init();
// 	NOMEDOPROJETO.history.init();
// }

// $(window).ready(NOMEDOPROJETO.init);