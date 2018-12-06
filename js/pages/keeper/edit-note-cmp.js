console.log('edit-note-cmp');

import keeperService from '../../services/keeper-service.js'
import eventBus, {SAVE_NOTE_MSG} from '../../services/event-bus-service.js'
import addtxtType from '../../cmps/keeper/add-txt-type-cmp.js'
import addimgType from '../../cmps/keeper/add-img-type-cmp.js'
import addtodosType from '../../cmps/keeper/add-todos-type-cmp.js'


export default {
    props:['type'],
    template: `<section v-if="note" class="edit-note">

                    <div class="edit-container flex align-center column">
                        
                        <h2>Edit note</h2>
                        <section v-if="note">
                            <div class="edit-note-title-container flex column align-center">
                                <h3>Title:</h3>
                                <input class="title" ref="updatedInput" type="text" v-model="note.title">
                            </div>
                            <!-- <div> let's edit</div> -->
                            <component :is="'add'+selectedType" v-if="selectedType" :note="note"></component>
                            <div class="edit-note-btns-container flex align-center">
                                <button  class="btn edit-note-btn btn-color">
                                    <input type="color" id="colorValue" name="color" value="#ffffff" @change="note.bgColor = $event.target.value">
                                    <label for="colorValue"></label>
                                </button>
                                <button class="btn edit-note-btn btn-save" @click="saveNote">Save</button>
                                <button class="btn edit-note-btn btn-cancel-edit" @click="cancelEditNote">Cancel</button>
                            </div>
                        </div>
                    </section>
                </section>
                `,
    data() {
        return {
            note: null,
            editedNote: keeperService.createEmptyNote(),
            selectedType: null,
        }
    },
    components: {
        addtxtType,
        addimgType,
        addtodosType

    },

    created() {
    const {noteId} = this.$route.params;
    
    if (noteId) {
        keeperService.getNoteById(noteId)
        .then(note => {
            // to edit a copy of the obj, so if we want to cancel edit
            console.log({note})
            this.note = JSON.parse(JSON.stringify(note));
            this.selectedType = this.note.type;
            console.log('this.selectedType if it old', this.selectedType);
            // this.url = this.note.data.url;
            // this.txt = this.note.data.txt;
            // this.todos = this.note.data.todos;
            // console.log('note in edit', this.note);
            // console.log('note in edit', this.note.type);
            })
            
    } else {
        console.log('this.type if it new', this.type);

        this.note = this.editedNote;
        console.log('this.note if it new', this.note);
        this.selectedType = this.type;
        console.log('this.selectedType if it new', this.selectedType);
        this.note.type = this.type;
        console.log('this.note.type if it new', this.note.type);

        if (this.note.type === 'txtType') this.editedNote.data.txt = '';
        else if (this.note.type === 'imgType') this.editedNote.data.url = '';
        else if (this.note.type === 'todosType') this.editedNote.data.todos = [];
        console.log('this.selectedType if it new', this.selectedType);
        console.log('this.selectedType if it new',  this.note);
    }

},
    mounted() {

    },
    methods: {
        saveNote() {
            console.log('savingggg this.editedNote', this.editedNote);
            console.log('savingggg this.note', this.note);


            this.editedNote.id = this.note.id;
            this.editedNote.type = this.note.type;
            this.editedNote.title = this.note.title;
            this.editedNote.bgColor = this.note.bgColor;
            // if (this.editedNote.data.url) this.editedNote.data.url = this.note.data.url;
            // // console.log('changeTitle', this.note.title);
            
            if (this.editedNote.type === 'txtType') this.editedNote.data.txt = this.note.data.txt;
            else if (this.editedNote.type === 'imgType') this.editedNote.data.url = this.note.data.url;
            else if (this.editedNote.type === 'todosType') this.editedNote.data.todos = this.note.data.todos;
            
            console.log('this.editedNote', this.editedNote);
            keeperService.saveNote(this.editedNote)
            .then(savedNote => {
                console.log(`Note ${savedNote.id} succesfuly saved`);
                eventBus.$emit(SAVE_NOTE_MSG, 'Your note was saved!')
                this.$router.push(`/keeper-app`)
            })
            
            this.editedNote = null;
            this.note = null;
            //restart editedNote 
            // console.log('this.editedNote.data.txt', this.editedNote.data.txt);

        },
        cancelEditNote() {
            this.$router.push(`/keeper-app`)
        },
    },
}



