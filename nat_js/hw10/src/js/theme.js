const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const savedTheme = localStorage.getItem('Theme');
console.log(savedTheme);
if (savedTheme) {
	bodyRef.classList.add('dark-theme');
	// checkboxRef.checked = true;
}
checkboxRef.addEventListener('change', changeTheme);

function changeTheme(event) {
	console.log(event.target.checked);

	if (!event.target.checked) {
		bodyRef.classList.add('dark-theme');
		localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
		console.log(checkboxRef);
		// checkboxRef.checked = !event.target.checked;
		return;
	}

	// if (classList === false) {
	// 	bodyRef.classList.add('dark-theme');
	// 	localStorage.setItem(Theme, JSON.stringify(Theme.DARK));
	// 	checkboxRef.checked = true;
	// }

	bodyRef.classList.remove('dark-theme');
	localStorage.removeItem('Theme');
	// checkboxRef.checked = !event.target.checked;
}
