import Database from '../assets/database.png'
import Plus from '../assets/plus.png'

// top bar and bottom bar 
const customTopBar = {
    // visible: false,
    // drawBehind: true,
    // hideOnScroll: false,
    // elevation: 0,
    // background: {
    //     color: 'transparent'
    // }
    background:{
        color:'#2b70c9'
    },
    title:{
        text:'Example Screen',
        color:'#fff',
        alignment:'left'
    },
    rightButtons: [
        {
          id: 'buttonAdd',
          icon: Plus,
          color:'#fff'
          
        }
    ]
}

export const EXAMPLE = {
    screen: 'Example',
    component: {
        name: 'Example',
        options: {
            topBar: customTopBar,
            bottomTab: {
                text: 'Example',
                icon: Database,
            },
        }
    }
}

// bottom tab only
// export const EXAMPLE = {
//     screen: 'Example',
//     component:{
//         name:'Example',
//         options:{
//             bottomTab:{
//                 text:'Home',
//                 icon:Homes
//             },
//         }
//     }
// }

// top bar only
// export const EXAMPLE = {
//     screen: 'Example',
//     component:{
//         name:'Example',
//         options:{
//             topBar:{
//                 title:{
//                     text:'Example Screen',
//                 }
//             },
//         }
//     }
// }