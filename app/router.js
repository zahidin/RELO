import Example from './example/container'
import {EXAMPLE} from './example/const'
import {HOME} from './home/const'
import {EXAMPLE_ADD} from './example-add/const'
import {ABOUT} from './about/const'
import {MODAL , Modal} from './example/modal'
import ModalConfirmation ,{ MODAL_CONFIRMATION } from './commons/Modal'
import About from './about/container'
import Home from './home/container'
import ExampleAdd from './example-add/container'
import {registerComponent} from './apollo-hoc'
import Loading,{ LOADING_SCREEN } from './commons/Loading';
import { EXAMPLE_UPDATE } from './example-update/const';
import exampleUpdate from './example-update/container';

// register screen and component
export function registerScreens(){
    // EXAMPLE
    registerComponent(HOME.screen, Home),
    registerComponent(EXAMPLE.screen, Example),
    registerComponent(EXAMPLE_ADD.screen, ExampleAdd),
    registerComponent(EXAMPLE_UPDATE.screen, exampleUpdate),
    registerComponent(ABOUT.screen, About)
    registerComponent(MODAL_CONFIRMATION.screen, ModalConfirmation)
    registerComponent(MODAL.screen, Modal)
    registerComponent(LOADING_SCREEN.screen, Loading)
    // END OF EXAMPLE
}