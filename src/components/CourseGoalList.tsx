import { type ReactNode } from 'react'
import CourseGoal from './CourseGoal'
import { CoureGoal as CGoal } from '../App'
import InfoBox from './InfoBox'

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoals: (id: number) => void
}

function CourseGoalList({ goals, onDeleteGoals }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='medium'>
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
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
    </>
  )
}

export default CourseGoalList
