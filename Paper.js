const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawGrid() {
    const scale = parseFloat(document.getElementById('scale').value);
    const mmPerPixel = 10 / scale; // Ajustar según la escala proporcionada

    // Ajustar el tamaño del canvas
    canvas.width = 300; // Ajustar según el tamaño deseado
    canvas.height = 300; // Ajustar según el tamaño deseado

    // Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la cuadrícula
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += mmPerPixel) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.fillText((x / mmPerPixel).toFixed(1), x, 10); // Etiquetas de medición
    }
    for (let y = 0; y < canvas.height; y += mmPerPixel) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.fillText((y / mmPerPixel).toFixed(1), 0, y + 10); // Etiquetas de medición
    }
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
}

function drawCircle() {
    const scale = parseFloat(document.getElementById('scale').value);
    const mmPerPixel = 10 / scale;
    const diameter = document.getElementById('diameter').value;
    const radius = (diameter / 2) * mmPerPixel;

    // Redibujar la cuadrícula
    drawGrid();

    // Dibujar la circunferencia
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#f00';
    ctx.stroke();

    // Actualizar el valor mostrado
    document.getElementById('diameterValue').innerText = `${diameter} mm`;
}

// Dibujar la cuadrícula inicial
drawGrid();
drawCircle(); // Asegúrate de dibujar la circunferencia inicial
