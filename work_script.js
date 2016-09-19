$(function () {
    $("#icon").hide();
    $("#sbmt").click(function () {
        var length = parseInt($("#num").val());      
        var worker = new worker("fib-work.js");
        worker.onmessage = messageHandler;
        worker.onError = errorHandler;
        worker.postMessage(length);
    });
    function mesagehandler(length) {
        $("#log").html("");
        $("#icon").show();
        var results = [];
        results.push(0);
        results.push(1);
        for (var i = 0; i < length; i++) {
            results.push(results[i] + results[i + 1]);
            $("#log").append("<li>" + results[i] + "</li>");
        }
 $("#icon").hide();
    }
    function errorHandler(e) {
        console.log(e.message);
    }




});