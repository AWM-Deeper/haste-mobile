# HASTE Mobile App - iOS Testing Guide

Comprehensive testing guide for HASTE mobile app on iOS devices using Expo Go.

## Prerequisites

- iPhone (any recent model running iOS 12+)
- Expo Go app (free from App Store)
- WiFi connection
- Development machine with HASTE app running locally
- Same network for both iPhone and development machine

## Installation

### Step 1: Download Expo Go

1. Open App Store on iPhone
2. Search for "Expo Go"
3. Tap "Get" then authenticate with Face ID/Touch ID
4. Wait for installation to complete

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

### Step 3: Connect iPhone

**Option A: Camera Scan (Easiest)**
1. Open Camera app on iPhone
2. Point camera at QR code displayed in terminal
3. Tap the notification: "Open in Expo Go"
4. App will load

**Option B: Manual Connection**
1. In terminal, press `i` for iOS
2. Terminal may show connection dialog
3. Open Expo Go on iPhone
4. Tap "Scan QR Code" button
5. Scan the QR code shown in terminal
6. Wait for app to load

**Option C: LAN Connection**
1. In terminal, select LAN connection when prompted
2. Open Expo Go on iPhone
3. Tap "Scan QR Code"
4. Scan QR code
5. App loads over local network

## Testing Screens

### 1. Home Screen (/)

**What to test:**
- [ ] Screen loads without errors
- [ ] Featured products display correctly
- [ ] Product images load
- [ ] Product prices are visible
- [ ] "Shop Now" button is clickable
- [ ] Bottom tab navigation shows 5 tabs
- [ ] Home tab is highlighted
- [ ] Pull-to-refresh works
- [ ] Scroll performance is smooth

**Expected UI:**
- Hero banner at top
- Featured products grid
- Product cards with images
- Glassmorphism effect visible
- Purple (#A855F7) and Blue (#3B82F6) colors
- Bottom tab bar

### 2. Shop Screen

**How to navigate:**
- Tap "Shop" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] All products display in grid layout
- [ ] Product images visible
- [ ] Product names and prices shown
- [ ] Search/filter bar visible
- [ ] Products are tappable (navigate to detail)
- [ ] Scroll is smooth
- [ ] Infinite scroll loads more products
- [ ] Category filters work (if available)

**Expected UI:**
- Search bar at top
- Filter/sort options
- Product grid (2 columns)
- Each product shows image, name, price
- Tap product navigates to detail screen

### 3. Product Detail Screen

**How to navigate:**
1. Go to Shop screen
2. Tap any product

**What to test:**
- [ ] Screen loads
- [ ] Product image displays
- [ ] Image carousel works (swipe left/right)
- [ ] Product title visible
- [ ] Product description displays
- [ ] Price shows clearly
- [ ] "Add to Cart" button visible and clickable
- [ ] Quantity selector works
- [ ] Back button navigates back
- [ ] Related products show (if available)

**Expected UI:**
- Large product image carousel
- Product information below
- Add to cart form
- Quantity selector
- Price and availability

### 4. Cart Screen

**How to navigate:**
1. Add product to cart (from product detail or shop)
2. Tap "Cart" tab at bottom

**What to test:**
- [ ] Cart items display
- [ ] Product images visible
- [ ] Product names and prices shown
- [ ] Quantity adjustable (+ and - buttons)
- [ ] Remove item button works
- [ ] Subtotal calculates correctly
- [ ] Tax calculation visible
- [ ] Total price displays
- [ ] "Proceed to Checkout" button visible
- [ ] Empty cart message shows if no items
- [ ] Continue Shopping button works

**Expected behavior:**
- Add product -> item appears in cart
- Change quantity -> total updates
- Remove item -> removed from cart
- Proceed to checkout -> navigates to checkout

### 5. Checkout Screen

**How to navigate:**
1. Add item to cart
2. Go to Cart screen
3. Tap "Proceed to Checkout"

**What to test:**
- [ ] Checkout screen loads
- [ ] Shipping information form visible
- [ ] Billing information section
- [ ] Payment method selection
- [ ] Order review shows items and total
- [ ] Continue button progresses to next step
- [ ] Back button returns to cart
- [ ] Form validation works
- [ ] Error messages display if invalid
- [ ] Terms checkbox appears
- [ ] "Place Order" button visible

**Test Cases:**

**Test A: Valid Order**
1. Add product to cart
2. Go to checkout
3. Fill all fields with valid data
4. Accept terms
5. Place order
6. Expected: Success message, order confirmation

