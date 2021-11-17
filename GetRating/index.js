module.exports = async function (context, res, inputDocument) {

    if (!inputDocument){
        context.log("Rating not found")
    } else {
        context.res = {status: 200,body: inputDocument[0]};
    }
    
}