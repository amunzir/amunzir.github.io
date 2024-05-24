
//images
let desktopBkgImg;
let musicWindowImg;
let browserWindowImg;
let paintWindowImg;
let calculatorWindowImg;
let skipForwardImg;
let skipBackImg;
let playImg;
let pauseImg;
let browserImg;
let calcImg;

//songs
let plutoAudio;
let sweetChaosAudio;
let instagramAudio;
let rainbowAudio;
let psychoAudio;
let unforgettableAudio;
let astronautAudio;
let getCoolAudio;
let insomniaAudio;
let sunshineAudio;
//Covers
let plutoCover;
let sweetChaosCover;
let instagramCover;
let rainbowCover;
let psychoCover;
let unforgettableCover;
let levanterCover;
let getCoolCover;
let insomniaCover;

//window bools
let musicWindow = false;
let browserWindow = false;
let paintWindow = false;
let calculatorWindow = false;

//window buttons
let musicWindowButton;
let browserWindowButton;
let paintWindowButton;
let calculatorWindowButton;

//exit buttons
let musicExitBtn;
let browserExitBtn;
let paintExitBtn;
let calcExitBtn;

//for paint
let lineDotsX = [];
let lineDotsY = [];
let lineDotsColor = [];
let dotIsFirst = [];
let dotIsFirstState = false;
let currColor;
let colorsArray = [];

//for music
let songsArray = [];
let songCovers = [];
let songNames = [];
let songArtist = [];
let currSongIndex;
let audioPlaying = false;
let counter = 0;
let currVolume = 20;

//for calculator
let totalVal = 0;
let lastVal = 0;
let shownVal = 0;
let operation = "add";
let calcCount = 0;


let canvas;



