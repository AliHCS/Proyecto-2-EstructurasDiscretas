
function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
         	alert("Es false");
          	return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
        this.pregun=pregun;

        this.respuestas=[];

        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
        this.respuestas[3]=respuesta4;

        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;



}
var retorno=[];
var preguntas=[];

/* En esta parte incluiran sus preguntas debes ser mas de 10 para que se pueda ajecutar
el script
*/
/*La primer parte de las comiilas pertenece a la pregunta las siguientes a las respuestas pertintenes y el ultimo valor entero
pertence al numero de la respuesta correcta, por ejemplo;
RESPUESTA 1 = 0 ;RESPUESTA 1 = 1 ;RESPUESTA1 = 2 ;RESPUESTA 4 = 3
preguntas[0]=new pregunta("¿PREGUNTA GENERICA 1?","RESPUESTA 1","RESPUESTA 2","RESPUESTA 3","RESPUESTA 4",2);
La respuesta correcta es RESPUESTA 3 ya que su valor asignado es 2*/
preguntas[0]=new pregunta("Si un monoide cumple con asociatividad se dice que es un monoide:"," Cuadrado"," Conmutativo o Abeliano"," Ambiguo"," Ninguna de las anteriores",1);

preguntas[1]=new pregunta(" Si un monoide no cumple con elemento identidad, Qu\u00E9 es?"," Es un monoide"," Grupo"," Semigrupo"," No es un monoide",1);

preguntas[2]=new pregunta(" ¿Qu\u00E9 es un monoide?"," Grupo."," Semigrupo."," Algo complicado."," Ninguna de las anteriores.",1);

preguntas[3]=new pregunta(" ¿Semigrupo y monoide es lo mismo?"," Si."," No."," No s\u00E9."," Ninguna de las anteriores",1);

preguntas[4]=new pregunta(" Menciona una aplicaci\u00F3n de los monoides"," No tienen aplicaciones."," Biolog­\u00ED­a."," Lenguajes formales."," Mercadotecnia",2);

preguntas[5]=new pregunta(" ¿Qu\u00E9 es un Monoide?"," A una funci\u00F3n booleana cuyos argumentos pueden ser de diferentes tipos"," Una estructura algebraica con una operaci\u00F3n binaria, que es asociativa y un elemento neutro."," El proceso de desarrollo"," Ninguna de las anteriores",2);

preguntas[6]=new pregunta(" Si adem\u00E1s la operaci\u00F3n es conmutativa, ¿C\u00F3mo se clasifica al monoide?"," Monoide con elemento neutro"," Monoide asociativo"," Monoide conmutativo"," Ninguna de las anteriores",2);

preguntas[7]=new pregunta(" Escoge una caracter\u00EDstica del monoide"," Conmutativo."," Elemento inverso."," No me acuerdo."," Asociativo.",0);

preguntas[8]=new pregunta(" ¿Qu\u00E9 significa que la operaci\u00F3n sea cerrada en el conjunto?"," Eso no venia en el tuto!."," Cumple con el elemento neutro."," Cumple con asociatividad."," El resultado de la operacion pertenece al conjunto.",2);

preguntas[9]=new pregunta(" ¿Qu\u00E9 categor\u00ED­a tiene un monoide?"," Conmutativo y asociativo."," Elemento neutro e inverso."," Asociativo y un elemento neutro."," Conmutativo y un elemento inverso.",0);

preguntas[10]=new pregunta(" ¿Qu\u00E9 es una categor\u00ED­a monoidal?"," Es una categor\u00ED­a con una operaci\u00F3n binaria que convierte a la categor\u00ED­a en un monoide"," La multiplicaci\u00F3n de n\u00FAmeros naturales"," Es una operaci\u00F3n interna"," Ninguna de las anteriores",0);

preguntas[11]=new pregunta(" La existencia del elemento identidad garantiza:"," La divicion exacta"," La suma fasorial"," No hay dos columnas o renglones en la tabla de composici\u00F3n que sean id\u00E9nticas"," Ninguna de las anteriores",2);

preguntas[12]=new pregunta(" Es una aplicaci\u00F3n de los monoides:"," Aritm\u00E9tica de computadores."," Irrelebante."," En la cocina."," Lectura.",0);

preguntas[13]=new pregunta(" ¿Semigrupo y monoide es lo mismo?"," Si."," No."," No s\u00E9."," Ninguna de las anteriores",0);

preguntas[14]=new pregunta(" Menciona una aplicaci\u00F3n de los monoides"," No tienen aplicaciones."," Biolog­\u00ED­a."," Lenguajes formales."," Mercadotecnia",2);

preguntas[15]=new pregunta(" Si adem\u00E1s la operaci\u00F3n es conmutativa, ¿C\u00F3mo se clasifica al monoide?"," Monoide con elemento neutro"," Monoide asociativo"," Monoide conmutativo"," Ninguna de las anteriores",2);
