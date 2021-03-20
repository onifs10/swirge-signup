
const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]


function match(char){
    let pattern = /[A-Za-z]/  
    return  pattern.test(char[0])
}

function checkCase(char) {
    if(char){
     char = char[0]
      return char === char.toUpperCase() ? 1 : 0
    }
  }  
const hashPassword = (string) => {
    var result = string.split('').map((item) => {
    if(match(item)){
        let Case = checkCase(item);
        if(Case) {item = item.toLowerCase()}
        let index = alphabets.indexOf(item)
        let outputIndex = (alphabets.length - (index + 1))
        let replacement  = alphabets[outputIndex]
        return Case ? replacement.toUpperCase() : replacement
    }
    return item
    } ).join('')
    return result
}
  
export default hashPassword