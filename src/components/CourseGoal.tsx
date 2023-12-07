import { PropsWithChildren,
    //  FC
    //  typeReactNode 
    } from "react";

// interface CourseGoalProps {
//     title: string; 
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{title: string}>

// const CourseGoal :FC<CourseGoalProps> = ({title, children}: CourseGoalProps)=>{
//     return (<article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>DELETE</button>
//     </article>)
// }
 
function CourseGoal({title, children}: CourseGoalProps){

    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>DELETE</button>
    </article>
}

export default CourseGoal