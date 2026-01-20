let ctx;

function play(freq) {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";      
  osc.frequency.value = freq;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  gain.gain.setValueAtTime(1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
  osc.stop(ctx.currentTime + 0.31);
}

// attach to keys
document.getElementById("key1").onclick = () => play(261.63); // C4
document.getElementById("key2").onclick = () => play(293.66); // D4
document.getElementById("key3").onclick = () => play(329.63); // E4
document.getElementById("key4").onclick = () => play(349.23); // F4
document.getElementById("key5").onclick = () => play(392.00); // G4
