const startbutton=document.getElementById("startButton")
const id1=document.getElementById("search")
const submit=document.getElementById("submit")
const imageContainer = document.getElementById("imageContainer");
const numberinput=document.getElementById("numberInput")

startbutton.addEventListener("click",function(){
    id1.style.display="block";
    startbutton.style.display="none";
})
submit.addEventListener("click",function(){
    const value = numberinput.value;
    
    for(i=0;i<value;i++)
        {
            const img=document.createElement('img');
            img.src="1.png";
            img.style.width = "100px"; 
            img.style.margin = "5px";

            img.addEventListener("click", function() {
                // console.log(img.src);
                
                if(img.src.includes("1.png")) {
                    img.src = "2.png"; 
                }
                else if(img.src.includes("2.png")) {
                    img.src = "1.png"; 
                }
                
                
            });


            imageContainer.appendChild(img); 
            submit.style.display="none";
            numberinput.style.display="none";
        }
})




