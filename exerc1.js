const notas1 =[6,5,5.5,7,8,9,10,4.5,3,10];
let index = 0;
while (index < notas1.length) {
  console.log('nota atual: ', notas1[index]);
  index++;
}
//while 

const notas2 =[6,5,5.5,7,8,9,10,4.5,3,10];
let i = 0;

do{
  console.log('nota atual: ', notas2[i]);
  i++;
  }while(i < notas2.length);
//do-while

const notas3 =[6,5,5.5,7,8,9,10,4.5,3,10];

  for (let i = 0; i< notas3.length; i ++){
    console.log("A nota é:"+ notas3[i]);
  }
// usando for

const notas =[6,5,5.5,7,8,9,10,4.5,3,10];
  notas.forEach((nota) => {
  console.log( "A nota é :"+ nota)
  });
//usando foreach


