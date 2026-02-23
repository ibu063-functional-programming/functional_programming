/*
*   Implement a class `NotificationService` that:
*   - Takes a `mailer` object in the constructor
*   - Has a method `send(user, message)` that:
*     - Calls `mailer.sendEmail(user, message)`
*
*
*? Example:
*? const mockMailer = { sendEmail: (u, m) => `Mocked email to ${u}: ${m}` };
*? const ns = new NotificationService(mockMailer);
*? ns.send("ana@example.com", "Hello!") → "Mocked email to ana@example.com: Hello!"
*/

// TODO: Implement NotificationService


class NotificationService{
    constructor(mailer){
        this.mailer = mailer;
    }

    send(user,message){
        return this.mailer.sendEmail(user,message)
    }

}




























// Below this comment any modification is prohibited.
module.exports = { NotificationService };
