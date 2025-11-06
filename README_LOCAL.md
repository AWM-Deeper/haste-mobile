# HASTE Mobile App - Local Development Setup

Comprehensive guide for setting up HASTE mobile app for local development and testing.

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (comes with Node.js)
- **Git**: Latest version
- **Expo CLI**: Will be installed during setup
- **iOS**: Xcode (macOS only) or iOS Simulator
- **Android**: Android Studio or Android Emulator

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
# Clone the repository
git clone https://github.com/AWM-Deeper/haste-mobile.git
cd haste-mobile

# Run the automated setup script
bash SETUP_EXPO_GO.sh
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration
# Minimum required: EXPO_PUBLIC_API_URL
```

### 3. Start Development Server

```bash
npm start
```

### 4. Test on Device

**iOS (via Expo Go):**
- Press `i` in terminal
- Scan QR code with iPhone camera
- Tap notification to open in Expo Go

**Android (via Expo Go):**
- Press `a` in terminal
- Scan QR code with Android device
- Tap notification to open in Expo Go

**Web Browser:**
- Press `w` in terminal
- App opens automatically

## Detailed Setup

### Step 1: Environment Preparation

```bash
# Verify Node.js version
node --version  # Should be v18.0.0 or higher

# Verify npm version
npm --version   # Should be v9.0.0 or higher
```

### Step 2: Repository Setup

```bash
# Clone repository
git clone https://github.com/AWM-Deeper/haste-mobile.git
cd haste-mobile

# Verify branch
git branch  # Should show main branch
```

### Step 3: Run Setup Script

```bash
# Make script executable
chmod +x SETUP_EXPO_GO.sh

# Run setup
bash SETUP_EXPO_GO.sh
```

Script will:
- Verify Node.js and npm installations
- Install Expo CLI globally
- Clean previous installations
- Install dependencies
- Clear Expo cache

### Step 4: Environment Configuration

```bash
# Copy example file
cp .env.example .env.local

# Edit configuration
nano .env.local  # or use your editor
```

**Required Variables:**
- `EXPO_PUBLIC_API_URL`: Backend API URL (default: https://stingray-app-yitsm.ondigitalocean.app)

**Optional Variables:**
- `EXPO_PUBLIC_STORE_TOKEN`: Medusa store token
- `EXPO_PUBLIC_SHOPIFY_STOREFRONT_TOKEN`: Shopify integration
- `EXPO_PUBLIC_ENABLE_DEBUG_MODE`: Enable debug logging

### Step 5: Start Development Server

```bash
npm start

# Output will show:
# ► Press a to open Android
# ► Press i to open iOS
# ► Press w to open web
# ► Press r to reload app
# ► Press q to quit
```

## Device Testing

### iOS Testing

**Requirements:**
- iPhone (any recent model)
- Expo Go app (free from App Store)
- Same WiFi network as development computer

**Setup:**
```bash
# Start dev server
npm start

# Press 'i' for iOS
# On iPhone: Open Camera app
# Scan QR code
# Tap "Open in Expo Go" notification
```

### Android Testing

**Requirements:**
- Android device (Android 5.0+)
- Expo Go app (free from Play Store)
- Same WiFi network as development computer

**Setup:**
```bash
# Start dev server
npm start

# Press 'a' for Android
# On Android: Open Expo Go app
# Tap "Scan QR Code"
# Point camera at QR code
# Device will open app automatically
```

### Web Testing

**Requirements:**
- Modern web browser (Chrome, Safari, Firefox, Edge)
- Same machine as development server

**Setup:**
```bash
# Start dev server
npm start

# Press 'w' for web
# Browser opens automatically to localhost:19006
```

## Common Issues

### Issue: "Cannot find module expo"

**Solution:**
```bash
npm install expo expo-cli
npm install
```

### Issue: "Port 19006 already in use"

**Solution:**
```bash
# Kill existing process
lsof -i :19006
kill -9 <PID>

# Or start on different port
EXPO_PORT=19007 npm start
```

### Issue: "QR code not scanning"

**Solution:**
- Ensure device and computer on same WiFi
- Try Tunnel connection: `npm start -- --tunnel`
- Check network firewall settings
- Restart Expo Go app on device

### Issue: "Connection refused" to backend

**Solution:**
- Verify `EXPO_PUBLIC_API_URL` is correct
- Check backend is running and accessible
- For Android emulator: Use `10.0.2.2` instead of `localhost`
- Check network connectivity

### Issue: "Module resolution failed"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start -- --reset-cache
```

## Development Workflow

### File Structure

```
haste-mobile/
├── app/                    # Expo Router screens
│   ├── (home)/            # Home tab screen
│   ├── (shop)/            # Shop tab screen
│   ├── (cart)/            # Cart tab screen
│   ├── (orders)/          # Orders tab screen
│   ├── (account)/         # Account tab screen
│   ├── product/[id].tsx   # Dynamic product details
│   ├── checkout.tsx       # Checkout flow
│   └── _layout.tsx        # Root layout with tabs
├── components/            # Reusable components
├── lib/                   # Utilities and API client
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── .env.example           # Environment template
└── SETUP_EXPO_GO.sh       # Setup automation
```

### Making Code Changes

1. Edit TypeScript/React files
2. Save file - app auto-reloads (Fast Refresh)
3. Test on device/simulator
4. Commit when ready

```bash
# Commit changes
git add .
git commit -m "feat: add new feature"
git push origin main
```

### Testing Checklist

Before committing:
- [ ] App compiles without errors
- [ ] All screens load
- [ ] Navigation works
- [ ] API calls succeed
- [ ] No console warnings
- [ ] Responsive on different screen sizes

## Performance Optimization

### Enable Debug Mode

```bash
# .env.local
EXPO_PUBLIC_ENABLE_DEBUG_MODE=true
EXPO_PUBLIC_ENABLE_PERFORMANCE_METRICS=true
```

### Monitor Performance

```bash
# Check bundle size
npm start -- --clear

# Monitor in Expo DevTools
# Shows: Network requests, performance metrics, logs
```

## Database & API

### Backend Configuration

**Production Backend:**
```
https://stingray-app-yitsm.ondigitalocean.app
```

**Development Backend:**
- Use same production backend for testing
- No local backend setup required

### API Endpoints Used

- `GET /admin/products` - Product list
- `GET /admin/products/:id` - Product details
- `GET /store/carts` - Cart operations
- `POST /store/carts` - Create cart
- `GET /store/orders` - Order history
- `POST /store/checkout` - Checkout

## Deployment

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build web
npm run build
```

### Testing Builds Locally

```bash
# Test production build locally
npm start -- --no-dev
```

## Support & Resources

- **Expo Documentation**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **Medusa Docs**: https://docs.medusajs.com
- **HASTE Backend**: https://stingray-app-yitsm.ondigitalocean.app

## Troubleshooting

For detailed testing procedures, see `TESTING_GUIDE.md`
For test checklist, see `EXPO_GO_TESTING_CHECKLIST.md`
