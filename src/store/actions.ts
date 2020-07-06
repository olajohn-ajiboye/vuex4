import { ActionTree, ActionContext } from 'vuex'
import { State,Actor } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_ACTORS](
    { commit }: AugmentedActionContext,
    payload: Actor
  ): Promise<Actor>
}




export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_ACTORS]({ commit }) {
   const allActors = await fetch('actorsAPI').then((actors)=> commit(MutationTypes.ADD_ACTOR,actors))
   return allActors
  },
}
