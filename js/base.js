/**
 * Insere a classe minecraft no body
 *
 * @return	void
 * @author	Alvino Rodrigues
 */

function ativarClique() {
	document.querySelector('#minecraft-button').addEventListener('click', function(e) {
		document.body.classList.toggle('minecraft');

		var buttonText = this.querySelector('span');
		buttonText.textContent = buttonText.textContent == 'Versão Minecraft' ? 'Versão Normal' : 'Versão Minecraft';
	});
}