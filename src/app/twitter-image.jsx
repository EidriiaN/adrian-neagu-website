import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 800,
  height: 418,
};

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(to bottom, #1A202C, #2D3748)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px" }}>Adrian Neagu</div>
        <div style={{ fontSize: "24px", color: "#4FD1C5" }}>Cloud Support Engineer & GCP Specialist</div>
      </div>
    ),
    {
      width: 800,
      height: 418,
    }
  );
}
