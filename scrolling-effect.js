let text =''
let stringText = 'hello world'
for(let j =0; j < stringText.length; j++ ){

    if (stringText.charAt(j) == ' ') {
        text += ' '
        console.log(text);
    } else if (stringText.charAt(j) == ',') {
        text += ','
        console.log(text);
    } else if (stringText.charAt(j) == '.') {
        text += '.'
        console.log(text);
    } else {
        for(let i = 97; i <= 122; i++){
            console.log(text + String.fromCharCode(i));
            if (String.fromCharCode(i) == stringText.charAt(j)) {
                text += String.fromCharCode(i)
                break;
            }
        }
    }   
}