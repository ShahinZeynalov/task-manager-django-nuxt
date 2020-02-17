<template lang="html">
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field :rules='inputRules' v-model="editedItem.title" label="Task title"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea :rules='inputRules' rows='2' required v-model="editedItem.description" label="Task description"></v-textarea>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"

                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :rules='inputRules'
                    v-model="editedItem.starts"
                    label="Start date"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                  <v-date-picker v-model="editedItem.starts" @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="6" md="4">

              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="submitTask">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>


<script>
  export default {
    data: () => ({
      inputRules:[
        v=> v.length>=1 || 'This field cant be null'
      ],
      menu1: false,
      menu2: false,
      dialog: false,
      tasks: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        description: '',
        starts: new Date().toISOString().substr(0, 10),
        ends: new Date().toISOString().substr(0, 10),
      },
      defaultItem: {
        title: '',
        description: '',
        starts: '',
        ends: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {

    },

    methods: {
      async submitTask() {
        alert('worked')
        let formData = new FormData();
        for (let data in this.editedItem) {
          formData.append(data, this.editedItem[data]);
        }
        try {
          let response = await this.$axios.$post("/tasks/", formData);
          this.dialog = false
          // this.$router.push("/recipes/");
        } catch (e) {
          alert(e);
        }
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.tasks[this.editedIndex], this.editedItem)
        } else {
          this.tasks.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
