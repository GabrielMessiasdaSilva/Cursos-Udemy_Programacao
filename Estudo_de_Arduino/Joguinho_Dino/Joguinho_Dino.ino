#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

#define BUZZ 9   
#define PIN_BUTTON 8
#define MI 330
#define LA 440
#define SI 495
#define DINO_RUN1_CHAR_INDEX 1
#define DINO_RUN2_CHAR_INDEX 2
#define DINO_JUMP_CHAR_INDEX 3
#define DINO_JUMP_CHAR_INDEX_UPPER 8          
#define DINO_JUMP_CHAR_INDEX_LOWER 4

#define CACTUS_CENTER_CHAR_INDEX 5
#define CACTUS_RIGHT_PART_CHAR_INDEX 6
#define CACTUS_LEFT_PART_CHAR_INDEX 7

#define SPACE ' '      
#define INDEX_1 1    

#define ROW_WIDTH 16
#define ROW_EMPTY 0
#define ROW_LOWER_VALUE_1 1
#define ROW_UPPER_VALUE_2 2

#define DINO_POSITION_OFF 0          
#define DINO_POSITION_RUN_LOWER_ROW_POSITION_1 1  
#define DINO_POSITION_RUN_LOWER_ROW_POSITION_2 2  

#define DINO_POSITION_JUMP_1 3       
#define DINO_POSITION_JUMP_2 4       
#define DINO_POSITION_JUMP_3 5       
#define DINO_POSITION_JUMP_4 6       
#define DINO_POSITION_JUMP_5 7       
#define DINO_POSITION_JUMP_6 8       
#define DINO_POSITION_JUMP_7 9       
#define DINO_POSITION_JUMP_8 10     

#define DINO_POSITION_RUN_UPPER_ROW_POSITION_1 11 
#define DINO_POSITION_RUN_UPPER_ROW_POSITION_2 12 

char rowUpper[ROW_WIDTH + 1];
char rowLower[ROW_WIDTH + 1];

bool buttonPushed = false;
int buttonState = 0;

void initializeGraphics(){
  
  static byte graphics[] = {
    // Dino movimento 1
    B01111,
    B11011,
    B01111,
    B11111,
    B01100,
    B01110,
    B11100,
    B00100,
    // Dino movimento 2
    B01111,
    B11011,
    B01111,
    B11111,
    B01100,
    B01110,
    B11100,
    B01000,
    // Dino pulo 1
    B01111,
    B11011,
    B01111,
    B11111,
    B01110,
    B01100,
    B01100,
    B10000,
    // Dino pulo 2
    B11111,
    B01011,
    B11111,
    B01111,
    B01110,
    B11100,
    B01100,
    B00000,
    // Cacto 1
    B00100,
    B10100,
    B10101,
    B10101,
    B01101,
    B00110,
    B00100,
    B00100,
    // Cacto 2
    B00000,
    B00001,
    B00001,
    B00001,
    B00000,
    B00000,
    B00000,
    B00000,
    // Cacto 3
    B00000,
    B00000,
    B10000,
    B10000,
    B10000,
    B00000,
    B00000,
    B00000,
    // Dino 3
    B01111,
    B11011,
    B01111,
    B11111,
    B01110,
    B01100,
    B11100,
    B00000,
  };
  int i;
//---------------------------------------------// 
  for (i = 0; i < 8; ++i) {                    // criação de sprites
    lcd.createChar(i + 1, &graphics[i * 8]); 
  }
//---------------------------------------------//  
  for (i = 0; i < ROW_WIDTH; ++i) {            // limpa a linha em que o sprite do dino não esta
    rowUpper[i] = SPACE; 
    rowLower[i] = SPACE;
  }
}
//-------------------------------------------// 
void advanceRow(char* row, byte newRow){     // função que faz a linha correr da direita para a esquerda
  for (int i = 0; i < ROW_WIDTH; ++i) {       
    char current = row[i];
    char next = (i == ROW_WIDTH-1) ? newRow : row[i+1];
    switch (current){
      case SPACE:
        row[i] = (next == CACTUS_CENTER_CHAR_INDEX) ? CACTUS_RIGHT_PART_CHAR_INDEX : SPACE;
        break;
      case CACTUS_CENTER_CHAR_INDEX:
        row[i] = (next == SPACE) ? CACTUS_LEFT_PART_CHAR_INDEX : CACTUS_CENTER_CHAR_INDEX;
        break;
      case CACTUS_RIGHT_PART_CHAR_INDEX:
        row[i] = CACTUS_CENTER_CHAR_INDEX;
        break;
      case CACTUS_LEFT_PART_CHAR_INDEX:
        row[i] = SPACE;
        break;
    }
  }
}

