/* const URL = 'https://api.adviceslip.com'; */
const URL = 'https://api.adviceslip.com/advice';

//creation of the card
$('body').append(`
                    <div class="card">
                        <div class="advice-container">
                            <p class="advice-container__numAdvice"></p>
                            <p class="advice-container__advice"></p>
                        </div>
                    
                        <img src="./images/pattern-divider-desktop.svg" class="card__divider">
                        <button class="card__dice" id="dice">
                            <img src="./images/icon-dice.svg">
                        </button>
                    </div>
                `)

function apiCall() {
    $.get(URL, (res, state) => {
        if(state == "success") {
            console.log(res)

            let response = JSON.parse(res);
            $('.advice-container__numAdvice').html(`ADVICE #${response.slip.id}`)
            $('.advice-container__advice').html(`"${response.slip.advice}"`)
        }
    })
}

apiCall()



$('#dice').click(() => {
    setTimeout(() => {  //adds timeout as every advice is set after 2s.
        apiCall();
    }, 2000)
})
