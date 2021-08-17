window.addEventListener('load',bind);
function bind(){
    let button0=document.getElementById('greetbtn');
    button0.addEventListener('click',takeinput);
    let button1=document.getElementById('clearbtn');
    button1.addEventListener('click',clearall);
}
function takeinput(){
    let firstname=document.getElementById('first').value;
    let lastname=document.getElementById('last').value;
    output(firstname,lastname);
}
function output(firstname,lastname){
    let fullname=titlecase(firstname)+" "+titlecase(lastname);
    document.getElementById('displaymsg').innerText=`Welcome ${fullname}`;
}
function titlecase(str){
    let firstCap=str.charAt(0).toUpperCase();
    let rem=str.substring(1).toLowerCase();
    return firstCap+rem;
}
const clearall=()=>{
    document.getElementById('first').value='';
    document.getElementById('last').value='';
    document.getElementById('displaymsg').innerText='';
    document.getElementById('first').focus();
}