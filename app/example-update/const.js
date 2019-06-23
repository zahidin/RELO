const customTopBar = {
    visible:true,
    title:{
        text:'Example Update User'
    },
}
const customBottomTabs = {
    visible: false, 
    drawBehind: true, 
    animate: true
}
export const EXAMPLE_UPDATE = {
    screen: 'ExampleUpdate',
    component:{
        name:'ExampleUpdate',
        options:{
            topBar:customTopBar,
            bottomTabs:customBottomTabs
        }
    },
    
}
