// console.log('keeper-cmp');

import keeperService from '../../services/keeper-service.js'
import noteFilter from '../../cmps/keeper/note-filter-cmp.js'
import noteList from '../../cmps/keeper/note-list-cmp.js'

export default {
	template: `
		<section class="keeper-app">
			<note-filter @filtered="setFilter"></note-filter>
			<note-list :notes="notesToShow"></note-list>
		</section>
	`,
	components: {
		keeperService,
        noteFilter,
        noteList
	},
   
    data() {
        return {
            notes: null,
            filter: null,
        }
    },
    created() {
        keeperService.query()
            .then(notes => {
                this.notes = notes;
            })
    },
    methods: {
        setFilter(filter) {
            // console.log('Parent setFilter by name', filter);
            this.filter = filter;
            // console.log('Parent: this.filterByName', this.filter);
        },
    },

    computed: {
        notesToShow() {
            if (!this.filter) return this.notes;
            else return this.notes.filter(note =>
                note.title.includes(this.filter.byName))
		}
	},
}


