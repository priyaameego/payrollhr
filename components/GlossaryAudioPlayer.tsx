"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, Volume2, VolumeX } from "lucide-react";

interface GlossaryAudioPlayerProps {
  title: string;
  textToRead: string;
  durationLabel?: string;
}

export default function GlossaryAudioPlayer({
  title,
  textToRead,
  durationLabel = "5:19",
}: GlossaryAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(319); // 5:19 default
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Parse duration label to total seconds
  useEffect(() => {
    if (durationLabel) {
      const parts = durationLabel.split(":").map(Number);
      if (parts.length === 2) {
        setTotalSeconds(parts[0] * 60 + parts[1]);
      }
    }
  }, [durationLabel]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayToggle = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      // Fallback timer simulation if SpeechSynthesis not supported
      if (!isPlaying) {
        setIsPlaying(true);
        startTimer();
      } else {
        setIsPlaying(false);
        stopTimer();
      }
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      stopTimer();
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
        startTimer();
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          `${title}. ${textToRead}`
        );
        utterance.rate = playbackRate;
        utterance.volume = isMuted ? 0 : 1;
        utterance.lang = "en-IN";

        utterance.onend = () => {
          setIsPlaying(false);
          stopTimer();
          setCurrentTime(0);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
          stopTimer();
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
        startTimer();
      }
    }
  };

  const handleStop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    stopTimer();
    setCurrentTime(0);
  };

  const handleRateChange = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (utteranceRef.current && typeof window !== "undefined") {
      // If currently playing, restart with new rate
      if (isPlaying) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          `${title}. ${textToRead}`
        );
        utterance.rate = nextRate;
        utterance.volume = isMuted ? 0 : 1;
        utterance.lang = "en-IN";
        utterance.onend = () => {
          setIsPlaying(false);
          stopTimer();
          setCurrentTime(0);
        };
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = nextMuted ? 0 : 1;
    }
  };

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalSeconds) {
          clearInterval(intervalRef.current!);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000 / playbackRate);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progressPercent = Math.min(
    100,
    Math.round((currentTime / (totalSeconds || 1)) * 100)
  );

  return (
    <div className="w-full rounded-2xl border border-sky-100 bg-[#F5F9FD] p-4 sm:p-5 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Play button & Label */}
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={handlePlayToggle}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0088F0] text-white shadow-md hover:bg-[#0070D0] hover:scale-105 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-white stroke-none" />
            ) : (
              <Play className="h-5 w-5 fill-white stroke-none translate-x-0.5" />
            )}
          </button>

          <div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 block">
              Listen to this article
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Audio summary &amp; statutory rules
            </span>
          </div>
        </div>

        {/* Audio Waveform Graphic */}
        <div className="flex items-center gap-1 h-7 px-2">
          {[40, 75, 55, 90, 60, 85, 30, 95, 65, 45, 80, 50, 70, 85, 40, 65, 90, 50, 75, 60].map(
            (heightPercent, i) => (
              <span
                key={i}
                style={{ height: `${isPlaying ? Math.max(25, (heightPercent + (i % 3) * 15) % 100) : 30}%` }}
                className={`w-[2.5px] rounded-full transition-all duration-300 ${
                  isPlaying ? "bg-[#0088F0] animate-pulse" : "bg-slate-300"
                }`}
              />
            )
          )}
        </div>

        {/* Controls: Speed, Volume, Stop */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          {/* Speed Toggle */}
          <button
            type="button"
            onClick={handleRateChange}
            className="h-8 rounded-lg bg-white border border-slate-200 px-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            title="Playback Speed"
          >
            {playbackRate}x
          </button>

          {/* Mute Toggle */}
          <button
            type="button"
            onClick={handleMuteToggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-rose-500" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>

          {/* Stop Button */}
          <button
            type="button"
            onClick={handleStop}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            title="Stop playback"
          >
            <Square className="h-3.5 w-3.5 fill-slate-600" />
          </button>
        </div>
      </div>

      {/* Progress Bar & Timers */}
      <div className="mt-3.5 flex items-center gap-3">
        <span className="font-mono text-[11px] font-bold text-slate-600 shrink-0">
          {formatTime(currentTime)}
        </span>
        <div className="relative h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full rounded-full bg-[#0088F0] transition-all duration-200"
          />
        </div>
        <span className="font-mono text-[11px] font-medium text-slate-500 shrink-0">
          {durationLabel}
        </span>
      </div>
    </div>
  );
}
