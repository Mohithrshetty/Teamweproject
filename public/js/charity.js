// let loginForm = document.querySelector(".login-form");
// document.querySelector("#login-btn").onclick = () => {
//   loginForm.classList.toggle("active");
//   navbar.classList.remove("active");
//   signup.classList.remove("active");
// };

// let navbar = document.querySelector(".navbar");
// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//   loginForm.classList.remove("active");
//   signup.classList.remove("active");
// };
// window.onscroll = () => {
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
//   signup.classList.remove("active");
// };

// let signup = document.querySelector(".sign-form");
// document.querySelector("#fam-btn").onclick = () => {
//   signup.classList.toggle("active");
//   navbar.classList.remove("active");
//   loginForm.classList.remove("active");
// };

// const handleSignup = async () => {
//   const name = document.getElementById("name").value;
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   const email = document.getElementById("signup-email").value;
//   const password = document.getElementById("signup-password").value;

//   const data = {
//     name,
//     phoneNumber,
//     email,
//     password,
//   };

//   try {
//     const response = await fetch("/user/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const parsedData = await response.json();
//     alert(parsedData.message);
//   } catch (error) {
//     alert(error);
//   }
// };

// const handleLogin = async () => {
//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;

//   const data = {
//     email,
//     password,
//   };

//   try {
//     const response = await fetch("/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const parsedData = await response.json();
//     alert(parsedData.message);
//     localStorage.setItem("user", JSON.stringify(parsedData.data));
//     setTimeout(() => {
//       window.location.href = "/admin";
//     }, 500);
//   } catch (error) {
//      console.log(error)
//     alert(error);
//   }
// };


const handleSignup = async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const data = {
    name,
    email,
    password,
    phoneNumber,
  };

  try {
    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await response.json();
    alert(parsedData.message);
  } catch (error) {
    alert(error);
  }
};

const handleLogin = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const data = {
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await response.json();
    alert(parsedData.message);
  } catch (error) {
    alert(error);
  }
};

