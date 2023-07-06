let numbers = [];
let numeros = ['∰',2,3,5,8,7,9, '∅','π',15,16,19,'∞','Σ','∭','∄',22,6];// Criando um array de números
let x = [];// Criando variáveis para armazenar as 
let y = [];//posições x e y dos número
let velocidade = 4;// Criando uma variável para armazenar a velocidade dos números
let tela = 0;
let perguntaAtual = 0;
let opcaoSelecionada = -1;
let acertos = 0;
let perguntas = [
  {
    pergunta: "simplifique a expressão:  (a⁴ . b³) ³ ",
    opcoes: ["a¹² . b⁹","a² + b³","a⁹ . b"],
    respostaCorreta: 0
  },
     {
    pergunta: "                      5³ . 5² = 5⁶",
    opcoes: ["verdadeiro", "falso"],
    respostaCorreta: 1
     },
  {
    pergunta:"simplifique a expressão: x² . x³ + 2 ",
    opcoes: ["x + 2² . 2", "x⁵ + 2","3", "x³ - 2x"],
    respostaCorreta: 1
  },
  {
    pergunta: "                     5² - 4² = 3²",
    opcoes: ["verdadeiro","falso"],
    respostaCorreta: 0
  },
 
  {
    pergunta: "marque a opção INCORRETA :",
    opcoes: ["2 + 2 = 2²", "3² - 3³ = 3", "7² = 49"],
    respostaCorreta: 1
  },
  {
    pergunta: "            (a + b)² = a² + b² ?",
    opcoes: ["verdadeiro", "falso"],
    respostaCorreta: 1
  },
  {
    pergunta: "            Quanto é 8³ - 8² ?",
    opcoes: ["0", "64", "56", "8"],
    respostaCorreta: 3
  },
  {
    pergunta: "            (a . b) . (a . b) = a² + b² ",
    opcoes: ["verdadeiro", "falso"],
    respostaCorreta: 1
  },
  
];
let mensagem = "";
let percentualAcertos = 0;
let xbutton = 150, ybutton = 90, xbutton2 = 150, ybutton2 = 150, xbutton3 = 150, ybutton3 = 210, xbutton4 = 50, ybutton4 = 50, largurabutton = 180, alturabutton = 50;
let x1 = 300, y4 = 200;
let xbuttonTutorial = 150, ybuttonTutorial = 90, largurabuttonTutorial = 180, alturabuttonTutorial = 50;
let x1Tutorial = 300, y4Tutorial = 200;
// essa variável controla qual tela será exibida. O valor 0 representa a tela inicial.
let img, fonte,imginf, imgcred, imgcred2,fundamentos; // Variáveis para armazenar as imagens

function preload() { //é responsável por carregar as imagens antes do jogo iniciar.
  
  fonte       = loadFont('Teko-Regular.ttf');
  imginf      = loadImage('quadro.jpg');
  imgcred     = loadImage('fundocreditos.jpg');
  imgcred2    = loadImage('elo.jpeg');
  imgcred3    = loadImage('lucas.jpeg');
  fundamentos = loadImage('Comece seu dia.png');
  forms       = loadImage('Rosa e Cinza Votos Renovação Fotos Montagem.png');

}

