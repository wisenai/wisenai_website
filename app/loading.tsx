export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-400 border-r-transparent"></div>
        <p className="mt-4 text-slate-300">Loading...</p>
      </div>
    </div>
  )
}
