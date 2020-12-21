let loadingTimeout = 1000,
    focusTimeout = 600,
    loadingButtonTimeout = 1800;
const loadingButtons = (id) => {
    const layer = document.getElementById("backdrop_transparent")
    const dna = document.getElementById("progressbar-dna")
    let buttons = document.getElementById(id);
    buttons.innerHTML = `<span style="font-size:10.5px; color:#000; text-transform:uppercase;">LOADING...</span>`;
    buttons.style.backgroundColor = "white";
    buttons.style.backgroundImage = "url('/icons/collection/loading-ring.svg')";
    layer.style.display = "block";
    dna.style.opacity = "1";
    setTimeout(() => {
        layer.style.display = "none";
        dna.style.opacity = "0";
    }, loadingButtonTimeout);
};

const focusEl = document.getElementsByClassName("form")[0];
focusEl.onkeyup = function (e) {
    let target = e.spinner.gifElement || e.target;
    let maxLength = parseInt(target.attributes['maxlength'].value, 10);
    let _length = target.value.length;
    if (_length >= maxLength) {
        let next = target;
        while (next = next.nextElementSibling) {
            if (next === null)
                break;
            if (next.tagName.toLowerCase() == "input" || next.tagName.toLowerCase() == "button") {
                next.focus();
                break;
            }
        }
    }
};

class Alert {
    static notipopup(message, className) {
        const notiEl = document.createElement('span');
        const notification = document.querySelector('#notification');
        const field = document.querySelector('.notification');
        notiEl.className = `alert alert-${className}`;
        notiEl.appendChild(document.createTextNode(message));
        notification.insertBefore(notiEl, field);
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
};

const progress = document.querySelector('#progressbar');
animateLoop = (element, animationName, callback) => {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
        if (typeof callback === 'function') callback();
    }
    node.addEventListener('animationend', handleAnimationEnd);
};

const userAgeLIst = document.getElementById("user-age-list")
let userAgeArray = [];
for (let i = 18; i <= 64; i++) {
    userAgeArray.push(i)
}
userAgeArray.forEach(function (element, index) {
    userAgeArray[index] = element + ' y/o'
    let option = document.createElement("option")
    let optionText = document.createTextNode(userAgeArray[index])
    option.appendChild(optionText);
    option.setAttribute("value", userAgeArray[index]);
    userAgeLIst.insertBefore(option, userAgeLIst.firstChild)
});

const spouseAgeLIst = document.getElementById("spouse-age-list")
let spouseAgeArray = [];
for (let i = 18; i <= 64; i++) {
    spouseAgeArray.push(i)
}
spouseAgeArray.forEach(function (element, index) {
    spouseAgeArray[index] = element + ' y/o'
    let option = document.createElement("option")
    let optionText = document.createTextNode(spouseAgeArray[index])
    option.appendChild(optionText);
    option.setAttribute("value", spouseAgeArray[index]);
    spouseAgeLIst.insertBefore(option, spouseAgeLIst.firstChild)
});

const input = document.getElementsByTagName('input')
Array.prototype.slice.call(input).forEach(function (input) {
    input.addEventListener('keydown', keydownPressed);

    function keydownPressed(e) {
        if (e.which == 13) e.preventDefault()
    }
});

document.getElementById("i_location").style.backgroundImage = "url('/icons/collection/location.svg')";

const fieldVerify = () => {
    let verify = document.getElementsByName("check_user_verify")
    verify.forEach(radioButton);
    function radioButton(verify) {
        window._loq.push(["tag", "Alert: Submitted by a Bot"]);
        verify.addEventListener("click", location.href = "/");
        return true
    }
};

window.onload = () => {
    getZipcodeFunction();
    attachZipcodeValue();
    window._loq = window._loq || [];
    window._loq.push(["tag", "Insured"]); 
};


