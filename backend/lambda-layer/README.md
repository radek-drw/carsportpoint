## AWS Lambda Layer for External Dependencies

# Purpose

The AWS Lambda Layer was created to store external dependencies that are not natively available in the AWS Lambda runtime. This allows multiple Lambda functions to access shared dependencies without including them in each function's deployment package.

# Benefits

- Reduces Deployment Package Size: Functions don’t need to include the same dependencies multiple times
- Improves Maintainability: Dependencies can be updated separately from the function code
- Enhances Code Reusability: Multiple Lambda functions can use the same layer without duplicating dependencies
- Optimizes Deployment: Updating dependencies does not require redeploying each Lambda function

# Installing New Packages

Make sure you are in nodejs folder:

```shell
cd nodejs
```

Run command to install packages:

```shell
npm install
```

Installing new packages:

```shell
npm install <package-name>
```

# Command Usage

To create a Lambda layer, use the following command:

```shell
npm run build
```

Explanation

- This command creates a zip file (layer.zip) containing the nodejs/node_modules directory, which will be uploaded to AWS Lambda

# Current Dependencies

Currently, the node_modules directory contains the following packages:

- uuid: A simple, fast generation of RFC4122 UUIDs
- busboy: A streaming parser for HTML form data for Node.js

If a new package is added, make sure to update this documentation to reflect the change

If you need to remove a package from the layer, use the following command:

```shell
npm uninstall <package-name>
```
