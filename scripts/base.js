/**
 * Insere a classe minecraft no body
 *
 * @return	void
 * @author	Alvino Rodrigues
 */

var minecraft = new function() {
	this.manipular = function() {
		$("#minecraft button").on("click",function() {
			$("body").toggleClass("minecraft");

			var $texto = $(this).children("span");
			if ($texto.text() == "Versão Minecraft") {
				$texto.text("Versão Normal");
			} else {
				$texto.text("Versão Minecraft");
			}
		});
	};
};

(function($){
	minecraft.manipular();
})(jQuery);