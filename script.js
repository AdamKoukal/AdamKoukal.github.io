var IsScrolling=false
var wheel=1


var underline=document.getElementById("underline")

var menuv=true

function MobileMenu(){
if(menuv==true){

    document.getElementById("menubar").style.visibility="hidden"
    document.getElementById("header").style.height="80px"

    menuv=false

}
else{
    document.getElementById("header").style.height="auto"

    document.getElementById("menubar").style.visibility="visible"
    menuv=true
}

}


function Home(click) {
    var width=document.getElementById("aHome").getBoundingClientRect().width
    underline.style.right="467px"
    underline.style.width=width+"px"
    

    document.getElementById("Home").scrollIntoView({behavior:"smooth"})
    if(click==1){
        wheel=1
    }
}

function AboutUs(click) {
    var width=document.getElementById("aAboutUs").getBoundingClientRect().width+"px"
    
    underline.style.right="359px"
    underline.style.width=width  


   

    document.getElementById("AboutUs").scrollIntoView({behavior:"smooth"})
    if(click==1){
        wheel=2
    }
}

function Calculator(click) {
    var width=document.getElementById("aCalculator").getBoundingClientRect().width

    underline.style.right="238px";
    underline.style.width=width+"px"


    

    document.getElementById("Calculator").scrollIntoView({behavior:"smooth"})
    if(click==1){
        wheel=3
    }
}

function News(click) {
    var width=document.getElementById("aNews").getBoundingClientRect().width+"px"

    underline.style.right="170px";
    underline.style.width=width


    

    document.getElementById("News").scrollIntoView({behavior:"smooth"})
    if(click==1){
        wheel=4
    }
}

function Contact(click) {
    var width=document.getElementById("aContact").getBoundingClientRect().width+"px"

    underline.style.right="74.5px";
    underline.style.width=width


    

    document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
    if(click==1){
        wheel=5
    }
    
}

function CalcRadius(){
    var weight=document.getElementById("weight").value

    if(weight>0){
        document.getElementById("result").innerHTML="Radius needed to turn object into a blackhole "+weight*1.48*Math.pow(10,(-27))+"m";

    }
    else{
    document.getElementById("result").innerHTML="Unfortunately, we don't live in a universe where negative mass is possible :)";

    }

}


window.addEventListener("load", (event) => {
    Home(1)
  });


onwheel = (event) => {
if(IsScrolling==false){
    IsScrolling=true
    
    if(event.deltaY>0)
    {

        if(wheel<5)
        {

            if(wheel==1){
                AboutUs(0)
            }
            else if(wheel==2){
                Calculator(0)
            }
            else if(wheel==3){
                News(0)
            }
            else if(wheel==4){
                Contact(0)
            }
            


            wheel++;
        }
        else{
            Home(0)
            wheel=1;
        }

    }
    else
    {

        if(wheel>1)
        {
            if(wheel==5){
                News(0)
            }
            else if(wheel==4){
                Calculator(0)
            }
            else if(wheel==3){
                AboutUs(0)
            }
            else if(wheel==2){
                Home(0)
            }


            wheel--;
        }
        else{
            Contact(0)
            wheel=5;
        }
    

    }
  
  
  setTimeout(() => {
    IsScrolling=false
  }, 500);
    console.log(wheel);
}







};
let startY = 0;

    window.addEventListener("touchstart", (event) => {
      startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", (event) => {
      const endY = event.changedTouches[0].clientY;

      

      if (startY > endY + 50) 
      {
        // Swipe up
        if(wheel<5)
        {

            if(wheel==1){
                AboutUs(0)
            }
            else if(wheel==2){
                Calculator(0)
            }
            else if(wheel==3){
                News(0)
            }
            else if(wheel==4){
                Contact(0)
            }
            


            wheel++;
        }
        else{
            Home(0)
            wheel=1;
        }
        
      } 
      else if(startY < endY - 50) 
      {
        
        if(wheel>1)
        {
            if(wheel==5){
                News(0)
            }
            else if(wheel==4){
                Calculator(0)
            }
            else if(wheel==3){
                AboutUs(0)
            }
            else if(wheel==2){
                Home(0)
            }


            wheel--;
        }
        else{
            Contact(0)
            wheel=5;
        }
      }
    });




