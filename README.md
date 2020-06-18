# Text Transform JSON to YAML

Inputs JSON Text from the S3 Buckets, transforms into YAML and emits out into the S3 Bucket. This Docker Container runs as a Job in **AWS Batch**. This Job needs relevant permissions to the source and destination buckets.  

## Environment Variables
- `SOURCE_BUCKET` - Refers to the S3 Bucket from where the JSON text needs to be inputted. 
- `SOURCE_FILE` - Refers to the JSON File present in the S3 Bucket
- `DESTINATION_BUCKET` - Refers to the Destination S3 Bucket where the YAML needs to be outputted into.