#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InitProjectTypescriptStack } from '../lib/init-project-typescript-stack';

const app = new cdk.App();
new InitProjectTypescriptStack(app, 'InitProjectTypescriptStack', {});
