console.log('add-img-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['selectedType','note'],
    template: `<section v-if="note" class="add-img">
                    <!-- <h1>This is ADD img cmp</h1> -->
                    <div>
                        <h3>Image URL:</h3>
                        <input ref="updatedInput" type="text" v-model="url" @input="changeUrl">
                    </div>
                    </router-link>
                </section>
                `,
    data() {
        return {
            url: null,
        }
    },
    created() {
    },
    components: {

    },
    methods: {
        changeUrl() {
            console.log('this not in ADD txt this.note.type', this.note);
            this.note.data.url = this.url;
            console.log('this not in ADD after change', this.note.data.url);
            this.$emit('note', this.note);
        }
    }
}
