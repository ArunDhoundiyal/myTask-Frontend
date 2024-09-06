import Home from './components/Home'
import {TaskProvider} from './components/TaskContext'

const App = () => (
  <TaskProvider>
    <Home />
  </TaskProvider>
)

export default App
