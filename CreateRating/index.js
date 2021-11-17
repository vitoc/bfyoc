const fetch = require('sync-fetch');
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    try {
        const userMetadata = fetch(`https://serverlessohapi.azurewebsites.net/api/GetUser?userId=${req.body.userId}`, {
        }).json();
    
        const productMetadata = fetch(`https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=${req.body.productId}`, {
        }).json();
    
        context.log(userMetadata, productMetadata);
    
        const rating = {
            id: uuidv4(),
            timestamp: Date.now(),
            userId: req.body.userId,
            productId: req.body.productId,
            locationName: req.body.locationName,
            rating: req.body.rating,
            userNotes: req.body.userNotes
        }
    
        context.bindings.outputDoc = JSON.stringify(rating);

        context.res = {
            status: 200,
            body: rating
        };    
    } catch (e) {
        context.res = {
            status: 400
        };
    }

}