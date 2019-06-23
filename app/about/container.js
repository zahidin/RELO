import { compose , withState , lifecycle, withHandlers} from 'recompose'
import About from './index'
import {Linking} from 'react-native'

const enhance = compose(
    withState('link','setLink','http://github.com/zahidin'),
    withHandlers({
        goToMyGithub : props => () => {
            Linking.openURL(props.link)
        }
    }),
)

export default enhance(About)