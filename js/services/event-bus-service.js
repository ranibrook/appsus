// console.log('event bus');

export const SAVE_NOTE_MSG = 'SAVE_NOTE_MSG';
// export const MSG_HAPPY_HOUR = 'happy-hour';

var eventBus = new Vue();



// bus.$on(MSG_HAPPY_HOUR, level => {
//     console.log('Happy time!', level);
    
// })

// bus.$emit(MSG_HAPPY_HOUR, 8);
// bus.$emit(MSG_HAPPY_HOUR, 4);


export default eventBus;
