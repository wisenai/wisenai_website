'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitApplication } from './actions'

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await submitApplication(formData)

    setIsLoading(false)

    if (response.error) {
      toast({
        title: "Error",
        description: response.error,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest. We'll be in touch soon!",
      })
      event.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="Enter your email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Enter your phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Professional Background</Label>
          <Textarea
            id="experience"
            name="experience"
            placeholder="Tell us about your professional experience and areas of expertise"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="availability">Preferred Working Hours</Label>
          <Input
            id="availability"
            name="availability"
            placeholder="e.g., Weekday mornings, 2-3 hours per day"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  )
}
