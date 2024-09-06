import {
  TagContainer,
  TagHeading,
  TagAllButtonContainer,
  TagButton,
} from './styledComponents'

const Tag = ({tagList, passOptionButtonId, selectedTag}) => {
  const onClickOptionButton = optionId => {
    passOptionButtonId(optionId)
  }
  return (
    <TagContainer>
      <TagHeading>Tags:</TagHeading>
      <TagAllButtonContainer>
        {tagList.map(eachElement => (
          <TagButton
            type="button"
            key={eachElement.optionId}
            onClick={() => onClickOptionButton(eachElement.optionId)}
            isSelected={selectedTag === eachElement.optionId}
          >
            {eachElement.displayText}
          </TagButton>
        ))}
      </TagAllButtonContainer>
    </TagContainer>
  )
}
export default Tag
