var turn=1;
setTimeout (function(){
         
    document.getElementById("tic-tac").style.display ='none';
    document.getElementById("welcome").style.display ='block';
    setTimeout (function(){
         
        document.getElementById("welcome").style.display ='none';
        document.getElementById("tic-tac-block").style.display ='block';

    },3000);
},3000);

function yourTurn(e)
{
 if(turn%2==0)
{
    e.value="X";
    turn++;
}
  else
 {
    e.value="^";
    turn++;
 }


 
}