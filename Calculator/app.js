let result= document.getElementById("inputext"); //acessing the html document by element

let calculate= (Number)=>{ //lets know any number can be calculated to get a value
    result.value+=Number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)//evaluates user for invalid input

    }
    catch(err){
        alert("Enter the valid Input");//catches error and delivers a message
    }
}
function clr(){
    result.value= " ";//clears out input screen
}
function del(){
    result.value=result.value.slice(0.-1);//deletes last number entered
}
