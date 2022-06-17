

exports.handler = async (event, context) => {

    const data = JSON.parse(JSON.stringify(event))

    console.log(data)

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};