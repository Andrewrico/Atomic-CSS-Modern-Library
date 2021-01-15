const _drawer = document.querySelector("#drawer");
const _backdrop = document.querySelector("#backdrop");
const _opendrawer = document.querySelector("#open-drawer");
const _closedrawer = document.querySelector("#close-drawer");
const html = document.querySelector("html");

// open drawer if click button
_opendrawer.addEventListener('click', () => {
    _drawer.setAttribute('tabindex', 1);
    _drawer.style.width = '85%';
    _drawer.style.maxWidth = '400px';
    _drawer.style.opacity = '1';
    _backdrop.style.display = 'block';
    html.style.overflow = "hidden";
});
// close drawer if click button
_closedrawer.addEventListener('click', () => {
    _drawer.setAttribute('tabindex', 0);
    _drawer.style.width = '0';
    _drawer.style.maxWidth = '0';
    _drawer.style.opacity = '0';
    _backdrop.style.display = 'none';
    html.style.overflow = "auto";
});
// close drawer if click _backdrop
_backdrop.addEventListener('click', () => {
    _drawer.style.width = '0';
    _drawer.style.maxWidth = '0';
    _drawer.style.opacity = '0';
    _backdrop.style.display = 'none';
    html.style.overflow = "auto";

});
// close drawer if width change
function _whenWidthChange(_addMediaQuery) {
    if (_addMediaQuery.matches) {
        _drawer.style.width = '0';
        _drawer.style.maxWidth = '0';
        _drawer.style.opacity = '0';
        _backdrop.style.display = 'none';
    }
}
// if width change add media query
const _addMediaQuery = window.matchMedia("(min-width: 768px)");
if (matchMedia) {
    _addMediaQuery.addListener(_whenWidthChange);
    _whenWidthChange(_addMediaQuery);
};
