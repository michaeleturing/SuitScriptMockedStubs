/**
 * mocks/N/email.js
 *
 * A simple mock for the N/email module.
 */
define([], () => {
  function send (options) {
    // Just log an email-sent event
    console.log('MOCK EMAIL SENT:', {
      author: options.author,
      recipients: options.recipients,
      subject: options.subject,
      body: options.body
    })
  }

  return {
    send: send
  }
})
