//simple helper for output color (1=black ; -1=red)
function helper(ans){
    let output=document.getElementById("output");
    if(ans<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
}

function doAdd(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let ans=first+second;

    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
}

function doSub(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let ans=first-second;

    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
}

function doMul(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let ans=first*second;

    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
}

function doDiv(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let output=document.getElementById("output");

    if(second===0){
        output.style.color="black";
        output.innerHTML="Can't divide by zero!";
        return;
    }

    let ans=first/second;
    helper(ans);
    output.innerHTML=String(ans);
}

function doPow(){
    let first=Number(document.getElementById("first").value);
    let second=Number(document.getElementById("second").value);
    let ans=1;

    for(let i=0;i<second;i++){
        ans=ans*first;
    }

    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
}

function doClear(){
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("output").innerHTML="";
    document.getElementById("output").style.color="black";
}