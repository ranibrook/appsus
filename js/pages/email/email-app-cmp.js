
import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email/email-list-cmp.js'
import emailDetails from './email-details-cmp.js'
import emailStatus from '../../cmps/email/email-status-cmp.js'
import eventBus from '../../services/event-bus-service.js'
import emailFilter from '../../cmps/email/email-filter-cmp.js'
import emailSort from '../../cmps/email/email-sort-cmp.js'

export default {


    template: `
    <section class="email-app center">
        <div class="email-app-wrapper container">
            <email-filter @doFilter="setFilter"></email-filter> 
            <!-- <router-link to="/compose">
                <div class="compose-email-button">Compose</div>
            </router-link>  -->
            <email-sort @sortBy="setSort"></email-sort>
            <email-status :unread="getUnreadEmails" :totalCount="getTotalEmailsCount"></email-status>
            <div class="main-menu flex">
                <email-list :emails="emailsToShow"></email-list>            
                <email-details :email="selectedEmail" v-if="isSelectedEmail"></email-details>        
            </div>
        </div>
    </section>
    
    `,
    data() {
        return {
            emails: [],
            isSelectedEmail: false,
            selectedEmail: '',
            filter: null,
            sortBy: null
        }

    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                this.isSelectedEmail = true;
                this.selectedEmail = this.emails[0]
            })
    },
    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailFilter,
        emailSort
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        setSort(sortBy) {
            this.sortBy = sortBy
            console.log('sort by: ', this.sortBy)
        }
    },
    computed: {
        emailsToShow() {
            let emailsToShow = this.emails
            if (this.filter) {
                emailsToShow = emailsToShow.filter
                    (email => email.subject.includes(this.filter.txt) ||
                        email.body.includes(this.filter.txt));

                switch (this.filter.emailStatus) {
                    case 'read':
                        emailsToShow = emailsToShow.filter(email => email.isRead === true);
                        break;
                    case 'unread':
                        emailsToShow = emailsToShow.filter(email => email.isRead === false);
                        break;
                    case 'all':
                        emailsToShow = emailsToShow;
                        break;
                };
            }
            if (this.sortBy) {

                switch (this.sortBy) {
                    case 'Subject':
                        emailsToShow = emailsToShow.sort((a, b) => {
                            if (a.subject < b.subject) return -1
                            else if (a.subject > b.subject) return 1;
                            return 0;
                        })
                        break;
                    case 'Date':
                        emailsToShow = emailsToShow.sort((a, b) => {
                            if (a.sentAt < b.sentAt) return -1;
                            if (a.sentAt > b.sentAt) return 1;
                            return 0;
                        })
                        break;
                }
            }
            return emailsToShow
        },
        getUnreadEmails() {
            var allEmails = this.emails
            var unreadCount = 0;

            allEmails.forEach(email => {
                if (!email.isRead) {
                    unreadCount++
                }
            })
            return unreadCount
        },
        getTotalEmailsCount() {
            var allEmails = this.emails
            let length = allEmails.length;
            return length

        },

    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            console.log('$route.params.emailId has changed!', newEmailId);
            this.isSelectedEmail = true;
            emailService.getEmailById(newEmailId)
                .then(email => {
                    this.selectedEmail = email
                    console.log('this selected email: ', this.selectedEmail)
                })
        }
    }
}










