module.exports = async function (context, req, inputDocument) {

    if (!inputDocument) { 
        context.log("inputDocument not found");
    } else {
        //context.log("Found inputDocument, inputDocument=" + inputDocument);
        // context.log(inputDocument);
        context.res = {status: 200,body: inputDocument}; 
    }
    
}