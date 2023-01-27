
export const SignUpValidation = (signupData) => {
  if (!signupData.fullName) {
    return "Please enter your full name"
  }
  else if (!signupData.email) {
    return "Please enter your email"
  } else if (!signupData.phone) {
    return "Please enter your phone number"
  }else if (!signupData.password) {
    return "Please enter your password"
  } else if (!signupData.confirmPassword) {
    return "Please confirm your password"
  } else if (signupData.password !== signupData.confirmPassword) {
    return "Passwords do not match"
  } else if (signupData.fullName.trim().length < 5) {
    console.log(signupData.fullName);
    return "Full name must be than 5 characters"
  } else if (signupData.phone.trim().length < 10) {
    return "Phone must be  than 10 numbers"
  }else if (signupData.email.includes('@') && signupData.email.trim().length < 7){
    return "wrong email"
  }else if(signupData.password.trim().length >8){
    return "Password must be less than 8 characters"
  }else if (signupData.confirmPassword.trim().length >8){
    return "Confirm password must be less than 8 characters"
  }else {
    return 'success'
  }
}


