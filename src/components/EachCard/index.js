import './index.css'

const EachCard = props => {
  const {eachContent, lastItemBorderBottom, onIsVistedChange} = props
  const specialBorder = lastItemBorderBottom ? 'addBorder' : ''

  const onButtonClicked = () => {
    onIsVistedChange(eachContent.id)
  }

  return (
    <li className={`each-list-item ${specialBorder}`}>
      <p className="name-para">{eachContent.name}</p>
      {eachContent.isVisited ? (
        <p className="visted-text">Visited</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onButtonClicked}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default EachCard
