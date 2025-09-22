let nomber1= prompt ("KTB RA9M LWL");
let nomber2= prompt("KTB R9M TANI");

let opra= prompt ("ktb +,-,/,*");

switch (opra) {
    case "+":
        alert ("natija :"+ (+nomber1+ +nomber2));
        break;
    case "-":
        alert ("natija :" + (+nomber1- +nomber2));
        break;
    case "*":
        alert ("natija:"+ (+nomber1* +nomber2));
        break;
    case "/":
        if (nomber2 != 0){
            alert (nomber1 / nomber2);
        } else {
            alert("Kayn Error :(")
        }
        break;
    default: 
    alert (" HADXI MA9RINAHX ")
}
