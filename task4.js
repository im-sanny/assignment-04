function password({name, birthYear, siteName}) {
    if (birthYear.toString().length < 4) {
        return 'invalid'
    }
    let site =siteName.toUpperCase().charAt(0) + siteName.slice(1)

    let fullPassword = site+'#'+ name +'@'+ birthYear;

    return fullPassword;
}
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))