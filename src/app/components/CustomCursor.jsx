"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef();
  const followerRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        followerRef.current.animate(
          [
            { left: followerRef.current.style.left, top: followerRef.current.style.top },
            { left: e.clientX + "px", top: e.clientY + "px" },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
        followerRef.current.style.left = e.clientX + "px";
        followerRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={followerRef}
        className="fixed z-[9998] pointer-events-none w-10 h-10 bg-cyan-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-md transition-transform duration-300"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}
