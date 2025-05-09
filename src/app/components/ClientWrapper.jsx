"use client";
import CustomCursor from "./CustomCursor";

export default function ClientWrapper({ children }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
