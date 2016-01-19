/**
 * Created by liqi on 16/1/14.
 */
window.onload = function () {
    add_name();
    btn_package();
    btn_confirm();
    btn_rest();
};
function add_name() {
    var div_person = document.getElementById("person-name");
    div_person.innerHTML = localStorage.getItem("person_name");
    var div_rest = document.getElementById("rest-name");
    div_rest.innerHTML = localStorage.getItem("rest_name");
    var div_pack = document.getElementById("pack-name");
    div_pack.innerHTML = localStorage.getItem("pack_name");

}
function btn_package() {
    if (document.getElementById("rest-name").innerHTML == "")
    {
        document.getElementById("pack-a").href = "#";
        document.getElementById("pack-a").className = "btn_cannot_click";
    }
    else {
        document.getElementById("pack-a").href = "ChoosePack.html";
        document.getElementById("pack-a").className = "btn"
    }
}
function btn_confirm() {
    if (document.getElementById("person-name").innerHTML != "" &&
        document.getElementById("rest-name").innerHTML != "" &&
        document.getElementById("pack-name").innerHTML != "") {
        document.getElementById("confirm").className = "btn";
    }
    else {
        document.getElementById("confirm").className = "btn_cannot_click";
    }

    document.getElementById("confirm").setAttribute("onclick", "save_info()");
}

function save_info(){

    var order_obj = {"person": localStorage.getItem("person_name"),
        "rest": localStorage.getItem("rest_name"),
        "pack":localStorage.getItem("pack_name"),
        "price":localStorage.getItem("pack_price")};
    var order_info = JSON.parse(localStorage.getItem("info_arr"))||[];
    console.log(order_info);
    order_info.push(order_obj);
    localStorage.setItem("info_arr",JSON.stringify(order_info))
    // 第一次为空，.push不会报错 第二次需要解析
    console.log(order_info);
    document.getElementById("person-name").innerHTML = "";
    document.getElementById("rest-name").innerHTML = "";
    document.getElementById("pack-name").innerHTML = "";
    localStorage.removeItem("person_name");
    localStorage.removeItem("rest_name");
    localStorage.removeItem("pack_name");
    localStorage.removeItem("pack_price");
    location.reload();
}
function btn_rest(){
    document.getElementById("rest").setAttribute
    ("onclick","pack_info()");
}
function pack_info()
{
    //document.getElementById('pack-name').innerHTML = " ";
    localStorage.removeItem("pack_name");
    localStorage.removeItem("pack_price");

}