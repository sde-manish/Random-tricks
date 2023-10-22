const Name = document.getElementById('your-name');
const Crush_name = document.getElementById('crush-name');
const Result = document.getElementById('result');
const Message = document.getElementById('message');
const Button = document.getElementById('button');

Button.addEventListener('click', function(e){
    console.log("Clicked");
    validate();
})

function validate(){
    if (Name.value === "" || Name.value === Number) {
        Message.innerHTML = `Please Enter your Name`;
    } else if(Crush_name.value === "" || Crush_name.value === Number) {
        Message.innerHTML = `Please Enter your crush Name`;
    }
console.log('validate');
result()
}

function result(){
console.log('Result');
}