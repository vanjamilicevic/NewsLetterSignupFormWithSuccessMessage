let subscribe_button = document.getElementById("button")
let modal_button = document.getElementById("modal-button")
let email_input = document.getElementById("email-input")
let error_message = document.getElementById("error-message")
let main_container = document.getElementById("main-container")
let modal = document.getElementById("modal")


function validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

subscribe_button.addEventListener("click", () => {
    if(!validateEmail(email_input.value)){
        error_message.classList.remove("not-visible")
        email_input.classList.add("error-class");
    }
    else {
        error_message.classList.add("not-visible")
        email_input.classList.remove("error-class");
        main_container.classList.add("not-visible")
        modal.classList.remove("not-visible")
    }
})

modal_button.addEventListener("click", () => {
    modal.classList.add("not-visible")
    main_container.classList.remove("not-visible")
})

