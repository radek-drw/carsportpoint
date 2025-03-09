## AWS Lambda Layer for External Dependencies

# Purpose

The AWS Lambda Layer was created to store external dependencies that are not natively available in the AWS Lambda runtime. This allows multiple Lambda functions to access shared dependencies without including them in each function's deployment package.

# Benefits

- Reduces Deployment Package Size: Functions don’t need to include the same dependencies multiple times
- Improves Maintainability: Dependencies can be updated separately from the function code
- Enhances Code Reusability: Multiple Lambda functions can use the same layer without duplicating dependencies
- Optimizes Deployment: Updating dependencies does not require redeploying each Lambda function

# Command Usage

To create a Lambda layer, use the following command (make sure you are in the lambda-layer path when using this command):

```shell
Compress-Archive -Path nodejs -DestinationPath layer.zip -Force
```

Explanation
This command creates a zip file (layer.zip) containing the nodejs/node_modules directory, which will be uploaded to AWS Lambda

# Installing New Packages

- Install packages with the --no-save flag to avoid creating package.json:

```shell
npm install <package-name> --no-save
```

- Re-compress node_modules into layer.zip

# Current Dependencies

Currently, the node_modules directory contains the following package:

- uuid: A simple, fast generation of RFC4122 UUIDs

If a new package is added, make sure to update this documentation to reflect the change

If you need to remove a package from the layer, use the following command:

```shell
npm uninstall <package-name> --no-save
```
