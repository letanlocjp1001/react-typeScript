import { useRef, type FormEvent } from 'react'

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSUmmary = summary.current!.value

    event.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSUmmary)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input type='text' id='goal' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input type='text' id='summary' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
