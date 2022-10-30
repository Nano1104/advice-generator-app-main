/* const URL = 'https://api.adviceslip.com'; */
const URL = 'https://api.adviceslip.com/advice';


//adds p elemnts to "advice-container" in the HTML file.
$('.advice-container').append(` 
                                <p class="advice-container__numAdvice"></p>
                                <p class="advice-container__advice"></p>
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
    apiCall()
})
