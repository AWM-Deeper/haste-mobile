# HASTE Mobile App - Quick Start Guide

## 🚀 Get Running in 5 Minutes

This is a quick reference guide. For detailed setup, see `README_LOCAL.md`.

## Prerequisites

- Node.js v18+ and npm v9+ installed
- Git installed
- iPhone or Android device with Expo Go app
- Same WiFi network for dev machine and device

## Step 1: Clone & Setup (2 minutes)

```bash
# Clone repository
git clone https://github.com/AWM-Deeper/haste-mobile.git
cd haste-mobile

# Run automated setup
bash SETUP_EXPO_GO.sh
```

## Step 2: Configure Environment (1 minute)

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local if needed (most defaults work)
# Just ensure EXPO_PUBLIC_API_URL is set to:
# EXPO_PUBLIC_API_URL=https://stingray-app-yitsm.ondigitalocean.app
```

## Step 3: Start Dev Server (1 minute)

```bash
npm start
```

You'll see:
```
► Press a to open Android
► Press i to open iOS  
► Press w to open web
► Press r to reload app
► Press q to quit
```

## Step 4: Connect Your Device (1 minute)

### iOS

1. In terminal, press `i` for iOS
2. On iPhone: Open Camera app
3. Scan QR code from terminal
4. Tap "Open in Expo Go"

### Android

1. In terminal, press `a` for Android
2. On Android: Open Expo Go app
3. Tap "Scan QR Code"
4. Scan code from terminal

### Web (Browser)

1. In terminal, press `w`
2. App opens automatically on localhost:19006

## 🎯 You're Done!

The app should now be running on your device showing:
- **Home** tab with featured products
- **Shop** tab with product listings
- **Cart** tab for shopping
- **Orders** tab for order history
- **Account** tab for user profile

## Common Commands

```bash
# Reload app after code changes
# Press 'r' in terminal while running, or:
# CMD+R (iOS), CMD+M (Android)

# Clear cache if app acts weird
npm start -- --reset-cache

# Stop dev server
# Press 'q' in terminal
```

## Testing

### Quick Test (5 minutes)

1. ✅ App loads without crashing
2. ✅ All 5 tabs are clickable
3. ✅ Can view products
4. ✅ Can add to cart
5. ✅ Navigation works

### Full Test (30 minutes)

See detailed guides:
- `TESTING_GUIDE.md` - General testing
- `docs/TESTING_iOS.md` - iOS specifics
- `docs/TESTING_Android.md` - Android specifics
- `EXPO_GO_TESTING_CHECKLIST.md` - 100+ test points

## 🆘 Troubleshooting

### "Cannot find module expo"

```bash
npm install expo expo-cli
npm install
```

### "Port already in use"

```bash
# Kill the process or use different port
EXPO_PORT=19007 npm start
```

### "Can't scan QR code"

- Ensure WiFi is working
- Try LAN instead of tunnel (slower networks)
- Check QR code visibility
- Restart Expo Go app

### "Blank white screen"

- Check backend API is running
- Verify `.env.local` has correct `EXPO_PUBLIC_API_URL`
- Check network connection
- Look at terminal for error messages

### "App keeps crashing"

```bash
# Clear and reinstall everything
rm -rf node_modules package-lock.json
npm install
npm start -- --reset-cache
```

## 📚 Next Steps

1. **Test the app** - See `TESTING_GUIDE.md`
2. **Understand structure** - Read `README_LOCAL.md`  
3. **Device-specific tips** - See `docs/TESTING_iOS.md` or `docs/TESTING_Android.md`
4. **Deploy to prod** - See `DEPLOYMENT.md` (coming soon)

## 🔑 Key URLs

- **Backend API**: https://stingray-app-yitsm.ondigitalocean.app
- **Web Storefront**: https://medusa-storefront-zeta-six.vercel.app
- **Expo Docs**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev

## ⏱️ Performance Targets

- App load: < 2 seconds
- API response: < 1 second
- Scroll FPS: 60 FPS
- Images load: < 500ms
- Memory usage: < 150 MB initial

## 🎨 App Features

✅ Product browsing with images
✅ Shopping cart with quantity control
✅ Multi-step checkout
✅ Order history tracking
✅ User account management
✅ Real-time product sync
✅ Medusa backend integration
✅ Shopify multi-store support
✅ Glassmorphism UI design
✅ Responsive layout

## 📊 Architecture

```
HASTE Mobile
├── Expo / React Native (Frontend)
├── Zustand (State Management)
├── TypeScript (Type Safety)
├── Medusa Backend (API)
└── Shopify Connector (Multi-store)
```

## 🤝 Support

If stuck:
1. Check terminal error messages
2. Read `README_LOCAL.md` for detailed setup
3. See troubleshooting section above
4. Check network connectivity
5. Try clearing cache and reinstalling

---

**Happy testing! 🚀**
