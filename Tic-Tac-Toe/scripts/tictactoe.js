window.addEventListener('load',bindevents);
function bindevents(){
     buttons=document.getElementsByTagName('button');
    Array.prototype.forEach.call(buttons,(button)=>
   button.addEventListener('click',printXorZero)
    );
}
const isNotblank=(button)=>(button.innerText.length!=0);
const isSame=(first,second,third)=>(first.innerText==second.innerText&&second.innerText==third.innerText);

function compareThree(first,second,third){
   if(isNotblank(first)&&isNotblank(second)&&isNotblank(third)){
       if(isSame(first,second,third)){
           return true;
       }
   }
   return false;

}
function isGameOver(){
    // For Row
    return compareThree(buttons[0],buttons[1],buttons[2])
    ||compareThree(buttons[3],buttons[4],buttons[5])
    ||compareThree(buttons[6],buttons[7],buttons[8])
    //For Column
    ||compareThree(buttons[0],buttons[3],buttons[6])
    ||compareThree(buttons[1],buttons[4],buttons[7])
    ||compareThree(buttons[2],buttons[5],buttons[8])
    //For Diagonal
    ||compareThree(buttons[0],buttons[4],buttons[8])
    ||compareThree(buttons[2],buttons[4],buttons[6]);

}
function reset(){
   let buttons= document.querySelectorAll('button');
    buttons.forEach(button=>button.innerText='');
    flag=true;
    count=0;
    setTimeout(()=>{
    document.getElementById('result').innerText='';
    },2000);
}
let flag=true;
var count=0;
function printXorZero(){
    
    console.log("Print x or Zero",this);
    let button=this;
    if(button.innerText.length==0){
        count++;
        button.innerText=(flag===true?'X':'0');
        
        flag=!flag;
    }
    
    if(count>=5){
        if(isGameOver()){
            document.getElementById('result').innerText= 'Game Over';
            reset();
        }
    }
    if(count==9){
        document.getElementById('result').innerText='Game Draw';
        reset();
    }
}