# HASTE Mobile App - Expo Go Testing Checklist

## ✅ Pre-Testing Setup

Before running tests, ensure:
- [ ] Node.js v18+ and npm v9+ installed
- [ ] Expo CLI installed globally
- [ ] Expo Go app installed on test device
- [ ] Git repository cloned locally
- [ ] Dependencies installed (`npm install`)
- [ ] Backend API running at `https://stingray-app-yitsm.ondigitalocean.app`

## 🚀 Quick Start Testing

### Starting the Development Server
```bash
# Clone repo
git clone https://github.com/AWM-Deeper/haste-mobile.git
cd haste-mobile

# Install dependencies
npm install

# Start Expo dev server
npm start

# Scan QR code with Expo Go or press 'a' for Android / 'i' for iOS
```

---

## 📱 Screen-by-Screen Testing

### Tab Navigation (Bottom Tabs)
- [ ] 5 tabs visible: Home, Shop, Cart, Orders, Account
- [ ] Tapping each tab switches screens
- [ ] Active tab is highlighted with purple (#A855F7) color
- [ ] Inactive tabs show gray color
- [ ] Tab icons display correctly
- [ ] No console errors when switching tabs

---

### 🏠 Home Screen `/(home)`

**Layout & Display:**
- [ ] Page loads without errors
- [ ] All sections visible and properly spaced
- [ ] Responsive on different screen sizes
- [ ] Smooth scrolling through content

**Featured Products Carousel:**
- [ ] Carousel displays featured products
- [ ] Horizontal swipe works smoothly
- [ ] Images load properly
- [ ] Product info displays (name, price, rating)
- [ ] Dots indicator shows current position
- [ ] Auto-scroll works (if implemented)

**Category Grid:**
- [ ] All categories display
- [ ] Grid layout looks balanced
- [ ] Category icons/images load
- [ ] Tap category navigates to shop (if implemented)

**Product Grid:**
- [ ] Products display in grid layout
- [ ] Images load with correct aspect ratio
- [ ] Product cards show:
  - Product image
  - Product name
  - Price
  - Star rating
  - "Add to Cart" button
- [ ] Tap product card navigates to product detail
- [ ] "Add to Cart" adds to cart without navigation

**Newsletter Section:**
- [ ] Newsletter signup visible
- [ ] Email input accepts text
- [ ] Submit button works (shows feedback)
- [ ] No errors on submission

---

### 🛍️ Shop Screen `/(shop)`

**Product List:**
- [ ] Products load from API
- [ ] Grid displays 2-3 products per row
- [ ] Infinite scroll/pagination loads more items
- [ ] No duplicate products
- [ ] Product images load correctly

**Search Functionality:**
- [ ] Search bar accepts input
- [ ] Search filters products by name
- [ ] Results update in real-time
- [ ] Clear search button appears when typing
- [ ] Clearing search shows all products again

**Filter Options:**
- [ ] Filter button/menu opens
- [ ] Available filters show (price, category, etc.)
- [ ] Selecting filters updates results
- [ ] Multiple filters work together
- [ ] Reset filters button works

**Sort Options:**
- [ ] Sort dropdown shows options (price, name, rating, etc.)
- [ ] Selecting sort reorders products
- [ ] Sort preference persists while browsing

**Product Interaction:**
- [ ] Tapping product navigates to detail view
- [ ] "Add to Cart" button works
- [ ] No navigation errors

---

### 📦 Product Detail Screen `/product/[id]`

**Navigation:**
- [ ] Accessing from Shop screen works
- [ ] Product ID correctly passed in URL
- [ ] Back button returns to previous screen

**Image Carousel:**
- [ ] All product images display
- [ ] Horizontal swipe/scroll navigates images
- [ ] Dots indicator shows current image
- [ ] Dots are clickable (jump to image)
- [ ] Images load with proper aspect ratio

**Product Information:**
- [ ] Product title displays
- [ ] Price shows correctly
- [ ] Description displays fully
- [ ] Star rating and review count show
- [ ] "In stock" status visible

**Variants/Options:**
- [ ] Variant buttons display (if applicable)
- [ ] Selecting variant changes button color
- [ ] Multiple variants can be selected
- [ ] Selected variant persists

**Quantity Selector:**
- [ ] Plus button increases quantity
- [ ] Minus button decreases quantity
- [ ] Quantity doesn't go below 1
- [ ] Quantity updates display immediately

**Add to Cart:**
- [ ] "Add to Cart" button clickable
- [ ] Toast/alert shows on successful add
- [ ] Cart count badge updates
- [ ] Can choose to continue shopping or go to cart

**Reviews Section:**
- [ ] Reviews display (if available)
- [ ] Review author name shows
- [ ] Star rating displays for each review
- [ ] Review text displays
- [ ] Shows up to 3 reviews
- [ ] "See all reviews" works (if more than 3)

---

### 🛒 Cart Screen `/(cart)`

**Cart Display:**
- [ ] Page loads if cart has items
- [ ] Empty cart message shows when no items
- [ ] Cart items list displays correctly
- [ ] Each item shows:
  - Product image (thumbnail)
  - Product name
  - Price per item
  - Quantity
  - Subtotal
  - Remove button

**Item Management:**
- [ ] Plus button increases quantity
- [ ] Minus button decreases quantity
- [ ] Quantity updates price automatically
- [ ] Remove button deletes item from cart
- [ ] Cart updates immediately after changes

**Cart Summary:**
- [ ] Subtotal calculates correctly
- [ ] Tax/fees show (if applicable)
- [ ] Total price calculates correctly
- [ ] Numbers update when quantities change

**Checkout:**
- [ ] "Checkout" button visible and clickable
- [ ] Navigates to checkout screen
- [ ] Cart items persist through checkout
- [ ] Continue Shopping button returns to Home/Shop

**Empty Cart:**
- [ ] Empty message shows when cart cleared
- [ ] "Continue Shopping" button available
- [ ] No errors on empty cart

---

### 🛒 Checkout Screen `/checkout`

**Step Indicator:**
- [ ] Shows 3 steps: Shipping, Payment, Review
- [ ] Current step highlighted in purple
- [ ] Completed steps marked differently

**Step 1 - Shipping Address:**
- [ ] All form fields visible:
  - First Name
  - Last Name
  - Street Address
  - City
  - State/Province
  - ZIP/Postal Code
  - Country
- [ ] Input fields accept text
- [ ] Form validates (required fields)
- [ ] "Continue to Payment" button works
- [ ] Validation shows error messages

**Step 2 - Payment Information:**
- [ ] Form fields visible:
  - Cardholder Name
  - Card Number
  - Expiry (MM/YY)
  - CVV
- [ ] Input fields accept text
- [ ] Form validates
- [ ] "Review Order" button advances to next step

**Step 3 - Order Review:**
- [ ] Shipping address displays correctly
- [ ] Order items list shows
- [ ] Each item shows name, quantity, price
- [ ] Order total displays correctly
- [ ] "Place Order" button visible
- [ ] Back/Edit buttons available (if implemented)

**Place Order:**
- [ ] "Place Order" button submits order
- [ ] Loading indicator shows while processing
- [ ] Success message displays
- [ ] Cart clears after successful order
- [ ] Navigation to Orders screen or confirmation

---

### 📋 Orders Screen `/(orders)`

**Order History:**
- [ ] Page loads without errors
- [ ] Orders display in list format
- [ ] Orders show most recent first
- [ ] Each order displays:
  - Order ID/Number
  - Order date
  - Status badge
  - Total price
  - Number of items

**Status Badges:**
- [ ] Different colors for different statuses:
  - Pending: Yellow
  - Processing: Blue
  - Shipped: Green
  - Delivered: Dark Green
  - Cancelled: Red
- [ ] Badge text is readable
- [ ] Correct status for each order

**Order Details:**
- [ ] Tapping order shows details (if implemented)
- [ ] Order items display
- [ ] Shipping address shows
- [ ] Order summary visible
- [ ] Back button works

**Empty Orders:**
- [ ] "No orders" message shows when empty
- [ ] "Start Shopping" button available
- [ ] No errors on empty state

---

### 👤 Account Screen `/(account)`

**User Profile:**
- [ ] User avatar displays
- [ ] User name shows
- [ ] User email displays

**Account Information:**
- [ ] Email address shows
- [ ] Phone number displays (if available)
- [ ] Member since date shows
- [ ] Account status visible

**Settings:**
- [ ] Push notifications toggle works
- [ ] Email updates toggle works
- [ ] Other settings toggle correctly
- [ ] Changes persist

**Quick Actions:**
- [ ] Order History button works
- [ ] Wishlist button works (if implemented)
- [ ] Coupons button works (if implemented)
- [ ] Navigation works for each

**Support Section:**
- [ ] Contact Support button visible
- [ ] Help & FAQ button visible
- [ ] Both buttons navigate correctly

**Sign Out:**
- [ ] Sign Out button clearly visible
- [ ] Button has red/warning color
- [ ] Sign out confirmation shows
- [ ] Signing out clears user data
- [ ] Redirects to login/home screen

---

## 🔗 API Integration Testing

### Backend Connectivity
- [ ] Backend API is running and accessible
- [ ] Network requests complete without timeout
- [ ] Error messages display gracefully
- [ ] Offline handling works (shows error message)

### Data Synchronization
- [ ] Products load from Medusa API
- [ ] Product details update in real-time
- [ ] Cart syncs with backend
- [ ] Orders persist after reload
- [ ] User profile data loads correctly

### API Endpoints Tested
- [ ] `GET /store/products` - returns product list
- [ ] `GET /store/products/{id}` - returns product detail
- [ ] `GET /store/product-categories` - returns categories
- [ ] Cart operations work
- [ ] Order creation works
- [ ] User authentication works

---

## 🎯 Performance & Stability

### Performance
- [ ] App loads in under 3 seconds
- [ ] First tab displays within 2 seconds
- [ ] Switching tabs is smooth (no lag)
- [ ] Scrolling is 60 FPS (smooth)
- [ ] Images load quickly (under 1 second)
- [ ] Search is responsive (instant results)
- [ ] No memory leaks on navigation

### Stability
- [ ] No crashes when navigating
- [ ] No console errors or warnings
- [ ] App doesn't freeze
- [ ] Network errors handled gracefully
- [ ] Form submissions work reliably
- [ ] No duplicate data entries

### Memory & Battery
- [ ] App doesn't use excessive RAM
- [ ] Battery drain is minimal
- [ ] Background processes stop on exit
- [ ] No battery drain when idle

---

## 🎨 Visual & UX

### Design Consistency
- [ ] Purple (#A855F7) used consistently
- [ ] Blue (#3B82F6) used for secondary elements
- [ ] Typography is consistent
- [ ] Spacing/padding is uniform
- [ ] Colors meet accessibility standards

### Responsiveness
- [ ] Layout works on small screens (5")
- [ ] Layout works on medium screens (6")
- [ ] Layout works on large screens (7")
- [ ] Text is readable on all sizes
- [ ] Images scale properly
- [ ] Touch targets are appropriately sized

### Animations
- [ ] Page transitions are smooth
- [ ] Button taps provide feedback
- [ ] Loading spinners animate
- [ ] Scroll animations work
- [ ] No janky animations

### Accessibility
- [ ] Text has sufficient contrast
- [ ] Buttons are large enough to tap
- [ ] Form labels are clear
- [ ] Error messages are visible
- [ ] Navigation is logical

---

## 📝 Bug Reporting Template

If you find issues, report them with:

**Title:** Brief description of issue

**Description:** Detailed steps to reproduce

**Expected Behavior:** What should happen

**Actual Behavior:** What actually happens

**Device Info:**
- Device: [iPhone/Android]
- OS Version: [iOS 16/Android 13]
- Expo Version: [version]
- App Version: [version]

**Screenshots/Video:** If applicable

---

## ✅ Final Sign-Off

**Tested By:** [Your Name]
**Date:** [Date]
**Device:** [Device Model]
**OS:** [iOS/Android Version]
**Expo Version:** [Version]

**Overall Status:**
- [ ] All tests passed ✅
- [ ] Minor issues found (non-blocking)
- [ ] Major issues found (blocking)

**Notes:**
[Any additional notes or observations]

---

**Last Updated:** November 6, 2025
**Status:** Ready for QA Testing
