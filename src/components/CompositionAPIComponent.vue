<script lang="ts">
import { defineComponent, computed, h } from 'vue'
import { useStore } from '../store'
import { MutationTypes } from '../store/mutation-types'
import { ActionTypes } from '../store/action-types'

export default defineComponent({
  name: 'CompositionAPIComponent',
  setup(props, context) {
    const store = useStore()

    const actors = computed(() => store.state.data)
    const capitalizeAcors = computed(() => store.getters.capitalizeName)

   async  function removeActor() {
      store.commit(MutationTypes.REMOVE_ACTORS,  {name: 'John',age: 67})
    }


    async function addActor() {
      const result = await store.dispatch(ActionTypes.GET_ACTORS, {name: 'John',age: 67})
      return result
    }

    return () =>
      h('section', undefined, [
        h('h2', undefined, 'Composition API Component'),
        h('p', undefined, actors.value.toString()),
        h('button', { type: 'button', onClick: addActor }, 'Add Actor'),
             h('button', { type: 'button', onClick: removeActor}, 'Remove Actor'),
      ])
  },
})
</script>
