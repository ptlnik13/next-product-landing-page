/*
We will use this file to connect to contentful
 */

import {createClient} from 'contentful';

function isServer() {
    // we will use this to determine if we are on the server or client
    return !(typeof window !== 'undefined' && window.document);
}

const runOnServerSide = ()=>{
    // we will only expose the creds on server side.
    if(!isServer()) return;
    return createClient({
        space      : process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
};

export const contentfulClient = runOnServerSide();
