import './index.css'

const VisitedCountries = props => {
  const {eachContent, onRemoveItem} = props

  const onRemoveButtonClicked = () => {
    onRemoveItem(eachContent.id)
  }

  return (
    <li className="each-visted-item">
      <img src={eachContent.imageUrl} alt="thumbnail" className="each-image" />
      <div className="text-container">
        <p className="visited-name">{eachContent.name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={onRemoveButtonClicked}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
