"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Upload, CheckCircle2, AlertCircle, FileText, X } from "lucide-react"

const EXPERTISE_OPTIONS = [
  "Legal",
  "Accounting",
  "Medical",
  "HR",
  "Construction",
  "Repairs",
  "Forestry",
  "Agriculture",
  "Military",
  "Cybersecurity",
  "Software",
  "Hardware",
  "Automobile",
  "Engineering",
  "Chemical",
  "Pharmaceutical",
  "Scientific",
  "Psychology",
  "Marine",
  "Education",
  "Finance",
  "Real Estate",
  "Other",
]

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  expertise: string
  otherExpertise: string
  expectedRate: string
  comments: string
  resume: File | null
}

export function SeniorSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    expertise: "",
    otherExpertise: "",
    expectedRate: "",
    comments: "",
    resume: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Resume file must be less than 5MB")
        return
      }
      // Check file type
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Please upload a PDF or Word document")
        return
      }
      setErrorMessage("")
    }
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, resume: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("expertise", formData.expertise)
      formDataToSend.append("otherExpertise", formData.otherExpertise)
      formDataToSend.append("expectedRate", formData.expectedRate)
      formDataToSend.append("comments", formData.comments)
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume)
      }

      const response = await fetch("/api/signup", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        expertise: "",
        otherExpertise: "",
        expectedRate: "",
        comments: "",
        resume: null,
      })
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-8 text-center">
        <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-emerald-300 mb-2">Application Submitted!</h3>
        <p className="text-slate-300 mb-6">
          Thank you for your interest in joining WisenAI. We've received your application and will be in touch soon.
        </p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Expertise */}
      <div>
        <label htmlFor="expertise" className="block text-sm font-medium text-slate-300 mb-2">
          Area of Expertise
        </label>
        <select
          id="expertise"
          name="expertise"
          value={formData.expertise}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
        >
          <option value="">Select your area of expertise</option>
          {EXPERTISE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Other Expertise (conditional) */}
      {formData.expertise === "Other" && (
        <div>
          <label htmlFor="otherExpertise" className="block text-sm font-medium text-slate-300 mb-2">
            Please specify your expertise
          </label>
          <input
            type="text"
            id="otherExpertise"
            name="otherExpertise"
            value={formData.otherExpertise}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="Describe your area of expertise"
          />
        </div>
      )}

      {/* Expected Rate */}
      <div>
        <label htmlFor="expectedRate" className="block text-sm font-medium text-slate-300 mb-2">
          Expected Hourly Rate <span className="text-red-400">*</span>
          <span className="text-slate-400 text-xs ml-2">(We pay $15-$25/hour based on expertise)</span>
        </label>
        <select
          id="expectedRate"
          name="expectedRate"
          required
          value={formData.expectedRate}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
        >
          <option value="">Select expected rate</option>
          <option value="$15/hour">$15/hour</option>
          <option value="$18/hour">$18/hour</option>
          <option value="$20/hour">$20/hour</option>
          <option value="$22/hour">$22/hour</option>
          <option value="$25/hour">$25/hour</option>
        </select>
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Resume / CV
          <span className="text-slate-400 text-xs ml-2">(PDF or Word, max 5MB)</span>
        </label>
        {formData.resume ? (
          <div className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-600 rounded-lg">
            <FileText className="h-8 w-8 text-sky-400" />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{formData.resume.name}</p>
              <p className="text-slate-400 text-sm">
                {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-2 text-slate-400 hover:text-red-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-6 bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-sky-500 hover:bg-slate-800/50 transition-colors"
          >
            <Upload className="h-8 w-8 text-slate-400 mb-2" />
            <p className="text-slate-300 text-sm">Click to upload your resume</p>
            <p className="text-slate-500 text-xs mt-1">PDF or Word document</p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Comments */}
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-slate-300 mb-2">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          value={formData.comments}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us a bit about your experience or any questions you have..."
        />
      </div>

      {/* Error Message */}
      {(submitStatus === "error" || errorMessage) && (
        <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>

      <p className="text-slate-500 text-xs text-center">
        By submitting this form, you agree to be contacted about opportunities at WisenAI.
        Your information will be kept confidential.
      </p>
    </form>
  )
}

