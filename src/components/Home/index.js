import {useState, useContext, useEffect} from 'react'
import {TaskContext} from '../TaskContext'
import CreateTask from '../CreateTask'
import Tag from '../Tag'
import Task from '../Task'
import {HomeBgContainer, TagTaskContainer} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const Home = () => {
  const {myTask} = useContext(TaskContext)
  const [filteredTasks, setFilteredTasks] = useState(myTask)
  const [selectedTag, setSelectedTag] = useState('')
  useEffect(() => {
    setFilteredTasks(myTask)
  }, [myTask])
  const onClickOptionButton = optionId => {
    if (optionId === selectedTag) {
      setFilteredTasks(myTask)
      setSelectedTag('')
    } else {
      const tagButtonFilter = myTask.filter(
        eachTag => eachTag.tagName.toUpperCase() === optionId,
      )
      setFilteredTasks(tagButtonFilter)
      setSelectedTag(optionId)
    }
  }

  return (
    <HomeBgContainer>
      <CreateTask tagsList={tagsList} />
      <TagTaskContainer>
        <Tag
          selectedTag={selectedTag}
          tagList={tagsList}
          passOptionButtonId={onClickOptionButton}
        />
        <Task task={filteredTasks} />
      </TagTaskContainer>
    </HomeBgContainer>
  )
}

export default Home
