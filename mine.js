 
var input1=document.getElementById("BookName");
var input2=document.getElementById("BookURL");

 var cartona=[];

var dName;
var dUrl;


// localstorage(get)
if(localStorage.getItem("ourData")==null){
    cartona=[]
}else{
    cartona=JSON.parse(localStorage.getItem("ourData"));
    displayData();
}

// validation
var regexDName=/^[A-za-z 0-9]{1,20}$/;
var regexDURL=/[A-za-z0-9.]+.+$/


// getData
function getData(){
  if(regexDName.test(input1.value) && regexDURL.test(input2.value)){
    var Data={
        dName:input1.value,
        dUrl:input2.value,
    
    }
       cartona.push(Data);
    
        displayData(); 
    
        localStorage.setItem("ourData",JSON.stringify(cartona));
    
        clearInput(); 
    }
    else if(regexDName.test(input1.value)===false && regexDURL.test(input2.value)===false){
        document.getElementById("messag").style.display ="block";
        document.getElementById("messagURL").style.display ="block";


    }else if(regexDName.test(input1.value)===false){
        document.getElementById("messag").style.display ="block";


    }else if(regexDName.test(input2.value)===false){
        document.getElementById("messagURL").style.display ="block";

    }
    else if(regexDName.test(input1.value)===false && regexDURL.test(input2.value)===false){
        document.getElementById("messag").style.display ="block";
        document.getElementById("messagURL").style.display ="block";
    }else{
                alert("please Enter Data")

    }
  

}

// displayyy
function displayData(){

    document.getElementById("DataBody").style.display ="block";

    var hasala=``;
    for(var i=0; i<cartona.length ; i++){
        hasala+=`<div class="DataContent bg-light  my-4">
                    <div class="d-flex justify-content-center align-items-center">

                        <div class="col-4 ps-5 py-4 fs-3 fw-bold">${cartona[i].dName}</div>
                        <div class="col-8 ps-5">
                            <button class="btn btn-primary" onclick=" window.open('${cartona[i].dUrl}','_blank')">Visite </button>
                            <button class="btn btn-danger" onclick="DeleteData(${i})" >Delete</button>
                        </div>
                
                    </div>
                 </div> `
    }

     document.getElementById("DataBody").innerHTML=hasala;
}


// clearr
function clearInput(){
    input1.value="";
    input2.value="";
}

// Deletee
function DeleteData(pIndex){
cartona.splice(pIndex,1);
localStorage.setItem("ourData",JSON.stringify(cartona));
displayData();

}


