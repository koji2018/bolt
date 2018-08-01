// // 初期状態　コンタクトボタン
document.getElementById("humburger_menu_contact_button").style.display ="none";


function clickMenu(){
  var menuButton = document.getElementById("humburger_menu_contact_button");
  console.log(menuButton);

  if(menuButton.style.display == "none") {
    menuButton.style.display = "block";
  } else {
    menuButton.style.display = "none";
  }
}