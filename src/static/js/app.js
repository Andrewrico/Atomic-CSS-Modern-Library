(function () {
'use strict';
// Active Nav Item
const path = location.pathname.split('/')[1];
const current = document.querySelectorAll('nav a');
if (path === "") {return}
for (var i = 0, count = current.length; i < count; i++) {
	if (current[i].getAttribute("href").indexOf(path) !== -1) {
		current[i].setAttribute("aria-current", "page");
	} else {
		current[i].removeAttribute("aria-current", "page");
	}
}
})();

const themePreference = () => {
	const hasLocalStorage = localStorage.getItem('theme');
	let supports = false;
	let theme = undefined;
	if (hasLocalStorage === 'light') { theme = 'light'; }
	if (hasLocalStorage === 'dark') { theme = 'dark'; }
	if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
	  theme = hasLocalStorage ? hasLocalStorage : 'dark';
	  supports = true;
	};
	if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
	  theme = hasLocalStorage ? hasLocalStorage : 'light';
	  supports = true;
	};
	if (window.matchMedia(`(prefers-color-scheme: no-preference)`).matches) {
	  theme = hasLocalStorage ? hasLocalStorage : 'none';
	  supports = true;
	};
	return {supports, theme};
  }
  document.addEventListener('DOMContentLoaded', e => {
	const userThemePreference = themePreference();
	const toggle = document.querySelector('[mode]');
	const body = document.body;
	const setTheme = () => {
	  switch(userThemePreference.theme) {
		case 'dark':
		  toggle.checked = true;
		  body.classList.add('dark');
		  body.classList.remove('light');
		  break;
		case 'light':
		  toggle.checked = false;
		  body.classList.remove('dark');
		  body.classList.add('light');
		  break;
	  }
	}  
	setTheme();
	toggle.addEventListener('click', e => {
	  if (toggle.checked) {
		body.classList.add('dark');
		body.classList.remove('light');
		localStorage.setItem('theme', 'dark');
	  } else {
		body.classList.remove('dark');
		body.classList.add('light');
		localStorage.setItem('theme', 'light');
	  }
	}, false);
  }, false);