function signUp() {
    alert("Landlord Signed Up Successfully!");
  }
  
  function goToLogin() {
    window.location.href = "landlord-login.html";
  }
  
  function goToParker() {
    // On Landlord Sign-Up, the switch button goes to Parker Sign-Up.
    window.location.href = "parker-signup.html";
  }
  
  // Prompt for Address when clicking the Address button
  function enterAddress() {
    const address = prompt("Enter your Address:");
    if(address){
      document.querySelector(".address-btn").textContent = address;
    }
  }
  