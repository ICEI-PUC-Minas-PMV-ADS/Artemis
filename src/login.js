
    function redirect() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var redirectPage = "";

      // Perform email and password validation
      if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return false;
      }

      switch (email) {
        case "psicologa@email.com":
          if (password === "psicologa123") {
            redirectPage = "psicologa";
          } else {
            alert("Invalid password. Please try again.");
            return false;
          }
          break;
        case "capitalizadora@email.com":
          if (password === "capitalizadora123") {
            redirectPage = "capitalizadora";
          } else {
            alert("Invalid password. Please try again.");
            return false;
          }
          break;
        case "administradora@email.com":
          if (password === "administradora123") {
            redirectPage = "administradora";
          } else {
            alert("Invalid password. Please try again.");
            return false;
          }
          break;
        default:
          alert("Invalid email. Please try again.");
          return false;
      }

      window.location.href = redirectPage;
      return false;
    }
  