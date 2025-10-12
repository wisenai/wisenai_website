'use server'

import { supabase } from '@/lib/supabase'

export async function submitApplication(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const experience = formData.get('experience') as string
  const availability = formData.get('availability') as string

  if (!name || !email || !experience || !availability) {
    return { error: 'Please fill out all required fields.' }
  }

  try {
    const { error } = await supabase
      .from('applications')
      .insert([
        { name, email, phone, experience, availability }
      ])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error submitting application:', error)
    return { error: 'Failed to submit application. Please try again.' }
  }
}