function preload() {
  desktopBkgImg = loadImage("images/desktopimg.jpg");
  // musicWindowImg = loadImage("images/musicimg.png");
  // browserWindowImg = loadImage("images/internetimg.png");
  // paintWindowImg = loadImage("images/paintimg.png");
  // calculatorWindowImg = loadImage("images/calcimg.png");
  skipBackImg = loadImage("images/skipBackImg.png");
  skipForwardImg = loadImage("images/skipForwardImg.png");
  playImg = loadImage("images/playImg.png");
  pauseImg = loadImage("images/pauseImg.png");

  browserImg = loadImage("images/browserImg.png");
  calcImg = loadImage("images/calcBkgImg.png");

  plutoAudio = createAudio("audio/BTS-Pluto.mp3");
  sweetChaosAudio = createAudio("audio/DAY6-SweetChaos.mp3");
  instagramAudio = createAudio("audio/DEAN-Instagram.mp3");
  rainbowAudio = createAudio("audio/KERMIT-RainbowConnection.mp3");
  psychoAudio = createAudio("audio/REDVEL-Psycho.mp3");
  unforgettableAudio = createAudio("audio/SIA-Unforgettable.mp3");
  astronautAudio = createAudio("audio/SKZ-Astronaut.mp3");
  getCoolAudio = createAudio("audio/SKZ-GetCool.mp3");
  insomniaAudio = createAudio("audio/SKZ-Insomnia.mp3");
  sunshineAudio = createAudio("audio/SKZ-Sunshine.mp3");

  plutoCover = loadImage("images/albumCovers/BTS-Pluto-Cover.jpeg");
  sweetChaosCover = loadImage("images/albumCovers/DAY6-SweetChaos-Cover.png");
  instagramCover = loadImage("images/albumCovers/DEAN-Instagram-Cover.jpg");
  rainbowCover = loadImage("images/albumCovers/KERMIT-RainbowConnection-Cover.jpg");
  psychoCover = loadImage("images/albumCovers/REDVEL-Psycho-Cover.jpg");
  unforgettableCover = loadImage("images/albumCovers/SIA-Unforgettable-Cover.jpg");
  levanterCover = loadImage("images/albumCovers/SKZ-Levanter-Cover.png");
  getCoolCover = loadImage("images/albumCovers/SKZ-GetCool-Cover.jpg");
  insomniaCover = loadImage("images/albumCovers/SKZ-Insomnia-Cover.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);
  canvas.background(desktopBkgImg);

  paintSetup();
  musicSetup();

  push();
    rectMode(CENTER);
    noStroke();
    fill(200, 150);
    rect(width/2, height, 250, 70, 10, 10);
  pop();

  let menuCenter = (width/2)-22;
  musicWindowButton = createImg("images/musicimg.png", "");
  musicWindowButton.size(50,50);
  musicWindowButton.position(menuCenter - 30, height-55);
  //
  musicExitBtn = createImg("images/redDotImg.png", "");
  musicExitBtn.position(150, 80);
  musicExitBtn.size(10, 10);
  musicExitBtn.mousePressed(hideMusic);


  browserWindowButton = createImg("images/internetimg.png", "");
  browserWindowButton.size(50,50);
  browserWindowButton.position(menuCenter - 95, height-55);
  //
  browserExitBtn = createImg("images/redDotImg.png", "");
  browserExitBtn.position(width*2/3, 200);
  browserExitBtn.size(10, 10);
  browserExitBtn.mousePressed(hideBrowser);


  paintWindowButton = createImg("images/paintimg.png", "");
  paintWindowButton.size(50,50);
  paintWindowButton.position(menuCenter + 30, height-55);
  //
  paintExitBtn = createImg("images/redDotImg.png", "");
  paintExitBtn.position(width/4, 50);
  paintExitBtn.size(10, 10);
  paintExitBtn.mousePressed(hidePaint);


  calculatorWindowButton = createImg("images/calcimg.png", "");
  calculatorWindowButton.size(50,50);
  calculatorWindowButton.position(menuCenter + 90, height-55);
  //
  calcExitBtn = createImg("images/redDotImg.png", "");
  calcExitBtn.position(30, 320);
  calcExitBtn.size(10, 10);
  calcExitBtn.mousePressed(hideCalculator);

  musicWindowButton.mousePressed(showMusic);
  browserWindowButton.mousePressed(showBrowser);
  paintWindowButton.mousePressed(showPaint);
  calculatorWindowButton.mousePressed(showCalculator);

}

function paintSetup() {
  currColor = color(3, 94, 252);
              // red-0             orange-1            yellow-2             green-3            blue-4             purple-5            black-6         white-7
  colorsArray = [color(255, 4, 0), color(255, 128, 0), color(255, 247, 10), color(4, 207, 61), color(3, 94, 252), color(122, 4, 207), color(0, 0, 0), color(255, 255, 255)];
}
function musicSetup() {
  songsArray = [sunshineAudio, instagramAudio, rainbowAudio, getCoolAudio, plutoAudio, sweetChaosAudio, astronautAudio, insomniaAudio, psychoAudio, unforgettableAudio];
  songNames = ["Sunshine", "instagram", "Rainbow Connection", "Get Cool", "134340 (Pluto)", "Sweet Chaos", "Astronaut", "Insomnia", "Psycho", "Unforgettable"];
  songArtist = ["Stray Kids", "DEAN", "Kermit the Frog", "Stray Kids", "BTS", "Day6", "Stray Kids", "Stray Kids", "Red Velvet", "Sia"];
  songCovers = [levanterCover, instagramCover, rainbowCover, getCoolCover, plutoCover, sweetChaosCover, levanterCover, insomniaCover, psychoCover, unforgettableCover];
  currSongIndex = 0;
}

function draw() {
  defaultFunc();
}

function defaultFunc() {
  background(desktopBkgImg);

  push();
    rectMode(CENTER);
    noStroke();
    fill(200, 150);
    rect(width/2, height, 250, 70, 10, 10);
  pop();

  if(musicWindow) {showMusic();}
  else {hideMusic();}
  if(paintWindow) {showPaint();}
  else {hidePaint();}
  if(browserWindow) {showBrowser();}
  else {hideBrowser();}
  if(calculatorWindow) {showCalculator();}
  else {hideCalculator();}

  // slider = createSlider(0, 100, currVolume);
  // slider.position(width-120, height-20);
  // slider.style('width', '100px');
  // currVolume = slider.value();
}

function showMusic() {
  musicWindow = true;
  musicExitBtn.show();
  rect(150, 80, 400, 220); //whole window
  rect(150, 80, 60, 220); //side menu
  rect(150, 80, 400, 10); //top bar

  push();
    fill(200);
    rect(150, 90, 60, 15);
    fill(0);
    textSize(7);
    text("Piano Covers", 153, 100);
  pop();

  push();
    rect(330, 105, 100, 100); //cover art position
    image(songCovers[currSongIndex], 330, 105, 100, 100);
    textAlign(CENTER);
    textSize(10);
    fill(0);
    text(songNames[currSongIndex], 380, 220);
    textSize(7);
    text(songArtist[currSongIndex], 380, 230);
  pop();

  pauseAndPlay();
}
function hideMusic() {
  musicWindow = false;
  musicExitBtn.hide();
}
function pauseAndPlay() {
  counter++;
  image(skipBackImg, 330, 240, 25, 25);
  image(skipForwardImg, 430-25, 240, 25, 25);

  songsArray[currSongIndex].volume(currVolume/100);

  if(audioPlaying) {
    image(pauseImg, 365, 237, 30, 30);
  }
  else {
    image(playImg, 365, 237, 30, 30);
  }

  if(!paintWindow) {
    //pause/play clicked
    if(mouseIsPressed && mouseX > 365 && mouseX < 365+30 && mouseY > 237 && mouseY < 237+30 && counter > 10) {
      if(audioPlaying) {
        songsArray[currSongIndex].pause();
      }
      else {
        songsArray[currSongIndex].play();
      }
      audioPlaying = !audioPlaying;
      counter = 0;
    }
    //back clicked
    if(mouseIsPressed && mouseX > 330 && mouseX < 330+25 && mouseY > 240 && mouseY < 240+25 && counter > 10) {
      if(currSongIndex == 0) {
        songsArray[currSongIndex].stop();
        audioPlaying = false;
      }
      else {
        songsArray[currSongIndex].stop();
        currSongIndex--;
        songsArray[currSongIndex].play();
      }
      counter = 0;
    }

    //forward clicked
    if(mouseIsPressed && mouseX > 405 && mouseX < 430 && mouseY > 240 && mouseY < 240+25 && counter > 10) {
      if(currSongIndex == songsArray.length - 1) {
        songsArray[currSongIndex].stop();
        audioPlaying = false;
      }
      else {
        songsArray[currSongIndex].stop();
        currSongIndex++;
        if(audioPlaying) {songsArray[currSongIndex].play();}

      }
      counter = 0;
    }

    //levanter cover clicked
    if(mouseIsPressed && mouseX > 330 && mouseX < 430 && mouseY > 105 && mouseY < 205 && counter > 10 && songNames[currSongIndex] == "Astronaut") {
      print("link clicked");
      //link("file:///livingRoom.html");
      window.location.href = 'livingRoom.html';
    }
  }


}

function showBrowser() {
  browserWindow = true;
  rect(width*2/3, 200, 200, 300);
  rect(width*2/3, 200, 200, 10); //top bar
  image(browserImg, width*2/3, 210, 200, 280);
  browserExitBtn.show();

  if(mouseIsPressed && mouseX > (width *2/3)+180 && mouseX < (width *2/3)+200 && mouseY > 210 && mouseY < 235) {
    window.location.href = 'bedroom.html';
  }

}
function hideBrowser() {
  browserWindow = false;
  browserExitBtn.hide();
}

function showPaint() {
  paintWindow = true;
  rect(width/4, 50, 400, 400)
  rect(width/4, 50, 400, 10) //top bar
  push();
    fill(currColor);
    noStroke();
    for(var i = 0; i < lineDotsX.length; i++) {
      fill(lineDotsColor[i]);
      ellipse(lineDotsX[i], lineDotsY[i], 5, 5);
      if(lineDotsColor[i] == lineDotsColor[i+1] && dotIsFirst[i+1] != true) {
        push();
          stroke(lineDotsColor[i]);
          strokeWeight(5);
          line(lineDotsX[i], lineDotsY[i], lineDotsX[i+1], lineDotsY[i+1]);
        pop();
      }

    }
    if(mouseIsPressed && mouseX > width/4 && mouseX < width/4 + 400 && mouseY > 60 && mouseY < 430) {
      ellipse(mouseX, mouseY, 5, 5);
      lineDotsX.push(mouseX);
      lineDotsY.push(mouseY);
      lineDotsColor.push(currColor);
      dotIsFirst.push(dotIsFirstState);
      dotIsFirstState = false;
    }
    if(mouseIsPressed && mouseX > width/4 && mouseX < width/4 + 400 && mouseY > 60 && mouseY < 430) {
      dotIsFirstState = true;
    }
  pop();
  paintBar();
  paintExitBtn.show();
}
function paintBar() {
  rect(width/4, 430, 400, 20);
  push();
    for(var i = 0; i < colorsArray.length; i++) {
      fill(colorsArray[i]);
      rect(width/4 + i*20, 430, 20, 20);
    }
  pop();
  if(mouseIsPressed && mouseX > width/4 && mouseX < width/4 + 400 && mouseY > 430 && mouseY < 450) {
    currColor = colorsArray[~~((mouseX-width/4) / 20)];
  }
}
function hidePaint() {
  paintWindow = false;
  paintExitBtn.hide();
}

function showCalculator() {
  calculatorWindow = true;
  rect(30, 320, 150, 250);
  image(calcImg, 30, 320, 150, 250);
  rect(30, 320, 150, 10);
  push();
    fill(255);
    textSize(40);
    text(shownVal, 35, 380);
  pop();
  if(mouseIsPressed && mouseX > 30 && mouseX < 170 && mouseY > 330 && mouseY < 380) {
    window.location.href = 'office.html';
  }
  calcFunc();
  calcExitBtn.show();
}
function calcFunc() {
  calcCount++;

  if(mouseIsPressed && calcCount > 10) {

    if(mouseX > 38 && mouseX < 66 && mouseY > 405 && mouseY < 430) {
      shownVal = shownVal*10 + 7;
    }
    else if(mouseX > 75 && mouseX < 100 && mouseY > 405 && mouseY < 430) {
      shownVal = shownVal*10 + 8;
    }
    else if(mouseX > 115 && mouseX < 135 && mouseY > 405 && mouseY < 430) {
      shownVal = shownVal*10 + 9;
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 405 && mouseY < 430) {
      //+
      lastVal = shownVal;
      operation = "add";
      shownVal = 0;
    }
    else if(mouseX > 38 && mouseX < 66 && mouseY > 445 && mouseY < 465) {
      shownVal = shownVal*10 + 4;
    }
    else if(mouseX > 75 && mouseX < 100 && mouseY > 445 && mouseY < 465) {
      shownVal = shownVal*10 + 5;
    }
    else if(mouseX > 115 && mouseX < 135 && mouseY > 445 && mouseY < 465) {
      shownVal = shownVal*10 + 6;
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 445 && mouseY < 465) {
      //-
      lastVal = shownVal;
      operation = "minus";
      shownVal = 0;
    }
    else if(mouseX > 38 && mouseX < 66 && mouseY > 480 && mouseY < 510) {
      shownVal = shownVal*10 + 1;
    }
    else if(mouseX > 75 && mouseX < 100 && mouseY > 480 && mouseY < 510) {
      shownVal = shownVal*10 + 2;
    }
    else if(mouseX > 115 && mouseX < 135 && mouseY > 480 && mouseY < 510) {
      shownVal = shownVal*10 + 3;
    }
    else if(mouseX > 38 && mouseX < 66 && mouseY > 520 && mouseY < 540) {
      shownVal = 0;
      lastVal = 0;
    }
    else if(mouseX > 75 && mouseX < 100 && mouseY > 520 && mouseY < 540) {
      shownVal = shownVal*10 + 0;
    }
    else if(mouseX > 115 && mouseX < 135 && mouseY > 520 && mouseY < 540) {
      shownVal = shownVal/100;
    }
    else if(mouseX > 150 && mouseX < 175 && mouseY > 480 && mouseY < 540) {
      if(operation == "add") {
        totalVal = lastVal + shownVal;
        shownVal = totalVal;
      }
      else if(operation == "minus") {
        totalVal = lastVal - shownVal;
        shownVal = totalVal;
      }
    }
    calcCount = 0;
  }
}
function hideCalculator() {
  calculatorWindow = false;
  calcExitBtn.hide();
}
