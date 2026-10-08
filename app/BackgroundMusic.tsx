"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const music = audioRef.current;

    if (!music) return;

    music.volume = 0.35;

    const startMusic = () => {
      if (music.paused) {
        music.play().catch(() => {});
      }
    };

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
    document.addEventListener("keydown", startMusic, { once: true });

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
      document.removeEventListener("keydown", startMusic);
      music.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/welcome.mp3"
      loop
      preload="auto"
    />
  );
}
