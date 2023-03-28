import PocketBase, { Record } from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

//const record = await pb.collection('gameState').getFirstListItem('id="thvgfme7s77i98v"', {});