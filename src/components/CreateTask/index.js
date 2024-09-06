import {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {TaskContext} from '../TaskContext'

import {
  CreateContainer,
  CreateHeading,
  TaskInputContainer,
  Task,
  TaskInput,
  TagInputContainer,
  Tag,
  TagInputSelector,
  AddTaskButton,
} from './styledComponents'

const CreateTask = ({tagsList}) => {
  const [task, setTask] = useState('')
  const [tag, setTag] = useState(tagsList[0].optionId)
  const {setMyTask} = useContext(TaskContext)

  const onChangeTask = event => {
    setTask(event.target.value)
  }
  const onChangeTags = event => {
    setTag(event.target.value)
  }
  const onSubmitForm = event => {
    event.preventDefault()
    const displayTagText = tagsList.filter(eachTag => eachTag.optionId === tag)
    const newTask = {
      id: uuidv4(),
      taskName: task,
      tagName: displayTagText[0].displayText,
    }
    setMyTask(preState => [...preState, newTask])
    setTask('')
  }

  return (
    <CreateContainer onSubmit={onSubmitForm}>
      <CreateHeading>Create a task!</CreateHeading>
      <TaskInputContainer>
        <Task>Task:</Task>
        <TaskInput
          placeholder="Enter the task here"
          type="text"
          value={task}
          onChange={onChangeTask}
          required
        />
      </TaskInputContainer>
      <TagInputContainer>
        <Tag>Tags:</Tag>
        <TagInputSelector value={tag} onChange={onChangeTags}>
          {tagsList.map(eachTagOption => (
            <option value={eachTagOption.optionId} key={eachTagOption.optionId}>
              {eachTagOption.displayText}
            </option>
          ))}
        </TagInputSelector>
      </TagInputContainer>
      <AddTaskButton type="submit">Add Task</AddTaskButton>
    </CreateContainer>
  )
}

export default CreateTask