function mouseClicked() {
  if (tela === 0) {
    if (mouseX >= 250 && mouseX <= 340 && mouseY >= 210 && mouseY <= 250) {
      tela = 1;
      perguntaAtual = 0;
      opcaoSelecionada = -1;
      acertos = 0;
    } else if (mouseX >= 414 && mouseX <= 596 && mouseY >= 12 && mouseY <= 32) {
      tela = 2;
    } else if (mouseX >= 462 && mouseX <= 595 && mouseY >= 46 && mouseY <= 68) {
      tela = 3;
    } else if (mouseX >= 2 && mouseX <= 197 && mouseY >= 300 && mouseY <= 326) {
      tela = 5;   
    } else if (mouseX >= 0 && mouseX <= 247 && mouseY >= 337 && mouseY <= 363) {
      tela = 6;  
    }
  } else if (tela === 1) {
    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      let y = 150 + i * 50;
      if (mouseX > 100 && mouseX < 500 && mouseY > y && mouseY < y + 40) {
        opcaoSelecionada = i;
        break;
      }
    }

    if (mouseX > 500 && mouseX < 580 && mouseY > 350 && mouseY < 380) {
      tela = 0;
      perguntaAtual = 0;
      opcaoSelecionada = -1;
      acertos = 0;
    }

    if (opcaoSelecionada !== -1) {
      if (opcaoSelecionada === perguntas[perguntaAtual].respostaCorreta) {
        acertos++;
      }

      if (perguntaAtual === perguntas.length - 1) {
        tela = 4;
      } else {
        perguntaAtual++;
        opcaoSelecionada = -1;
      }
    }
  }else if (tela === 5) {
    if (mouseX >= 400 && mouseX <= 480 && mouseY >= 330 && mouseY <= 360) {
      tela = 0; }}
      else if (tela >= 2 && tela <= 6) {
    if (mouseX > 300 && mouseX < 580 && mouseY > 200 && mouseY < 380) {
      tela = 0;
    }
  }else if (tela === 6){
    if (mouseX >= 475 && mouseX <= 556 && mouseY >= 396 && mouseY <= 428) {
    tela = 0;
    } 
  }
}

function setup() { //Essa função é executada uma vez no início do programa e é usada para configurar o canvas
  createCanvas(600, 400);
    for (let i = 0; i < numeros.length; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }

}

function draw() { //Essa função é executada continuamente e é responsável por desenhar os elementos na tela com base no valor da variável tela.

    textFont("Arial Unicode MS");
    clear();

  if (tela === 0) {
    inicial();
  } else if (tela === 1) {
    jogo();
  } else if (tela === 2) {
    informações();
  } else if (tela === 3) {
    creditos();
  } else if (tela === 4) {
    resultado();
  } else if (tela === 5) {
    referencias();
  } else if (tela === 6) {
    formulario();
  }
}

function inicial() {
  noStroke()
   // Pintando o fundo de preto
  background(32,178,2000);
  // Definindo a cor e o tamanho do texto
  fill(255);
  textSize(32);
  
  // Usando um loop for para desenhar cada número na tela
  for (let i = 0; i < numeros.length; i++) {
  // Desenhando o número na posição x e y correspondente
  text(numeros[i], x[i], y[i]);
    
  // Atualizando a posição x do número de acordo com a velocidade
  x[i] = x[i] + velocidade;
    
    // Se o número sair da tela pela direita, faz ele voltar pela esquerda
    if (x[i] > width) {
      x[i] = -textWidth(numeros[i]);
    }
    
    // Se o número sair da tela pela esquerda, faz ele voltar pela direita
    if (x[i] < -textWidth(numeros[i])) {
      x[i] = width;
    }
  }
  textFont(fonte);
 
  fill(240, 255, 255, 200);
  rect(250, 210, 90, 40, 100);
  fill("black");
  textSize(26);
  text("START", 273, 237);
  
  /*push();
  fill(0);
  text(mouseX + ":" + mouseY, 100, 80);
  pop();*/
  
  fill(102,205,170);
  rect(350, 8, 500, 30, 5);
  rect(460, 45, 150, 30, 5);
  fill('white');
  text("COMO FUNCIONA O JOGO?", 360, 31);
  text('CRÉDITOS', 500, 69);
  fill(102,205,170);
  rect(0,300,200,30,5);
  fill('white');
  text('REFERENCIAS',35,322);
  fill(102,205,170);
  rect(0,337,250,30,5);
  fill('white');
  text('FORMULÁRIO',65,360);

  if (mouseX >= 250 && mouseX <= 340 && mouseY >= 210 && mouseY <= 250) {
    fill(240, 255, 255, 250);
    rect(245, 210, 100, 45, 100);
    fill('black');
    text('START', 273, 240);
  } 
  else if (mouseX >= 414 && mouseX <= 596 && mouseY >= 12 && mouseY <= 32) {
    fill(173, 216, 230  );
    rect(350, 8, 500, 30, 5);
    fill('white');
    noStroke();
    text("COMO FUNCIONA O JOGO?", 360, 31);
  } 
  else if (mouseX >= 462 && mouseX <= 595 && mouseY >= 46 && mouseY <= 68) {
    fill(173, 216, 230);
    rect(460, 45, 150, 30, 5);
    fill('white');
    noStroke();
    fill('white');
    text('CRÉDITOS', 494, 69);
    
  } 
  else if (mouseX >= 1 && mouseX <= 196 && mouseY >= 299 && mouseY <= 327) {
    fill(173, 216, 230);
    rect(0,300,200,30,5);
    noStroke();
    fill('white');
    text('REFERENCIAS',35,322);
    
  } 
  else if (mouseX >= 1 && mouseX <= 196 && mouseY >= 337 && mouseY <= 362) {
    fill(173, 216, 230);
    noStroke();
    rect(0,337,250,30,5);
    fill('white');
    text('FORMULÁRIO',65,360);
    
  } 
}

