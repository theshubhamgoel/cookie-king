# Privacy Policy

**Last Updated:** May 28, 2026

Welcome to **Cookie King: Idle Empire** (the "Game"), developed as a premium idle-clicker mobile application. Your privacy is of paramount importance to us. This Privacy Policy governs your use of the Game and explains what information we collect, how we use it, and your choices regarding your data.

By downloading and playing the Game, you agree to the terms outlined in this Privacy Policy.

---

## 1. Introduction & Our Privacy Commitment

We believe in complete data transparency and security. Unlike many modern mobile games, **Cookie King: Idle Empire is designed with a "Privacy-First" architecture**:
* We **do not** run any third-party ad networks or cross-app tracking SDKs for target marketing.
* We integrate secure, industry-standard telemetry services (Google Firebase) strictly for anonymous analytics and performance diagnostics.
* We **do not** collect, store, or sell any of your personally identifiable information (PII) on private servers.
* We **do not** track your location, access your device's contacts, or monitor your activity across other apps.

All game mechanics, including local progress, coin counts, prestige rankings, and sound settings, are processed entirely on your local device or backed up securely on Apple's sovereign cloud infrastructure.

---

## 2. Information We Collect and How We Use It

While playing the Game, certain services managed by Apple Inc. are integrated to enable premium features. Here is how they handle your data:

### A. Local Game State
* **What is collected:** Current cookie balances, career stats, unlocked tech boosts, owned producers (cursors, grandmas, factories), selected avatar indexes, custom bakery names, volume levels, and haptic vibration preferences.
* **How it is stored:** Saved locally in your device's secure sandbox using `UserDefaults` and local storage structures.
* **Purpose:** To persist your active session so you can resume playing exactly where you left off.

### B. Apple iCloud Synchronization
* **What is collected:** A copy of your encrypted Game State data.
* **How it is stored:** Automatically synchronized with your personal Apple iCloud account using Apple's secure `NSUbiquitousKeyValueStore` API.
* **Purpose:** To enable cross-device progress synchronization (e.g., playing on both your iPhone and iPad) and secure progress recovery if you lose, damage, or upgrade your device.
* *Note: The developer has zero access to your iCloud credentials or data. Your data is encrypted and managed entirely by Apple.*

### C. Apple Game Center
* **What is collected:** Your public Game Center profile nickname, avatar, achievements unlocked, and lifetime cookies baked.
* **How it is stored:** Submitted to Apple's Game Center databases if you choose to sign in to Game Center.
* **Purpose:** To display your scores on the Global Leaderboards and track game achievements. Your profile and standings are visible to other players in accordance with your Apple Game Center privacy settings.

### D. App Store Diagnostics & Analytics
* **What is collected:** Anonymous performance telemetry, launch times, and crash logs.
* **How it is stored:** Provided automatically by Apple's App Store Connect analytics platform if you have opted-in to sharing diagnostics with developers.
* **Purpose:** To help us find and resolve code issues, optimize performance, and improve the user experience. This data contains no personal details.

### E. Firebase Telemetry & Performance Diagnostics
* **What is collected:** Anonymous device installation IDs, product interactions (e.g., click combo telemetry summaries, buildings purchased, upgrades unlocked, and tutorial events), and crash diagnostic reports.
* **How it is stored:** Processed securely in Google's Firebase backend. No personal identifier data (like your name, email, or contacts) is linked to these metrics.
* **Purpose:** Analytics & App Functionality (understanding progression balance and fixing technical crashes).

---

## App Store Privacy Configuration Reference

When submitting **Cookie King: Idle Empire** to the App Store, you can configure the required **App Privacy** questionnaire in App Store Connect with the following details:

| Data Type | Is it used for tracking? | Linked to user's identity? | Purpose |
| :--- | :--- | :--- | :--- |
| **Device ID** | **No** (Unless you explicitly use IDFA for advertising) | **No** (We do not tie it to any logged-in accounts) | **Analytics** |
| **Product Interaction** | **No** | **No** (We operate anonymously without accounts) | **Analytics** |
| **Crash / Performance Data** | **No** | **No** | **App Functionality** |

---

## 3. Children's Privacy (COPPA & GDPR Compliance)

**Cookie King: Idle Empire** is rated **4+ (Everyone)** on the App Store. 
* We **do not** knowingly solicit or collect any personal information from children under the age of 13 (or under the age of 16 in the European Union).
* Because our Game operates entirely local to the device and utilizes Apple's standardized, secure services (iCloud/Game Center) which carry their own parental protection suites, the Game is fully compliant with the **Children's Online Privacy Protection Act (COPPA)** and the **General Data Protection Regulation (GDPR)**.

If you are a parent or guardian and believe that your child has provided personal information to us, please contact us immediately, and we will take prompt steps to delete any such data.

---

## 4. In-App Purchases (Real & Secure)
* The premium multiplier items and cosmetic skins inside the Game's Premium Shop are purchased securely using Apple's official **StoreKit 2** payment system.
* All financial transactions, billing, and credit card processing are handled entirely and securely by Apple Inc. The developer has **no access** to your credit card details, bank information, or personal financial records.

---

## 5. Data Deletion and Control Choices

You have absolute, granular control over your game data at all times:

1. **Wipe All Local Data:** You can permanently erase all local progress, coin counts, prestige multipliers, and settings at any time by navigating to **Settings** and tapping **REINICIAR FACTORÍA / FACTORY RESET**. This actions wipes the local database instantly.
2. **Disable iCloud Syncing:** You can toggle off automatic cloud backups by navigating to your **Profile** page and turning off the **Auto-Sync** switch. Alternatively, you can disable iCloud access for the Game in your iOS system settings.
3. **Sign Out of Game Center:** You can opt-out of leaderboards by signing out of Game Center in your iOS system settings.

---

## 6. Changes to This Privacy Policy

We may update our Privacy Policy from time to time to align with new gameplay features or App Store guidelines. Any modifications will be posted directly on this page with an updated "Last Updated" timestamp. We encourage you to review this policy periodically to stay informed about our commitment to user privacy.

---

## 7. Contact Information

If you have any questions, bug reports, or feedback regarding this Privacy Policy or the data practices of **Cookie King: Idle Empire**, email us at themansigoel@gmail.com.

---

*This Privacy Policy was drafted in accordance with Apple's App Store Review Guidelines (Section 5.1 - Privacy) and is hosted publicly via GitHub Pages.*
