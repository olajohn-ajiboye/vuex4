import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  capitalizeName(state: State): string[]
}

export const getters: GetterTree<State, State> & Getters = {
  capitalizeName: (state) => {
    return state.data.map(actor => actor.name.toUpperCase())
  },
}
