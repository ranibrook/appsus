console.log('add-txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
  props: ['type', 'note'],
    template: `<section v-if="note" class="add-txt-container">                    
                    <!-- <h1>This is ADD txt cmp</h1> -->
                    <div>
                        <h3>Text:</h3>
                        <textarea ref="updatedTxt" v-model="note.data.txt"></textarea>
                    </div>
                </section>
                `,
    data() {
        return {
        }
    },
    created() {
    },
    components: {
    }
}
