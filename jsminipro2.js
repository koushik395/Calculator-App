console.log('loaded');
var input=document.getElementById('input-field');
var number =document.getElementsByTagName('td');
input.value='';
input.addEventListener('input',function(e){
    console.log(e.target.value);
})
var expressions;
for(i=1;i<number.length;i++){
    number[i].addEventListener('click',function(e){
        expressions=(e.target.innerHTML);
        expressions=expressions.toLowerCase();
        check(expressions);
    })
}

function check(expressions){
    switch(expressions){
        case 'c':
            input.value='';
            break;
        case '=':
            input.value=eval(input.value);
            break;
        default:
            input.value += expressions;
            break;
    }
}

document.body.addEventListener('keyup',function(e){
    console.log(e.key)
    e.key=e.key.toLowerCase();
    if((e.key>=0) && (e.key<=9)||(e.key=='+'||e.key=='-'||e.key=='*'||e.key=='/'||e.key=='c'||e.key=='='))
    {
        check(e.key);
    }
    else if(e.key=='Backspace')
    {
        input.value = (input.value).substr(0,(input.value).length-1);
    }
})