"use strict"

let maindiv = document.createElement("div")
maindiv.setAttribute("class","container")
document.body.append(maindiv);


let img1 = document.createElement("img")
img1.setAttribute("src"," ")
img1.className="picture";
img1.src="pic1.jpeg";
maindiv.append(img1);

let btndiv = document.createElement("div")
btndiv.className="btn";
maindiv.append(btndiv)

let btn1 = document.createElement("button");
btndiv.append(btn1);
btn1.innerText="Previous";

let btn2 = document.createElement("button");
btndiv.append(btn2)
btn2.innerText="Next";



let imgs= ["pic1.jpeg","pic2.jpeg","pic3.jpeg",
"pic4.jpeg","pic5.jpeg","pic6.jpeg","pic7.jpeg",
"pic8.jpeg","pic9.jpeg","pic10.jpeg","pic11.jpeg",
"pic12.jpeg","pic13.jpeg"]


let i=1
btn2.addEventListener('click',nextFunction)
function nextFunction(){
       
            if(i==12)
            {
                i=1
            }
            else{
                maindiv.style.backgroundImage=imgs[i];
                i=i>imgs.length ? 1 : i+1;
                img1.src=imgs[i];
            }
}

btn1.addEventListener('click',previousFunction)
function previousFunction(){
       
            if(i==1)
            {
                i=12
            }
            else{
                maindiv.style.backgroundImage=imgs[i];
                i=i>imgs.length ? 1 : i-1;
                img1.src=imgs[i];
            }
}