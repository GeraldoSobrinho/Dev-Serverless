"use strict";
const AWS = require("aws-sdk");
const fetchitems = require("./fetchitems");

const fechItem = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let Item;

    try {
        const result = await dynamodb.get({
            TableName: "ItemTableNew",
            key: {id}
        }).promise();

        item = result.Item;

    } catch (error) {
        console.log(error) 
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };

}

module.exports = {
    handler: fetchitems,
};