"use client"

import { useEffect, useRef } from "react"

export function DecorativeImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 400

    // Modern gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
    gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.15)")
    gradient.addColorStop(1, "rgba(192, 132, 252, 0.1)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const drawNode = (x: number, y: number, radius: number) => {
      // Glow effect
      const glowGradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, radius * 1.5)
      glowGradient.addColorStop(0, "rgba(139, 92, 246, 0.3)")
      glowGradient.addColorStop(1, "rgba(139, 92, 246, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(x - radius * 1.5, y - radius * 1.5, radius * 3, radius * 3)

      // Main node
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      const nodeGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      nodeGradient.addColorStop(0, "rgba(168, 85, 247, 0.4)")
      nodeGradient.addColorStop(1, "rgba(139, 92, 246, 0.2)")
      ctx.fillStyle = nodeGradient
      ctx.fill()
      ctx.strokeStyle = "rgba(168, 85, 247, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    const drawConnection = (x1: number, y1: number, x2: number, y2: number) => {
      const connectionGradient = ctx.createLinearGradient(x1, y1, x2, y2)
      connectionGradient.addColorStop(0, "rgba(139, 92, 246, 0.3)")
      connectionGradient.addColorStop(0.5, "rgba(192, 132, 252, 0.4)")
      connectionGradient.addColorStop(1, "rgba(139, 92, 246, 0.3)")
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = connectionGradient
      ctx.lineWidth = 2
      ctx.stroke()
    }

    const nodes = [
      { x: 100, y: 100, radius: 30 },
      { x: 300, y: 200, radius: 40 },
      { x: 500, y: 150, radius: 35 },
      { x: 200, y: 300, radius: 25 },
      { x: 400, y: 350, radius: 30 },
    ]

    // Draw connections first
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        drawConnection(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
      }
    }

    // Draw nodes on top
    nodes.forEach((node) => drawNode(node.x, node.y, node.radius))
  }, [])

  return (
    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative abstract pattern representing AI connections"
      />
    </div>
  )
}
