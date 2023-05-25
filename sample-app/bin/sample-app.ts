#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SampleAppStack } from '../lib/sample-app-stack';

const app = new cdk.App();

const sampleEnv  = { account: '341681825452', region: 'eu-central-1' };

new SampleAppStack(app, 'SampleAppStack', { env: sampleEnv });
