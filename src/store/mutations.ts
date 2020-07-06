import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State,Actor } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void,
  [MutationTypes.REMOVE_ACTORS](state: S, payload: Actor): Array<Actor>,
  [MutationTypes.ADD_ACTOR](state: S, payload: Actor): Array<Actor>,

}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_LOADING](state, payload: boolean) {
      state.loading = payload
      return state
    },
  [MutationTypes.REMOVE_ACTORS](state, payload: Actor) {
    state.data = [payload]
    return state.data
  },
  [MutationTypes.ADD_ACTOR](state, payload: Actor) {
    state.data = [payload]
    return state.data
  }
}







