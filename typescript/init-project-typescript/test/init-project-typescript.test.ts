import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InitProjectTypescriptStack } from '../lib/init-project-typescript-stack';

test('S3 Bucket Created', () => {
  const app = new App();

  // WHEN
  const stack = new InitProjectTypescriptStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {});
});
