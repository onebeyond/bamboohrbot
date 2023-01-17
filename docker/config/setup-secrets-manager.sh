#!/bin/bash

awslocal secretsmanager create-secret \
  --name BAMBOOHR_KEY \
  --secret-string $BAMBOOHR_KEY
