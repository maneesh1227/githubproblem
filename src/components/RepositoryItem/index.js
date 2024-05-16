// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {listItem} = props
  const {name, id, issues_count, forks_count, stars_count, avatar_url} =
    listItem

  return (
    <li className="list">
      <img src={avatar_url} alt={name} className="images" />
      <h1 className="name">{name}</h1>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="sm-img"
        />
        <p className="para">{stars_count} stars</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="sm-img"
        />
        <p className="para">{forks_count} forks</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="sm-img"
        />
        <p className="para">{issues_count} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
