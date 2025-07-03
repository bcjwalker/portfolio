import { useNavigate } from 'react-router'

// Components
import TableOfContents from './TableOfContents.jsx'
import MatSymbol from '../MatSymbol.jsx'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp, fadeInPushDown } from '../Animations.jsx'

// Project info from raw table (not reversed);
import { projectData } from '../../../assets/projects-db.js'

// Glob import
const projectMedia = import.meta.glob(
  [
    '@assets/projects/*/*/*.{jpg,png,mp4,png}',
    '@assets/projects/*/*.{jpg,png,mp4,png,pdf}',
    '@assets/software/*.ico',
  ],
  { eager: true, query: '?url', import: 'default' }
)
// console.log(projectMedia)

// Details card
export function Details(props) {
  // Card type label
  let cardType = ''
  if (props.colour === 'prmry') {
    cardType = 'Primary insight'
  } else if (props.colour === 'scndry') {
    cardType = 'Secondary insight'
  }

  return (
    <>
      <details className={`details-card ${props.type} ${props.colour}`}>
        <summary>
          <div className="summary-header-wrapper">
            <span className="summary-label">{cardType}</span>
            <h5>{props.title}</h5>
          </div>
          <MatSymbol type='material-symbols-sharp' classes='expand-btn' icon='expand_less'/>
        </summary>
        <div className="details-content-wrapper">{props.children}</div>
      </details>
    </>
  )
}
// Details card static
export function Details_Static(props) {
  // Card type label
  let cardType = ''
  if (props.colour === 'prmry') {
    cardType = 'Primary insight'
  } else if (props.colour === 'scndry') {
    cardType = 'Secondary insight'
  }

  return (
    <>
      <div className={`details-card static ${props.type} ${props.colour}`}>
        <div className="summary-header-wrapper">
          <span className="summary-label">{cardType}</span>
          <h5>{props.title}</h5>
        </div>
        <div className="details-content-wrapper">{props.children}</div>
      </div>
    </>
  )
}

// Left nav-TOC column
export function Nav(index) {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/', {
      viewTransition: true,
      state: { returning: true },
    })
  }
  return (
    <>
      <div className="project-nav-wrapper">
        <TableOfContents />
        <div className="nav-btns-wrapper"></div>
      </div>
    </>
  )
}

export function ArticleFooter(props) {
  return (
    <>
      <hr className="project-footer-hr" />

      <div className="project-footer-container">
        <div className="msg-wrapper">
          <label>Welcome to the end of...</label>
          <p>
            Works • {props.article} • {props.articleSection}{' '}
          </p>
        </div>
        <div className="dtls-wrapper">
          <label>Last updated...</label>
          <p>{props.lastUpdate}</p>
        </div>
        <button></button>
      </div>
    </>
  )
}