function jogo() {
  
  textFont("Arial Unicode MS");
  background(102,205,170);
  textSize(24);
  /*push();
  fill('white');
  text(mouseX + ":" + mouseY, 100, 127);
  pop();*/
  
  text(perguntas[perguntaAtual].pergunta, 110, height / 2 - 100);

  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    let y = 150 + i * 50;
    fill(255);
    rect(100, y, 400, 40, 5);
    fill(0);
    text(perguntas[perguntaAtual].opcoes[i], width / 2, y + 20);

    if (opcaoSelecionada === i) {
      if (opcaoSelecionada === perguntas[perguntaAtual].respostaCorreta) {
        // Resposta correta - exibe o retângulo verde
        noFill();
        
      } else {
        // Resposta incorreta - exibe o retângulo vermelho
        noFill();
        
      }
      strokeWeight(2);
      rect(100, y, 400, 40, 5);
    }
    //image(imagensPerguntas[i], x, y, largura, altura);
  }
  
  fill(255);
  rect(500, 350, 80, 30, 5);
  fill(0);
  textSize(16);
  text("VOLTAR", 515, 370);
  
}

function informações() {

  textFont(fonte);
  background(imginf);
  textSize(26);
  fill("black");
  textSize(24);
  text("Olá! Seja bem-vindo ao nosso projeto de jogo matemático",100,130);
  text("\n O intuito do jogo é trabalhar os conhecimentos adquiridos \ndurante  o curso de LOP e unirmos à ele matemática básica ",100,150);
  text("O jogo é simples, basta resolver os probleminhas de  \n matemática que serão fornecidos.",100,250);
  text(" Divirta-se!!!", 100, 350) 
  textSize(20);

  // Botão Voltar
  fill('#003785');
  rect(400, 330, 80, 30, 5);
  fill('white');
  textSize(16);
  text("VOLTAR", 420, 350);
  /*push();
  fill('black');
  text(mouseX + ":" + mouseY, 348, 302);
  pop();*/
   if (mouseX >= 399 && mouseX <= 478 && mouseY >= 329 && mouseY <= 357) {
  fill('#30ded5');
  rect(400, 330, 80, 30, 5);
  textSize(19)
  fill('black');
  text("VOLTAR", 420, 350);
  } 
}

