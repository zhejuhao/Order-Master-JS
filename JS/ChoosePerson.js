/**
 * Created by liqi on 16/1/12.
 */

window.onload = function () {
    addli();
}
function addli() {
    $.getJSON("../JSON/NameInfo.json", function (data) {
        var name = data.name;
        var ul = document.getElementById("add-name");
        for (var i = 0; i < name.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = "<a href='ChoosePage.html' onclick='local_name(" + '"' + name[i] + '"' + ")'>" +
                "<br>" +
                "<h3>" + name[i] + "</h3>" +
                "<br>" +
                "</a>";
            ul.appendChild(li);
        }
    });
}
function local_name(name) {
    localStorage.setItem("person_name", name);
}

