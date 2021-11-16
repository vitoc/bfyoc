module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const rating = {
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

}