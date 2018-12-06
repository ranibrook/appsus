console.log('add-todos-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
  props: ['type', 'note'],
        template: `<section >
                        <!-- <h1>This is ADD todos cmp</h1> -->
                        <ul class="todos-list clean-list flex flex-wrap space-between">
                            <li class="todo flex align-center" v-for="(todo, idx) in todos" :key="idx">
                                <input :value="todo" @input="updateTodo($event,idx)"></input>
                                <!-- <input v-model="todo" v-if="ifNewtodosNote" @input="updateTodo($event,idx)"></input> -->
                            </li>
                        </ul>
                        <button class="btn btn-add-todo" @click="onAddTodo">+</button>
                        <input v-if="isAddTodo" type="text">
                    </section>
    `,
    data() {
        return {
            todos: this.note.data.todos,
            addTodo: null,
            isAddTodo: false,
            // ifNewtodosNote: true,
        }
    },
    created() {
    },
    components: {
    },
    methods: {
        updateTodo(ev, todoIdx) {
			this.todos[todoIdx] = ev.target.value;
        },
        onAddTodo() {
            this.ifNewtodosNote = false,
            this.isAddTodo = true;
            this.todos.push(this.addTodo);

            console.log('this.todos in ADD.todo', this.todos);
        }
    }
}
