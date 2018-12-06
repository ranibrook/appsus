export default {

    template: `
    <section class="email-sort">
        <p class="inline">Sort by:</p>
        <select v-model="sortBy" @change="sortEmails">
            <option disabled>- Selected -</option> 
            <option>Subject</option>
            <i class="fas fa-sort-amount-down"></i>
            <option>Date</option>
            <i class="fas fa-sort-amount-down"></i>
        </select>
    </section>
    `,

    data () {
        return {
            sortBy: ''
        }
    },

    methods: {
        sortEmails() {
            this.$emit('sortBy', this.sortBy)
        },
    },

    created() {
        
    },

    computed: {
        
    }


}