function myFunction() {
    const message = document.getElementById("result-message");
    message.innerHTML = "";
    let x = document.getElementById("input-text").value;
    try {
        if(x == "") {
            throw "Empty";
        }else if (isNaN(x)){
            throw "Invalid $#@!#$%^"
        }else{
            x = Number(x);
            if(x < 10) {
                throw "too low"
            }
            else if(x > 20) {
                throw "too high";
            }
            else{
                message.innerHTML = `Great, input ${x} is valid!!`;
            }
        }
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }