import DisplayTask from '../DisplayTask'
import {
  TaskContainer,
  TaskHeading,
  UnOrderedListTask,
  NoTaskDisplayContainer,
  NoTaskText,
} from './styledComponents'

const Task = ({task}) => (
  <TaskContainer>
    <TaskHeading>Tasks:</TaskHeading>
    {task.length > 0 ? (
      <UnOrderedListTask>
        {task.map(eachTaskItem => (
          <DisplayTask key={eachTaskItem.id} eachTask={eachTaskItem} />
        ))}
      </UnOrderedListTask>
    ) : (
      <NoTaskDisplayContainer>
        <NoTaskText>No Tasks Added Yet</NoTaskText>
      </NoTaskDisplayContainer>
    )}
  </TaskContainer>
)

export default Task
