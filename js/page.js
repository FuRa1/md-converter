$( document ).ready(function() {
    $("textarea").keyup(function() {
        var data = $("textarea").val();
        console.log(data);
        $("#result").html(data);
        var textArray = $("textarea").val().split(" ");
        console.log(textArray);
        var htmlArray =[];
        for(var i=0; i<textArray.length; i++){
            var indicateH1 = textArray[i].indexOf("$");
             if(indicateH1>=0){
                 htmlArray[i] = "<h1>"+textArray[i].slice(1,textArray[i].length+1)+"</h1>";
             }else{
                 var indicateH2 = textArray[i].indexOf("#");
                    if(indicateH2>=0){
                        htmlArray[i] = "<h2>"+textArray[i].slice(1,textArray[i].length+1)+"</h2>";
                    }else{
                        htmlArray[i]=textArray[i];
                    }
             }
        }
        $("#result").html(htmlArray.join(" "));
        console.log(htmlArray);
    })
});