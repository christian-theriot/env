# @theriot.dev/env

This project provides an easy way to access environment variables within NodeJS

# Installation

```
npm install @theriot.dev/env
```

# Import

```
import env from '@theriot.dev/env';
```

# Overview

First, define any project-specific constants inside of a `.env` file at the same level as your `package.json`. Then, you can access these and other environment variables using the `get` function:

## .env:

```
SECRET=secret
```

## your-file.ts:

```
let secret: string = env.get('SECRET');
```
