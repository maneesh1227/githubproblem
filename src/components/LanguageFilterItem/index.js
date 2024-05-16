// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {data, selectedLanguage, cssId} = props
  const {id, language} = data
  const onClickLanguage = () => {
    selectedLanguage(id)
  }

  if (cssId !== id) {
    return (
      <li>
        <button className="buttons" onClick={onClickLanguage}>
          {language}
        </button>
      </li>
    )
  }
  return (
    <li>
      <button className="selected-btn" onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
