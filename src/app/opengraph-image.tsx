import { ImageResponse } from "next/og";

export const alt = "Qode Clicks: web design, SEO and paid ads";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #05070d 0%, #07111b 60%, #0e7490 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 34, color: "#67e8f9", fontWeight: 700, letterSpacing: 2 }}>QODE CLICKS</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Websites, SEO and paid ads that bring in leads.
        </div>
        <div style={{ fontSize: 30, color: "#cbd5e1", marginTop: 32 }}>qodeclicks.com</div>
      </div>
    ),
    size,
  );
}
