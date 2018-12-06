
import emailApp from './email/email-app-cmp.js'
import keeperApp from './keeper/keeper-app-cmp.js'




export default {
    template: `
            <section class="home">
                <div class="email-keeper-icons flex align-center">
                    <router-link to="/email-app" class="email-icon flex column align-center">
                        <img src="img/icon_email.png"/>
                        <h2>Mister Email</h2>
                    </router-link>
                    <router-link to="/keeper-app" class="keeper-icon flex column align-center">
                        <img src="img/icon_keeper.png"/>
                        <h2>Miss Keeper</h2>
                    </router-link>
                </div>
            </section>`,
    components: {
        emailApp,
        keeperApp,
    }
}