function ToggleDarkMode()
{
var toggle = document.getElementById('check');

if (toggle.checked == true){
    console.log(true);
    var getItem1 = document.getElementsByClassName('item1');
    var GetIndexOfItem1 = getItem1[0];
    GetIndexOfItem1.style.backgroundColor = "#696969";

    var getItem2 = document.getElementsByClassName('infocard');
    var GetIndexOfItem2 = getItem2[0];
    GetIndexOfItem2.style.backgroundColor = "#696969";

    var getItem3 = document.getElementsByClassName('item3');
    var GetIndexOfItem3 = getItem3[0];
    GetIndexOfItem3.style.backgroundColor = "#585858";
}
else{
    var getItem1 = document.getElementsByClassName('item1');
    var GetIndexOfItem1 = getItem1[0];
    GetIndexOfItem1.style.backgroundColor = "#D0C0C0";

    var getItem3 = document.getElementsByClassName('item3');
    var GetIndexOfItem3 = getItem3[0];
    GetIndexOfItem3.style.backgroundColor = "#E9D2D2";

    var getItem2 = document.getElementsByClassName('infocard');
    var GetIndexOfItem2 = getItem2[0];
    GetIndexOfItem2.style.backgroundColor = "#F4F0F0";
}
}

