import { useNavigate } from 'react-router'

// Components
import TableOfContents from './Article_TableOfContents.jsx'

// Animations :)
import { Fade } from 'react-awesome-reveal'
import { fadeInPushUp, fadeInPushDown } from './Animations.jsx'

// Project info from raw table (not reversed);
import { projectData } from '../../assets/projects-db.js'

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

// Conditional fade wrapper, return content with fade-in effect only if isFade is set
function CondFade({ children, isFade, fadeType }) {
  if (isFade != null) {
    return (
      <>
        <Fade
          duration={375}
          triggerOnce
          delay={20}
          cascade
          damping={0.1}
          // fadeType sends me the keyframes I should use, if it's null then
          // use default animation, fadeInPushDown
          keyframes={fadeType != null ? fadeType : fadeInPushDown}>
          {children}
        </Fade>
      </>
    )
  } else {
    return <>{children}</>
  }
}

// Base media figure, with optional figcaption
function BaseFig(props) {
  // Type: usually an image, but sometimes a video
  let mediaTypeClass = 'img-wrapper'
  // If video, add corresponding video tags, otherwise just parse as img
  if (props.isVideo == true) {
    mediaTypeClass = 'video-wrapper'
  }

  return (
    <>
      <CondFade isFade={props.isFade} fadeType={props.fadeType}>
        <figure className={`${props.classN} media-wrapper`}>
          <div className={`${mediaTypeClass} ${props.style}`}>
            {/* Render different viewers for video/img */}
            {props.isVideo != null ? null : (
              <ImgViewer
                classN={`${styles['section1-img1']}`}
                imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png']}
              />
            )}
          </div>
          {/* Render figcaption only if caption prop exists */}
          {props.caption != null ? <figcaption>{props.caption}</figcaption> : null}
        </figure>
      </CondFade>
    </>
  )
}

// Dual media figure
function BaseFig(props) {
  // Type: usually an image, but sometimes a video
  let mediaTypeClass = 'img-wrapper'
  // If video, add corresponding video tags, otherwise just parse as img
  if (props.isVideo == true) {
    mediaTypeClass = 'video-wrapper'
  }

  return (
    <>
      <figure className={`${props.classN} media-wrapper`}>
        <div className={`${mediaTypeClass} ${props.style}`}>
          {/* Render different viewers for video/img */}
          {props.isVideo == true ? null : (
            <ImgViewer
              classN={`${styles['section1-img1']}`}
              imgSrc={projectMedia['/src/assets/projects/sunstop/screens/screen-landing.png']}
            />
          )}
        </div>
        {/* Render figcaption only if caption prop != 'none' */}
        {props.caption == 'none' ? null : <figcaption>{props.caption}</figcaption>}
      </figure>
    </>
  )
}
