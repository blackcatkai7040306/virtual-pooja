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
	return (
		<div>
			<audio ref={audioRef} src={src} loop={true} muted={muted} />
		</div>
	);
};

export default AudioPlayer;
