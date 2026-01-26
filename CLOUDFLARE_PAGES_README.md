# MATE - Cloudflare Pages Ready 🚀

## Overview

This project is fully configured for **Cloudflare Pages** deployment with:

- ✅ React + Vite frontend
- ✅ Cloudflare Pages Functions backend
- ✅ TypeScript throughout
- ✅ Zod validation for APIs
- ✅ Full type safety

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, visit http://localhost:5000
```

### Build for Production

```bash
# Build the project
npm run build

# Test production build locally
npm run build

# The built files are in client/dist/
```

## Deployment to Cloudflare Pages

### Method 1: Using Wrangler CLI (Quick Testing)

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler pages deploy client/dist
```

### Method 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Framework**: None
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `client/dist`
6. Click "Save and Deploy"

Your site will automatically deploy on every push to main!

### Method 3: Using npm script

```bash
npm run build:cf
```

## Project Structure

```
mate/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main app
│   └── dist/              # Built static files (deployed)
├── functions/              # Cloudflare Pages Functions
│   └── api/
│       └── [[route]].ts   # API route handler
├── server/                # Express server (local development)
├── shared/                # Shared types and schemas
├── wrangler.toml          # Cloudflare configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Build
npm run build            # Build for production
npm run build:cf         # Build and deploy to Cloudflare

# Validation
npm run check            # Check TypeScript
npm run db:push          # Push database schema

# Production
npm start                # Start production server (local)
```

## API Endpoints

### POST /api/subscribers

Create a new subscriber email.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "createdAt": "2024-01-26T20:00:00Z",
  "updatedAt": "2024-01-26T20:00:00Z"
}
```

**Error Response (400):**
```json
{
  "message": "Invalid email",
  "field": "email"
}
```

## Environment Variables

Create a `.env.local` file for development:

```env
# Node environment
NODE_ENV=development

# Database (optional)
DATABASE_URL=postgresql://user:password@localhost:5432/mate
```

For production, set environment variables in Cloudflare Pages dashboard.

## Technologies Used

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library

### Backend
- **Cloudflare Workers** - Serverless functions
- **Express** - Local development server
- **Zod** - Data validation
- **TypeScript** - Type safety

### Infrastructure
- **Cloudflare Pages** - Hosting & CDN
- **PostgreSQL** - Database (optional)
- **D1 (SQLite)** - Cloudflare database alternative

## Compatibility

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Feature Support
- ✅ Static assets hosting
- ✅ API functions (serverless)
- ✅ Environment variables
- ✅ Custom domains
- ✅ SSL/TLS (automatic)
- ✅ CORS support
- ✅ Caching headers
- ✅ Analytics engine

### Limitations to Be Aware of
- Functions max execution time: 30 seconds
- Max request/response size: ~25MB
- No persistent filesystem (use D1 or external database)
- Functions run in sandboxed Worker environment

## Deployment Status

- **Frontend**: ✅ Ready for Cloudflare Pages
- **Backend**: ✅ Ready for Cloudflare Functions
- **Build**: ✅ Configured and tested
- **TypeScript**: ✅ Strict mode enabled
- **Database**: ⚙️ Configure DATABASE_URL for external DB

## Next Steps

1. **Set up Cloudflare Account**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Create free account
   - Create Pages project

2. **Connect Your Domain** (optional)
   - Add custom domain to Cloudflare Pages
   - Update nameservers (if using Cloudflare DNS)

3. **Configure Environment Variables**
   - Set DATABASE_URL in Pages settings
   - Configure any API keys needed

4. **Deploy**
   - Use GitHub integration (recommended)
   - Or use Wrangler CLI: `wrangler pages deploy client/dist`

5. **Monitor Performance**
   - Check Cloudflare Analytics
   - Review deployment logs
   - Monitor function execution times

## Documentation

- [CLOUDFLARE_PAGES_SETUP.md](./CLOUDFLARE_PAGES_SETUP.md) - Detailed setup guide
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment checklist
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)

## Support & Troubleshooting

### Build Issues
```bash
# Clear build cache
rm -rf client/dist node_modules/.vite

# Rebuild
npm install
npm run build
```

### API Not Responding
- Check functions are in `/functions/api/` directory
- Verify request URL format
- Check error logs in Cloudflare dashboard

### Styles Not Loading
- Verify Tailwind CSS build is complete
- Check CSS file in `client/dist/index.css`
- Clear browser cache

## License

MIT

## Author

incaudio
