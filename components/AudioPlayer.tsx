'use client';

// AudioPlayer.js
import React, { RefObject, createRef, useRef } from 'react';

const AudioPlayer = ({
	src,
	muted,
	audioRef,
}: {
	src: string;
	muted: boolean;
	audioRef: RefObject<HTMLAudioElement>;
}) => {
	//   const play = () => {
	//     if (audioRef.current) {
	//       audioRef.current.play();
	//     }
	//   };

	//   const pause = () => {
	//     if (audioRef.current) {
	//       audioRef.current.pause();
	//     }
	//   };

	//   const stop = () => {
	//     if (audioRef.current) {
	//       audioRef.current.pause();
	//       audioRef.current.currentTime = 0;
	//     }
	//   };

	//   const mute = () => {
	//     if (audioRef.current) {
	//       audioRef.current.muted = !audioRef.current.muted;
	//     }
	//   };

	return (
		<div>
			<audio ref={audioRef} src={src} loop={true} muted={muted} />
			{/* <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
        <button onClick={mute}>Mute</button>
      </div> */}
		</div>
	);
};

export default AudioPlayer;
