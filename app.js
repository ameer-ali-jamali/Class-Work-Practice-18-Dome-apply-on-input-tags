
function jamali(){
    var j = document.getElementById("inp").value
    var i = document.getElementById("pas").value
    let plus = document.getElementById("plus")
    let minus = document.getElementById("m")
    let multi = document.getElementById("mul")
    let div = document.getElementById("D")
    i = parseInt(i);
    j = parseInt(j);
    if(i>=0 && j>=0){
      if(plus.checked==true){
        alert(i+j)
      }
     else if(minus.checked==true){
        alert(i-j)
      }
     else if(multi.checked==true){
        alert(i*j)
      }
     else if(div.checked==true){
        alert(i/j)
      }
    }
      if(j=="admin"){
    alert("Success")
      }
      else if(j=="jamali"){
        alert("hi ameer ali jamali")
      }
      else {
        alert("Sorry")
      }
    
    }
    