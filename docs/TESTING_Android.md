# HASTE Mobile App - Android Testing Guide

Comprehensive testing guide for HASTE mobile app on Android devices using Expo Go.

## Prerequisites

- Android device (Android 5.0+)
- Expo Go app (free from Play Store)
- WiFi connection
- Development machine with HASTE app running locally
- Same network for both Android device and development machine

## Installation

### Step 1: Download Expo Go

1. Open Play Store on Android device
2. Search for "Expo Go"
3. Tap "Install"
4. Wait for installation to complete
5. Open Expo Go app

### Step 2: Start Development Server

On your development machine:

```bash
cd haste-mobile
npm start
```

Wait for output:
```
► Press a to open Android
► Press i to open iOS
► Press w to open web
```

### Step 3: Connect Android Device

**Option A: QR Code Scan (Easiest)**
1. On Android device, open Expo Go app
2. Tap "Scan QR Code" button
3. Allow camera permissions if prompted
4. Point camera at QR code displayed in terminal
5. Wait for app to load

**Option B: Terminal Connection**
1. In terminal, press `a` for Android
2. If prompted, choose connection method (LAN or Tunnel)
3. On Android device, open Expo Go
4. Select project from recent list, or
5. Manually scan QR code from terminal

**Option C: LAN Connection (Fastest)**
1. In terminal, select LAN connection when prompted
2. Ensure Android device on same WiFi network
3. In Expo Go, find project and tap it
4. App loads over local network

## Network Connection Tips

### For Slower Networks

```bash
# Use tunnel connection instead of LAN
EXPO_TUNNEL_CONFIG_OVERRIDE_LOCAL=true npm start
```

### For Emulator

If using Android Emulator (not physical device):

```bash
# Backend API endpoint correction
# Use 10.0.2.2 instead of localhost
# Edit .env.local:
EXPO_PUBLIC_API_URL=http://10.0.2.2:3000
```

## Testing Screens

### 1. Home Screen (/)

**What to test:**
- [ ] Screen loads without crashes
- [ ] Featured products display correctly
- [ ] Product images load and display
- [ ] Product prices are visible and correct
- [ ] "Shop Now" button is tappable
- [ ] Bottom tab navigation shows 5 tabs
- [ ] Home tab is highlighted
- [ ] Pull-to-refresh works
- [ ] Scroll performance is smooth
- [ ] Glassmorphism effects visible (if supported)

**Expected Performance:**
- Screen load time: < 2 seconds
- Images load quickly
- 60 FPS scrolling
- No memory leaks on repeated refresh

### 2. Shop Screen

**How to navigate:**
- Tap "Shop" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] Products display in grid layout
- [ ] Product images visible
- [ ] Product names and prices shown
- [ ] Search/filter bar functional
- [ ] Products are tappable
- [ ] Infinite scroll loads more products
- [ ] No duplicate products on refresh
- [ ] Category filters work (if available)

**Android-Specific:**
- [ ] Material Design principles applied
- [ ] Touch ripple effects visible
- [ ] Back button works (hardware button)

### 3. Product Detail Screen

**How to navigate:**
1. Go to Shop screen
2. Tap any product

**What to test:**
- [ ] Screen loads quickly
- [ ] Product image displays
- [ ] Image carousel works (swipe left/right)
- [ ] Product title and description visible
- [ ] Price shows correctly
- [ ] "Add to Cart" button tappable
- [ ] Quantity selector works
- [ ] Back button navigates back
- [ ] Hardware back button works
- [ ] Related products show (if available)

**Test Interactions:**
- Swipe left/right on image
- Tap +/- for quantity
- Double-tap to add to cart

### 4. Cart Screen

**How to navigate:**
1. Add product to cart
2. Tap "Cart" tab at bottom

**What to test:**
- [ ] Cart items display
- [ ] Product images visible
- [ ] Quantity adjustable
- [ ] Remove item button works
- [ ] Subtotal calculates correctly
- [ ] Tax shows if applicable
- [ ] Total price correct
- [ ] "Proceed to Checkout" button visible
- [ ] Empty cart message shows if no items
- [ ] Cart persists after navigation

**Test Mathematical Accuracy:**
- Single item: Price × Qty = Subtotal
- Multiple items: Sum all subtotals
- Tax: Applied if applicable
- Total: Subtotal + Tax

### 5. Checkout Screen

**How to navigate:**
1. Add item to cart
2. Go to Cart screen
3. Tap "Proceed to Checkout"

**What to test:**
- [ ] Checkout screen loads
- [ ] Shipping information form visible
- [ ] All form fields editable
- [ ] Billing information section
- [ ] Payment method selection
- [ ] Order review shows items and total
- [ ] Form validation works
- [ ] Error messages display for invalid fields
- [ ] Terms checkbox present
- [ ] "Place Order" button visible

**Test Cases:**

**Test A: Valid Order**
1. Fill shipping: Name, Address, City, State, ZIP
2. Fill billing: (same as shipping if option available)
3. Select payment method
4. Accept terms
5. Place order
6. Expected: Success message, order number

**Test B: Missing Fields**
1. Leave required fields empty
2. Try to proceed
3. Expected: Error messages for empty fields

