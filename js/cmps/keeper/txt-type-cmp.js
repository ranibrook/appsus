// console.log('txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <!-- <h1>This is txt cmp, note type is {{note.type}}</h1> -->
                    <div class="txt-type">{{note.data.txt}}</div>
                </section>
                `,
    data() {
        return {
        }
    },
    methods: {

    }
    
}