// // 初期状態　コンタクトボタン
document.getElementById("humburger_menu_contact_button").style.display ="none";


function clickMenu(){
  var str = document.getElementById("humburger_menu_contact_button");
  console.log(str);

  if(str.style.display == "none") {
    str.style.display = "block";
  } else {
    str.style.display = "none";
  }
}