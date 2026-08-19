import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#212a38",
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: "50%",
            background: "linear-gradient(100deg, #c1611a, #b98f47, #2f6b52)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
