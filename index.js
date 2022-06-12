var l=document.querySelector(".loading");
function animation() {
        
        l.style.display='none';
    
}


var i=0

var txt= "Hello Everyone I,am Satyendra..";

function typing(){
    if (i<txt.length) {
        document.querySelector(".type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}

typing();


var m= document.querySelector(".second");





document.querySelector("button").addEventListener("click" , ()=>{

    var a= document.querySelector("input").value;
    
    
    
    if (a==0) {
        document.querySelector(".result").innerHTML='<h3 class ="warn">input field is empty</h3>'
        
    }
    
    else{
        m.style.display='block';
        console.log(a);
        country(a)
    }
});

document.addEventListener("keypress" , (event)=>{
    
    var b=event.key;
    check(b)
    
});

function check(x) {
    
    if (x=="Enter") 
    {
        var a= document.querySelector("input").value;
        
        if(a==0){
            document.querySelector(".result").innerHTML='<h3 class ="warn">input field is empty</h3>'
            
        }
        else{
        console.log(a); 
        country(a);  
        m.style.display='block';
        }
    }
    
};


function country(p) {


    url="https://restcountries.com/v3.1/name/"+p+"?fullText=true"
    console.log(url);
        fetch(url).then((Response)=>Response.json()).then((data)=>{
            
            var img=data[0].flags.svg;
            console.log(img)
            var cname=data[0].name.common;
            var capital=data[0].capital;
            var continent=data[0].continents[0];
            var lang=Object.values(data[0].languages).toString().split(" , ").join(" , ");
            var population=data[0].population;
            var money=data[0].currencies[Object.keys(data[0].currencies)].name;
            
            result(img,cname,capital,continent,lang,population,money)
            
        }).catch((err)=>{

            m.style.display='none';
            document.querySelector(".result").innerHTML='<h1 class ="red">Error..!</h1>'
            
        });
    
    
    
    
};

function result(image,c,cap,con,lang,popu,money) {

        document.querySelector(".result").innerHTML=`
        <div class="center">
        <img src=`+ image +` class="resimg" >
        <h3 class="c-name">${c}</h3>
        </div>
    
        <div class="info">
        <h5>CAPITAL : <span>${cap}</span></h5>
        <h5>CONTINENT : <span>${con}</span></h5>
        <h5>LANGUAGES : <span>${lang}</span></h5>
        <h5>POPULATION : <span>${popu}</span></h5>
        <h5>MONEY : <span>${money}</span></h5>
        </div>` ;
    
        m.style.display='none';
    
    
    
 }