formField1 = () => {
    let input1 = document.getElementsByName("question_1");
    while(input1[0].checked == true || input1[1].checked == true ||
        input1[2].checked == true || input1[3].checked == true ||
        input1[4].checked == true || input1[5].checked == true) {
        window._loq.push(["tag", "Age"]); 
        if (input1[0].checked == true) {
            loadingButtons('question_1_answer_1');
            document.getElementById("i_user_insured").style.backgroundImage = "url('/icons/blur.svg')"
        }
        if (input1[1].checked == true) {
            loadingButtons('question_1_answer_2');
            document.getElementById("i_user_insured").style.backgroundImage = "url('/icons/blur.svg')"
        }
        setTimeout(() => {
            document.getElementById("field_1").style.display = "none";
            document.getElementById("field_2").style.display = "block";
            progress.dataset.progress = 7;
            setTimeout(() => document.getElementById("check_user_age").focus(), focusTimeout);
        }, loadingTimeout);

        return true;
    }
};
formField2 = () => {
    let input2 = document.getElementById("check_user_age").value;
    if (input2 == '') {
        animateLoop('#check_user_age', 'jello');
        Alert.notipopup('Please enter your age', 'danger');
    } else if (input2 < 18) {
        animateLoop('#check_user_age', 'jello');
        Alert.notipopup('Underage', 'danger');
    } else if (input2 > 64) {
        animateLoop('#check_user_age', 'jello');
        Alert.notipopup('invalid age', 'danger');
    } else if (input2 < 18 || input2 > 64) {
        animateLoop('#check_user_age', 'jello');
        Alert.notipopup('Please enter a valid age', 'danger');
    } else {
        window._loq.push(["tag", "Income"]); // - Tag
        setTimeout(() => {
            document.getElementById("i_user_calendar").style.backgroundImage = "url('/icons/form/user-calendar.svg')";
            document.getElementById("i_user_calendar").style.opacity = "1"
        }, 500);
        setTimeout(() => {
            document.getElementById("i_user_calendar").style.bottom = "60%"
        }, 750);
        setTimeout(() => {
            document.getElementById("d7").style.opacity = "1"
        }, 2000);
        setTimeout(() => {
            document.getElementById("d6").style.opacity = "1"
        }, 3000);
        setTimeout(() => {
            document.getElementById("field_2").style.display = "none";
            document.getElementById("field_3").style.display = "grid";
            progress.dataset.progress = 14;
        }, loadingTimeout);
        loadingButtons('user-dob');
        return true;
    }
};

formField3 = () => {
    let input3 = document.getElementsByName("check_user_income");
    while (input3[0].checked == true || input3[1].checked == true || input3[2].checked == true || input3[3].checked == true) {
        window._loq.push(["tag", "Tobacco"]); // - Tag
        document.getElementById("i_user_calendar").style.left = "20%";
        setTimeout(() => {
            document.getElementById("d23").style.opacity = "1";
        }, 500);
        setTimeout(() => {
            setTimeout(() => {
                document.getElementById("i_user_calendar").style.height = "60px";
                document.getElementById("i_user_calendar").style.width = "60px";
            }, 2000);
            document.getElementById("i_user_income").style.opacity = "1";
            document.getElementById("i_user_income").style.backgroundImage = "url('/icons/form/user-income.svg')";
            setTimeout(() => {
                document.getElementById("i_user_income").style.bottom = "35%"
            }, 1000);
            setTimeout(() => {
                document.getElementById("d5").style.opacity = "1"
            }, 2000);
            setTimeout(() => {
                document.getElementById("d4").style.opacity = "1"
            }, 2500);
        }, loadingTimeout);
        setTimeout(() => {
            document.getElementById("field_3").style.display = "none";
            document.getElementById("field_4").style.display = "grid";
            progress.dataset.progress = 21;
        }, loadingTimeout);
        if (input3[0].checked == true) {
            loadingButtons('user-income-less-than-12001');
        } else if (input3[1].checked == true) {
            loadingButtons('user-income-12001-25001');
        } else if (input3[2].checked == true) {
            loadingButtons('user-income-25001-50001');
        } else if (input3[3].checked == true) {
            loadingButtons('user-income-more-than-50001');
        }
        return true;
    }
};

