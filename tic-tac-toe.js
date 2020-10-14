window.onload= function  Game()

{
 
//

var xturn=true;
var status=document.getElementById('status');
var button=document.querySelector(".btn");
let squares = document.querySelectorAll('#board div'),total=0;
let gameView= Array(9).fill(0);
var gameOver=false;



for(let i=0; i<squares.length;i++) {
squares[i].classList.add('square');


squares[i].onclick=function(){


    //Disallow User from making changes

    if(this.innerHTML != "") return;


    ///Adding X or O to sqaure when clicked


        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
                    if(total%2 === 0){
                       this.innerHTML ="X" ;
                       status.innerHTML=' Player O Turn';
                       this.innerHTML ="<span class='square X'> X </span>";
                       total++;


                   
                    }else

                    {
                        console.log(total);
                       this.innerHTML = "O";
                       status.innerHTML=' Player X Turn';
                       this.innerHTML  ="<span class='square O'> O</span>";
                       total++;
                       onclick='';
                     
                       
                    }
     
     
                    getWinner();

     
 }}

   




 //Change style when move over mouse


 squares[i].addEventListener('mouseover',function(){

     this.className="hover";

});



 squares[i].addEventListener('mouseleave',function(){

     this.className="square";

});


 

}


///Check Winners and Update status

function getWinner(){


             var s1 = document.getElementById("s1"),
                    s2 = document.getElementById("s2"),
                    s3 = document.getElementById("s3"),
                    s4 = document.getElementById("s4"),
                    s5 = document.getElementById("s5"),
                    s6 = document.getElementById("s6"),
                    s7 = document.getElementById("s7"),
                    s8 = document.getElementById("s8"),
                    s9 = document.getElementById("s9");


               if(s1.innerHTML !== "" &&  s1.innerHTML===s2.innerHTML  && s1.innerHTML==s3.innerHTML)
                 selectWinner(s1,s2,s3);
         
              if(s4.innerHTML !=="" && s4.innerHTML === s5.innerHTML && s4.innerHTML === s6.innerHTML)
                 selectWinner(s4,s5,s6);
             
              if(s7.innerHTML !=="" && s7.innerHTML === s8.innerHTML && s7.innerHTML === s9.innerHTML)
                 selectWinner(s7,s8,s9);
             
              if(s1.innerHTML !== "" && s1.innerHTML === s4.innerHTML && s1.innerHTML === s7.innerHTML)
                 selectWinner(s1,s4,s7);
             
              if(s2.innerHTML !== "" && s2.innerHTML === s5.innerHTML && s2.innerHTML === s8.innerHTML)
                 selectWinner(s2,s5,s8);
             
              if(s3.innerHTML !== "" && s3.innerHTML === s6.innerHTML && s3.innerHTML === s9.innerHTML)
                 selectWinner(s3,s6,s9);
             
              if(s1.innerHTML !== "" && s1.innerHTML === s5.innerHTML && s1.innerHTML === s9.innerHTML)
                 selectWinner(s1,s5,s9);

              if(s3.innerHTML !== "" && s3.innerHTML === s5.innerHTML && s3.innerHTML === s7.innerHTML)
                 selectWinner(s3,s5,s7);


             


 



}


function selectWinner(a,b,c){

 status.innerHTML=  "Congratulations" + a.innerHTML + "is the Winner";
 document.getElementById("status").classList.add("you-won")


}  



//Restart the game

let Initial=status.innerHTML;

button.addEventListener("click",()=>{

  document.getElementById("status").classList.remove("you-won")

  squares.forEach((e)=>{

    e.innerHTML=""
    gameView=Array(9).fill(0);

    status.innerHTML=Initial;
  })

})












}



