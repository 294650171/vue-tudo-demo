import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getter'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [
      (store) => {
        console.log('my plugin invoked')
      }
    ],
    modules: {
      a: {
        // 命名空间独立
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          // rootState:全局state
          textPlus (state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          // 调用全局 mutuation
          add ({ state, commit, rootState }) {
            commit('updateCount', { num: 293849 }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction ({ commit }) {
            commit('a/updateText', 'test Text', { root: true })
          }
        }
      }
    }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './actions/actions',
      './mutations/mutations',
      './getters/getter'
    ], () => {
      const newState = require('./state/state').default
      const newGetters = require('./getters/getter').default
      const newActions = require('./actions/actions').default
      const newMutations = require('./mutations/mutations').default

      store.hotUpdate({
        state: newState,
        getters: newGetters,
        mutations: newMutations,
        actions: newActions
      })
    })
    return store
  }
}
