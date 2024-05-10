onload = function() {
    const submit = document.querySelector(".intro-comp__submit");
    const errorCont = document.querySelectorAll(".intro-comp__error-cont");
    const input = document.querySelectorAll(".intro-comp__input");
    const errorIcon = document.querySelectorAll(".intro-comp__error-icon");
    const form = document.querySelector(".intro-comp__sign-up");
    const errorArray = [...errorCont];
    const validEmail = /^([a-zA-Z0-9\.\-\\_\]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;

    const addErrors = (a) => {
        errorCont[a].classList.remove("intro-comp__no-error");
        errorCont[a].classList.add("intro-comp__show-error");
        errorIcon[a].classList.add("intro-comp__show-error");
        input[a].placeholder = '';
        input[a].setAttribute("style", "border-color: hsl(0, 100%, 74%)");
    }

    const remErrors = (a) => {
        errorCont[a].classList.remove("intro-comp__show-error");
        errorCont[a].classList.add("intro-comp__no-error");
        errorIcon[a].classList.remove("intro-comp__show-error");
        input[a].setAttribute("style", "border-color: rgba(0,0,0,0.2)");
    }

    function errorContains(err) {
        return err.classList.contains("intro-comp__no-error");          
    }

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        for (let i = 0; i < errorCont.length; i++) {
            if (input[i].value === '') {
                addErrors(i);
            } else {
                remErrors(i);
            }
        }

        if (validEmail.test(input[2].value)) {
            remErrors(2);
        } else {
            addErrors(2);
        }

        if (errorArray.every(errorContains)) {
        form.submit();
        }

    })

   

    





















}
