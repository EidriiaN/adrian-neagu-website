import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #1A202C, #2D3748)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "20px" }}>Adrian Neagu</div>
        <div style={{ fontSize: "36px", color: "#4FD1C5" }}>Cloud Support Engineer & GCP Specialist</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
