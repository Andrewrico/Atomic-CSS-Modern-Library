const navbarlinks = document.querySelectorAll('.navbar li a');
Array.from(navbarlinks).forEach(function (navbarlink, i) {
	navbarlink.setAttribute("id", 'page-' + (i + 1));
});
