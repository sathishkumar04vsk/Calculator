var h1=document.createElement('h1');
h1.setAttribute('id','title');
h1.innerHTML="Calculator-Task";

var p=document.createElement('p');
p.setAttribute('id','description');
p.innerHTML="I'm Sathishkumar B30WD Batch, i used one input element and 20 buttons in DOM";



var div=create('div','container');

let div1=create('div','calculator');

var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','result') 
input.setAttribute('placeholder','0');


var button1=button('button',"Clear()",'CL');
button1.setAttribute('id','clear')
var button2=button('button',"del()",'DEL');
var button3=button('button',"display('%')",'%');
var button4=button('button',"display('/')",'/');
var button5=button('button',"display(7)",'7');
var button6=button('button',"display(8)",'8');
var button7=button('button',"display(9)",'9');
var button8=button('button',"display('*')",'*');
var button9=button('button',"display(4)",'4');
var button10=button('button',"display(5)",'5');
var button11=button('button',"display(6)",'6');
var button12=button('button',"display('-')",'-');
button12.setAttribute('id','subtract')
var button13=button('button',"display(1)",'1');
button13.setAttribute('id','1');
var button14=button('button',"display(2)",'2');
button14.setAttribute('id','2');
var button15=button('button',"display(3)",'3');
button15.setAttribute('id','3');
var button16=button('button',"display('+')",'+');
button16.setAttribute('id','add');
var button17=button('button',"display(.)",'.');
var button18=button('button',"display(0)",'0');
var button19=button('button',"display('00')",'00');
var button20=button('button',"calculate()",'=');
button20.setAttribute('id','equal');

div1.append(input,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18,button19,button20);
div.append(div1)
document.body.append(p, h1,div);

function create(element,classname){
    var ele=document.createElement(element);
    ele.setAttribute('class',classname);
return ele;
}

function button(element,onclick,value){
  var button=document.createElement(element);
  button.setAttribute('onclick',onclick);
  button.innerHTML=value;
  return button;
}


let outputscreen=document.getElementById('result');
function display(num){
    outputscreen.value += num;
}
function calculate(){
  try {
    outputscreen.value=eval(outputscreen.value);
  } catch (error) {
    alert("Invaild Inputs")
    
  }
}
function Clear(){
  outputscreen.value="";
}
function del(){
  outputscreen.value=outputscreen.value.slice(0,-1);
}