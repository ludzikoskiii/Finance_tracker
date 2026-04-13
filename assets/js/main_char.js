const canvas = document.getElementById('hero_element');
const ctx = canvas.getContext('2d');

const data = [0, 0, 0, 0];
const target = [10, 20, 60, 80];

gsap.to(data, {
  duration: 2,
  endArray: target,
  ease: "expoScale(0.5,7,none)",
  onUpdate: () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - data[0]*2);
    for(let i=1;i<data.length;i++){
      ctx.lineTo(i*100, canvas.height - data[i]*2);
    }
    ctx.strokeStyle = 'teal';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
});