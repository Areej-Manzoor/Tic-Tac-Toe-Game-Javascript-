var turn=1;
setTimeout (function(){
         
    document.getElementById("tic-tac").style.display ='none';
    document.getElementById("welcome").style.display ='block';
    setTimeout (function(){
         
        document.getElementById("welcome").style.display ='none';
        document.getElementById("tic-tac-block").style.display ='block';

    },1500);
},1700);

function yourTurn(e)
{
 if(turn%2==0)
{
    e.value="X";
    e.disabled=true;
    e.style.color="orange";
    turn++;

}
  else
 {
    e.value="O";
    e.disabled=true;
    e.style.color="lightgreen";
    turn++;
 
 }
 var b1=document.getElementById("b1").value;
 var b=document.getElementById("b2").value;
 var b3=document.getElementById("b3").value;
 var b4=document.getElementById("b4").value;
 var b5=document.getElementById("b5").value;
 var b6=document.getElementById("b6").value;
 var b7=document.getElementById("b7").value;
 var b8=document.getElementById("b8").value;
 var b9=document.getElementById("b9").value;
 
//  if((b1=='X' && b2=='X' && b3=='X') || (b1=='O' && b2=='O' && b3=='O'))
// {
//     setTimeout (function(){
         
//         document.getElementById("tic-tac-block").style.display ='none';
//         document.getElementById("announcement").innerHTML=e.value+" WON";
     
//     },1000);
// }
 if((b4=='X' && b5=='X' && b6=='X') || (b4=='O' && b5=='O' && b6=='O'))
{

         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     
}
else if((b1=='X' && b2=='X' && b3=='X') || (b1=='O' && b2=='O' && b3=='O'))
{

         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     
  
}
 else if((b7=='X' && b8=='X' && b9=='X') || (b7=='O' && b8=='O' && b9=='O'))
{
    
         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     
  
}
 else if((b1=='X' && b4=='X' && b7=='X') || (b1=='O' && b4=='O' && b7=='O'))
{
   
         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     

}
 else if((b2=='X' && b5=='X' && b8=='X') || (b2=='O' && b5=='O' && b8=='O'))
{
  
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     

}
 else if((b3=='X' && b6=='X' && b9=='X') || (b3=='O' && b6=='O' && b9=='O'))
{
 
         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
  
}
 else if((b1=='X' && b5=='X' && b9=='X') || (b1=='O' && b5=='O' && b9=='O'))
{
  
         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
     
 
}
 else if((b3=='X' && b5=='X' && b7=='X') || (b3=='O' && b5=='O' && b7=='O'))
{
   
         
        document.getElementById("tic-tac-block").style.display ='none';
        document.getElementById("announcement").innerHTML=e.value+" WON";
 
}
 else

 {
    document.getElementById("announcement").innerHTML="";
 }
 

}
