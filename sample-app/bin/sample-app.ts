#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SampleAppStack } from '../lib/sample-app-stack';

const app = new cdk.App();

const sampleEnv  = { account: '341681825452', region: 'eu-central-1' };

const sampleStack = new SampleAppStack(app, 'SampleAppStack', { env: sampleEnv });

import {Aspects, IAspect, CfnResource } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

export class PermissionsBoundary implements IAspect {
  private readonly permissionsBoundaryArn: string;

  constructor(permissionBoundaryArn: string) {
    this.permissionsBoundaryArn = permissionBoundaryArn;
  }

  public visit(node: IConstruct): void {
    if (CfnResource.isCfnResource(node) && node.cfnResourceType === 'AWS::IAM::Role') {
      node.addPropertyOverride('PermissionsBoundary', this.permissionsBoundaryArn);
    }
  }
}

function setPermissionBoundaries(appstack: IConstruct) {
  Aspects.of(appstack).add(
    new PermissionsBoundary('arn:aws:iam::341681825452:policy/eo_role_boundary'),
  );
}

setPermissionBoundaries(sampleStack)