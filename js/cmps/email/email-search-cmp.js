import emailService from '../../services/email-service.js'

export default {
    props: ['emails'],
    template:`
    
    <section class="email-search">
    <input type="text" v-model="searchStr" @input="findEmails" placeholder="Search for emails"/>
    
    </section>
    `,

    data () {
        return {
            searchStr: '',
            results: ''
        }
    },
    methods: {
        findEmails() {
            if (this.searchStr === '') return;
            emailService.findEmail(this.searchStr)
            .then (emails => this.results = emails)
            this.$emit('showSelectedEmails', this.results )
            
        }
        
    }

}