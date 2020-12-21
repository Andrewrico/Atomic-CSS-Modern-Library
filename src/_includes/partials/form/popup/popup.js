const formPopup = document.getElementById('formPopup');

const handleValidation = () => {
    const msg = document.querySelector('#response');
    const name = document.forms["form_popup"]["name"];
    const email = document.forms["form_popup"]["email"];
    if (name.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please fill out the required fields";
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        name.focus();
        return false;
    } else if (email.value == "") {
        msg.style.display = 'block'
        msg.innerHTML = "Please type your email address"
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        email.focus();
        return false;
    } else if ((!(email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)))) {
        msg.style.display = 'block'
        msg.innerHTML = "Please type a valid email address"
        setTimeout(function () {
            msg.style.display = 'none'
        }, 3000);
        email.focus();
        return false;
    } else {
        msg.style.display = 'block'
        msg.innerHTML = "Thank You!";
        setTimeout(function () {
            msg.style.display = 'none'
        }, 1400);
        return true;
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formPopup)
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Submitted')).catch((error) => alert(error));
    formPopup.reset()
    setTimeout(function () { document.location.href="/" }, 1400)}
formPopup.addEventListener("submit", handleSubmit); 



