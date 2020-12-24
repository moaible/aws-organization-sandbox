#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsOrganizationSandboxStack } from '../lib/aws-organization-sandbox-stack';

const app = new cdk.App();
new AwsOrganizationSandboxStack(app, 'AwsOrganizationSandboxStack');
