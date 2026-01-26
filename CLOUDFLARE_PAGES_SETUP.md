# Cloudflare Pages Setup Guide

## Current Configuration

This site is configured for deployment on **Cloudflare Pages** with the following setup:

### Architecture

- **Frontend**: React + Vite (served as static assets)
- **Backend**: Cloudflare Pages Functions (serverless)
- **Database**: Cloudflare D1 (SQLite) or external PostgreSQL
- **Build Output**: `client/dist`

### Files Structure

```
/workspaces/mate/
├── wrangler.toml              # Cloudflare configuration
├── functions/                 # Cloudflare Pages Functions (backend)
│   └── api/
│       └── [[route]].ts       # API route handler
├── client/
│   ├── src/                   # React source code
│   └── dist/                  # Built static files (deployed)
└── package.json               # Project dependencies
```

### Compatibility

✅ **Supported**:
- React + Vite frontend
- Static assets
- Cloudflare Workers/Functions
- Cloudflare D1 database
- CORS and headers configuration

⚠️ **Limitations**:
- No persistent filesystem
- 10ms CPU time limit per request (Functions)
- 30 second timeout per request
- ~10MB size limit for function code

### Setup Instructions

#### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

#### 2. Authenticate with Cloudflare

```bash
wrangler login
```

#### 3. Build the Project

```bash
npm install
npm run build
```

#### 4. Deploy to Cloudflare Pages

**Option A: Using Wrangler CLI**
```bash
wrangler pages deploy client/dist
```

**Option B: Using npm script**
```bash
npm run build:cf
```

**Option C: Using Git Integration**
1. Push to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Set build command: `npm install && npm run build`
4. Set build output directory: `client/dist`

#### 5. Configure Environment Variables

In Cloudflare Pages dashboard:

```
NODE_ENV = production
DATABASE_URL = your-database-connection-string (optional)
```

### Database Options

#### Option 1: Cloudflare D1 (Recommended)

```bash
# Create a D1 database
wrangler d1 create matenation

# Bind it to your Pages project
# Update wrangler.toml with [[d1_databases]]
```

#### Option 2: External PostgreSQL

Set `DATABASE_URL` environment variable in Cloudflare Pages dashboard.

#### Option 3: Supabase (PostgreSQL)

1. Create a Supabase project
2. Get connection string
3. Set as `DATABASE_URL` environment variable

### API Routes

All API routes are defined in `/functions/api/[[route]].ts`:

- `POST /api/subscribers` - Create a new subscriber

### Build and Deployment

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run build:cf
```

### Cloudflare Pages Features

- **Instant Global Deployment**: CDN in 200+ cities
- **Automatic SSL**: HTTPS by default
- **Functions Integration**: Serverless backend
- **Analytics**: Built-in analytics
- **Custom Domains**: Free with your domain

### Troubleshooting

**Issue: "Cannot find module" errors**
- Solution: Check imports use correct file extensions (.ts, .tsx)

**Issue: Functions not executing**
- Solution: Ensure functions are in `/functions` directory with correct naming

**Issue: Static assets not loading**
- Solution: Check `pages_build_output_dir` points to correct build output

**Issue: Database connection timeout**
- Solution: Check DATABASE_URL is correct and database is accessible

### Monitoring

Monitor deployment at:
- **Cloudflare Pages Dashboard**: https://dash.cloudflare.com
- **Deployments**: View logs and analytics
- **Functions**: Debug with real-time logs

### Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/wrangler/)
