import utils from './util-service.js'

var emails = []

const HOUR = 1000 * 60 * 60
const APP_KEY = 'my-emails'

loadEmails();
function loadEmails() {
    if (utils.loadFromStorage('my-emails')) {
        emails = utils.loadFromStorage('my-emails');
        return;
    }

    emails = [
        {
            id: makeId(),
            subject: 'Meeting with the marketing team',
            body: 'Hi Ran, wanted to let you know I set a meeting with our marketing team. please confirm.',
            isRead: false,
            sentAt: getDateSent(3),
        },
        {
            id: makeId(),
            subject: 'Tickets for the World cup finals',
            body: 'New worldcup tickets are now available on sale. Hurry up before they are sold out',
            isRead: false,
            sentAt: getDateSent(22)
        },
        {
            id: makeId(),
            subject: 'New job offer',
            body: 'Hi Ran, I have an interesting job offer for you - contact me at 054-6653322. John',
            isRead: false,
            sentAt: getDateSent(48)
        }
    ]
    utils.saveToStorage(APP_KEY, emails)
}

function query() {
    return Promise.resolve(emails)
}

function getEmailById(id) {
    let email = emails.find(email => email.id === id);
    // console.log('email from email service: ', email)
    return Promise.resolve(email)
}

function setReadStatus(email) {
    email.isRead = !email.isRead;
    utils.saveToStorage(APP_KEY, emails)
    return Promise.resolve(email);
}

function updateEmails(email) {
    email.id = makeId();
    emails.unshift(email);
    utils.saveToStorage(APP_KEY, emails)
    return Promise.resolve(email)
}

function deleteEmail(id) {
    return new Promise((resolve, reject) => {
        var emailIdx = emails.findIndex(email => email.id === id)
        emails.splice(emailIdx, 1);
        resolve()
        utils.saveToStorage(APP_KEY, emails)
    })
}

export default {
    query,
    getEmailById,
    setReadStatus,
    updateEmails,
    deleteEmail,
    getDateSent
}


function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function getDateSent(numOfHours) {
    var dateSent = Date.now() - numOfHours * HOUR
    return moment(dateSent).format('MMMM Do YYYY, h:mm a');
}