import emailPreview from './email-preview-cmp.js'

export default {
    props: ['emails'],

    template: `
    <section class="email-list">

    <ul class="clean-list">
        <li v-for="email in emails" :key="email.id">
            <emailPreview :email="email" :selected="email.id === selectedEmailId"
                @click.native="setselected(email.id)"></emailPreview>
        </li>
    </ul>

    
    </section>
        
    
    `,

    data() {
        return {
            selectedEmailId: null
        }
    },
    methods: {
        setselected(id) {
            this.selectedEmailId = id;
        }
    }, 
    components: {
        emailPreview
    }

}