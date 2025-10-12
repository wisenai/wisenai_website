import { ImageResponse } from "next/server"
import { Brain } from "lucide-react"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/x-icon"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#38bdf8", // sky-400 color
      }}
    >
      <Brain />
    </div>,
    {
      ...size,
    },
  )
}
