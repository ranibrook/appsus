export default {
    template: `
    <section class="email-filter">
            <div class="search-box flex space-between align-center">
                <input class="search-input-box" type="text" v-model="filter.txt" 
                @input="findEmails" placeholder="Search for emails"/>                
                <router-link to="/compose">
                    <button class="btn-compose">Compose</button>
                </router-link> 
            </div>
            <div class="filter-by">
                <input type="radio" id="read" v-model="filter.emailStatus" value="read" @click="updateFilter"/>
                <label for="read">Read</label>
            
                <input type="radio" id="unread" v-model="filter.emailStatus" value="unread" @click="updateFilter"/>
                <label for="unread">Unread</label>
        
                <input type="radio" id="all" v-model="filter.emailStatus" value="all" @click="updateFilter" />  
                <label for="all">All</label>
            </div>
            
    </section>
    `,

    data() {
        return {
            filter: {
                txt: '',
                emailStatus: ''
            }
        }
    },
    methods: {
        findEmails() {
            this.$emit('doFilter', this.filter)
        },
        updateFilter() {
            // console.log('ev: ', ev.value)
            // this.filter.emailStatus = ev.value
            this.$emit('doFilter', this.filter)
           
        }
    }
}