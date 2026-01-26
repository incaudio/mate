# Cloudflare Pages Deployment Checklist

## ✅ Pre-Deployment Tasks

### Code Quality
- [ ] All TypeScript errors resolved: `npm run check`
- [ ] No console errors in development
- [ ] API routes tested locally
- [ ] Environment variables documented

### Frontend
- [ ] React build completes without errors
- [ ] All assets load correctly
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] No hardcoded localhost references
- [ ] Asset paths use relative URLs

### Backend/Functions
- [ ] All API endpoints implemented in `/functions`
- [ ] Error handling in place
- [ ] Request validation using Zod schemas
- [ ] CORS headers configured if needed

### Configuration Files
- [ ] `wrangler.toml` properly configured
- [ ] `package.json` scripts updated
- [ ] `tsconfig.json` includes webworker types
- [ ] Environment variables documented in `.env.example`

## 📦 Build Process

```bash
# Install dependencies
npm install

# Check TypeScript
npm run check

# Build frontend and prepare for deployment
npm run build

# Verify build output
ls -la client/dist/
```

## 🚀 Deployment Options

### Option 1: Wrangler CLI (Recommended for testing)
```bash
# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy client/dist
```

### Option 2: GitHub Integration (Recommended for production)
1. Push code to GitHub
2. Connect repository in [Cloudflare Pages Dashboard](https://dash.cloudflare.com)
3. Set build settings:
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `client/dist`
   - **Root directory**: `/` (or where wrangler.toml is located)

### Option 3: npm script
```bash
npm run build:cf
```

## 🔧 Environment Variables

Set in Cloudflare Pages dashboard or via Wrangler:

```bash
# Development
NODE_ENV=development

# Production
NODE_ENV=production
```

For database connections:
```bash
# PostgreSQL (external)
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Supabase
DATABASE_URL=postgresql://[user]:[password]@[host].supabase.co:5432/[database]
```

## ✨ Post-Deployment

### Verify Deployment
- [ ] Visit deployed URL
- [ ] Check frontend loads correctly
- [ ] Test API endpoint: `POST /api/subscribers`
- [ ] Check browser console for errors
- [ ] Verify mobile responsiveness

### Monitoring
- [ ] Enable Cloudflare Analytics
- [ ] Set up error tracking
- [ ] Monitor function execution times
- [ ] Check bandwidth usage

## 🐛 Troubleshooting

### Functions Not Working
```bash
# Check functions are in correct directory
ls functions/api/

# Verify wrangler.toml is correct
cat wrangler.toml

# Test locally
wrangler pages dev client/dist
```

### Assets Not Loading
- Check `pages_build_output_dir` in wrangler.toml
- Verify build output: `ls client/dist/`
- Check for path issues in vite.config.ts

### Database Connection Issues
- Verify DATABASE_URL environment variable is set
- Check network connectivity from Cloudflare to database
- Test connection locally first

## 📝 Important Notes

1. **Functions File Structure**:
   - Routes use file-based routing
   - `[[route]]` captures all paths
   - File location determines URL

2. **Static Assets**:
   - All files in `client/dist` are served
   - Cache headers managed by Cloudflare
   - GZIP compression automatic

3. **Limits**:
   - Max execution time: 30 seconds
   - Max request size: ~25MB
   - Max response size: ~25MB

4. **Security**:
   - HTTPS enforced automatically
   - Custom domain SSL included
   - DDoS protection included

## 🔗 Useful Links

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/wrangler/)
- [Project GitHub](https://github.com/incaudio/mate)
