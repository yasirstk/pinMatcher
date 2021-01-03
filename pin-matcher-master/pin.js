//Generate 4 digit pin
const pinGenerator = document.getElementById("pin-generator");
pinGenerator.addEventListener("click", () => {
  let pin = Math.floor(1000 + Math.random() * 9000);
  console.log(pin);
  // let generatedPin = document.getElementById('generated-pin');
  // let generatedPin.value = pin;
  // document.getElementById('generated-pin')
  document.getElementById("generated-pin").value = pin;
  console.log('generated pin: ' + pin);
});

//Capturing keys for pin input
const keys = document.querySelectorAll(".button");
keys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    const action = key.getAttribute("data-action");
    if(!action){
      let digit = e.target.textContent;

    let digitInput = document.getElementById("digit-input");
    if (digitInput.value <= 1000) {
      digitInput.value += digit;
    }
    }
    if(action === 'clearAll'){
      document.getElementById("digit-input").value = '';
    }
    if(action === 'removeLastDigit'){
      let digitInput = document.getElementById("digit-input");
      let enteredPin = digitInput.value;
      enteredPin = digitInput.value;
      
      newPin = enteredPin.toString().slice(0, -1);
      document.getElementById("digit-input").value = newPin;
      
      
    }
  });
});

//Pin submit
var tryLeft = document.getElementById("try-left").innerHTML;
var tryLeft = 3;

function submit() {
  let inputPin = document.getElementById("digit-input");
  const submittedPin = inputPin.value;
  console.log('submitted pin: ' + submittedPin);
  const generatedPin = document.getElementById("generated-pin").value;

  if (generatedPin === submittedPin) {
    document.getElementById("notify-1").style.display = "none";
    document.getElementById("notify-2").style.display = "block";
  } else {
    document.getElementById("notify-2").style.display = "none";
    document.getElementById("notify-1").style.display = "block";

    tryLeft--;
    document.getElementById("try-left").innerHTML = tryLeft;

    if (tryLeft == 0) {
      const btn = document.getElementById("submitBtn");
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }
}


