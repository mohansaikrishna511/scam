const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearCanvas');

let drawing = false;

// Start drawing
canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

// Draw on canvas
canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.fillStyle = colorPicker.value;
  ctx.beginPath();
  ctx.arc(x, y, brushSize.value / 2, 0, Math.PI * 2);
  ctx.fill();
}

// Clear the canvas
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
