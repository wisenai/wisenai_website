'use client'

import { useEffect, useRef } from 'react'

export function DecorativeImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 600
    canvas.height = 400

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, 'rgba(30, 41, 59, 0.1)')
    gradient.addColorStop(1, 'rgba(30, 41, 59, 0.4)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const drawNode = (x: number, y: number, radius: number) => {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.1)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)'
      ctx.stroke()
    }

    const drawConnection = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)'
      ctx.stroke()
    }

    const nodes = [
      { x: 100, y: 100, radius: 30 },
      { x: 300, y: 200, radius: 40 },
      { x: 500, y: 150, radius: 35 },
      { x: 200, y: 300, radius: 25 },
      { x: 400, y: 350, radius: 30 },
    ]

    nodes.forEach(node => drawNode(node.x, node.y, node.radius))

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        drawConnection(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
      }
    }
  }, [])

  return (
    <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Decorative abstract pattern representing AI connections"
      />
    </div>
  )
}

