// console.log('todos-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <ul class="todos-list clean-list flex flex-wrap space-between">
                        <li class="todo flex align-center space-between" v-for="(todo, idx) in todos" :key="idx">
                            {{todo}}
                            <div class="btns-todo-container flex">
                                <router-link class="btn btn-edit-todo" tag="button" :to="'/keeper-app/edit/' + note.id"><i class="fa fa-edit"></i></router-link>
                                <button class="btn btn-delete-todo" @click="removeTodo(note.id, idx)">X</button> 
                            </div>
                        </li>
                    </ul>
                </section>
                `,
    data() {
        return {
            todos: this.note.data.todos,
        }
    },
    created() {
    },
    methods: {
        removeTodo(noteId, todoIdx) {
            console.log('TODO -noteId) ', noteId);
            console.log('TODO -todoIdx) ', todoIdx);
            keeperService.removeTodo(noteId, todoIdx)
            .then(() => {
                console.log('TODO -delete ', this.note);
                this.deleteLabel = 'Delete'
            })
      
        }

    }
    
}