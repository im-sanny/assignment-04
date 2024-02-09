function checkName(name) {
    if (typeof name !== 'string' ||  name.trim() === '') {
        return "invalid";
    }
    let words ='a, y, i , e , o , u, w';
     words.split(' ')
    name = name.toLowerCase();
    name = name.charAt(name.length -1)
        if (words.includes(name)) {
            return 'Good Name'
        } else {
            return 'Bad Name'
        }
}
console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('anoy'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));