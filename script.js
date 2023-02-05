function clearScreen() {
        document.getElementById("result").value = "";
    }
     
    // This function display values
    function display(value) {
        document.getElementById("result").value += value;
    }
     
   
    function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    function delval(){
       var a= document.getElementById("result").value;
       var b= a.toString().slice(0,-1);
       document.getElementById("result").value=b;

        
    }