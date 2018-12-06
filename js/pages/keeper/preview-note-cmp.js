// console.log('preview-note-cmp');
import keeperService from '../../services/keeper-service.js'
import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'
import editTxtType from '../../pages/keeper/edit-note-cmp.js'

export default {
    template: `
                <section class="preview-note" v-if="note">
                    <h2>preview note cmp</h2>
                    <h2 class="title">{{note.title}}</h2>
                    <component :is="note.type" :note="note" :key="note.id"> </component>
                        <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete">Delete</button>                   
                </section>`,
    data() {
        return {
            note: null,
        }
    },

    created() {
        console.log('this.$route.params', this.$route);
        console.log('this.$route.params', this.$route.params);
        const {noteId} = this.$route.params;
        if (noteId && noteId !=='edit') {
            keeperService.getNoteById(noteId)
            .then(note => {
                this.note = note;
                console.log('note in preview', this.note);
                // console.log('note in preview', this.note.type);
                })
            }
},

    components: {
        imgType,
        txtType,
    },
    methods: {
 
    }
}