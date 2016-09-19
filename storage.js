     /*Web Storage*/

$(function () {
    $("#sbmt").click(function () {
        var jsonData = {
            "Name": $("#txt_name").val(),
            "ID": $("#txt_id").val(),
            "Price": $("#txt_price").val(),
            "Quantity": $("#txt_quan").val()
        };
        var locale = window.localStorage;
        var dataString = JSON.stringify(jsonData);
        locale.setItem("cart", dataString);
        window.location.href = "Cart_Review.html";
    });
});