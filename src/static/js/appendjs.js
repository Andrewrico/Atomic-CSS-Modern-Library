  
  addFooter = () => {
	const parent = document.querySelector('.card');
	const footer = document.createElement('footer');
  
	const html = `
	  <p class="footer__p"><span aria-label="checkmark:">✔</span> Your system supports the CSS 5 Media Query <code>prefers-color-scheme</code>.</p>
	`;
	
	footer.classList.add('card__footer', 'footer');
	footer.innerHTML = html;
	
	parent.appendChild(footer);
  }