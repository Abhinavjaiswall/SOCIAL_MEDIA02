// src/Pages/RegisterPage/Validation.js
export default function validation(data, type = "signup") {
  const error = {};

  // Patterns
  const namePattern = /^[a-zA-Z ]+$/;
  const emailPattern = /^[a-zA-Z]+@gmail\.com$/;
  const passwordPattern = /^[a-zA-Z]{4,8}$/;

  if (type === "signup") {
    // Full Name
    if (!data.fullname) {
      error.fullname = "* Name is required";
    } else if (!namePattern.test(data.fullname)) {
      error.fullname = "* Name must contain letters only";
    }

    // Confirm Password
    if (!data.confirmpassword) {
      error.confirmpassword = "* Confirm password is required";
    } else if (data.password !== data.confirmpassword) {
      error.confirmpassword = "* Passwords do not match";
    }
  }

  // Email
  if (!data.email) {
    error.email = "* Email is required";
  } else if (!emailPattern.test(data.email)) {
    error.email = "* Enter valid Gmail";
  }

  // Password
  if (!data.password) {
    error.password = "* Password is required";
  } else if (!passwordPattern.test(data.password)) {
    error.password = "* Password must be 4–8 letters only";
  }

  return error;
}
