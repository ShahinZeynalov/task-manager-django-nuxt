
export const state = ()=>({
    tasks:null,
})

export const getter ={
    tasks:state=>state.tasks
}

export const mutations ={
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
}
export const actions ={
    async fetchTasks({ commit }) {
        // const res =  await this.$axios.$get('/tasks/')
        // console.log(res)


      try {
        const { data } = await this.$axios.$get('/tasks/')
        alert(data)
        commit('SET_TASKS', data)
      } catch (e) {
        // Cookies.remove('token')

        console.log('-----------------');
        // commit('FETCH_USER_FAILURE')
      }
    },

    // fetchFeaturedPosts({ commit }) {
    //   return http.get('http://127.0.0.1:8000/tasks')
    //     .then((res) => {
    //       commit(constants.SET_TASKS, res.data.data);
    //       console.log(res);
    //       return res.data;
    //     });
    // },
}



// import Vuex from 'vuex'
//
// new Vuex.Store({
//   state: () => ({
//     counter: 0
//   }),
//   mutations: {
//     increment (state) {
//       state.counter++
//     }
//   },
//   modules: {
//     todos: {
//       namespaced: true,
//       state: () => ({
//         list: []
//       }),
//       mutations: {
//         add (state, { text }) {
//           state.list.push({
//             text,
//             done: false
//           })
//         },
//         remove (state, { todo }) {
//           state.list.splice(state.list.indexOf(todo), 1)
//         },
//         toggle (state, { todo }) {
//           todo.done = !todo.done
//         }
//       }
//     }
//   },
//   actions:{
//       async fetchTasks({ commit }) {
//           console.log;
//         try {
//           const { data } = await this.$axios.$get('/tasks/')
//           alert(data)
//           commit('SET_TASKS', data)
//         } catch (e) {
//           // Cookies.remove('token')
//
//           console.log('-----------------');
//           // commit('FETCH_USER_FAILURE')
//         }
//       },
//   }
//
// })
