$(function () {
    $("#convert").click(function () {
        var sourseText = $("#source").val();
        var resultText = window.parse(sourseText);

        $("#result").html(resultText);
    });
});
