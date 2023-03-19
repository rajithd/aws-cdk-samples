# Prerequisites
1. Node
2. NPM

# How to Initiate CDK project using typescript
1. Install typescript
```shell
npm -g install typescript
```
2. Install aws-cdk
```shell
npm install -g aws-cdk
```
3. Bootstrap CDK
```shell
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
```
4. Init CDK app
```shell
cdk init app --language typescript
```
# Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


