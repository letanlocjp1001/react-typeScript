import { useState } from 'react'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'

import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/newGoal'

export type CoureGoal = {
  title: string
  description: string
  id: number
}
function App() {
  const [goals, setGoals] = useState<CoureGoal[]>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CoureGoal = {
        title: 'Learn React + TS',
        id: Math.random(),
        description: 'Lean it ind depth',
      }

      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoals={handleDeleteGoal} />
    </main>
  )
}

export default App
