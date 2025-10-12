'use client'

import { useEffect, useRef } from 'react'

export function AboutImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 450

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#f8fafc')
    gradient.addColorStop(1, '#f1f5f9')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw connecting circles representing knowledge sharing
    const circles = [
      { x: 200, y: 225, radius: 100 },
      { x: 400, y: 225, radius: 100 },
      { x: 600, y: 225, radius: 100 }
    ]

    // Draw connection lines
    ctx.beginPath()
    ctx.moveTo(200, 225)
    ctx.lineTo(600, 225)
    ctx.strokeStyle = '#0ea5e9'
    ctx.lineWidth = 3
    ctx.globalAlpha = 0.2
    ctx.stroke()

    // Draw circles
    circles.forEach((circle, index) => {
      // Main circle
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#0ea5e9'
      ctx.globalAlpha = 0.1
      ctx.fill()

      // Circle border
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
      ctx.strokeStyle = '#0ea5e9'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.3
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = '#0ea5e9'
      ctx.globalAlpha = 0.15
      ctx.fill()
    })

    // Add subtle dots pattern
    ctx.globalAlpha = 0.1
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        if (Math.random() > 0.8) {
          ctx.fillStyle = '#0ea5e9'
          ctx.fillRect(i, j, 2, 2)
        }
      }
    }
  }, [])

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-label="Abstract representation of knowledge sharing between AI and human experience"
      />
    </div>
  )
}
