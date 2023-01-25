
export const SignUpValidation = (signupData) => {
       if(!signupData.fullName){
      return "Please enter your full name"
       }
      else if (!signupData.email) {
        return "Please enter your email"
      }else if (!signupData.password) {
        return "Please enter your password"
      }else if (!signupData.confirmPassword) {
        return "Please confirm your password"
      }else if (signupData.password!== signupData.confirmPassword) {
        return "Passwords do not match"
      }else {
        return 'success'
      }
}