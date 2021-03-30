const { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } = require('../controllers/crmController')

const routes = app => {
    app.route('/contact')
        .get((req, res, next) => {
            // add middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, getContacts)
            
        // defined the post endpoints
        .post(addNewContact)

    app.route('/contact/:contactID')

            .get(getContactWithID)
            
            .put(updateContact)
            
            .delete(deleteContact)
}

export default routes