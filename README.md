# FindBack.com — Lost & Found

## What changed
- Persistent server-side users and reports in `server/data/store.json`.
- JWT session restored automatically on page refresh; users do not have to login again every route.
- Email verification now signs the user in immediately after successful OTP verification.
- Real Lost and Found reports are stored through `/api/reports` instead of browser-only localStorage.
- Lost/Found browsing supports keyword, category, city and exact-location filters.
- Smart matching compares category, name, location, city, description, color, brand and date.
- Clicking a match lets the user compare Lost and Found information side-by-side.
- My Reports shows the current user's real posts, with View/Edit/Delete controls.
- Delete always asks for confirmation and backend ownership is checked before deletion.
- Public report pages show reporter name but do not expose email/phone.

## Run locally

### Frontend
```powershell
npm install
npm run dev
```

### Backend
Open another terminal:
```powershell
cd server
npm install
npm run dev
```

Create `server/.env`:
```env
JWT_SECRET=replace-with-a-long-random-secret
CLIENT_URL=http://localhost:5173
RESEND_API_KEY=your_resend_key
```

The frontend Vite dev server must proxy `/api` to the backend if you run frontend and backend separately. If your current setup already has a proxy, keep it. Otherwise add a Vite proxy for `http://localhost:5000`.

## Data persistence

Local development data is stored in `server/data/store.json`, so restarting Node does not erase users or reports. For production hosting such as Render, use a real external database (for example MongoDB) or a persistent disk; a normal ephemeral server filesystem can be reset during redeploy/restart.
