const f_name = document.querySelector("#f_name");
const l_name = document.querySelector("#l_name");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const btn_submit = document.querySelector("#btn_submit");
const errMsg = document.querySelector(".errMsg");

btn_submit.addEventListener('click', (e) => {
    if (f_name.value === '' && l_name.value === ''
        && email.value === '' && tel.value === ''
        && password.value === '' && confirm_password.value === ''
    ) {
        //err
        errMsg.textContent = "Missing fields or value!";
    }

    else if (password.value.length < 8 && confirm_password.value.length < 8) {
        errMsg.textContent = "Password should be of 8 characters.";
    }


    else {
        if (password.value === confirm_password.value) {
            alert(`Account successfully created! Welcome, ${f_name.value}`);
            location.reload()
        }
        else {
            e.preventDefault();
            errMsg.textContent = "Password and confirm password do not match.";
            return;
        } 
    }
});