bool drawDino(byte position, char* rowUpper, char* rowLower, unsigned int score) {
 
  
  bool collide = false;
  char upperSave = rowUpper[INDEX_1];          
  char lowerSave = rowLower[INDEX_1];
  byte upper, lower;
  switch (position) {
    case DINO_POSITION_OFF: 
      upper = lower = SPACE;         
      break;
    case DINO_POSITION_RUN_LOWER_ROW_POSITION_1: 
      upper = SPACE;
      lower = DINO_RUN1_CHAR_INDEX;
      tone(BUZZ, MI, 100);
      break;
    case DINO_POSITION_RUN_LOWER_ROW_POSITION_2: 
      upper = SPACE;
      lower = DINO_RUN2_CHAR_INDEX;         
      break;
    case DINO_POSITION_JUMP_1:   
    case DINO_POSITION_JUMP_8:  
      upper = SPACE;
      lower = DINO_JUMP_CHAR_INDEX;       
      break;
    case DINO_POSITION_JUMP_2:   
    case DINO_POSITION_JUMP_7:   
      upper = DINO_JUMP_CHAR_INDEX_UPPER; 
      lower = DINO_JUMP_CHAR_INDEX_LOWER; 
      break;
    case DINO_POSITION_JUMP_3: 
    case DINO_POSITION_JUMP_4: 
    case DINO_POSITION_JUMP_5: 
    case DINO_POSITION_JUMP_6: 
      upper = DINO_JUMP_CHAR_INDEX;    
      lower = SPACE;    
      break;
    case DINO_POSITION_RUN_UPPER_ROW_POSITION_1:    
      upper = DINO_RUN1_CHAR_INDEX;             
      lower = SPACE;    
      tone(BUZZ, MI, 100);
      break;
    case DINO_POSITION_RUN_UPPER_ROW_POSITION_2:       
      upper = DINO_RUN2_CHAR_INDEX;             
      lower = SPACE;    
      break;
  }
  if (upper != ' ') {
    rowUpper[INDEX_1] = upper;               
    collide = (upperSave == SPACE) ? false : true;
  }
  if (lower != ' ') {
    rowLower[INDEX_1] = lower;
    collide |= (lowerSave == SPACE) ? false : true;              
  }
  
  byte digits = (score > 9999) ? 5 : (score > 999) ? 4 : (score > 99) ? 3 : (score > 9) ? 2 : 1;
  
 
  rowUpper[ROW_WIDTH] = '\0';
  rowLower[ROW_WIDTH] = '\0';
  char temp = rowUpper[16-digits];
  rowUpper[16-digits] = '\0';
  lcd.setCursor(0,0);
 
  lcd.print(rowUpper);
  rowUpper[16-digits] = temp;  
  lcd.setCursor(0,1);
  
  lcd.print(rowLower);
  
  lcd.setCursor(16 - digits,0);
  lcd.print(score);

  rowUpper[INDEX_1] = upperSave;
  rowLower[INDEX_1] = lowerSave;
  return collide;
}


void setup() {

  pinMode(PIN_BUTTON, INPUT);
  
  lcd.begin(16, 2);
  lcd.setCursor(3,0);
  lcd.print("Game Dino");
  delay(3000);
  //lcd.setCursor(2,1);
  //lcd.print("");
  //delay(3000);
  initializeGraphics();
  

}

void loop() {
  buttonState = digitalRead(PIN_BUTTON);
  if (buttonState == HIGH) {   
       
    buttonPushed = true; 
  }
  else {
    
    buttonPushed = false; 
    
  }
  static byte dinoPos = DINO_POSITION_RUN_LOWER_ROW_POSITION_1; 
  static byte newRowType = ROW_EMPTY; 
  static byte newRowDuration = 1;
  static bool playing = false;
  static bool blink = false;
  static unsigned int distance = 0;
  
  if (!playing) {
    drawDino((blink) ? DINO_POSITION_OFF : dinoPos, rowUpper, rowLower, distance >> 3);  
    if (blink) {
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Press Start");
    }
    delay(250);
    blink = !blink;
    if (buttonPushed) {
      initializeGraphics();
      dinoPos = DINO_POSITION_RUN_LOWER_ROW_POSITION_1;
      playing = true;
      buttonPushed = false;
      distance = 0;
    } 
    return;
  }

  
  advanceRow(rowLower, newRowType == ROW_LOWER_VALUE_1 ? CACTUS_CENTER_CHAR_INDEX : SPACE); // CACTUS_CENTER_CHAR_INDEX 5 and ROW_LOWER_VALUE_1 1
 
  
  
  if (--newRowDuration == 0) {
    if (newRowType == ROW_EMPTY) {
      newRowType = ROW_LOWER_VALUE_1;
      newRowDuration = 2 + random(5);
    } else {
      newRowType = ROW_EMPTY;
      newRowDuration = 10 + random(5);
    }
  }
    
  if (buttonPushed) {
    if (dinoPos <= DINO_POSITION_RUN_LOWER_ROW_POSITION_2) 
          dinoPos = DINO_POSITION_JUMP_1;
          tone(BUZZ, SI, 050);
    buttonPushed = false;
  }  

  if (drawDino(dinoPos, rowUpper, rowLower, distance >> 3)) {
    playing = false; 
  } else {
    if (dinoPos == DINO_POSITION_RUN_LOWER_ROW_POSITION_2 || dinoPos == DINO_POSITION_JUMP_8) {
      dinoPos = DINO_POSITION_RUN_LOWER_ROW_POSITION_1;
    } else if ((dinoPos >= DINO_POSITION_JUMP_3 && dinoPos <= DINO_POSITION_JUMP_5) && rowLower[INDEX_1] != SPACE) {
      dinoPos = DINO_POSITION_RUN_UPPER_ROW_POSITION_1;
    } else if (dinoPos >= DINO_POSITION_RUN_UPPER_ROW_POSITION_1 && rowLower[INDEX_1] == SPACE) {
      dinoPos = DINO_POSITION_JUMP_5;
    } else if (dinoPos == DINO_POSITION_RUN_UPPER_ROW_POSITION_2) {
      dinoPos = DINO_POSITION_RUN_UPPER_ROW_POSITION_1;
    } else {
      ++dinoPos;                                                                                                                        1
    }
    ++distance;
     
  }
  delay(100);

  
}
