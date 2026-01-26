# Cloudflare Pages Deployment Reference Card

## 🚀 Quick Deploy Commands

### Option 1: GitHub Integration (Recommended)
```bash
# 1. Push code
git push origin main

# 2. Go to https://dash.cloudflare.com
# 3. Pages → Create Project → Connect Git
# 4. Build Command: npm install && npm run build
# 5. Output: dist/public
```

### Option 2: Wrangler CLI
```bash
# Install once
npm install -g wrangler

# Login once
wrangler login

# Deploy
npm run build:cf

# Or manually
npm run build
wrangler pages deploy dist/public
```

### Option 3: One-Liner
```bash
npm run build:cf
```

---

## 📋 Pre-Deployment Checklist

```bash
# 1. Build verification
npm run build

# 2. Output check
ls -la dist/public/
ls -la functions/api/

# 3. Configuration check
cat wrangler.toml

# 4. TypeScript check (optional)
npm run check
```

---

## 🔐 Environment Variables

Set in Cloudflare Pages Dashboard:

```
NODE_ENV=production
```

Optional (for database):
```
DATABASE_URL=postgresql://...
```

---

## 📊 Build Output Paths

```
Frontend:  dist/public/                    (served by Pages)
Functions: functions/api/[[route]].ts      (serverless backend)
Config:    wrangler.toml                   (Pages config)
```

---

## 🎯 API Endpoints

```
POST /api/subscribers
├── Request:  { email: string }
├── Response: { id, email, createdAt, updatedAt }
└── Status:   201 Success | 400 Validation Error
```

---

## ⚡ Performance Stats

```
JavaScript:     125.96 KB (gzipped)
CSS:            12.03 KB (gzipped)
HTML:           0.77 KB (gzipped)
Total:          ~139 KB (gzipped)
```

---

## 🔗 Useful Links

| Purpose | Link |
|---------|------|
| Dashboard | https://dash.cloudflare.com |
| Pages Docs | https://developers.cloudflare.com/pages/ |
| Workers Docs | https://developers.cloudflare.com/workers/ |
| Wrangler CLI | https://developers.cloudflare.com/wrangler/ |
| This Repo | https://github.com/incaudio/mate |

---

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | `rm -rf dist && npm run build` |
| Functions not working | Check `functions/api/[[route]].ts` exists |
| Static assets missing | Verify `dist/public/` has content |
| TypeScript errors | Run `npm run check` |
| Environment vars not working | Check dashboard settings |

---

## 📞 Support

- **Setup Issues** → See CLOUDFLARE_PAGES_SETUP.md
- **Deployment Issues** → See DEPLOYMENT_CHECKLIST.md
- **Technical Details** → See CLOUDFLARE_COMPATIBILITY.md
- **Quick Start** → See QUICK_START.md

---

## ✅ Verification After Deploy

```bash
# 1. Visit your-domain.pages.dev
# 2. Check console for errors (F12)
# 3. Test API: POST /api/subscribers
# 4. Check Cloudflare Analytics dashboard
```

---

## 💾 Key Files

```
wrangler.toml           Pages configuration
package.json            Build scripts
vite.config.ts          Frontend build config
tsconfig.json           TypeScript config
functions/api/          Backend functions
dist/public/            Built frontend (deployed)
```

---

**Your site is ready to deploy! Choose your method above and you'll be live in < 5 minutes.** 🎉
