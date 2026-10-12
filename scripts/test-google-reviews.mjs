/**
 * Test script — run this to verify your Google Business Profile credentials
 * Usage: node scripts/test-google-reviews.mjs
 *
 * Make sure .env.local is filled in first.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

// ── Load .env.local manually ──────────────────────────────────────────────
const envPath = resolve(process.cwd(), '.env.local');
try {
  const lines = readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (val) process.env[key] = val;
  }
} catch {
  console.error('❌  .env.local not found — create it from .env.example first.');
  process.exit(1);
}

const {
  GOOGLE_BUSINESS_CLIENT_ID: clientId,
  GOOGLE_BUSINESS_CLIENT_SECRET: clientSecret,
  GOOGLE_BUSINESS_REFRESH_TOKEN: refreshToken,
  GOOGLE_BUSINESS_ACCOUNT_ID: accountId,
  GOOGLE_BUSINESS_LOCATION_ID: locationId,
} = process.env;

// ── Check all values present ──────────────────────────────────────────────
const checks = { clientId, clientSecret, refreshToken, accountId, locationId };
let missing = false;
for (const [key, val] of Object.entries(checks)) {
  if (!val) {
    console.error(`❌  Missing: ${key}`);
    missing = true;
  } else {
    console.log(`✅  ${key} — set (${val.slice(0, 6)}...)`);
  }
}
if (missing) {
  console.log('\nFill in the missing values in .env.local then run this script again.');
  process.exit(1);
}

// ── Step 1: Get access token ──────────────────────────────────────────────
console.log('\n── Step 1: Getting access token...');
let token;
try {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json));
  token = json.access_token;
  console.log('✅  Access token obtained');
} catch (err) {
  console.error('❌  Failed to get access token:', err.message);
  console.log('\n   Check CLIENT_ID, CLIENT_SECRET and REFRESH_TOKEN in .env.local');
  process.exit(1);
}

// ── Step 2: Fetch reviews ─────────────────────────────────────────────────
console.log('\n── Step 2: Fetching reviews...');
const parent = `accounts/${accountId}/locations/${locationId}`;
try {
  const res = await fetch(
    `https://mybusiness.googleapis.com/v4/${parent}/reviews?pageSize=5&orderBy=updateTime desc`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json));

  const count  = json.totalReviewCount ?? '(not returned)';
  const rating = json.averageRating    ?? '(not returned)';
  const reviews = json.reviews ?? [];

  console.log(`✅  Total reviews : ${count}`);
  console.log(`✅  Average rating: ${rating}`);
  console.log(`✅  Sample reviews fetched: ${reviews.length}`);
  if (reviews.length) {
    const r = reviews[0];
    console.log(`\n   Most recent review:`);
    console.log(`   Name   : ${r.reviewer?.displayName}`);
    console.log(`   Rating : ${r.starRating}`);
    console.log(`   Snippet: ${r.comment?.slice(0, 80)}...`);
  }
  console.log('\n🎉  All credentials are working! Your website will show live reviews.');
} catch (err) {
  console.error('❌  Failed to fetch reviews:', err.message);
  console.log('\n   Check ACCOUNT_ID and LOCATION_ID in .env.local');
  console.log('   Account ID format  : 123456789012345678');
  console.log('   Location ID format : 987654321098765432');
  process.exit(1);
}
