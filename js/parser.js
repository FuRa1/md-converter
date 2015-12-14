$(function(){
    var replacer={
        strong: function(text){
            return text.replace(regs.strong,strings.strong)},
        em: function(text){
            return text.replace(regs.em,strings.em)},
        link: function(text){
            return text.replace(regs.link,strings.link)},
        para: function(text){
            return text.replace(regs.para,strings.para)},
        header: function(text){
            return text.replace(regs.header,function($1,$2){
                var head = $2.length;
                var content = $1.slice(head,$1.length+1);
                return "<h"+head+" class=\"headers\">"+"   "+content+"</h"+head+">"})}
    };
    var regs = {
        block: /(#{1,6}.*)/,
        header: /(#{1,6})(.*)/g,
        strong: /\*{2}((.+?\n?)+?)\*{2}/g,
        em: /\*{1}((.+?\n?)+?)\*{1}/g,
        link: /\[(.*)\]\((.*)\)/,
        para: /%{1}(.*)/g};
    var strings ={
        strong: "<strong>"+"$1"+"</strong>",
        em: "<em>"+"$1"+"</em>",
        link: "<a href=\""+"$2"+"\">"+"$1"+"</a>",
        para: "<p"+" class=\"newP\">"+"   "+"$1"+"</p>"};
})
