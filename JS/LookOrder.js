/**
 * Created by liqi on 16-1-18.
 */
window.onload = function () {
    var order_result = addli();
    addli_not_order();
    total(order_result);
};
function addli() {
    var order_info = JSON.parse(localStorage.getItem("info_arr"))||[];
    var order_name_arr = [];
    var total_price = 0;
    var ul = document.getElementById("add-name");
    order_info.forEach(function (item) {
        var li = document.createElement("li");
        total_price += Number(item.price);
        console.log(total_price);
        if (Number(item.price) < 12) {
            li.innerHTML = "<a href='#' >" +
                "<h2>" + item.person + "</h2>" +
                "<p class='look-p'>" + item.rest + "&nbsp;" + item.pack + "</p>" +
                "<span class='price'>" + '￥' + Number(item.price).toFixed(2) + "</span>" +
                "</a>";
            ul.appendChild(li);
        }
        else {
            li.innerHTML = "<a href='#' >" +
                "<h2>" + item.person + "</h2>" +
                "<p class='look-p'>" + item.rest + "&nbsp;" + item.pack + "</p>" +
                "<span class='price-red'>" + '￥' + Number(item.price).toFixed(2) + "</span>" +
                "</a>";
            ul.appendChild(li);
        }
        if (order_name_arr.indexOf(item) == -1) {
            order_name_arr.push(item);
        }
    });
    var ordered_number = document.getElementById("already_order");
    ordered_number.innerHTML = "<p>" + order_name_arr.length + "人已定" + "</p>";
    var order_result = [order_name_arr.length, total_price];
    return order_result;
}
function addli_not_order() {
    var order_info = JSON.parse(localStorage.getItem("info_arr"))||[];
    $.getJSON("../JSON/NameInfo.json", function (data) {
        var name = data.name;
        var ul = document.getElementById("not-order-name");
        order_info.forEach(function (item) {
            if (name.indexOf(item.person) > -1) {
                name.splice(name.indexOf(item.person), 1);
            }
        });
        console.log(name);
        for (var i = 0; i < name.length; i++) {
            var li = document.createElement("li");

            li.innerHTML = "<a href='#' >" +
                "<br>" +
                "<h2>" + name[i] + "</h2>" +
                "<br>" +
                "</a>";
            ul.appendChild(li);
        }
        var not_order_number = document.getElementById("not-order");
        not_order_number.innerHTML = "<p>" + name.length + "人未定" + "</p>";
        console.log(name.length);

    });

}
function total(order_result) {
    $.getJSON("../JSON/NameInfo.json", function (data) {
        var name = data.name;
        var div = document.getElementById("number");
        div.innerHTML = "<p>" + order_result[0] + "人已定," +(name.length-order_result[0]) + "人未定，总计" + order_result[1].toFixed(2) + "元" + "</p>";

        console.log(name);
    });
}