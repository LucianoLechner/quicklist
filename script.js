const errorMsg = document.getElementById('error-msg')
const btn = document.querySelector('button')

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    errorMsg.classList.add('error-msg-show')

    setTimeout(() => {
        errorMsg.classList.remove('error-msg-show');
    }, 1500);
})