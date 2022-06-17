

exports.handler = async (event, context) => {

    const data = JSON.parse(JSON.stringify(event))

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};