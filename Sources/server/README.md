# Gazette server technical documentation

## Table of contents

1. [Install](#Install)
   1. [Prerequisites](#prerequisites)
   2. [Configuration](#configuration)
   3. [Deployment](#deployment)
2. [Stack](#stack)
3. [Authors](#Authors)

## Install

#### Prerequisites

[npm](https://www.npmjs.com/)

#### Configuration

rewrite `/server/src/config/config.json` into `/server/src/config/default.json` 

rewrite file to match your database configuration

```
{
  "database_config": [
    "database_name",
    "database_host",
    "database_password",
    {
      "host": "localhost",
      "dialect": "mysql",
      "logging": false,
      "define": {
        "timestamps": false
      }
    }
  ],
  "port": 3000,
  "secretOrKey": "secretToEncrypt"
}
```

rewrite `/server/.env.json.default` into `/server/.env.json`

```json
{
  "service": "Gmail",
  "userGmail": "mail address to send email with",
  "passGmail": "mail address password"
}
```

#### Deployment

- install dependencies `npm install`
- start server `npm start`

## Stack

![node-logo](../../Misc/node.png "Node Logo") [NodeJS](https://nodejs.org/en/)

## Authors

- **Roman Blondeau** (roman.blondeau@epitech.eu)
- **Nicolas Menettier** (nicolas1.menettier@epitech.eu)
