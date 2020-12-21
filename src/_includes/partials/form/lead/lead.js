const formLanding = document.getElementById('formLanding');
const formStatus = document.getElementById('formStatus');

const loadingButtons = (id) => {
    let buttons = document.getElementById(id);
    buttons.innerHTML = ``
    buttons.style.backgroundColor = "{{ buttonLoadingColor }}"
    buttons.style.backgroundImage = "url('/icons/collection/loading.svg')"
    setTimeout(function () {
        buttons.style.backgroundImage = "url('/icons/collection/tick-white.svg')"
    }, 1800);

};

const animateCSS = (element, animationName, callback) => {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}

const handleValidation = () => {
    const msg = document.querySelector('#response');
    const name = document.forms["formLanding"]["name"];
    const email = document.forms["formLanding"]["email"];
    if (name.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your name"
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        name.focus();
        return false;
    } else if (email.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your email address"
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        email.focus();
        return false;
    } else if ((!(email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)))) {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your email address"
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        email.focus();
        return false;
    } else {
        formStatus.innerHTML = "CONNECTING TO SERVER..."
        setTimeout(() => {formStatus.innerHTML = "THANK YOU!"}, 1000);
        setTimeout(() => {formStatus.innerHTML = `🕛`}, 3200);
        setTimeout(() => {formStatus.innerHTML = `🕕`}, 4200);
        setTimeout(() => {formStatus.innerHTML = `🕕`}, 5200);
        setTimeout(() => {formStatus.innerHTML = `🕘`}, 6200);
        setTimeout(() => {formStatus.innerHTML = "💯"}, 7200);
        loadingButtons('buttonSubmit');
        setTimeout(() => {
            document.getElementById("field_1").style.display = "none";
            document.getElementById("field_2").style.display = "block"
        }, 7000);
        return true;
    }
};

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formLanding)
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Submitted')).catch((error) =>
        alert(error))
    window._loq.push(["tag", "Lead"]);
    formLanding.reset()
}
formLanding.addEventListener("submit", handleSubmit);


const handlePromoURL = () => {
    if (document.getElementById("buttonSale").click) {
        window._loq.push(["tag", "{{ title }}"]);
        window._loq.push(["tag", "Sale"]);
    }
};