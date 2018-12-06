import emailService from '../../services/email-service.js'


export default {
    props: ['email'],
    template: `
    <section class="email-details" v-if="email">
  
        <div class="email-top-section"> 
            <div class="flex space-between">
                <h2>Subject: {{email.subject}}</h2>
                <i @click="deleteEmail" class="fa fa-trash-alt"></i>                
            </div>       
            <p>Sent: {{email.sentAt}}</p> 
                              
        </div>
        <div class="line"></div>
        <div class="email-body-section">
            <p>{{email.body}}</p> 
        </div>



    </section>
    `,

    data() {
        return {
            // email: ''
        }
    },

    created() {
        // this.loadEmail();
    },

    methods: {
        // loadEmail() {
        //     emailService.getEmailById(this.$route.params.emailId)

        //         .then(email => {
        //             this.email = email

        //         })
        // },
        deleteEmail() {
            console.log('deleting email: ', this.email)
            emailService.deleteEmail(this.email.id)
                .then(() => {
                    console.log('email deleted!')
                    this.email = ''
                })
                .catch(error => {
                    console.log('there was an error deleting your mail')
                })
        }

    },
    watch: {
        // '$route.params.emailId': function (newEmailId) {
        //     console.log('$route.params.bookId has changed!', newEmailId);
        // this.loadEmail()

    }
}
