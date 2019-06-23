import { compose , withstate , lifecycle, withHandlers} from 'recompose'
import Home from './index'
import { graphql } from 'react-apollo'
import { Navigation } from 'react-native-navigation';
import {ABOUT} from '../about/const'
const enhance = compose(

    withHandlers({
        goToScreen : props => (screenName) => {
            Navigation.push(props.componentId,{
                component:{
                   ...ABOUT.component,
                }
             })
        }
    }),

    lifecycle({
        componentWillMount(){
            Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
                if(selectedTabIndex == 1){
                }
            });
        }
    })
)

export default enhance(Home)