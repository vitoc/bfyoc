module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log(req.body.locationName);
    context.bindings.employeeDocument = JSON.stringify({
        id: req.body.name + "-" + req.body.employeeId,
        name: req.body.name,
        employeeId: req.body.employeeId,
        address: req.body.address
    });

    context.done();
    

    /*
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200,
        body: responseMessage
    };
    */
}