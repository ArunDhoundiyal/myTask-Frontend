import {ListItemDisplay, TaskName, TagNameButton} from './styledComponents'

const DisplayTask = ({eachTask}) => {
  const {taskName, tagName} = eachTask
  return (
    <ListItemDisplay>
      <TaskName>{taskName}</TaskName>{' '}
      <TagNameButton type="button">{tagName}</TagNameButton>
    </ListItemDisplay>
  )
}
export default DisplayTask
