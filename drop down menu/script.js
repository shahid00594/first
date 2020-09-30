$(document).ready(function () {
    $('#mode').click(function () {
        if ($('link#styles').attr('href') == "day.css") {
            $('#mode').attr('value', 'light')
            $('link#styles').attr('href', 'night.css')
        } else {
            $('#mode').attr('value', 'Dark')
            $('link#styles').attr('href', 'day.css')
        }
    })

});