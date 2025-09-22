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
        if (nomber2===0){
            alert ("WLO 7NA MBGHINAX N9SMOHALK")
        }
        alert ("natija:"+ (+nomber1/ +nomber2));
        break;
    default: 
    alert (" HADXI MA9RINAHX ")
}
