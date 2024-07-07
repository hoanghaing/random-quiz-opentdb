import {
  PageTitleType
} from '../types'
const PageTitle = (props: PageTitleType) => {
  return (
    <h2>{props.title}</h2>
  )
}

export default PageTitle