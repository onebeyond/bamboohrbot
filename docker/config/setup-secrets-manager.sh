#!/bin/bash

awslocal secretsmanager create-secret \
  --name BAMBOOHR_KEY \
  --secret-string $BAMBOOHR_KEY
  
awslocal secretsmanager create-secret \
  --name SLACK_SIGNING_SECRET \
  --secret-string $SLACK_SIGNING_SECRET
  
awslocal secretsmanager create-secret \
  --name SLACK_BOT_TOKEN \
  --secret-string $SLACK_BOT_TOKEN