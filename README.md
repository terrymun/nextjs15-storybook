# Storybook + Next.js 15 demo

This repo aims to reproduce the error when building storybook (but not serving it) when using it with the latest version of nextjs, i.e. v15.

## How to reproduce the bug

1. Run `npm install --force` after downloading the repo
2. Run `npm run dev` and notice how clicking the main button on the page will trigger an alert, based on the response from a Next.js server action
3. Run `npm run storybook` and notice that storybook will fail

Now, go into `Page.action.ts` and uncomment a different line so that the reference to `next/header`'s `header()` is removed. Run `npm run storybook` and it will work again.