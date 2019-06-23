const customTopBar = {
    visible:true,
    title:{
        text:'Example Add User'
    },
}
const customBottomTabs = {
    visible: false, 
    drawBehind: true, 
    animate: true
}
export const EXAMPLE_ADD = {
    screen: 'ExampleAdd',
    component:{
        name:'ExampleAdd',
        options:{
            topBar:customTopBar,
            bottomTabs:customBottomTabs
        }
    },
    
}
