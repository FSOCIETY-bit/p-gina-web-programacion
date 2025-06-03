ADRUINO
//CANAL
//PROYECTO GRUA 
#include<servo.h>


//DEFINICION DE LOS SERVOS 
SERVO1 SERVO1;
AERVO2 SERVO2;

voidsetup(){
    servo1.attach(7);
    servo2.attach(6);

    servo1.write(90);
    servo2.write(90);
}

voidloop(){

    //servo 1
    if(anlogRead(0)<200 && eje1<180{
        eje1++;}

    if (analogRead(0)<700 && eje>0{
        eje1--;}
        servo1.write(eje1);
}

   //servo 2
   if(analogRead(1)<200 && eje2<180){
    eje2++;

    servo2.write(eje2)
   }
   delay(15)
    
