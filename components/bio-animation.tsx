"use client"

import { useEffect, useRef } from "react"

export function BioAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 400

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(167, 90, 255, 0.25)")
    gradient.addColorStop(0.5, "rgba(198, 102, 255, 0.3)")
    gradient.addColorStop(1, "rgba(224, 128, 255, 0.25)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 3 + 1
        this.color = "rgba(198, 102, 255, 0.8)"
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX = -this.speedX
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY = -this.speedY
        }

        this.draw()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function drawMusicNotes() {
      const notePositions = [
        { x: 100, y: 200 },
        { x: 300, y: 150 },
        { x: 500, y: 250 },
        { x: 700, y: 180 },
      ]

      notePositions.forEach((pos) => {
        // Vibrant glow effect
        const glowGradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 25)
        glowGradient.addColorStop(0, "rgba(224, 128, 255, 0.6)")
        glowGradient.addColorStop(1, "rgba(224, 128, 255, 0)")
        ctx.fillStyle = glowGradient
        ctx.fillRect(pos.x - 25, pos.y - 25, 50, 50)

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(198, 102, 255, 1)"
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(pos.x + 10, pos.y)
        ctx.lineTo(pos.x + 10, pos.y - 50)
        ctx.strokeStyle = "rgba(198, 102, 255, 1)"
        ctx.lineWidth = 2.5
        ctx.stroke()
      })
    }

    function drawMathSymbols() {
      const symbols = ["+", "-", "×", "÷", "=", "∑", "∫", "π"]
      ctx.font = "bold 26px Arial"
      ctx.fillStyle = "rgba(198, 102, 255, 1)"

      symbols.forEach((symbol, index) => {
        const x = (index % 4) * 200 + 100
        const y = Math.floor(index / 4) * 100 + 100
        ctx.fillText(symbol, x, y)
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => particle.update())
      drawMusicNotes()
      drawMathSymbols()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup if necessary
    }
  }, [])

  return (
    <div className="w-full max-w-3xl mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/30"
        aria-label="Animated representation of Sathvik's interests in music and mathematics"
      />
    </div>
  )
}
