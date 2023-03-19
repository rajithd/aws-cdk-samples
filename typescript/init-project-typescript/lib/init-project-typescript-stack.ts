import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from "aws-cdk-lib/aws-s3";

export class InitProjectTypescriptStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Bucket(this, 'MyFirstBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
      publicReadAccess: false,
      autoDeleteObjects: true
    });
  }
}
