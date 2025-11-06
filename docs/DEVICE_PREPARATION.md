# Device Preparation Guide - HASTE Mobile App Testing

## Pre-Testing Device Setup (15 minutes)

### iOS Device Preparation

**Requirements:**
- iPhone running iOS 12 or higher
- WiFi connectivity
- Sufficient storage (500 MB)

**Setup Steps:**

1. **Install Expo Go**
   - Open App Store
   - Search "Expo Go"
   - Tap "Get" → authenticate with Face ID/Touch ID
   - Wait for installation

2. **WiFi Connection**
   - Settings → WiFi
   - Connect to same network as dev machine
   - Note the network name

3. **Enable Developer Features**
   - Settings → Developer (if available)
   - Enable "WiFi Testing" or similar
   - Allow Expo to access local network

4. **Camera Permissions** (for QR scanning)
   - Settings → Expo Go → Camera
   - Enable "Allow Camera Access"

5. **Optimize Settings**
   - Settings → General → Background App Refresh → ON
   - Settings → Battery → Low Power Mode → OFF
   - Disable VPN if active

**Pre-Test Checklist:**
- [ ] Expo Go installed and running
- [ ] WiFi connected to correct network
- [ ] Battery > 50%
- [ ] Camera app works
- [ ] App can scan QR codes
- [ ] Developer mode enabled

### Android Device Preparation

**Requirements:**
- Android 5.0 or higher
- WiFi connectivity
- Sufficient storage (500 MB)
- Play Store access

**Setup Steps:**

1. **Install Expo Go**
   - Open Google Play Store
   - Search "Expo Go"
   - Tap "Install"
   - Wait for completion

2. **WiFi Connection**
   - Settings → WiFi
   - Connect to same network as dev machine
   - Tap network name → View advanced options
   - Note IP address

3. **Developer Mode (Optional)**
   - Settings → About Phone
   - Tap "Build Number" 7 times
   - Settings → Developer Options
   - Enable "USB Debugging" (for advanced testing)

4. **Camera Permissions**
   - Settings → Apps → Expo Go → Permissions
   - Enable "Camera"

5. **Performance Settings**
   - Settings → Developer Options → Limit Background Processes: OFF
   - Settings → Display → Brightness: Automatic
   - Settings → Battery → Battery Saver: OFF

**Pre-Test Checklist:**
- [ ] Expo Go installed and opening
- [ ] WiFi connected and stable
- [ ] Battery > 50%
- [ ] Camera permissions granted
- [ ] Can open camera app
- [ ] Network connection shows IP

### Network Configuration

**Critical: Same Network Requirement**

1. **Check Network Status:**
   - Dev Machine: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - Mobile Device: WiFi settings → View network details
   - Note: Device IP should start with same subnet (e.g., 192.168.x.x)

2. **Firewall Configuration:**
   - Windows: Allow npm through firewall
   - Mac: System Preferences → Security & Privacy → allow ports
   - Linux: sudo ufw allow 19006 (or your port)

3. **Network Issues:**
   - If can't connect: Try "Tunnel" mode in Expo
   - If slow: Move device closer to WiFi router
   - If drops: Disable VPN on device

### Storage Space Check

```
iOS: Settings → General → Storage
Target: Minimum 500 MB free

Android: Settings → Storage
Target: Minimum 500 MB free
```

If space low:
- Delete unused apps
- Clear app cache
- Restart device

## Day-of-Testing Checklist

**15 Minutes Before Testing:**

- [ ] Device battery charged (> 50%)
- [ ] WiFi connected and stable
- [ ] Expo Go app updated to latest version
- [ ] Dev machine on same network
- [ ] Backend API accessible (test URL in browser)
- [ ] All notifications disabled
- [ ] Developer is ready with test plan

**During Testing:**

- [ ] Keep device plugged in or on charger
- [ ] Don't turn off WiFi
- [ ] Minimize background apps
- [ ] Keep screen brightness consistent
- [ ] Document any issues immediately
- [ ] Take screenshots of problems

**After Testing:**

- [ ] Uninstall Expo Go or clear app data
- [ ] Reset device to clean state
- [ ] Archive test results
- [ ] Document findings

## Troubleshooting Setup Issues

### Can't Install Expo Go
- **Solution**: Check device storage, enable app store in Settings

### WiFi Connection Fails
- **Solution**: Forget network → Reconnect, or restart router

### Camera Won't Scan QR Code
- **Solution**: Check camera permissions, try manual URL entry

### Slow Performance
- **Solution**: Reduce background apps, move closer to router

### Disconnects During Testing
- **Solution**: Switch to Tunnel mode, move closer to router

## Device Recommendations

**Minimum Specifications:**
- iOS: iPhone 6S or newer
- Android: Galaxy S5 or equivalent (2014+)
- RAM: 2 GB minimum
- Storage: 2 GB free

**Recommended for Better Testing:**
- iOS: iPhone 12 or newer
- Android: Galaxy S10 or newer (2019+)
- RAM: 4 GB+
- Storage: 5 GB free

## Multi-Device Setup

If testing on multiple devices:

1. **Setup each device** following guides above
2. **Test on one at a time** from dev machine
3. **Document results per device**
4. **Compare behaviors** across devices
5. **Note any device-specific issues**

## Network Topology Diagram

```
┌─────────────────────────────────────────┐
│         WiFi Router (192.168.x.x)       │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┬────────────┐
       │                │            │
   ┌───▼───┐      ┌────▼──┐    ┌───▼──┐
   │ Dev   │      │ iOS   │    │Android│
   │Machine│      │Device │    │Device │
   │19000+ │      │ExpoGo │    │ExpoGo │
   └───────┘      └───────┘    └───────┘

All devices on same subnet for LAN connection
```

## Performance Baseline

Before testing, measure baseline:

- **App Load Time**: Time from QR scan to first screen
- **Navigation Speed**: Time between screen taps
- **Scroll FPS**: Smoothness when scrolling
- **Memory Usage**: Check Settings → Storage
- **Battery Drain**: Track during test session

## Ready to Test?

Once you've completed this checklist, proceed to:
- `TESTING_GUIDE.md` - General testing procedures
- `docs/TESTING_iOS.md` - iOS-specific tests
- `docs/TESTING_Android.md` - Android-specific tests
- `EXPO_GO_TESTING_CHECKLIST.md` - Detailed 100-point checklist
