(function () {
'use strict';
// Active Nav Item
// --atomic-currentpage: var(--atomic-primary);
const path = location.pathname.split('/')[1];
const current = document.querySelectorAll('nav a');
if (path === "") {return}
	for (let i = 0, currentPage = current.length; i < currentPage; i++) {
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






// window.addEventListener('load', (event) => {
// 	let tags = {
// 		html: ["html"],
// 		body: ["body"],
// 		section: ["section"],
// 		div: ["div"],
// 		span: ["span"],
// 		img: ["img"],
// 		a: 	 ["a"],
// 		i: 	 ["i"],
// 		p: 	 ["p"],
// 		h1:  ["h6"],
// 		h2:  ["h2"],
// 		h3:  ["h3"],
// 		h4:  ["h4"],
// 		h5:  ["h5"],
// 		h6:  ["h6"]
// 	};
// 	const HTMLtags = document.querySelector('.console_html');
// 	const keys = Object.keys(tags);
// 	for (let j = 0; j < keys.length; j++) {
// 		HTMLtags.innerHTML = HTMLtags.innerHTML.replace( new RegExp("\\b"+keys[j]+"\\b","g"),
// 		`<c>`+keys[j]+`</c>`)
// 	}

// });





  
// addFooter = () => {
// 	const parent = document.querySelector('.card');
// 	const footer = document.createElement('footer');
  
// 	const html = `
// 	  <p class="footer__p"><span aria-label="checkmark:">✔</span> Your system supports the CSS 5 Media Query <code>prefers-color-scheme</code>.</p>
// 	`;
	
// 	footer.classList.add('card__footer', 'footer');
// 	footer.innerHTML = html;
	
// 	parent.appendChild(footer);
//   }