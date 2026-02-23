// ************ TASK DESCRIPTION ************
//? Façade Pattern
/*
*   You are integrating with a legacy notification system that accepts messages in a specific format:
        sendLegacyMessage(userId, title, body)

*   A modern alerting service provides input data in a more structured form.
*   Write a function that acts as a façade between the new alert structure and the legacy system.
*   
*   Make sure to log the incoming alert object, and also log the exact legacy function call being made.
*
*   Example:
*   sendAlert({
*     user: "u42",
*     message: { heading: "Warning", content: "Low battery" }
*   });
*
*   Expected logs:
*   Logging alert data: { user: ..., message: ... }
*   Calling sendLegacyMessage(u42, "Warning", "Low battery")
*/
 
// TODO: Implement sendAlert



const sendAlert = (data) => {
  console.log("Logging alert data:",data)
  console.log(`Calling sendLegacyMessage(${data.user}, "${data.message.heading}", "${data.message.content}")`)
  sendLegacyMessage(data.user,data.message.heading,data.message.content)
}








      









// Below this comment any modification is prohibited.
module.exports = { sendAlert };
