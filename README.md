<div align="center">

# TIL-Log Web V2

Blog platform for developers, TILog

•
[Project Convention](https://github.com/TIL-Log-lab/Tilog-web-node-v2/discussions/3) •

</div>

# Environments

## Environment Variable Load Order

```
NODE_ENV=production

.env.production.local
.env.local
.env.production
.env

NODE_ENV=development

.env.development.local
.env.local
.env.development
.env

NODE_ENV=test

.env.test.local
.env.test
.env
```

## content

```
TILOG_API = http://localhost
COOKIE_NAME = "test_tilog_user"
COOKIE_PASSWORD = "tilog_test_password_at_least_32_characters_long"

```
