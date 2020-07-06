
import {State} from '../state'

declare module "@vue/runtime-core" {
    // Declare your own store states.
    interface State {
      count: number
    }
  
    interface ComponentCustomProperties {
      $store: Store<State>;
    }
  }