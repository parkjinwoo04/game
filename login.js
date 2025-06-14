const loginForm = document.getElementById("login_form");
const logintInput = document.querySelectot("#login_form input");
const logintButton = document.querySelectot("#login_form button");

function onLogintBtnClick() {
  const playerName = loginInput.value;
  if (playerName === "") {
    alert("이름을 입력하세요");
  } else if (playerName.length < 8) {
    alert(`너무 깁니다. (최대 8글자)`);
  } else {
    console.log (loginInput.value;  
  }
}

loginButton.addEventListener ("click", onLoginBtnClick);










