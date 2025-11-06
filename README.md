# haste-mobile
HASTE mobile app built with Expo React Native for iOS and Android. Seamless e-commerce experience with real-time product sync.
# HASTE Mobile App

**Modern React Native E-Commerce Application** built with Expo for iOS and Android

## Features

🛍️ **Product Browsing** - Browse live products with images, descriptions, and pricing
🛒 **Shopping Cart** - Add/remove items and manage quantities
💳 **Checkout** - Seamless payment & delivery integration
📦 **Order Tracking** - Track order status in real-time
👤 **User Accounts** - Login, profile management, order history
🔍 **Search & Filters** - Find products with advanced filtering
📱 **Native Performance** - Smooth animations and fast load times
🌐 **Real-time Sync** - Connected to Medusa backend for live data
⚡ **Pull-to-Refresh** - Update content with native gesture
💬 **Haptic Feedback** - Responsive tactile feedback on interactions

## Tech Stack

- **Framework**: Expo & React Native
- **Navigation**: Expo Router (File-based routing)
- **State Management**: Zustand
- **API Client**: Axios
- **Styling**: React Native StyleSheet + custom components
- **Backend**: Medusa.js SaaS

## Setup & Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Scan QR code with Expo Go app on iOS/Android
```

## Project Structure

```
haste-mobile/
├── app/
│   ├── (tabs)/              # Bottom tab navigator
│   │   ├── index.tsx        # Home screen
│   │   ├── shop.tsx         # Products listing
│   │   ├── cart.tsx         # Shopping cart
│   │   ├── orders.tsx       # Order history
│   │   └── account.tsx      # User profile
│   ├── product/[id].tsx     # Product detail
│   ├── checkout.tsx         # Checkout flow
│   └── _layout.tsx          # Root layout
├── lib/
│   ├── api-client.ts        # Backend integration
│   ├── store.ts             # Zustand store
│   └── constants.ts         # App constants
├── components/              # Reusable components
└── app.json                 # Expo configuration
```

## Building for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Build for iOS and Android
eas build --platform all

# Submit to App Stores
eas submit --platform ios
eas submit --platform android
```

## Environment Variables

Create `.env.local`:

```
EXPO_PUBLIC_API_URL=https://stingray-app-yitsm.ondigitalocean.app
```

## License

MIT - See LICENSE file for details

## Support

For issues and questions, please open a GitHub issue or contact support@haste.com
