const Name = document.getElementById('your-name');
const Crush_name = document.getElementById('crush-name');
const Result = document.getElementById('result');
const Message = document.getElementById('message');
const Button = document.getElementById('button');

const resultObject = {};
var letters = /^[A-Za-z]+$/;

Button.addEventListener('click', function(e){
    Message.innerHTML = "";
    Result.innerHTML = ''
    validate();
})

function validate(){
    if (!Name.value.match(letters)) {
        Message.innerHTML = `Please Enter your Name`;
    } else if (!Crush_name.value.match(letters)) {
        Message.innerHTML = `Please Enter your crush Name`;
    } else {
        resultCheck()
        
    }
}

function resultCheck(){
    let matchFound = false;
    Object.keys(resultObject).forEach(key => {
        if (key === Crush_name.value) {
            Result.innerHTML = `${resultObject[key]}%`;
            Name.value = '';
            Crush_name.value = '';
            matchFound = true;
        }
    });

    if (!matchFound) {
        result();
    }
   
}

function result(){
    const RandomNumber = Math.floor((Math.random()* (100-10)+10))
    Result.innerHTML = `${RandomNumber}%`;
    resultObject[Crush_name.value] = RandomNumber;
    Name.value = '';
    Crush_name.value = '';
}
