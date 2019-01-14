class Validator {
    static isWebsite (string) {
      let regex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      return regex.test(string)
    }
  
    static isEmail (string) {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(string)
    }
    static isEmpty (string) {
      return (!string || string==''|| string.length === 0 || !string.trim())
    }
    static isPhoneNumber (string) {
      let formatted = string&&string.replace(/(\(|\)|\+| )/g,'');
      let regex = /(^\d{12}$|^\d{10}$)/g
      return regex.test(formatted)
    }
    static isTime (string) {
      let regex = /^\d{1,2}:\d{2}$/
      return regex.test(string)
    }
    static isDateFormat (string) {
      let regex = /^.+\/.+\/.s{4}/
      return regex.test(string)
    }
  }
  
  export default Validator
  
  
