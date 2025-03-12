let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;
// T
context.fillRect(30, 30, 120, 30)
context.fillRect(75, 30, 30, 120)

// O
context.beginPath();
// ctx.arc(x, y, promień, kąt początkowy, kąt końcowy, kierunek przeciwny do ruchu wskazówek zegara)
context.arc(200, 90, 60, 0, Math.PI * 2); // Pełny okrąg
// Wypełnij okrąg kolorem
context.fill();

context.fillStyle = '#ff8'
context.beginPath();
// ctx.arc(x, y, promień, kąt początkowy, kąt końcowy, kierunek przeciwny do ruchu wskazówek zegara)
context.arc(200, 90, 30, 0, Math.PI * 2); // Pełny okrąg
// Wypełnij okrąg kolorem
context.fill();
context.fillStyle ='black'
// M
context.fillRect(270, 30, 30, 120)
context.fillRect(270, 30, 120, 30)
context.fillRect(330, 30, 30, 120)
context.fillRect(390, 30, 30, 120)
// A
context.fillRect(440, 30, 30, 120)
context.fillRect(500, 30, 30, 120)
context.fillRect(440, 30, 80, 30)
context.fillRect(440, 80, 80, 30)
// S
context.fillRect(550, 30, 80, 30)
context.fillRect(550, 30, 30, 60)
context.fillRect(550,75, 80, 30)
context.fillRect(600, 75, 30, 60)
context.fillRect(550, 120, 80, 30)
//Z
// Zacznij rysować nowy kształt
context.beginPath();

// Ustaw startową pozycję (punkt A)
context.moveTo(695, 60);

// Narysuj linię do punktu B
context.lineTo(730, 60); // Linia pozioma

// Narysuj linię do punktu C
context.lineTo(685, 120); // Linia ukośna w dół

// Narysuj linię do punktu D
context.lineTo(650, 120); // Linia pozioma

// Zamknij kształt, wracając do punktu A
context.closePath();

// Wypełnij kształt kolorem
context.fill();

context.fillRect(650, 30, 80, 30)
context.fillRect(650, 120, 80, 30)



canvas.style.background = "#ff8"