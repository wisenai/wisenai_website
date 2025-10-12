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

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.15)")
    gradient.addColorStop(0.5, "rgba(96, 165, 250, 0.18)")
    gradient.addColorStop(1, "rgba(147, 197, 253, 0.15)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const nodes = [
      { x: 200, y: 100, radius: 30 },
      { x: 400, y: 200, radius: 40 },
      { x: 600, y: 150, radius: 35 },
      { x: 300, y: 300, radius: 25 },
      { x: 500, y: 250, radius: 30 },
    ]

    ctx.beginPath()
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          const connectionGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
          connectionGradient.addColorStop(0, "rgba(59, 130, 246, 0.35)")
          connectionGradient.addColorStop(0.5, "rgba(147, 197, 253, 0.4)")
          connectionGradient.addColorStop(1, "rgba(59, 130, 246, 0.35)")
          ctx.strokeStyle = connectionGradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.stroke()
        }
      })
    })

    nodes.forEach((node) => {
      const glowGradient = ctx.createRadialGradient(
        node.x,
        node.y,
        node.radius * 0.5,
        node.x,
        node.y,
        node.radius * 1.8,
      )
      glowGradient.addColorStop(0, "rgba(96, 165, 250, 0.3)")
      glowGradient.addColorStop(1, "rgba(96, 165, 250, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(node.x - node.radius * 1.8, node.y - node.radius * 1.8, node.radius * 3.6, node.radius * 3.6)

      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      const outerGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius)
      outerGradient.addColorStop(0, "rgba(147, 197, 253, 0.4)")
      outerGradient.addColorStop(1, "rgba(59, 130, 246, 0.3)")
      ctx.fillStyle = outerGradient
      ctx.fill()
      ctx.strokeStyle = "rgba(96, 165, 250, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(96, 165, 250, 0.5)"
      ctx.fill()
    })

    const terms = ["Innovation", "Education", "Future", "Technology", "AI"]
    ctx.font = "500 18px system-ui"
    terms.forEach((term, i) => {
      const x = 120 + i * 150
      const y = 360

      ctx.fillStyle = "rgba(96, 165, 250, 0.8)"
      ctx.fillText(term, x, y)
    })
  }, [])

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative illustration representing the Student AI Summit with connected nodes and AI-related terms"
      />
    </div>
  )
}
