import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatus = {
  initial: 'INITIAL',
  failure: 'FALIURE',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {language: 'All', list: [], status: apiStatus.initial}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatus.inProgress})
    const {language} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${language}`,
    )
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos
      this.setState({list: updatedData, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  selectedLanguage = id => {
    this.setState({language: id}, this.getData)
  }

  render() {
    const {list, status, language} = this.state
    let value

    switch (status) {
      case apiStatus.inProgress:
        value = (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )
        break
      case apiStatus.success:
        value = (
         <div>
            <ul className="list-items">
              {list.map(eachItem => (
                <RepositoryItem listItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )
        break
      case apiStatus.failure:
        value = (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failure-img"
            />
          </div>
        )
        break
      default:
        value = null
    }

    return (
      <div className="back">
        <h1 className="popular">Popular</h1>
        <ul className="language-list">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              data={eachItem}
              key={eachItem.id}
              selectedLanguage={this.selectedLanguage}
              cssId={language}
            />
          ))}
        </ul>
        {value}
      </div>
    )
  }
}

export default GithubPopularRepos