formField4 = () => {
    let input4 = document.getElementsByName("check_user_tobacco");
    while (input4[0].checked == true || input4[1].checked == true) {
        window._loq.push(["tag", "Gender"]); // - Tag
        setTimeout(() => {
            document.getElementById("field_4").style.display = "none";
            document.getElementById("field_5").style.display = "grid";
            progress.dataset.progress = 28;
        }, loadingTimeout);
        document.getElementById("i_user_tobacco").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("i_user_tobacco").style.bottom = "60%"
        }, 1000);
        setTimeout(() => {
            document.getElementById("i_user_tobacco").style.left = "70%"
        }, 3000);
        setTimeout(() => {
            document.getElementById("i_user_tobacco").style.height = "60px";
            document.getElementById("i_user_tobacco").style.width = "60px";
        }, 3500);
        setTimeout(() => {
            document.getElementById("d25").style.opacity = "1";
        }, 3500);
        setTimeout(() => {
            document.getElementById("d26").style.opacity = "1";
        }, 4000);
        if (input4[0].checked == true) {
            document.getElementById("i_user_tobacco").style.backgroundImage = "url('/icons/form/user-tobacco-yes.svg')";
            loadingButtons('user-tobacco-yes');
        } else if (input4[1].checked == true) {
            document.getElementById("i_user_tobacco").style.backgroundImage = "url('/icons/form/user-tobacco-no.svg')";
            loadingButtons('user-tobacco-no');
        }
        return true;
    }
};

formField5 = () => {
    let input5 = document.getElementsByName("check_user_gender");
    while (input5[0].checked == true || input5[1].checked == true) {
        window._loq.push(["tag", "Spouse"]); // - Tag
        if (input5[0].checked == true) {
            loadingButtons('user-gender-male');
            document.getElementById("i_user_gender").style.opacity = "1";
            document.getElementById("i_user_gender").style.bottom = "60%";
            document.getElementById("i_user_gender").style.backgroundImage = "url('/icons/form/user-gender-male.svg')";
            document.getElementById("i_masculine").style.backgroundImage = "url('/icons/form/gender-man.svg')";
        } else if (input5[1].checked == true) {
            loadingButtons('user-gender-female');
            document.getElementById("i_user_gender").style.opacity = "1";
            document.getElementById("i_user_gender").style.bottom = "60%";
            document.getElementById("i_user_gender").style.backgroundImage = "url('/icons/form/user-gender-female.svg')";
            document.getElementById("i_masculine").style.backgroundImage = "url('/icons/form/gender-woman.svg')";
        }
        setTimeout(() => {
            document.getElementById("field_5").style.display = "none";
            document.getElementById("field_6").style.display = "grid";
            progress.dataset.progress = 35;
        }, loadingTimeout);
        return true;
    }
}

formField6 = () => {
    let input6 = document.getElementsByName('check_spouse_add');
    while (input6[0].checked == true || input6[1].checked == true) {
        if (input6[0].checked == true) {
            document.getElementById("i_user_spouse").style.backgroundImage = "url('/icons/form/user-spouse-incognitus.svg')";
            setTimeout(() => {
                document.getElementById("i_masculine").style.bottom = "45%";
                document.getElementById("i_masculine").style.left = "05%";
                document.getElementById("i_masculine").style.opacity = "1";
            }, 2000);
            document.getElementById("i_user_spouse").style.opacity = "1";
            document.getElementById("i_user_spouse").style.bottom = "60%";
            document.getElementById("i_user_gender").style.left = "20%";
            document.getElementById("i_user_tobacco").style.left = "20%";
            document.getElementById("i_user_calendar").style.left = "05%";
            setTimeout(() => {
                document.getElementById("i_user_spouse").style.left = "70%";
                document.getElementById("i_user_tobacco").style.bottom = "45%";
            }, 3000);
            window._loq.push(["tag", "Spouse Age"]);
            setTimeout(() => {
                document.getElementById("field_6").style.display = "none";
                document.getElementById("field_7").style.display = "grid";
                progress.dataset.progress = 42;
                setTimeout(() => {
                    document.getElementById("spouse_dob_month").focus();
                }, focusTimeout);
            }, loadingTimeout);
        } else if (input6[1].checked == true) {
            document.getElementById("i_user_spouse").style.backgroundImage = "url('/icons/form/user-spouse-incognitus.svg')";
            document.getElementById("i_femenine").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("i_femenine").style.bottom = "45%";
                document.getElementById("i_femenine").style.left = "95%";
            }, 2000);
            window._loq.push(["tag", "Dependant"]);
            setTimeout(() => {
                document.getElementById("field_6").style.display = "none";
                document.getElementById("field_10").style.display = "grid";
                progress.dataset.progress = 49;
            }, loadingTimeout);
        }
        if (input6[0].checked == true) {
            loadingButtons('user-add-spouse-yes');
        } else if (input6[1].checked == true) {
            loadingButtons('user-add-spouse-no');
        }
        return true;
    }
};

