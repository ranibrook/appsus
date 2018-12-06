// console.log('img-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note" class="img-type flex align-center column">
                    <!-- <h1>This it img!! cmp, note type is {{note.type}}</h1> -->
                    <img class="note-img" :src="note.data.url"/>
                </section>
                `,
    data() {
        return {
            deleteLabel : 'Delete',
        }
    },
    created() {
    },
    methods: {
        removeNote() {
            this.deleteLabel ='Deleting...';
            keeperService.removeNote(this.note.id)
                .then(() => {
                    console.log('note in edit-delete ', this.note);
                })               
                .catch(err=>{
                    console.log('Failed to delete');
                    this.deleteLabel = 'Delete Book'
                })
            this.$router.push(`/keeper-app`)
        },
    }
}

