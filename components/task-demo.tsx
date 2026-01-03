'use client'

import { useState } from 'react'
import { MessageSquare, ThumbsUp, ThumbsDown, CheckCircle2, XCircle, Star, Sparkles } from 'lucide-react'

type TaskType = 'comparison' | 'rating' | 'feedback' | 'classification'

interface TaskExample {
  type: TaskType
  title: string
  description: string
  icon: React.ElementType
}

const taskTypes: TaskExample[] = [
  {
    type: 'comparison',
    title: 'Compare Responses',
    description: 'Choose which AI response is better, more helpful, or more accurate',
    icon: MessageSquare,
  },
  {
    type: 'rating',
    title: 'Rate Quality',
    description: 'Rate AI outputs on a scale for helpfulness, accuracy, or safety',
    icon: Star,
  },
  {
    type: 'feedback',
    title: 'Provide Feedback',
    description: 'Explain why a response is good or how it could be improved',
    icon: Sparkles,
  },
  {
    type: 'classification',
    title: 'Classify Content',
    description: 'Identify if content is appropriate, accurate, or relevant',
    icon: CheckCircle2,
  },
]

function ComparisonDemo() {
  const [selected, setSelected] = useState<'a' | 'b' | null>(null)

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
        <p className="text-sm text-slate-400 mb-2">Question from user:</p>
        <p className="text-white">"What's a good way to stay active after retirement?"</p>
      </div>

      <p className="text-sm text-slate-400">Which response is more helpful?</p>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => setSelected('a')}
          className={`text-left p-4 rounded-xl border transition-all ${
            selected === 'a'
              ? 'border-sky-500 bg-sky-900/30'
              : 'border-slate-600 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-sky-400">Response A</span>
            {selected === 'a' && <CheckCircle2 className="h-4 w-4 text-sky-400" />}
          </div>
          <p className="text-slate-300 text-sm">
            "Exercise is good for you. You should try walking or swimming."
          </p>
        </button>

        <button
          onClick={() => setSelected('b')}
          className={`text-left p-4 rounded-xl border transition-all ${
            selected === 'b'
              ? 'border-sky-500 bg-sky-900/30'
              : 'border-slate-600 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-sky-400">Response B</span>
            {selected === 'b' && <CheckCircle2 className="h-4 w-4 text-sky-400" />}
          </div>
          <p className="text-slate-300 text-sm">
            "There are many enjoyable ways to stay active! Walking groups offer both exercise and social connection. Swimming is gentle on joints. Gardening combines light activity with a rewarding hobby. Consider what you enjoy - consistency matters more than intensity."
          </p>
        </button>
      </div>

      {selected && (
        <div className="bg-sky-900/20 border border-sky-800/50 rounded-xl p-4 mt-4">
          <p className="text-sm text-sky-300">
            <strong>Great choice!</strong> Response B is more helpful because it provides specific options, explains the benefits, and offers personalized advice.
          </p>
        </div>
      )}
    </div>
  )
}

