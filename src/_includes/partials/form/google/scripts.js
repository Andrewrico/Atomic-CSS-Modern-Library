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


function validateUser() {
    const msg = document.querySelector('#response');
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const username = document.querySelector("#username use");
    const usermail = document.querySelector("#usermail use");
    if (name.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your name"
        username.setAttribute('href', "/icons/essentials.svg#icon-exclamation");
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
            username.setAttribute('href', "/icons/essentials.svg#icon-username");
            username.setAttribute('fill', "gray");
        }, 3000);
        return false;
    } else {
        username.setAttribute('fill', "green");
    }
    if (email.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your email address"
        usermail.setAttribute('href', "/icons/essentials.svg#icon-exclamation");
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
            usermail.setAttribute('href', "/icons/essentials.svg#icon-usermail");
            usermail.setAttribute('fill', "gray");
        }, 3000);
        return false;
    } else {
        usermail.setAttribute('fill', "green");
    }
    if ((!(email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)))) {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your email address"
        usermail.setAttribute('href', "/icons/essentials.svg#icon-exclamation");
        animateCSS('#buttonSubmit', 'jello');
        setTimeout(function () {
            msg.style.display = 'none'
            usermail.setAttribute('href', "/icons/essentials.svg#icon-usermail");
            usermail.setAttribute('fill', "gray");
        }, 3000);
        return false;
    } else {
        const emailRecipient = email;
        document.getElementById("recipient").value = emailRecipient;
        usermail.setAttribute('fill', "green");
    }
}

function validateName() {
    var name = document.getElementById('name').value;
    if (name.value == "") {
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;
    if (email.length == 0) {
        return false;
    }
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        return false;
    }
    const emailRecipient = email;
    document.getElementById("recipient").value = emailRecipient;
    return true;
}


window.addEventListener('load', (event) => {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        document.getElementById("navigator").value = 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        document.getElementById("navigator").value = 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        document.getElementById("navigator").value = 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        document.getElementById("navigator").value = 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        document.getElementById("navigator").value = 'IE';
    } else {
        document.getElementById("navigator").value = 'unknown';
    }
    fetch('https://extreme-ip-lookup.com/json/')
    .then(res => res.json())
    .then(response => {
        document.getElementById('ip').value = response.query;
        document.getElementById('city').value = response.city;
        document.getElementById('state').value = response.region;
    })
    .catch((data, status) => {
        console.log('Request failed');
    })
});



function handleSubmit() {
    if (!validateName() || !validateEmail()) {
    // if (!validateUser()) {
        return false;
    } else {
        submitted = true;
        return true;
    }
}

// function handlePromoURL() {
//     if (document.getElementById("buttonSale").click) {
//         window._loq.push(["tag", "{{ title }}"]);
//         window._loq.push(["tag", "Sale"]);
//     }
// };