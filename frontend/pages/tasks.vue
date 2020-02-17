<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title class='red--text'>My CRUD</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <template>
            <v-card
              flat
              class="py-0 "
            >
              <v-card-text>
                <v-row
                  align="center"
                  justify="center"
                  class="py-0 px-3 "

                >

                  <v-btn-toggle
                    v-model="toggle_exclusive"
                    rounded
                    class="py-0 "
                  >
                    <v-btn v-for='duration in durations' small >
                      {{duration}}
                    </v-btn>
                  </v-btn-toggle>
                </v-row>
              </v-card-text>
            </v-card>
          </template>
          <v-spacer></v-spacer>
          <CreateTask></CreateTask>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn
        small
        color='info'
        @click="editItem(item)"
        >
        Edit
        </v-btn>
        <v-btn
        small
        color='red'
        @click="deleteTask(item)"
        >
        Delete
        </v-btn>
      </template>

      <template v-slot:no-data>
      </template>
    </v-data-table>

  </div>
</template>

<script>
import CreateTask from '~/components/CreateTask'
import Loader from '~/components/Loader'
import Paginate from '~/components/Paginate'
  export default {
    head (){
      return {
        title:'Task List'
      }
    },
    components:{CreateTask,Loader,Paginate},

    async asyncData({ $axios, params }) {
      try {
        let tasks = await $axios.$get(`/tasks/`);
        tasks = tasks.results
        return {tasks}
      } catch (e) {
        alert(e)
        return { tasks: [] };
      }
    },

    data: () => ({
      toggle_exclusive: undefined,
      durations:[
        'Daily','Weekly','Monthly'
      ],
      headers: [
        { text: 'Index', value: 'period' },
        { text: 'Title', value: 'title' },
        { text: 'Starts', value: 'start' },
        { text: 'Ends', value: 'end' },
        // { text: 'Is active', value: 'i   // axios: {
   //   baseURL: "http://localhost:8000/api/"
   // },s_active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
    }),

    computed:{

    },
    methods:{
      async deleteTask({slug}){
        console.log(slug)
        try{
          await this.$axios.$delete(`/tasks/${slug}/`)
          let newTasks = await this.$axios.$get('/tasks/') //get the new list of tasks
          this.tasks = newTasks.results;
        } catch(e){
          alert(e)
        }
      }
    }



  }
</script>
