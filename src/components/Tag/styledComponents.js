import styled from 'styled-components'

export const TagContainer = styled.div`
  background-color: transparent;
  margin: 30px;
`
export const TagHeading = styled.h1`
  color: #ffffff;
`
export const TagAllButtonContainer = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: 100%;
`
export const TagButton = styled.button`
  background-color: ${props => (props.isSelected ? `#f3aa4e` : `transparent`)};
  color: #ffffff;
  border: solid 1px #ffffff;
  font-size: 20px;
  font-family: Roboto;
  border-radius: 20px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
`
