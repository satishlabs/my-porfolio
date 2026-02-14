# Synced views and likes across devices

Views and likes are **synced across all devices** when the portfolio is deployed on **Vercel** with **Vercel KV** enabled. Otherwise they are stored **per device** (browser localStorage).

## Why counts differed before

Previously, views and likes were stored only in **localStorage**, which is per-browser and per-device. So laptop showed one set of numbers and mobile showed another.

## How it works now

1. **With API (synced)**  
   When the app is deployed on Vercel and Vercel KV is linked:
   - The `/api/engagement` serverless function stores counts in KV.
   - Every device reads and updates the same counts.
   - No “(this device)” label; numbers are global.

2. **Without API (per device)**  
   When running locally or when KV is not configured:
   - Counts are kept in localStorage.
   - The engagement block shows **(this device)** and a tooltip explains that counts are per device until the API is used.

## Enable synced counts (Vercel + KV)

1. Deploy the project to [Vercel](https://vercel.com).
2. In the Vercel project: **Storage** → create a **KV** database (or use an existing one) and **connect** it to this project.
3. Redeploy. Vercel will inject `KV_REST_API_URL` and `KV_REST_API_TOKEN`; the engagement API will use them and counts will sync across devices.

No extra env vars or config are required in the repo; the API uses the Vercel KV client when the env is present.
