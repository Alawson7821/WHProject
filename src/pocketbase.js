import PocketBase, { Record } from 'pocketbase';

export const pb = new PocketBase('https://greasy-needle.pockethost.io');

//const record = await pb.collection('gameState').getFirstListItem('id="thvgfme7s77i98v"', {});