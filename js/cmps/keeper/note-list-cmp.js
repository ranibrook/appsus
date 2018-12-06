// console.log('note-list-cmp');

import keeperService from '../../services/keeper-service.js'
import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'
import todosType from '../../cmps/keeper/todos-type-cmp.js'

import addNote from '../../cmps/keeper/add-note-cmp.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
    props: ['notes'],
    template: `
            <section v-if="notes">
                <add-note></add-note>
    
                <ul class="notes-list clean-list flex flex-wrap" v-if="notes">
                    <li class="note flex column space-between" v-for="(note, idx) in notes" :key="note.id" :style="{'background-color':note.bgColor}">
                        <div class="note-title">
                            <h2>{{note.title}}</h2>
                        </div>
                            <component :is="note.type" :note="note"></component>
                        <div class="btns-note-container flex">
                            <router-link class="btn btn-edit-note" tag="button" :to="'/keeper-app/edit/' + note.id"><i class="fa fa-edit"></i></router-link>
                            <button class="btn btn-delete-note" @click="removeNote(note.id)"><i class="fa fa-trash"></i></button> 
                            <button class="btn btn-pin" @click="pinNote(note.id)"><i class="fa fa-map-pin"></i></button>
                        </div>
                    </li>
                </ul>

            </section>
            `,
    data() {
        return {
            bgColor:null,
 
        }
    },
    methods: {

        removeNote() {
        },
        pinNote(noteId) {
            keeperService.pinNote(noteId)
                .then(() => {
                    console.log('note was pinned ');
                })
        },
        removeNote(noteId) {
            this.deleteLabel ='Deleting...';
            keeperService.removeNote(noteId)
                .then(() => {
                    this.deleteLabel = 'Delete'
                })
               
                .catch(err=>{
					console.log('Failed to delete');
					this.deleteLabel = 'Delete'
				})
            this.$router.push(`/keeper-app`) 
        },
    },
    components: {
        imgType,
        txtType,
        todosType,
        addNote,
        editNote
    }
}


