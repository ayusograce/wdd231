//The button and navigation
export function setupNavigation(menuSelector = '#menu', navSelector = 'nav') {
	const hamButton = document.querySelector(menuSelector);
	const navigation = document.querySelector(navSelector);
  
	if (!hamButton || !navigation) return;
  
	hamButton.addEventListener('click', () => {
	  navigation.classList.toggle('open');
	  hamButton.classList.toggle('open');
	});
}