function RatingDemo() {
  const [rating, setRating] = useState<number>(0)

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
        <p className="text-sm text-slate-400 mb-2">AI Response:</p>
        <p className="text-white">
          "To make a classic apple pie, preheat your oven to 375°F. Peel and slice 6 medium apples, mix with 3/4 cup sugar, 2 tablespoons flour, and 1 teaspoon cinnamon. Place in a pie crust, dot with butter, add top crust, and bake for 45-50 minutes until golden."
        </p>
      </div>

      <p className="text-sm text-slate-400">Rate this response for helpfulness:</p>

      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="p-2 hover:scale-110 transition-transform"
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
              }`}
            />
          </button>
        ))}
      </div>

      {rating > 0 && (
        <div className="bg-sky-900/20 border border-sky-800/50 rounded-xl p-4 mt-4">
          <p className="text-sm text-sky-300">
            <strong>Thanks for your rating!</strong> Your feedback helps the AI learn what makes a response truly helpful.
          </p>
        </div>
      )}
    </div>
  )
}

function FeedbackDemo() {
  const [feedback, setFeedback] = useState('')

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
        <p className="text-sm text-slate-400 mb-2">AI Response about job interviews:</p>
        <p className="text-white">
          "For a job interview, arrive 10 minutes early, dress professionally, and maintain eye contact. Research the company beforehand and prepare questions to ask."
        </p>
      </div>

      <p className="text-sm text-slate-400">What would make this response better?</p>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your expertise... (e.g., 'The response could mention the importance of a firm handshake and following up with a thank-you note.')"
        className="w-full h-24 bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none resize-none"
      />

      {feedback.length > 10 && (
        <div className="bg-sky-900/20 border border-sky-800/50 rounded-xl p-4 mt-4">
          <p className="text-sm text-sky-300">
            <strong>Excellent insight!</strong> Your real-world experience helps AI give more practical, nuanced advice.
          </p>
        </div>
      )}
    </div>
  )
}

function ClassificationDemo() {
  const [classified, setClassified] = useState<boolean | null>(null)

  return (
    <div className="space-y-4">
      <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
        <p className="text-sm text-slate-400 mb-2">Review this AI response:</p>
        <p className="text-white">
          "The best investment strategy is to put all your money into cryptocurrency right now. It's guaranteed to double in value within a week."
        </p>
      </div>

      <p className="text-sm text-slate-400">Is this response appropriate and accurate?</p>

      <div className="flex gap-4">
        <button
          onClick={() => setClassified(true)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
            classified === true
              ? 'border-emerald-500 bg-emerald-900/30'
              : 'border-slate-600 hover:border-slate-500'
          }`}
        >
          <ThumbsUp className="h-5 w-5" />
          Appropriate
        </button>
        <button
          onClick={() => setClassified(false)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
            classified === false
              ? 'border-red-500 bg-red-900/30'
              : 'border-slate-600 hover:border-slate-500'
          }`}
        >
          <ThumbsDown className="h-5 w-5" />
          Inappropriate
        </button>
      </div>

      {classified !== null && (
        <div className={`rounded-xl p-4 mt-4 ${
          classified === false 
            ? 'bg-emerald-900/20 border border-emerald-800/50' 
            : 'bg-amber-900/20 border border-amber-800/50'
        }`}>
          <p className={`text-sm ${classified === false ? 'text-emerald-300' : 'text-amber-300'}`}>
            {classified === false ? (
              <><strong>Correct!</strong> This response is problematic because it gives risky financial advice and makes false guarantees. Your judgment helps keep AI safe and accurate.</>
            ) : (
              <><strong>Think again...</strong> This response makes dangerous claims about guaranteed investment returns, which is misleading and potentially harmful.</>
            )}
          </p>
        </div>
      )}
    </div>
  )
}

export function TaskDemo() {
  const [activeTask, setActiveTask] = useState<TaskType>('comparison')

  const renderDemo = () => {
    switch (activeTask) {
      case 'comparison':
        return <ComparisonDemo />
      case 'rating':
        return <RatingDemo />
      case 'feedback':
        return <FeedbackDemo />
      case 'classification':
        return <ClassificationDemo />
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
            See What You'll Be Doing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Try these interactive examples to see how simple and meaningful the work is.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Task Type Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {taskTypes.map((task) => {
              const Icon = task.icon
              return (
                <button
                  key={task.type}
                  onClick={() => setActiveTask(task.type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    activeTask === task.type
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {task.title}
                </button>
              )
            })}
          </div>

          {/* Demo Area */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-sky-300 mb-2">
                {taskTypes.find(t => t.type === activeTask)?.title}
              </h3>
              <p className="text-slate-400">
                {taskTypes.find(t => t.type === activeTask)?.description}
              </p>
            </div>
            {renderDemo()}
          </div>

          <p className="text-center text-slate-500 text-sm mt-6">
            Real tasks from our platform. Try clicking on the options above!
          </p>
        </div>
      </div>
    </section>
  )
}

