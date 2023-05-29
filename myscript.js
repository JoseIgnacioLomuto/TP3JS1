// primera versión tp 3

var precio, desc1, desc2, desc3, cantidad, compra, pagar1, pagar2, pagar3;

precio = 200
cantidad = parseFloat(prompt("Ingresar la cantidad de tickets que desea comprar"));

compra= precio*cantidad;

desc1= compra*0.80;
desc2= compra*0.50;
desc3= compra*0.15;

pagar1=compra-desc1;
pagar2=compra-desc2;
pagar3=compra-desc3;

document.write(" | Estudiante? El descuento es: "+desc1);
document.write(" , El Total: "+pagar1);

document.write(" | Trainee? El Descuento es: "+desc2);
document.write(" , El Total: "+pagar2);

document.write(" | Junior? El Descuento es: "+desc3);
document.write(" ,  El Total: "+pagar3);












