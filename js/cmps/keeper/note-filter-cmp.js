// console.log('notes-filter-cmp');

export default {
    template: `
            <section class="note-filter flex"> 
                <i class="fa fa-search"></i>
                <input type="text" placeholder="Search by Title" v-model="filterBy.byName" @keydown="filterNotes" />
            </section>
        `,

    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },

    methods: {
        filterNotes() {            
            this.$emit('filtered', this.filterBy);
        }
    },
    components: {
    }
}