/* Mais informações em:
  https://blog.eletrogate.com/guia-completo-do-display-lcd-arduino/
 gerador de carcteres
 http://omerk.github.io/lcdchargen/
*/
int  x = 200;
#define pacman 2
// inclui a biblioteca de utilização do display de LCD:
#include <LiquidCrystal.h>
// Caracteríscias iniciais do hardware

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
//Sequência p/comunicação com 6 pinos (RS-EN-D4-D5-D6-D7)
//Sequência p/comunicação com 10 pinos(RS-EN-D0-D1-D2-D3-D4-D5-D6-D7)
byte smile1[8] =              // Vetor do caracter especial smile
{
  0b00000,
  0b11011,
  0b11011,
  0b00100,
  0b00100,
  0b10001,
  0b01110,
  0b00000
},
smile2[8] =              // Vetor do caracter especial smile 2
{
  0b00000,
  0b00000,
  0b01010,
  0b00000,
  0b00000,
  0b10001,
  0b01110,
  0b00000
},
ghost1[8] =              // Vetor do caracter especial
{
  0b00000,
  0b01110,
  0b11111,
  0b10101,
  0b11111,
  0b11111,
  0b10101,
  0b00000
},
ghost2[8] =              // Vetor do caracter especial
{
  0b00000,
  0b01110,
  0b11111,
  0b10101,
  0b11111,
  0b11111,
  0b01010,
  0b00000
},
pacman1[8] =              // Vetor do caracter especial
{
  0b01110,
  0b11011,
  0b11100,
  0b10000,
  0b11100,
  0b11111,
  0b01110,
  0b00000
},
pacmanb[8] =              // Vetor do caracter especial
{
  0b00000,
  0b01110,
  0b11011,
  0b11111,
  0b11111,
  0b11111,
  0b01110,
  0b00000
},
pastilha[8] =              // Vetor do caracter especial
{
  0b00000,
  0b00000,
  0b00100,
  0b01110,
  0b01110,
  0b00100,
  0b00000,
  0b00000
},
pacmanv[8] =              // Vetor do caracter especial
{
  0b01110,
  0b11011,
  0b00111,
  0b00001,
  0b00111,
  0b11111,
  0b01110,
  0b00000
};

void setup()                             // ate 8 caracteres especiais podem ser criados
{
  lcd.createChar(0, ghost1);         // criando o caracter especial 1
  lcd.createChar(1, ghost2);         // criando o caracter especial 1
  lcd.createChar(pacman, pacman1);         // criando o caracter especial 1
  lcd.createChar(3, pacmanb);         // criando o caracter especial bolinha
  lcd.createChar(4, pastilha);        // criando o caracter especial 1
  lcd.createChar(5, pacmanv);
  lcd.begin(16, 2);                      // definindo o LCD - 16 colunas e 2 linhas
}

void loop()
{
  int tempo = 50,i;
  byte g = 0, f, e = 15;
  for (i = 16; i >=0 ; i--)
  {
    
    for (f = g; f < 16; f++)
    {
      lcd.setCursor(f, 1);
      lcd.print("-");
    }
    lcd.setCursor(15, 1);
    lcd.write((byte)4); //imprime a pastilha
    if (g % 2 == 0)
    {
      lcd.setCursor(i, 0);
      lcd.write((byte)0);
      lcd.setCursor(g, 1);
      lcd.write((byte)3);// imprimindo o caracter especial 1
    }
    else
    {
      lcd.setCursor(i, 0);
      lcd.write((byte)1);
      lcd.setCursor(g, 1);
      lcd.write((byte)pacman);// imprimindo o caracter especial 1
    }
    if (i % 2 == 0)//testa se o valor da variável é par, 
      g++;
    //e--;
    delay(tempo);
    lcd.clear();
  }
  e = 0;
  for ( i = 0; i < 15; i++)
  {
   
    for (f = g; f < 16; f++)
    {
      lcd.setCursor(f, 1);
      lcd.print("-");
    }
    lcd.setCursor(15, 1);
    lcd.write((byte)4); //imprime a pastilha
    if (g % 2 == 0)
    {
      lcd.setCursor(i, 1);
      lcd.write((byte)0);
      lcd.setCursor(g, 1);
      lcd.write((byte)3);// imprimindo o caracter especial 1
    }
    else
    {
      lcd.setCursor(i, 1);
      lcd.write((byte)1);
      lcd.setCursor(g, 1);
      lcd.write((byte)pacman);// imprimindo o caracter especial 1

    }
     if (i % 2 == 0)
      g++;
    //e++;
    delay(tempo);
    lcd.clear();
  }
/////////retorno//////////
  e = 14;
  g=16;
  for ( i = 0; i < 16; i++)
  {
    if (i % 2 == 0)
      g--;
    if (g % 2 == 0)
    {
      lcd.setCursor(e, 1);
      lcd.write((byte)0);
      lcd.setCursor(g, 1);
      lcd.write((byte)3);// imprimindo o caracter especial 1
    }
    else
    {
      lcd.setCursor(e, 1);
      lcd.write((byte)1);
      lcd.setCursor(g, 1);
      lcd.write((byte)5);// imprimindo o caracter especial 1

    }
    e--;
    delay(tempo);
    lcd.clear();
  }
///////////////////////////////
  for ( i = 0; i < 16; i++)
  {
    if (i % 2 == 0)
      g--;

    if (g % 2 == 0)
    {
      lcd.setCursor(i, 0);
      lcd.write((byte)0);
      lcd.setCursor(g, 1);
      lcd.write((byte)3);// imprimindo o caracter especial 1
    }
    else
    {
      lcd.setCursor(i, 0);
      lcd.write((byte)1);
      lcd.setCursor(g, 1);
      lcd.write((byte)5);// imprimindo o caracter especial 1
    }
    delay(tempo);
    lcd.clear();
  }

}