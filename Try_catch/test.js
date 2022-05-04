function myFunction() {
    const message = document.getElementById("result-message");
    message.innerHTML = "";
    let x = document.getElementById("input-text").value;
    try {
        if(x == "") throw "empty";
        x = Number(x);
        if(x < 10) {
            throw "too low"
        }
        else if(x > 20) {
            throw "too high";
        }
        else{
            alert(`Input: ${x}, it is a valid number !!!`);
        }
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }