$(function(){
    var replacer={
        header: function(text){
            return text.replace(regs.header,function($1,$2){
               var head = $2.length;
               var content = $1.slice(head,$1.length+1);
               return "<h"+head+">"+content+"</h"+head+">"})},
        strong: function(text){
            return text.replace(regs.strong,strings.strong)},
        em: function(text){
            return text.replace(regs.em,strings.em)},
        link: function(text){
            return text.replace(regs.link,strings.link)}};
    var regs = {
        block: /(#{1,6}.*)/,
        header: /(#{1,6})(.*)/,
        strong: /\*{2}((.+?\n?)+?)\*{2}/g,
        em: /\*{1}((.+?\n?)+?)\*{1}/g,
        link: /\[(.*)\]\((.*)\)/};
    var strings ={
        strong: "<strong>"+"$1"+"</strong>",
        em: "<em>"+"$1"+"</em>",
        link: "<a href=\""+"$2"+"\">"+"$1"+"</a>"};
    var parsedTextArray =[];
    $("textarea").keyup(function() {
        var textArray = $("textarea").val().split(regs.block);
        Pars(textArray);});

function Pars(text){
    for(var i = 0; i<text.length; i++){
        text[i] = replacer.strong(text[i]);
        text[i] = replacer.em(text[i]);
        text[i] = replacer.link(text[i]);
        text[i] = replacer.header(text[i]);
        parsedTextArray[i] = text[i];}
    $("#result").html(parsedTextArray.join());};
})
