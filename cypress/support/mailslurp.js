const {MailSlurp} = require('mailslurp-client')
const mailslurp = new MailSlurp({ apiKey: "b9f131602ebd11553322e4132782d256eab232e87d98ceb5aa7166b25b4479d5" });

Cypress.Commands.add('CreateInbox', ()=>{
    return mailslurp.createInbox()
})
Cypress.Commands.add('waitForLatestEmail', (inboxId, timeout = 30000)=>{
    return mailslurp.waitForLatestEmail(inboxId, timeout)
})

