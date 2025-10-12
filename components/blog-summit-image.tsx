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

    // Modern gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
    gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.12)")
    gradient.addColorStop(1, "rgba(192, 132, 252, 0.1)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const nodes = [
      { x: 200, y: 100, radius: 30 },
      { x: 400, y: 200, radius: 40 },
      { x: 600, y: 150, radius: 35 },
      { x: 300, y: 300, radius: 25 },
      { x: 500, y: 250, radius: 30 },
    ]

    // Draw connections with gradient
    ctx.beginPath()
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          const connectionGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
          connectionGradient.addColorStop(0, "rgba(139, 92, 246, 0.25)")
          connectionGradient.addColorStop(0.5, "rgba(192, 132, 252, 0.3)")
          connectionGradient.addColorStop(1, "rgba(139, 92, 246, 0.25)")
          ctx.strokeStyle = connectionGradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.stroke()
        }
      })
    })

    // Draw nodes with glow
    nodes.forEach((node) => {
      // Glow effect
      const glowGradient = ctx.createRadialGradient(
        node.x,
        node.y,
        node.radius * 0.5,
        node.x,
        node.y,
        node.radius * 1.8,
      )
      glowGradient.addColorStop(0, "rgba(168, 85, 247, 0.3)")
      glowGradient.addColorStop(1, "rgba(168, 85, 247, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(node.x - node.radius * 1.8, node.y - node.radius * 1.8, node.radius * 3.6, node.radius * 3.6)

      // Outer circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      const outerGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius)
      outerGradient.addColorStop(0, "rgba(192, 132, 252, 0.3)")
      outerGradient.addColorStop(1, "rgba(139, 92, 246, 0.2)")
      ctx.fillStyle = outerGradient
      ctx.fill()
      ctx.strokeStyle = "rgba(168, 85, 247, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(168, 85, 247, 0.4)"
      ctx.fill()
    })

    // Add text with modern styling
    const terms = ["Innovation", "Education", "Future", "Technology", "AI"]
    ctx.font = "bold 18px system-ui"
    terms.forEach((term, i) => {
      const x = 120 + i * 150
      const y = 360

      // Text shadow
      ctx.fillStyle = "rgba(139, 92, 246, 0.3)"
      ctx.fillText(term, x + 2, y + 2)

      // Main text
      ctx.fillStyle = "rgba(168, 85, 247, 0.9)"
      ctx.fillText(term, x, y)
    })
  }, [])

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative illustration representing the Student AI Summit with connected nodes and AI-related terms"
      />
    </div>
  )
}
