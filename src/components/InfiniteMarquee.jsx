import React, { useEffect, useRef, useState } from "react";

const InfiniteMarquee = ({ contents, speed = 20, gap = "3rem" }) => {
    const containerRef = useRef(null);
    const measureRef = useRef(null);
    const [sequence, setSequence] = useState([]);

    useEffect(() => {
        if (!containerRef.current || !measureRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const baseWidth = measureRef.current.offsetWidth;

        // Repeat logos enough times to cover container width smoothly
        const repeatCount = Math.ceil(containerWidth / baseWidth) + 2;
        const newSequence = Array.from({ length: repeatCount }, () => [
            ...contents,
            ...contents, // doubled for seamless transition
        ]).flat();

        setSequence(newSequence);
    }, [contents]);

    return (
        <div
            ref={containerRef}
            className="w-full py-8 overflow-hidden relative"
        >
            {/* Marquee Track */}
            <div className="marquee">
                <div
                    className="flex items-center marquee-track"
                    style={{
                        ["--marquee-duration"]: `${speed}s`,
                        ["--marquee-gap"]: gap,
                        gap,
                    }}
                >
                    {sequence.map((content, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0"
                            style={{ marginRight: gap }}
                        >
                            <img
                                src={content.logo}
                                alt={content.name}
                                title={content.name}
                                className="h-24 w-auto object-contain transition-transform duration-200 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Invisible base measure element */}
            <div
                ref={measureRef}
                className="absolute opacity-0 pointer-events-none flex items-center"
                style={{ gap }}
            >
                {[...contents, ...contents].map((content, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0"
                        style={{ marginRight: gap }}
                    >
                        <img
                            src={content.logo}
                            alt={content.name}
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Marquee CSS */}
            <style>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default InfiniteMarquee;