formField7 = () => {
    let input7 = document.getElementById("check_spouse_age").value;
    if (input7 == '') {
        animateLoop('#check_spouse_age', 'jello');
        Alert.notipopup('Please enter your age', 'danger');
    } else if (input7 < 18) {
        animateLoop('#check_spouse_age', 'jello');
        Alert.notipopup('Underage', 'danger');
    } else if (input7 > 64) {
        animateLoop('#check_spouse_age', 'jello');
        Alert.notipopup('invalid age', 'danger');
    } else if (input7 < 18 || input7 > 64) {
        animateLoop('#check_spouse_age', 'jello');
        Alert.notipopup('Please enter a valid age', 'danger');
    } else {
        window._loq.push(["tag", "Spouse Tobacco"]); // - Tag
        setTimeout(() => {
            document.getElementById("i_spouse_dob").style.backgroundImage = "url('/icons/form/spouse-calendar.svg')";
            document.getElementById("i_spouse_dob").style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById("i_spouse_dob").style.left = "90%";
        }, 1000);
        loadingButtons('spouse-dob');
        setTimeout(() => {
            document.getElementById("field_7").style.display = "none";
            document.getElementById("field_8").style.display = "grid";
            progress.dataset.progress = 56;
        }, loadingTimeout);
        return true;
    }
};

