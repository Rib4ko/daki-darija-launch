const bars = [
  "animate-waveform-1",
  "animate-waveform-2",
  "animate-waveform-3",
  "animate-waveform-2",
  "animate-waveform-1",
  "animate-waveform-3",
  "animate-waveform-2",
  "animate-waveform-1",
  "animate-waveform-3",
  "animate-waveform-2",
  "animate-waveform-1",
  "animate-waveform-2",
  "animate-waveform-3",
];

const AudioWaveform = () => (
  <div className="flex items-center justify-center gap-[3px] h-16 my-8">
    {bars.map((anim, i) => (
      <div
        key={i}
        className={`w-[3px] rounded-full bg-gradient-to-t from-primary to-secondary ${anim}`}
        style={{ animationDelay: `${i * 0.08}s` }}
      />
    ))}
  </div>
);

export default AudioWaveform;
