
export const SignUpValidation = (signupData) => {
  const {email,fullName,password,phone,confirmPassword,} = signupData
  if (!fullName) {
    return "Please enter your full name"
  }else if (!email) {
    return "Please enter your email"
  } else if (!phone) {
    return "Please enter your phone number"
  }else if (!password) {
    return "Please enter your password"
  } else if (!confirmPassword) {
    return "Please confirm your password"
  } else if (password !== confirmPassword) {
    return "Passwords do not match"
  } else if (fullName.trim().length < 5) {
    console.log(fullName);
    return "Full name must be than 5 characters"
  } else if (phone.trim().length < 10) {
    return "Phone must be  than 10 numbers"
  }else if (email.includes('@') && email.trim().length < 7){
    return "wrong email"
  }else if(password.trim().length >8){
    return "Password must be less than 8 characters"
  }else if (confirmPassword.trim().length >8){
    return "Confirm password must be less than 8 characters"
  }else {
    return 'success'
  }
}



export const loginValidation = (loginData) => {
      const {email, password} = loginData
      if(!loginData){
      return "Please enter your values"
      }else if(!email){
      return "Please enter your email"
      }else if(!password){
      return "Please enter your password"
      }else if(password.length<8){
      return "Password must be than 8 characters"
      }else{
      return 'success'
      }
}



export const forgotPasswordValidation = (forgotPasswordData) => {
        const {email} = forgotPasswordData
        if(!forgotPasswordData){
        return "Please enter your values"
        }else if(!email){
        return "Please enter your email"
        }
        else{
        return'success'
        }
}