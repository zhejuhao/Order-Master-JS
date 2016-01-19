/**
 * Created by liqi on 16/1/14.
 */
window.onload = function () {
    addli();
};
function addli() {

    $.getJSON("../JSON/PackageInfo.json", function (data) {
        var pack = data[localStorage.getItem("rest_name")];
        //console.log(pack[0]);
        var ul = document.getElementById("pack-name");
        for (var i = 0; i < pack.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = "<a href='ChoosePage.html' onclick='local_name("+'"'+pack[i].name+'"'+","+'"'+pack[i].price+'"'+")'>" +
                "<h3>" + pack[i].name + "</h3>" +
                 "<p>"+"¥" +(pack[i].price).toFixed(2) +"</p>" +
                "</a>";

            ul.appendChild(li);
            console.log(pack[i].price);
        }

    });
}
function local_name(name,price){
    localStorage.setItem("pack_name",name);
    localStorage.setItem("pack_price",price);
}