function creditos() {
  
  textFont(fonte);
  background(imgcred);
  image(imgcred2, 25, 60, 150, 90);
 
  fill(30, 25, 112);
  //rect(25, 160, 150, 50, 5);
  textSize(40);
  fill("white");
  text("PROGRAMADORES :", 25, 40);
  text("DOCENTE :", 430, 230);
  text("Idalmis",440,270)
  textSize(26);
  text("Eloise Pereira Silva", 200, 100);
  text("Eng. Mecanica", 200,125);
  fill(30, 25, 112);
  //rect(400, 215, 150, 50, 5);//ret nome
  textSize(40);
  fill("white");
  
  image(imgcred3,25,200,150,170);//lucas
  textSize(26);
  text("Lucas vinicius ", 200, 340);
  text("Eng. Mecanica", 200, 365);
  
   // Botão Voltar
  fill(255);
  rect(480, 350, 80, 30, 5);
  //rect(500, 350, 80, 30, 5);
  fill(0);
  textSize(16);
  //text("VOLTAR", 515, 370);
  text("VOLTAR", 495, 370);
 /* push();
  fill('white');
  text(mouseX + ":" + mouseY, 348, 302);
  pop();*/
   if (mouseX >= 477 && mouseX <= 560 && mouseY >= 347 && mouseY <= 377) {
     fill('#03A9F4');
     rect(475, 348, 85, 35, 5);
     textSize(17)
     fill('black');
     text("VOLTAR", 495, 370);
  } 
}

function resultado() {
  background(102,205,170);
  textSize(32);
  fill('white');
  text("Resultado", 100, height / 2 - 50);
  textSize(24);
  text("Você acertou " + acertos + " de " + perguntas.length + " perguntas.", 100, height / 2);

  fill(255);
  rect(500, 350, 80, 30, 5);
  fill(0);
  textSize(16);
  text("VOLTAR", 515, 370);
   
  // Cria os números iniciais
  for (let i = 0; i < 10; i++) {
    numbers.push(new Number(random(width), random(-2, -1)));
  }
  // Atualiza e exibe cada número
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].update();
    numbers[i].display();
  }
}

function referencias (){ 
 /* push();
  fill('black');
  text(mouseX + ":" + mouseY, 348, 302);
  pop()*/
  
  createCanvas(600, 460);
  background(fundamentos); 
  // Botão Voltar
  fill('#003785');
  rect(495, 400, 80, 30, 5);
  fill('white');
  textSize(16);
  text("VOLTAR", 500, 420);

  /*push();
  fill('black');
  text(mouseX + ":" + mouseY, 348, 302);
  pop();*/
  
   if (mouseX >= 495 && mouseX <= 550 && mouseY >= 400 && mouseY <= 570) {
      if (mouseIsPressed) {
      tela = 0; // Redireciona para a tela inicial (tela 0) ao clicar no                       botão "VOLTAR"
    }
     
  fill('red');
  rect(495, 400, 80, 30, 5);
  fill('white');
  textSize(16);
  text("VOLTAR", 500, 420);

  } 

}

function formulario (){
    createCanvas(600, 500);
    image(forms,0,0,580,500);
    fill('#03A9F4');
    rect(475, 398, 85, 35, 5);
    textSize(17)
    fill('black');
    text("VOLTAR", 480, 420);
  
    /*push();
    fill('blue');
    text(mouseX + ":" + mouseY, 348, 302);
    pop();*/
  
    if (mouseX >= 475 && mouseX <= 556 && mouseY >= 396 && mouseY <= 428) {
      if (mouseIsPressed) {
      tela = 0; // Redireciona para a tela inicial (tela 0) ao clicar no botão "VOLTAR"
    }
     fill('red');
    rect(475, 398, 85, 35, 5);
    textSize(17)
    fill('black');
    text("VOLTAR", 480, 420);
  } 
}

class Number {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.value = int(random(10));
  }
  
update() {
    // Move o número para baixo
    this.y += this.speed;
    
    // Verifica se o número saiu da tela e redefine sua posição
    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(width)
    }
  }
  
display() {
    textSize(10);
    textAlign(CENTER);
    text(this.value, this.x, this.y);
  }
  }