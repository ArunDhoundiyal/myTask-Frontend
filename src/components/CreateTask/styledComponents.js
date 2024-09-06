import styled from 'styled-components'

export const CreateContainer = styled.form`
  background-color: #1a171d;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 30%;
`
export const CreateHeading = styled.h1`
  color: #f3aa4e;
  font-weight: 500;
`
export const TaskInputContainer = styled.div`
  width: 80%;
`
export const Task = styled.p`
  color: #f8f8f8;
  font-size: 20px;
`
export const TaskInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
`
export const TagInputContainer = styled.div`
  width: 80%;
`

export const Tag = styled.p`
  color: #f8f8f8;
  font-size: 20px;
`

export const TagInputSelector = styled.select`
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 20px;
  padding-left: 20px;
`

export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 50px;
  width: 50%;
  font-size: 20px;
  margin-top: 40px;
  border-radius: 8px;
`
