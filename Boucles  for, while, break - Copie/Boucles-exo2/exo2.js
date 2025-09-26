let note;
let somme=0;
let counter=0;

do {
  note = +prompt ("enter your note");
  if (note >=0 && note<= 20) {
    somme = note ;
    counter++;
  } else if (note==-1)
  break;
  else{
      alert(" s9ti ")
  }
} while (true);
alert (`"le moyane" ${somme/counter}`)