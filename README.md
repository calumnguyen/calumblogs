# Calum Blogs

A modern Next.js blog platform built with TypeScript, strict ESLint rules, and automated code quality checks.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Tailwind CSS 4** for styling
- 📘 **TypeScript** with strict configuration
- ✅ **Strict ESLint** with TypeScript-specific rules
- 🎣 **Husky** for Git hooks
- 🚨 **Lint-staged** for pre-commit linting
- 🔍 **Type checking** with strict TypeScript compiler options

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint on the codebase
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run type-check` - Run TypeScript type checking

## Code Quality

### ESLint Configuration

This project uses a strict ESLint configuration with:

- **TypeScript strict rules**: No explicit `any`, no unused variables, explicit function return types (warnings), etc.
- **React strict rules**: Proper JSX key handling, exhaustive deps for hooks
- **Code quality rules**: No console logs (except warn/error), prefer const, strict equality checks

### Pre-commit Hooks

Husky is configured to run lint-staged before each commit, which will:

1. Automatically fix ESLint issues in staged files
2. Run ESLint to check for any remaining issues
3. Block commits if there are linting errors

### TypeScript Configuration

The TypeScript configuration includes strict options:

- `strict: true` - Enable all strict type checking options
- `noUncheckedIndexedAccess: true` - Ensure indexed access is safe
- `noImplicitOverride: true` - Require explicit override keyword
- `noUnusedLocals: true` - Report unused local variables
- `noUnusedParameters: true` - Report unused parameters
- `noFallthroughCasesInSwitch: true` - Ensure switch cases don't fall through

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
