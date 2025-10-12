"use client"

import { useEffect, useRef } from "react"

export function BlogSummitImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 400

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(34, 197, 94, 0.1)")
    gradient.addColorStop(1, "rgba(16, 185, 129, 0.1)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw connecting nodes representing AI network
    const nodes = [
      { x: 200, y: 100, radius: 30 },
      { x: 400, y: 200, radius: 40 },
      { x: 600, y: 150, radius: 35 },
      { x: 300, y: 300, radius: 25 },
      { x: 500, y: 250, radius: 30 },
    ]

    // Draw connections between nodes
    ctx.beginPath()
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
        }
      })
    })
    ctx.strokeStyle = "rgba(34, 197, 94, 0.2)"
    ctx.stroke()

    // Draw nodes
    nodes.forEach((node) => {
      // Outer circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(34, 197, 94, 0.1)"
      ctx.fill()
      ctx.strokeStyle = "rgba(34, 197, 94, 0.4)"
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(34, 197, 94, 0.2)"
      ctx.fill()
    })

    // Add text elements representing AI concepts
    const terms = ["Innovation", "Education", "Future", "Technology", "AI"]
    ctx.font = "bold 16px Arial"
    ctx.fillStyle = "rgba(34, 197, 94, 0.6)"
    terms.forEach((term, i) => {
      const x = 150 + i * 150
      const y = 350
      ctx.fillText(term, x, y)
    })
  }, [])

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative illustration representing the Student AI Summit with connected nodes and AI-related terms"
      />
    </div>
  )
}
