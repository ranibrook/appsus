export default {
    template: `
            <nav class="nav-bar flex">
                <!-- <button class="btn btn-toggle-menu" onclick="toggleMenu()">☰</button> -->
                <router-link exact to="/">Home</router-link> |
                <router-link exact to="/email-app">Mister email</router-link> |        
                <router-link to="/keeper-app">Miss keeper</router-link>  
            </nav>
            `,
    data() {
        return {
            // isDisplay = false,
        }
    },
    methods: {
        // toggleMenu() {
        //     // $('nav ul').toggle('.open');
        //     var elMenu = document.querySelector('nav ul');
        //     elMenu.classList.toggle('open');
        //     var elBtnToggleMenu = document.querySelector('.btn-toggle-menu');
        //     elBtnToggleMenu.classList.toggle('hidden');
        //     var elScreen = document.querySelector('.screen');
        //     elScreen.classList.toggle('screen-open');

        // },
    }
}
