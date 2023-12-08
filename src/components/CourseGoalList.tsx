import CourseGoal from './CourseGoal'
import { CoureGoal as CGoal } from '../App'

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoals: (id: number) => void
}

function CourseGoalList({ goals, onDeleteGoals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal, index) => {
        return (
          <li key={index}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoals}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        )
      })}
    </ul>
  )
}

export default CourseGoalList