formField7 = () => {
    let input7m = document.getElementById("spouse_dob_month").value;
    let input7d = document.getElementById("spouse_dob_day").value;
    let input7y = document.getElementById("spouse_dob_year").value;
    if (input7m == '' && input7d == '' && input7y == '') {
        animateLoop('#spouse_dob_month', 'jello');
        animateLoop('#spouse_dob_day', 'jello');
        animateLoop('#spouse_dob_year', 'jello');
        Alert.notipopup("Please enter your spouse's date of birth", "danger");
    } else if (input7m == '') {
        animateLoop('#spouse_dob_month', 'jello');
        Alert.notipopup('Please enter a month of the year', 'danger');
    } else if (input7d == '') {
        animateLoop('#spouse_dob_day', 'jello');
        Alert.notipopup('Please enter a day of the month', 'danger');
    } else if (input7y == '') {
        animateLoop('#spouse_dob_year', 'jello');
        Alert.notipopup('Please enter a year', 'danger');
    } else if (input7m < 1 || input7m > 12) {
        animateLoop('#spouse_dob_month', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else if (input7d < 1 || input7d > 31) {
        animateLoop('#spouse_dob_day', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else if (input7y < 1950 || input7y > 2010) {
        animateLoop('#spouse_dob_year', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else {
        window._loq.push(["tag", "Spouse Tobacco"]);
        setTimeout(() => {
            document.getElementById("i_spouse_dob").style.backgroundImage = "url('/icons/form/spouse-calendar.svg')";
            document.getElementById("i_spouse_dob").style.opacity = "1";
        }, 500);
        setTimeout(() => {
            document.getElementById("i_spouse_dob").style.left = "90%";
        }, 1000);
        loadingButtons('spouse-dob');
        setTimeout(() => {
            document.getElementById("field_7").style.display = "none";
            document.getElementById("field_8").style.display = "grid";
            progress.dataset.progress = 56;
        }, loadingTimeout);
        return true;
    }
};

formField8 = () => {
    let input8 = document.getElementsByName("check_spouse_tobacco");
    while (input8[0].checked == true || input8[1].checked == true) {
        window._loq.push(["tag", "Spouse Gender"]); // - Tag
        if (input8[0].checked == true) {
            document.getElementById("i_spouse_tobacco").style.backgroundImage = "url('/icons/form/spouse-tobacco-yes.svg')";
            loadingButtons('spouse-tobacco-yes');
        } else if (input8[1].checked == true) {
            document.getElementById("i_spouse_tobacco").style.backgroundImage = "url('/icons/form/spouse-tobacco-no.svg')";
            loadingButtons('spouse-tobacco-no');
        }
        document.getElementById("i_spouse_tobacco").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("i_spouse_tobacco").style.bottom = "45%";
        }, 1000);
        setTimeout(() => {
            document.getElementById("d25").style.opacity = "1";
        }, 3500);
        setTimeout(() => {
            document.getElementById("d26").style.opacity = "1";
        }, 4000);
        setTimeout(() => {
            document.getElementById("field_8").style.display = "none";
            document.getElementById("field_9").style.display = "grid";
            progress.dataset.progress = 62;
        }, loadingTimeout);
        return true;
    }
};

formField9 = () => {
    let input9 = document.getElementsByName("check_spouse_gender");
    while (input9[0].checked == true || input9[1].checked == true) {
        window._loq.push(["tag", "Dependant"]);
        if (input9[1].checked == true) {
            loadingButtons('spouse-gender-female');
            document.getElementById("i_user_spouse").style.backgroundImage = "url('/icons/form/user-spouse-female.svg')";
            document.getElementById("i_femenine").style.backgroundImage = "url('/icons/form/gender-woman.svg')";
            document.getElementById("i_femenine").style.opacity = "1";
        } else if (input9[0].checked == true) {
            loadingButtons('spouse-gender-male');
            document.getElementById("i_user_spouse").style.backgroundImage = "url('/icons/form/user-spouse-male.svg')";
            document.getElementById("i_femenine").style.backgroundImage = "url('/icons/form/gender-man.svg')";
            document.getElementById("i_femenine").style.opacity = "1";
        }
        setTimeout(() => {
            document.getElementById("field_9").style.display = "none";
            document.getElementById("field_10").style.display = "grid";
            progress.dataset.progress = 69;
        }, loadingTimeout);
        return true;
    }
};

formField10 = () => {
    let input10 = document.getElementsByName('check_dependant_add');
    while (input10[0].checked == true || input10[1].checked == true) {
        if (input10[0].checked == true) {
            window._loq.push(["tag", "Dependant Count"]); // - Tag
            setTimeout(() => {
                document.getElementById("i_add_dependant").style.backgroundImage = "url('/icons/form/dependant-add.svg')";
                document.getElementById("i_add_dependant").style.opacity = "1";
                document.getElementById("i_user_income").style.bottom = "35%";
                document.getElementById("i_add_dependant").style.bottom = "05%";
            }, 1000);
            setTimeout(() => {
                document.getElementById("d3").style.opacity = "1";
            }, 2800);
            setTimeout(() => {
                document.getElementById("d2").style.opacity = "1";
            }, 3200);
            setTimeout(() => {
                document.getElementById("field_10").style.display = "none";
                document.getElementById("field_11").style.display = "grid";
                setTimeout(() => {
                    document.getElementById("dependant_dob_month").focus();
                }, focusTimeout);
            }, loadingTimeout);
            progress.dataset.progress = 75;
        } else if (input10[1].checked == true) {
            window._loq.push(["tag", "Name"]); // - Tag
            setTimeout(() => {
                document.getElementById("i_add_dependant").style.opacity = "0";
            }, 1000);
            setTimeout(() => {
                document.getElementById("field_10").style.display = "none";
                document.getElementById("field_13").style.display = "grid";
                progress.dataset.progress = 75;
            }, loadingTimeout);
        }
        if (input10[0].checked == true) {
            loadingButtons('yes_add_dependant');
        } else if (input10[1].checked == true) {
            loadingButtons('no_add_dependant');
        }
        return true;
    }
};

formField11 = () => {
    let input11 = document.getElementById("dependant_count").value;
    if (input11 == '') {
        animateLoop('#dependant_count', 'jello');
        Alert.notipopup("Enter a number between 1 to 6", "danger");
    } else if (input11 < 1 || input11 > 6) {
        animateLoop('#dependant_count', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else {
        window._loq.push(["tag", "Name"]); // - Tag
        loadingButtons('dependant_DOB');
        setTimeout(() => {
            document.getElementById("field_11").style.display = "none";
            document.getElementById("field_13").style.display = "grid";
            progress.dataset.progress = 80;
        }, loadingTimeout);
        return true;
    }
};

formField11 = () => {
    let input11m = document.getElementById("dependant_dob_month").value;
    let input11d = document.getElementById("dependant_dob_day").value;
    let input11y = document.getElementById("dependant_dob_year").value;
    if (input11m == '' && input11d == '' && input11y == '') {
        animateLoop('#dependant_dob_month', 'jello');
        animateLoop('#dependant_dob_day', 'jello');
        animateLoop('#dependant_dob_year', 'jello');
        Alert.notipopup("Please enter your dependant's date of birth", "danger");
    } else if (input11m == '') {
        animateLoop('#dependant_dob_month', 'jello');
        Alert.notipopup('Please enter a month of the year', 'danger');
    } else if (input11d == '') {
        animateLoop('#dependant_dob_day', 'jello');
        Alert.notipopup('Please enter a day of the month', 'danger');
    } else if (input11y == '') {
        animateLoop('#dependant_dob_year', 'jello');
        Alert.notipopup('Please enter a year', 'danger');
    } else if (input11m < 1 || input11m > 12) {
        animateLoop('#dependant_dob_month', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else if (input11d < 1 || input11d > 31) {
        animateLoop('#dependant_dob_day', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else if (input11y < 2000 || input11y > 2018) {
        animateLoop('#dependant_dob_year', 'jello');
        Alert.notipopup('Please enter a valid number', 'danger');
    } else {
        window._loq.push(["tag", "Dependant Gender"]);
        loadingButtons('dependant_DOB');
        setTimeout(() => {
            document.getElementById("field_11").style.display = "none";
            document.getElementById("field_12").style.display = "grid";
            progress.dataset.progress = 80;
        }, loadingTimeout);
        return true;
    }
};

formField12 = () => {
    let input12 = document.getElementsByName("check_dependant_gender");
    if (input12[0].checked == true || input12[1].checked == true) {
        window._loq.push(["tag", "Name"]);
        if (input12[0].checked == true) {
            loadingButtons('i_dependant_male');
        } else if (input12[1].checked == true) {
            loadingButtons('i_dependant_female');
        }
        setTimeout(() => {
            document.getElementById("field_12").style.display = "none";
            document.getElementById("field_13").style.display = "grid";
            progress.dataset.progress = 85;
            setTimeout(() => {
                document.getElementById("check_user_name").focus();
            }, focusTimeout);
        }, loadingTimeout);
        return true;
    }
};

formField13 = () => {
    let input13a = document.getElementById("check_user_name").value;
    let input13b = document.getElementById("check_user_lastName").value;
    if (input13a == '' && input13b == '') {
        animateLoop('#check_user_name', 'jello');
        animateLoop('#check_user_lastName', 'jello');
        Alert.notipopup('Please enter your names', 'danger');
    } else if (input13a == '') {
        animateLoop('#check_user_name', 'jello');
        Alert.notipopup('The field is empty', 'danger');
    } else if (input13a < 2) {
        animateLoop('#check_user_name', 'jello');
        Alert.notipopup('Your firstame is too short to be valid', 'danger');
    } else if (!(input13a.match(/^[a-zA-Z ]{2,30}$/))) {
        animateLoop('#check_user_name', 'jello');
        Alert.notipopup('Your first name is invalid', 'danger');
    } else if (input13b == '') {
        animateLoop('#check_user_lastName', 'jello');
        Alert.notipopup('The field is empty', 'danger');
    } else if (input13b < 2) {
        animateLoop('#check_user_lastName', 'jello');
        Alert.notipopup('Your last name is too short to be valid', 'danger');
    } else if (!(input13b.match(/^[a-zA-Z ]{2,30}$/))) {
        animateLoop('#check_user_lastName', 'jello');
        Alert.notipopup('Your last name is invalid', 'danger');
    } else {
        window._loq.push(["tag", "Email"]); // - Tag
        loadingButtons('user__name');
        setTimeout(() => {
            document.getElementById("field_13").style.display = "none";
            document.getElementById("field_14").style.display = "grid";
            progress.dataset.progress = 90;
            setTimeout(() => {
                document.getElementById("check_user_email").focus();
            }, focusTimeout);
        }, loadingTimeout);
        return true;
    }
};


// formField14
formField14 = () => {
    let input14 = document.getElementById("check_user_email").value;
    if (input14 == '') {
        animateLoop('#check_user_email', 'jello');
        Alert.notipopup('The field is empty', 'danger');
    } else if (input14 < 5) {
        animateLoop('#check_user_email', 'jello');
        Alert.notipopup('Email is too short to be valid', 'danger');
    } else if (!(input14.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/))) {
        animateLoop('#check_user_email', 'jello');
        Alert.notipopup('Email is invalid', 'danger');
    } else {
        window._loq.push(["tag", "Phone Number"]); // - Tag
        loadingButtons('user__email');
        setTimeout(() => {
            document.getElementById("field_14").style.display = "none";
            document.getElementById("field_15").style.display = "grid";
            progress.dataset.progress = 95;
            setTimeout(() => {
                document.getElementById("check_user_tel").focus();
            }, focusTimeout);
        }, loadingTimeout);
        return true;
    }
};

formField15 = () => {
    let input15 = document.getElementById("check_user_tel").value;
    if (input15 == '') {
        animateLoop('#check_user_tel', 'jello');
        Alert.notipopup('The field is empty', 'danger');
    } else if (input15 < 9) {
        animateLoop('#check_user_tel', 'jello');
        Alert.notipopup('Phone number is too short to be valid', 'danger');
    } else if (!(input15.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/))) {
        animateLoop('#check_user_tel', 'jello');
        Alert.notipopup('Phone number is invalid', 'danger');
    } else {
        window._loq.push(["tag", "Submit"]); // - Tag
        loadingButtons('user__phone');
        setTimeout(() => {
            document.getElementById("field_15").style.display = "none";
            document.getElementById("field_submit").style.display = "grid";
            progress.dataset.progress = 100;
        }, loadingTimeout);
        return true;
    }
};
inputRedirect = () => {
    if (document.getElementById("submit").click) {
        loadingButtons('submit');
        document.querySelector('.dot').classList.add("rotateIn");
        Alert.notipopup('Loading available plans...', 'success');
        setTimeout(() => {
            location.href = "/enrollment/";
        }, loadingTimeout);
    }
};



const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105));
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || (key === 8 || key === 9 || key === 13 || key === 46) || (key > 36 && key < 41) ||
        ((event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
};
const enforceFormat = (event) => {
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};
formatToPhone = (event) => {
    if (isModifierKey(event)) {
        return;
    }
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10);
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    if (input.length > 6) {
        target.value = `(${zip}) ${middle} - ${last}`;
    } else if (input.length > 3) {
        target.value = `(${zip}) ${middle}`;
    } else if (input.length > 0) {
        target.value = `(${zip}`;
    }
};

const inputElement = document.getElementById('check_user_tel');
inputElement.addEventListener('keydown', enforceFormat);
inputElement.addEventListener('keyup', formatToPhone);