'use server';

import { headers } from "next/headers";

export const dummyServerAction = async () => {
  const referrer = (await headers()).get('referer');
  
  return {
    message: 'Server action was successful',
    referrer,
  }
}