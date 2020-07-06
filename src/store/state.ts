export interface Actor {
  name: string
  age: number
  }

export interface State {
  loading: boolean
  data: Array<Actor>
}
export const state:State = {
  loading: false,
  data: [{name: 'John',age: 25}]
}

