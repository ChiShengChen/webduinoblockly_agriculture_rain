#include "IRRecvCounter.h"
#include <Wire.h>
#include <SPI.h>

//rain
#define rainpin 2
int RR = 0;
float rainmeter = 0;

void setup() {
  Serial.begin(9600);
  //rain
  
//  attachInterrupt(digitalPinToInterrupt(rainpin), blink, RISING);
}


void blink()//rain
{
  rainmeter += 0.2;
}

void loop() {
  pinMode( rainpin , INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(rainpin), blink, RISING);
  //rain
  RR=digitalRead(rainpin);
  delay(500);
  //rain
  Serial.println("-----------------------------------------");
  Serial.print("RainState:");
  Serial.println(RR);
  Serial.println("Rainmeter");
  Serial.print(rainmeter);
  Serial.println("mm");

}

