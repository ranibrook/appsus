import emailService from '../../services/email-service.js'


export default {

    template: `
    <section class="compose-email center">
        <div class="container compose-email-wrapper">
            <div class="new-message-label flex space-between">
                <p>New message</p>
                <button class="back-btn" @click="$router.push('/email-app')">Back</button>
            </div>
            
            <input class="compose-input-box no-outline" type="text" v-model="to" placeholder="To:">
            <div class="line"></div>
            <input class="compose-input-box no-outline" type="text" v-model="subject" placeholder="Subject:">
            <div class="line"></div>
           
            <textarea class="compose-input-box no-outline" v-model="body" rows="18"></textarea>

            <div class="new-message-label flex space-between">
                <button class="btn-compose" @click="sendEmail">Send</button>
                <button class="back-btn" @click="$router.push('/email-app')">Cancel</button>
            </div>           
           
            <p>{{message}}</p>
            <router-link to="/email-app">
            <button v-if="(message)">Check Inbox</button>
            </router-link>
       </div>
    </section>
    `,

    data() {
        return {
            emails: [],
            id: '',
            to: '',
            subject: '',
            body: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            let newEmail = {

                to: this.to,
                subject: this.subject,
                body: this.body,
                sentAt: emailService.getDateSent(0),
                isRead: false
            }
            emailService.updateEmails(newEmail)
            .then (this.$router.push('/email-app'))

            // this.message = 'email sent successfully'
        }
    },

    created() {
        emailService.query()
            .then(emails => this.emails = emails)
    }


}