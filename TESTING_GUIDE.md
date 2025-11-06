# HASTE Mobile App - Testing Guide

## Quick Start: Testing on Expo Go

This guide walks you through setting up and testing the HASTE mobile app on Expo Go for iOS and Android devices.

### Prerequisites

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **Expo CLI**: Install globally with `npm install -g expo-cli`
- **Expo Go App**: Download from App Store (iOS) or Google Play (Android)
- **Git**: For cloning the repository

### Step 1: Clone the Repository

```bash
git clone https://github.com/AWM-Deeper/haste-mobile.git
cd haste-mobile
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Expo and Expo Router
- React Native
- TypeScript
- Zustand (state management)
- Axios (HTTP client)
- And all other dependencies

### Step 3: Start the Expo Development Server

```bash
npm start
```

Or use the Expo CLI directly:

```bash
expo start
```

You should see output like:
```
 > Using Expo Router
 > Managed mode
 > [QR Code displayed]
```

### Step 4: Open on Your Device

#### For iOS:
1. Press `i` in the terminal
2. Or scan the QR code with Camera app and tap the Expo notification
3. Expo Go will launch automatically

#### For Android:
1. Press `a` in the terminal
2. Or scan the QR code with the Expo Go app's built-in scanner
3. App will load on your device

#### For Web (Testing):
1. Press `w` in the terminal
2. Web version opens in browser (limited functionality)

### Step 5: Test the App Features

#### Navigation Testing
- [ ] Bottom tab navigation works (Home, Shop, Cart, Orders, Account)
- [ ] Each tab loads without errors
- [ ] Tab icons display correctly
- [ ] Active tab is highlighted

#### Home Screen
- [ ] Featured products carousel displays
- [ ] Category grid loads
- [ ] Newsletter signup section visible
- [ ] Swipe animations work smoothly

#### Shop Screen
- [ ] Product grid displays with images
- [ ] Search bar functional
- [ ] Filter options work
- [ ] Sorting options work
- [ ] Pagination/infinite scroll loads more products
- [ ] Tap product navigates to detail

#### Product Detail Screen
- [ ] Product images load in carousel
- [ ] Image dots navigation works
- [ ] Price displays correctly
- [ ] Variant selection works
- [ ] Quantity selector functions
- [ ] Add to cart button works
- [ ] Reviews display (if available)

#### Cart Screen
- [ ] Items display with correct info
- [ ] Quantity can be increased/decreased
- [ ] Remove item functionality works
- [ ] Total price calculates correctly
- [ ] Checkout button navigates to checkout

#### Checkout Screen
- [ ] Multi-step UI shows current step
- [ ] Shipping form accepts input
- [ ] Payment form accepts input
- [ ] Review page displays order summary
- [ ] Place order button functions

#### Orders Screen
- [ ] Order history displays
- [ ] Status badges show with correct colors
- [ ] Order details can be viewed
- [ ] Loading states work correctly

#### Account Screen
- [ ] User profile displays
- [ ] Settings toggles work
- [ ] Logout button functions
- [ ] Navigation items are clickable

### Step 6: API Integration Testing

Verify backend connectivity:

```bash
# Check backend is running
curl https://stingray-app-yitsm.ondigitalocean.app/health

# Should respond with 200 OK
```

#### Test Endpoints:
- [ ] Products load from `/store/products`
- [ ] Categories display from `/store/product-categories`
- [ ] Cart operations work
- [ ] Orders sync properly
- [ ] User profile loads

### Step 7: Performance Testing

- [ ] App loads in under 3 seconds
- [ ] Navigating between tabs is smooth
- [ ] Product list scrolling is fluid (60 FPS)
- [ ] Images load quickly
- [ ] No memory leaks on navigation

### Common Issues & Solutions

#### Issue: "Cannot find module" error
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Issue: QR code not working
**Solution:**
1. Make sure phone is on same WiFi as computer
2. Try tunnel mode: `expo start --tunnel`
3. Manually enter IP address shown in terminal

#### Issue: API requests failing
**Solution:**
1. Check backend is running at `https://stingray-app-yitsm.ondigitalocean.app`
2. Verify network connectivity
3. Check firewall settings
4. Try: `npm start -- --reset-cache`

#### Issue: App crashes on specific screen
**Solution:**
1. Check terminal for error messages
2. Clear app cache: `expo start -c`
3. Check console logs in Expo app

### Building for Production

#### Build for iOS (requires Apple Developer account):
```bash
eas build --platform ios
```

#### Build for Android:
```bash
eas build --platform android
```

#### Build for both:
```bash
eas build --platform all
```

### Testing Checklist

**Before Release:**
- [ ] All 5 navigation tabs functional
- [ ] No console errors or warnings
- [ ] All API calls succeed
- [ ] Images load properly
- [ ] Forms submit without errors
- [ ] Navigation is smooth
- [ ] App responsive on different screen sizes
- [ ] Offline handling graceful

### Advanced Testing

#### Enable Debug Menu
Shake device or press `Ctrl+M` (Android) / `Cmd+M` (iOS simulator)

#### Network Throttling
1. Open Chrome DevTools
2. Network tab → Throttling → Select speed
3. Test performance on slow connections

#### Console Logging
```bash
# View logs in terminal
expo start

# Logs appear in real-time
# Use React DevTools for debugging
```

### Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Router Docs](https://docs.expo.dev/routing/introduction/)
- [Medusa API Docs](https://docs.medusajs.com/)

### Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Device/OS info
   - Expo CLI version

---

**Last Updated:** November 6, 2025
**Status:** Ready for Testing ✅
