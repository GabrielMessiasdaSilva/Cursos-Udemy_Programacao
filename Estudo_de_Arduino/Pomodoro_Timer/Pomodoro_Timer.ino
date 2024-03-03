#include <LiquidCrystal.h>

int segundos = 0;
int minutos = 0;
int contagem = 0;

const int minutos_estudo = 25;
const int minutos_pausa_curta = 5;
const int minutos_pausa_longa = 15;
const int repeticoes = 4;

int duracao_pausa;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
const int led1 = 6;
const int led2 = 7;
const int botao = 8;

void setup() {
  lcd.begin(16, 2);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(botao, INPUT);

  lcd.print("Pressione o botao");
  lcd.setCursor(0,1);
  lcd.print("para iniciar");

  while(digitalRead(botao)==LOW){
    // aguarda o botão ser pressionado para iniciar
  }
}

void loop() {
  contagem = 0;

  while(contagem < repeticoes){

    lcd.clear();
    lcd.print("Tempo de Estudo!");
    digitalWrite(led1, HIGH);
    digitalWrite(led2, LOW);
    lcd.setCursor(0, 1);

    segundos = 0;
    minutos = 0;

    while(minutos < minutos_estudo){
      segundos = 0;
      while(segundos < 60){
        lcd.setCursor(0, 1);
        if(minutos < 10){
          lcd.print("0");
        }
        lcd.print(minutos);
        lcd.print(":");
        if(segundos < 10){
          lcd.print("0");
        }
        lcd.print(segundos);
        delay(1000);
        segundos++;
      }
      minutos++;
    }
    
    lcd.clear();
    lcd.setCursor(0, 0);
    digitalWrite(led1, LOW);
    digitalWrite(led2, HIGH);
    
    if(contagem == (repeticoes - 1)){
      duracao_pausa = minutos_pausa_longa;
      lcd.print("Pausa Longa!");
    }
    else{
      duracao_pausa = minutos_pausa_curta;
      lcd.print("Pausa Curta!");
    }

    lcd.setCursor(0, 1);
    segundos = 0;
    minutos = 0;

    while(minutos < duracao_pausa){
      segundos = 0;
      while(segundos < 60){
        lcd.setCursor(0, 1);
        if(minutos < 10){
          lcd.print("0");
        }
        lcd.print(minutos);
        lcd.print(":");
        if(segundos < 10){
          lcd.print("0");
        }
        lcd.print(segundos);
        delay(1000);
        segundos++;
      }
      minutos++;
    }
    contagem++;
  }
}
