'use server';

import { headers } from "next/headers";

export const dummyServerAction = async () => {
  // NOTE: This is the line that wiill causes Storybook to fail
  //       If you comment it out and replace with the line below, Storybook will work:
  //       const referrer = 'http://localhost:6006/';
  const referrer = (await headers()).get('referer');

  return {
    message: 'Server action was successful',
    referrer,
  }
}