**Test C: Invalid Email**
1. Enter invalid email format
2. Try to proceed
3. Expected: Email validation error

**Test D: Invalid ZIP Code**
1. Enter invalid ZIP format
2. Try to proceed
3. Expected: ZIP code validation error

### 6. Orders Screen

**How to navigate:**
- Tap "Orders" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] Order history displays
- [ ] Each order shows order number
- [ ] Order dates visible and correct
- [ ] Order status displayed
- [ ] Order total shows
- [ ] Orders are tappable
- [ ] Order details screen loads
- [ ] Empty state if no orders
- [ ] Pull-to-refresh works
- [ ] New orders appear after placement

### 7. Account Screen

**How to navigate:**
- Tap "Account" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] User information displays
- [ ] Profile section visible
- [ ] Edit profile button works
- [ ] Address book accessible
- [ ] Saved addresses display
- [ ] Settings menu visible
- [ ] Logout functionality works
- [ ] Login form appears if not logged in
- [ ] Form validation on profile edit

## Android-Specific Testing

### Hardware Buttons

**Back Button:**
- [ ] Back button navigates to previous screen
- [ ] From home screen, exits app (or shows back dialog)
- [ ] On detail screens, returns to list
- [ ] On checkout, returns to cart

**Home Button:**
- [ ] App can be resumed from home button press
- [ ] State preserved when returning
- [ ] No crashes on app resume

### Screen Orientations

**Portrait Mode (Primary):**
- [ ] All screens display correctly
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Images scale appropriately

**Landscape Mode:**
- [ ] Layout adapts to wider screen
- [ ] Content doesn't get cut off
- [ ] Scrolling still works
- [ ] No stretched images

**Screen Rotation:**
- [ ] App handles rotation smoothly
- [ ] No data loss on rotation
- [ ] State preserved
- [ ] No crashes

### Android System Features

**Permissions:**
- [ ] Camera permission (if used)
- [ ] Location permission (if used)
- [ ] Storage permission (if needed)

**Notifications:**
- [ ] Order notifications appear
- [ ] Notification content readable
- [ ] Tapping notification opens app

### Memory and Performance

**Memory Usage:**
1. Open Settings > Apps > HASTE Mobile > Memory
2. Expected: < 150 MB for initial load
3. Expected: < 300 MB after heavy use

**Battery Usage:**
1. Check Settings > Battery > App usage
2. Expected: Minimal impact (< 5%)
3. Expected: No drain during idle

**CPU Usage:**
1. Scroll through products
2. Expected: Smooth 60 FPS
3. Expected: CPU returns to baseline when idle

## API Integration Testing

### Backend Connectivity

1. Ensure backend is accessible
2. Check API responses in network requests
3. Verify all endpoints return correct data
4. Test offline mode gracefully fails

### Network Request Logging

```bash
# Enable network debugging in Expo Go
# Check network tab in Expo DevTools
```

**Expected API Calls:**
- GET /products - Fetch product list
- GET /products/:id - Fetch product details
- POST /carts - Create cart
- POST /checkout - Complete purchase
- GET /orders - Fetch order history

## Troubleshooting

### App Won't Connect

**Solution:**
1. Restart Expo Go app
2. Check WiFi connection
3. Try different connection mode (LAN vs Tunnel)
4. Restart development server
5. Clear cache: `npm start -- --reset-cache`

### Blank Screen

**Solution:**
1. Check backend API is running
2. Verify `EXPO_PUBLIC_API_URL` in .env.local
3. Check Android device has internet
4. Look at console for errors

### Slow Performance

**Solution:**
1. Close other apps
2. Clear app cache: Settings > Apps > Expo Go > Storage > Clear Cache
3. Restart device
4. Use LAN connection instead of tunnel

### Crashes

**Solution:**
1. Check logcat for errors: `adb logcat`
2. Clear Expo cache
3. Uninstall and reinstall Expo Go
4. Ensure Android 5.0 or higher

### Can't Scan QR Code

**Solution:**
1. Grant camera permissions
2. Check QR code visibility (good lighting)
3. Clean camera lens
4. Try manual entry of dev server URL
5. Use tunnel connection instead

## Success Criteria

All of the following must pass:
- [ ] App loads without crashes
- [ ] All 7 screens accessible
- [ ] Navigation smooth on all devices
- [ ] API calls succeed
- [ ] Images load quickly
- [ ] Forms validate correctly
- [ ] Orders can be placed
- [ ] Performance is smooth (60 FPS)
- [ ] Hardware back button works
- [ ] Screen orientation changes handled
- [ ] No memory leaks
- [ ] Battery impact minimal
- [ ] Handles network issues gracefully

## Device Testing

**Minimum Devices to Test:**
- [ ] Older device (Android 5-6)
- [ ] Mid-range device (Android 10-11)
- [ ] Latest device (Android 12-13)
- [ ] Tablet (if available)

## Performance Benchmarks

- Screen load time: < 2 seconds
- API response time: < 1 second
- Image loading: < 500ms
- Scroll frame rate: 60 FPS
- App startup: < 5 seconds
