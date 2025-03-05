function login() {
    alert("Landlord Login Successful!");
  }
  
  function goToSignUp() {
    window.location.href = "landlord-signup.html";
  }
  
  function moveNext(current, nextIndex) {
    if (current.value.length === 1) {
      const boxes = document.querySelectorAll(".pin-box");
      if (boxes[nextIndex]) {
        boxes[nextIndex].focus();
      }
    }
  }
  
  function resetPassCode() {
    const boxes = document.querySelectorAll(".pin-box");
    boxes.forEach(box => box.value = "");
    boxes[0].focus();
    alert("Pass Code Reset!");
  }
  
  function goToParker() {
    // On Landlord Login, the switch button goes to Parker Login.
    window.location.href = "parker-login.html";
  }
  