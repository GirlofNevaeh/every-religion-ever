let audio: AudioContext | null = null;
let primed = false;

function audioContext(): AudioContext | null {
  const Ctor =
    window.AudioContext ??
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!audio) audio = new Ctor();
  return audio;
}

export function primeQuizAudio() {
  if (primed || typeof window === "undefined") return;
  primed = true;
  const unlock = () => {
    try {
      const ctx = audioContext();
      if (ctx?.state === "suspended") void ctx.resume();
    } catch {
      /* A blocked sound should never stop the quiz. */
    }
  };
  window.addEventListener("pointerdown", unlock, { capture: true });
  window.addEventListener("keydown", unlock, { capture: true });
}

function ready(): AudioContext | null {
  try {
    const ctx = audioContext();
    if (!ctx) return null;
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

export function playCheer() {
  try {
    const ctx = ready();
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const burst = 0.22;
    const count = Math.floor(ctx.sampleRate * burst);
    const buffer = ctx.createBuffer(1, count, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < count; i += 1) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const highpass = ctx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 1200;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.12, t0);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t0 + burst);
    noise.connect(highpass);
    highpass.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(t0);
    noise.stop(t0 + burst);

    for (const [index, frequency] of [523.25, 659.25, 783.99, 1046.5].entries()) {
      const start = t0 + index * 0.09;
      const end = start + 0.32;
      const tone = ctx.createOscillator();
      tone.type = "triangle";
      tone.frequency.value = frequency;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.28, start + 0.015);
      gain.gain.setValueAtTime(0.28, end - 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);
      tone.connect(gain);
      gain.connect(ctx.destination);
      tone.start(start);
      tone.stop(end);
    }
  } catch {
    /* Keep the question moving if the browser blocks audio. */
  }
}

export function playFart() {
  try {
    const ctx = ready();
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const duration = 0.7;
    const count = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, count, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let brown = 0;
    let phase = 0;
    let peak = 0.0001;
    for (let i = 0; i < count; i += 1) {
      const white = Math.random() * 2 - 1;
      brown = brown * 0.8 + white * 0.2;
      const mixed = brown * 0.85 + white * 0.15;
      const buzz = 46 + (22 - 46) * (i / count);
      phase += (Math.PI * 2 * buzz) / ctx.sampleRate;
      data[i] = mixed * Math.abs(Math.sin(phase));
      peak = Math.max(peak, Math.abs(data[i]));
    }
    for (let i = 0; i < count; i += 1) data[i] /= peak;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.Q.value = 0.7;
    band.frequency.setValueAtTime(720, t0);
    band.frequency.exponentialRampToValueAtTime(180, t0 + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.9, t0 + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    noise.connect(band);
    band.connect(gain);
    gain.connect(ctx.destination);
    noise.start(t0);
    noise.stop(t0 + duration);

    for (const [from, to, level] of [
      [150, 62, 0.07],
      [300, 124, 0.05],
    ] as const) {
      const tone = ctx.createOscillator();
      tone.type = "square";
      tone.frequency.setValueAtTime(from, t0);
      tone.frequency.exponentialRampToValueAtTime(to, t0 + duration);
      const toneGain = ctx.createGain();
      toneGain.gain.setValueAtTime(level, t0);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
      tone.connect(toneGain);
      toneGain.connect(ctx.destination);
      tone.start(t0);
      tone.stop(t0 + duration);
    }
  } catch {
    /* Keep the question moving if the browser blocks audio. */
  }
}
