import React, { useEffect, useRef, useState } from "react";

/**
 * PartnerMarquee
 * Props:
 *  - partners: array of { name: string, logo: string }
 *  - speed: number (seconds for one full loop) default 25
 *  - gap: css gap between items (e.g. "2rem")
 *
 * Works by:
 *  1) measuring one base copy of the partners list (hidden offscreen)
 *  2) repeating that base list until its width >= container width
 *  3) duplicating the final repeated list to create the seamless loop
 */

const PartnerMarquee = ({ partners = [], speed = 25, gap = "2rem" }) => {

    const containerRef = useRef(null);
    const measureRef = useRef(null);
    const [repeatCount, setRepeatCount] = useState(1);
    const [_, setReady] = useState(false);

    useEffect(() => {

        if (!partners || partners.length === 0) {
            return;
        }

        const measure = () => {

            const containerWidth = containerRef.current?.offsetWidth || 0;
            const baseWidth = measureRef.current?.scrollWidth || 0;

            if (!baseWidth || !containerWidth) {

                setRepeatCount(2);
                setReady(true);

                return;
            }


            let repeats = 1;
            while (baseWidth * repeats < containerWidth) {

                repeats += 1;

                if (repeats > 20) {
                    break;
                }
            }

            setRepeatCount(repeats);
            setReady(true);
        };

        window.requestAnimationFrame(measure);
        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);

    }, [partners]);

    if (!partners || partners.length === 0) {
        return null;
    }

    const baseSequence = Array.from({ length: repeatCount }).flatMap(() => partners);
    const displayItems = [...baseSequence, ...baseSequence];

    return (
        <div className="w-full py-8 bg-gradient-to-r from-purple-50 to-white">
            <h3 className="text-3xl text-center text-purple-800 font-bold mb-6">Our Healthcare Partners</h3>

            <div ref={containerRef} className="overflow-hidden">
                {/* marquee track */}
                <div
                    className="flex items-center marquee-track"
                    style={{
                        ["--marquee-duration"]: `${speed}s`,
                        ["--marquee-gap"]: gap,
                    }}
                >
                    {displayItems.map((p, idx) => (
                        <div
                            key={`${p.name}-${idx}`}
                            className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm"
                            title={p.name}
                            aria-label={p.name}
                        >
                            <img
                                src={p.logo}
                                alt={p.name}
                                className="max-h-14 object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Hidden measuring element: renders one base sequence offscreen to measure width */}
            <div
                ref={measureRef}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    left: -9999,
                    top: -9999,
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    display: "flex",
                    gap: gap,
                }}
            >
                {partners.map((p, idx) => (
                    <div
                        key={`measure-${p.name}-${idx}`}
                        className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                        style={{ display: "inline-flex" }}
                    >
                        <img src={p.logo} alt={p.name} style={{ maxHeight: 56 }} />
                    </div>
                ))}
            </div>

            {/* Scoped CSS for marquee animation. Move this into global CSS if you prefer */}
            <style>{`
                .marquee-track {
                  display: inline-flex;
                  gap: var(--marquee-gap, 2rem);
                  align-items: center;
                  padding-left: 1rem; /* slight lead-in */
                  animation: marqueeMove linear infinite;
                  animation-duration: var(--marquee-duration, 25s);
                }

                /* pause on hover/focus */
                .overflow-hidden:hover .marquee-track,
                .overflow-hidden:focus-within .marquee-track {
                  animation-play-state: paused;
                }

                @keyframes marqueeMove {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                /* responsive: slower on very small screens so logos are readable */
                @media (max-width: 640px) {
                  .marquee-track {
                    animation-duration: calc(var(--marquee-duration, 25s) * 1.4);
                  }
                }
            `}</style>
        </div>
    );
}

export default PartnerMarquee