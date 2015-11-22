$( document ).ready(function() {
    $("textarea").keyup(function() {
        var data = $("textarea").val();
        console.log(data);
        $("#result").html(data);
    })
});