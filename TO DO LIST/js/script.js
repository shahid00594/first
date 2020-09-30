$('ul').on("click", "li", function () {
    $(this).toggleClass('done');
});

$('ul').on("click", "span", function (e) {
    $(this)
        .parent()
        .fadeOut(500, function () {
            $(this).remove();
        });
    e.stopPropagation();
});

$('input').keypress(function (e) {
    if (e.which === 13) {
        var text = $(this).val();
        $(this).val("");
        $('ul').append("<li><span>X</span> " + text + " </li>");
    }
});


$("button").click(function () {
    $("input").fadeToggle();
});