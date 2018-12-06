console.log('add-note-cmp');

import addImgType from '../../cmps/keeper/add-img-type-cmp.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'
import eventBus from '../../services/event-bus-service.js'


export default {
    template:`
            <section class="add-container flex" >
                <div class="add-btns-title-container flex align-center"></div>
                    <h2>Take a note</h2>
                    <div class="btns-add">
                        <button class="btn btn-txt-selected" @click="selectedTxtType"><i class="fa fa-pen"></i></button>
                        <button class="btn btn-img-selected" @click="selectedImgType"><i class="fa fa-image"></i></button>
                        <button class="btn btn-todos-selected" @click="selectedTodosType"><i class="fa fa-list"></i></button>
                    </div>
                </div>
            </section>
            `,
      data() {
        return {
            selectedType: '',
        }
    },
    
    components: {
        addImgType,
        editNote
    },
    methods: {
        selectedTxtType() {
            this.selectedType = 'txtType';
            this.transferSelectedType();
            this.$router.push(`/keeper-app/add/${this.selectedType}`);
        },
        selectedImgType() {
            this.selectedType = 'imgType';
            this.$router.push(`/keeper-app/add/${this.selectedType}`);

            this.transferSelectedType();
        },
        selectedTodosType() {
            this.selectedType = 'todosType';
            this.$router.push(`/keeper-app/add/${this.selectedType}`);
            this.transferSelectedType();
        },
        routerPush() {
            this.$router.push(`/keeper-app/edit`);
        },
        transferSelectedType() {
            console.log('this.selectedType txt', this.selectedType);
        }
    }

}

