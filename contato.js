console.log('It works')

$(document).ready(function () {
    $('submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')

        var email = $('email').val()
        var subject = $('.subject').val()
        var message = $('message').val()
        var statusElm = $('.status').val()
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            statusElm.append('<div>Email is not valid</div>')
        }

        if (subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            status.append('<div>Subject is not valid</div>')
        }

        if (subject.length >= 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})
