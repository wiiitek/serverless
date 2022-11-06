# serverless

## Tools

This project use [serverless] to create cloud services.
To install NodeJS use [nvm] ([nvm-windows]).

## Setup

### AWS account

Prepare AWS user to create and deploy your services.
You can use [this gist](https://gist.github.com/ServerlessBot/7618156b8671840a539f405dea2704c8) to create a policy for that user.

Configure serverless to work with [AWS profiles].
You can [set default profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html#using-profiles) with:

```
export AWS_PROFILE=profile-name
```

### Usefull serverless commands

```
sls deploy
sls info
sls remove
```

## Authentication

If needed, authentication can be based on [serverless-authentication-boilerplate] project licensed under [MIT].

[serverless]: https://github.com/serverless/serverless
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
[aws profiles]: https://serverless.com/framework/docs/providers/aws/guide/credentials/#using-aws-profiles
[serverless-authentication-boilerplate]: https://github.com/laardee/serverless-authentication-boilerplate
[mit]: https://github.com/laardee/serverless-authentication-boilerplate/blob/master/LICENSE.txt
