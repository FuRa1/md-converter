$(function(){
   /* var RegObj = {
        block: /(#{1,6}.*)/,
        header: /(#{1,6})(.*)/,
        em: /\*{1}((.+?\n?)+?)\*{1}/g,
        strong: /\*{2}((.+?\n?)+?)\*{2}/g,
        link: /\[(.*)\]\((.*)\)/
    }; */
    var block = /(#{1,6}.*)/;
    var header = /(#{1,6})(.*)/;
    var em = /\*{1}((.+?\n?)+?)\*{1}/g;
    var strong = /\*{2}((.+?\n?)+?)\*{2}/g;
    var link = /\[(.*)\]\((.*)\)/;
    var textArray=[];
    var parsedTextArray =[];

    $("textarea").keyup(function() {
        textArray = $("textarea").val().split(block);
        Pars(textArray);
    });

function Pars(text){
        var textClone = text;
    alert(typeof (textClone));
    for(var key in textClone){
        var newText = textClone.key;
        console.log(newText);
        newText = newText.replace(strong, "<strong>"+"$1"+"</strong>");
        newText = newText.replace(em, "<em>"+"$1"+"</em>");
        newText = newText.replace(link,"<a href=\""+"$2"+"\">"+"$1"+"</a>");
        newText = newText.replace(header,"<h"+"$1".length+">"+"$2"+"</h"+"$1".length+">");
        parsedTextArray.push(newText);
    }
    $("#result").html(parsedTextArray.join(/\n/));
};
})