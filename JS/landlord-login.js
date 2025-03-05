function login() {
    alert("Landlord Login Successful!");
  }
  
  function goToSignUp() {
    window.location.href = "landlord-signup.html";
  }
  
  // Move to next pin box automatically
  function moveNext(current, nextIndex) {
    if (current.value.length === 1) {
      const boxes = document.querySelectorAll(".pin-box");
      if (boxes[nextIndex]) {
        boxes[nextIndex].focus();
      }
    }
  }
  
  // Reset pass code link
  function resetPassCode() {
    const boxes = document.querySelectorAll(".pin-box");
    boxes.forEach(box => box.value = "");
    boxes[0].focus();
    alert("Pass Code Reset!");
  }
  
  // Switch to Parker
  function goToParker() {
    window.location.href = "parker-login.html";
  }
  
