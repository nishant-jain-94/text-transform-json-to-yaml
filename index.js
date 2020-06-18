const AWS = require('aws-sdk');
const YAML = require('json-to-pretty-yaml');
const s3 = new AWS.S3();

const sourceBucket = process.env.SOURCE_BUCKET;
const sourceFile = process.env.SOURCE_FILE;
const params = {
    Bucket: sourceBucket,
    Key: sourceFile,
};

(async () => {
    const data = await s3.getObject(params).promise();
    const jsonBody = data.Body;
    const yamlBody = YAML.stringify(JSON.parse(jsonBody.toString()));
    console.log(yamlBody);
    const fileName = `${process.env.SOURCE_FILE.split('.')[0]}.yaml`
    const yamlData = await s3.putObject({ Bucket: process.env.DESTINATION_BUCKET, Key: fileName, Body: yamlBody }).promise();
    console.log(yamlData);
})();

