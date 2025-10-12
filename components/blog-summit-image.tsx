"use client"

import { useEffect, useRef } from "react"

export function BlogSummitImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 400

    // Vibrant gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(167, 90, 255, 0.2)")
    gradient.addColorStop(0.5, "rgba(198, 102, 255, 0.22)")
    gradient.addColorStop(1, "rgba(224, 128, 255, 0.2)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const nodes = [
      { x: 200, y: 100, radius: 30 },
      { x: 400, y: 200, radius: 40 },
      { x: 600, y: 150, radius: 35 },
      { x: 300, y: 300, radius: 25 },
      { x: 500, y: 250, radius: 30 },
    ]

    // Draw connections with vibrant gradient
    ctx.beginPath()
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          const connectionGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
          connectionGradient.addColorStop(0, "rgba(167, 90, 255, 0.45)")
          connectionGradient.addColorStop(0.5, "rgba(224, 128, 255, 0.5)")
          connectionGradient.addColorStop(1, "rgba(167, 90, 255, 0.45)")
          ctx.strokeStyle = connectionGradient
          ctx.lineWidth = 2.5
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.stroke()
        }
      })
    })

    // Draw nodes with vibrant glow
    nodes.forEach((node) => {
      // Glow effect
      const glowGradient = ctx.createRadialGradient(node.x, node.y, node.radius * 0.5, node.x, node.y, node.radius * 2)
      glowGradient.addColorStop(0, "rgba(198, 102, 255, 0.5)")
      glowGradient.addColorStop(1, "rgba(198, 102, 255, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(node.x - node.radius * 2, node.y - node.radius * 2, node.radius * 4, node.radius * 4)

      // Outer circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      const outerGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius)
      outerGradient.addColorStop(0, "rgba(224, 128, 255, 0.5)")
      outerGradient.addColorStop(1, "rgba(167, 90, 255, 0.3)")
      ctx.fillStyle = outerGradient
      ctx.fill()
      ctx.strokeStyle = "rgba(198, 102, 255, 0.8)"
      ctx.lineWidth = 2.5
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(198, 102, 255, 0.6)"
      ctx.fill()
    })

    // Add text with vibrant styling
    const terms = ["Innovation", "Education", "Future", "Technology", "AI"]
    ctx.font = "bold 18px system-ui"
    terms.forEach((term, i) => {
      const x = 120 + i * 150
      const y = 360

      // Text shadow
      ctx.fillStyle = "rgba(167, 90, 255, 0.5)"
      ctx.fillText(term, x + 2, y + 2)

      // Main text
      ctx.fillStyle = "rgba(198, 102, 255, 1)"
      ctx.fillText(term, x, y)
    })
  }, [])

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/30">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative illustration representing the Student AI Summit with connected nodes and AI-related terms"
      />
    </div>
  )
}
