# 🚀 Quick Start: Deploy to Cloudflare Pages

## 3-Minute Setup

### Step 1: Verify Build Works Locally ✅
```bash
cd /workspaces/mate
npm install
npm run build
```

Expected output: ✓ Build completes, files in `dist/public/`

### Step 2: Deploy to Cloudflare Pages

#### Option A: GitHub Integration (Easiest)
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to https://dash.cloudflare.com
# 3. Click "Pages" → "Create a project" → "Connect to Git"
# 4. Select your repository
# 5. Set build settings:
#    - Build command: npm install && npm run build
#    - Build output directory: dist/public
# 6. Click "Save and Deploy"
```

#### Option B: Wrangler CLI (Quick Test)
```bash
# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build:cf
```

#### Option C: One Command
```bash
npm run build:cf
```

### Step 3: Verify Deployment ✅
- Wait for build to complete (usually < 1 minute)
- Visit your `*.pages.dev` URL
- Should see your site live!

---

## What's Ready for Cloudflare Pages?

✅ **Frontend** - React app optimized for Pages
✅ **Backend** - API functions in `/functions/api/`
✅ **Build System** - Vite configured for Pages output
✅ **TypeScript** - Full type support for Workers
✅ **Configuration** - wrangler.toml properly set up

---

## Environment Variables (If Needed)

Set in Cloudflare Pages dashboard → Settings → Environment Variables:

```
NODE_ENV = production
DATABASE_URL = (if using external database)
```

---

## Project Structure Ready for Deployment

```
dist/public/          ← Cloudflare Pages static files
functions/api/        ← Cloudflare Functions (API routes)
wrangler.toml         ← Configuration file
package.json          ← Build scripts ready
```

---

## Testing Before Deploy

```bash
# Check for TypeScript errors
npm run check

# Build for production
npm run build

# Verify output exists
ls dist/public/index.html
ls functions/api/[[route]].ts
```

---

## Support Resources

- [CLOUDFLARE_PAGES_README.md](./CLOUDFLARE_PAGES_README.md) - Full overview
- [CLOUDFLARE_PAGES_SETUP.md](./CLOUDFLARE_PAGES_SETUP.md) - Detailed setup
- [CLOUDFLARE_COMPATIBILITY.md](./CLOUDFLARE_COMPATIBILITY.md) - Technical details
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment tasks

---

## Important Notes

1. **Your site is ready to deploy right now**
2. Database is optional - start without it if needed
3. Free tier includes generous limits
4. Auto-deploy on GitHub push is recommended

---

## Common Issues & Solutions

**Issue**: Build fails
```bash
# Solution: Clean and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**Issue**: Functions not working
```bash
# Verify structure
ls functions/api/[[route]].ts

# Check wrangler.toml
cat wrangler.toml
```

**Issue**: Assets not loading
```bash
# Verify build output
ls -la dist/public/
```

---

**You're all set! Ready to deploy! 🎉**

For detailed information, see [CLOUDFLARE_PAGES_README.md](./CLOUDFLARE_PAGES_README.md)
