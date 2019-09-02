$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").on("keydown", function (e) {
    if (e.which === 13) {
        let newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});

$("#iconPlus").on("click", function () {
    $("input").fadeToggle();
})