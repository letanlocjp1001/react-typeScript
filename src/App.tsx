import { useState } from 'react'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'

import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CoureGoal = {
  title: string
  description: string
  id: number
}
function App() {
  const [goals, setGoals] = useState<CoureGoal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CoureGoal = {
        title: goal,
        id: Math.random(),
        description: summary,
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoals={handleDeleteGoal} />
    </main>
  )
}

export default App
