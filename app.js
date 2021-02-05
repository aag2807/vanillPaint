var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
let clrBtn = document.getElementById('clr-btn');


function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

resize();

let pos ={ x:0 , y: 0};

const setPosition = ( e ) => {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

const draw = (e) => {
  if (e.buttons !== 1) return ;
  var color = document.getElementById('hex').value;

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();

}

const clearCanvas = () => ctx.clearRect(0,0, canvas.width, canvas.height);

window.addEventListener('resize', resize);

clrBtn.addEventListener('click', clearCanvas);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