**Test B: Missing Required Fields**
1. Try to proceed without filling required fields
2. Expected: Error messages showing required fields

**Test C: Invalid Email**
1. Enter invalid email format
2. Try to proceed
3. Expected: Email validation error

### 6. Orders Screen

**How to navigate:**
- Tap "Orders" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] Order history displays
- [ ] Each order shows order number
- [ ] Order dates visible
- [ ] Order status displayed
- [ ] Order total shows
- [ ] Orders are tappable (shows detail)
- [ ] Empty state message if no orders
- [ ] Pull-to-refresh works
- [ ] Orders list updates after new order

**Expected UI:**
- List of past orders
- Order cards showing:
  - Order number
  - Order date
  - Status badge
  - Total amount
  - Customer name

### 7. Account Screen

**How to navigate:**
- Tap "Account" tab at bottom

**What to test:**
- [ ] Screen loads
- [ ] User information displays (if logged in)
- [ ] Profile picture visible
- [ ] User email shown
- [ ] Login form appears if not logged in
- [ ] Settings options visible
- [ ] Logout button works
- [ ] Profile editing works
- [ ] Address management available
- [ ] Payment methods section

## API Integration Testing

### Backend Connection

**Test backend connectivity:**

1. Open Safari on iPhone
2. Try accessing backend directly: `https://stingray-app-yitsm.ondigitalocean.app`
3. Expected: Backend is accessible

**Test API calls in app:**

1. Enable debug mode (if available)
2. Open network monitor
3. Perform actions:
   - Load products (should call GET /products)
   - Add to cart (should call POST /carts)
   - Create order (should call POST /checkout)
4. Check network tab:
   - [ ] Requests complete successfully
   - [ ] Response times reasonable (< 2s)
   - [ ] Status codes are 200 OK
   - [ ] No 404 or 500 errors

## Performance Testing

### Scroll Performance

1. Go to Shop screen
2. Scroll rapidly through products
3. Expected: Smooth scrolling, no jank
4. Check: GPU usage reasonable

### Image Loading

1. Go to any screen with images
2. Observe image loading
3. Expected: Images load quickly
4. No broken image indicators

### App Responsiveness

1. Perform rapid taps on buttons
2. Expected: Immediate response
3. No frozen UI

## Network Conditions Testing

### Slow Network Simulation

**Using Xcode:**
1. Connect iPhone to Mac with USB
2. Open Xcode
3. Window → Devices and Simulators
4. Right-click iPhone → Connect via Network
5. Xcode Network Link Conditioner
6. Select "Slow" speed
7. Test app behavior
8. Expected: Graceful handling, loading indicators

**Observe:**
- [ ] Loading spinners appear
- [ ] Data loads eventually
- [ ] No crashes
- [ ] Error handling works

### Offline Mode

1. Enable Airplane Mode on iPhone
2. Try to load data
3. Expected: Graceful error message
4. Expected: Suggests checking connection
5. Disable Airplane Mode
6. Expected: App reconnects and works

## Bug Reporting

If you find issues, create a bug report:

```markdown
## Bug: [Brief Description]

**Device:** iPhone [model], iOS [version]
**Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected:** [What should happen]
**Actual:** [What actually happened]
**Screenshot:** [Attach if possible]
```

## Troubleshooting

### App Won't Load

**Solution:**
1. Kill and restart Expo Go
2. Check WiFi connection
3. Try LAN instead of tunnel
4. Restart development server
5. Clear Expo cache: `npm start -- --reset-cache`

### Screen is Blank

**Solution:**
1. Check backend API is running
2. Verify `EXPO_PUBLIC_API_URL` is correct
3. Check network connectivity
4. Look at console for errors

### Touch Not Working

**Solution:**
1. Restart Expo Go app
2. Try network switch
3. Kill and restart dev server

### Crashes on Startup

**Solution:**
1. Check console errors
2. Clear Expo cache
3. Ensure Node.js v18+
4. Reinstall dependencies

## Success Criteria

All of the following must pass:
- [ ] App loads without crashes
- [ ] All 7 screens accessible and functional
- [ ] Navigation works smoothly
- [ ] API calls succeed (200 responses)
- [ ] Images load quickly
- [ ] Forms work and validate
- [ ] Orders can be placed
- [ ] Performance is smooth
- [ ] Responsive layout works
- [ ] Glassmorphism effects visible
- [ ] Color scheme correctly applied
- [ ] No console errors
- [ ] Handles network issues gracefully
