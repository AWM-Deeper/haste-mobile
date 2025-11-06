#!/bin/bash
echo "HASTE Mobile App - Expo Go Setup"
echo "================================="
echo ""

if ! command -v node &> /dev/null; then
    echo "Error: Node.js not found. Install Node.js v18+"
    exit 1
fi
echo "✓ Node.js $(node -v) found"

if ! command -v npm &> /dev/null; then
    echo "Error: npm not found"
    exit 1
fi
echo "✓ npm $(npm -v) found"

if ! command -v expo &> /dev/null; then
    echo "Installing Expo CLI..."
    npm install -g expo-cli
fi
echo "✓ Expo CLI ready"

echo ""
echo "Cleaning dependencies..."
if [ -d "node_modules" ]; then
    rm -rf node_modules package-lock.json
fi

echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi
echo "✓ Dependencies installed"

echo ""
echo "Clearing Expo cache..."
expo start --reset-cache --exit 2>/dev/null || true
echo "✓ Cache cleared"

echo ""
echo "================================="
echo "✓ Setup Complete!"
echo "================================="
echo ""
echo "Next steps:"
echo "  1. Run: npm start"
echo "  2. Press 'a' for Android"
echo "  3. Press 'i' for iOS"
echo "  4. Scan QR with Expo Go"
echo ""
echo "Backend: https://stingray-app-yitsm.ondigitalocean.app"
echo "Guides: see TESTING_GUIDE.md"
echo ""
