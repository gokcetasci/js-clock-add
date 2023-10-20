let fullName = prompt("Lütfen Adınızı Giriniz:");
let myName = document.getElementById("myName");
myName.innerHTML = `${myName.innerHTML} ${fullName}`;

window.onload = function () {
    function tarihSaat() {
        var date = new Date().toLocaleString('tr-TR');
        document.getElementById("myClock").innerHTML = date;
    }

    setInterval(tarihSaat, 1000);
}
