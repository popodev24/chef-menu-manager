# Chef's Menu Manager

A React Native app I built for MAST5112 Part 2. It's the first working version
of a menu app for Christoffel, a private chef — he can add a dish (name,
description, course, price) and it shows up on the menu straight away.

This follows on from my Part 1 planning doc, so the screens and navigation
match what I designed there: a Home screen that just shows the menu, and a
separate Manage Menu screen where you actually add items.

Editing, deleting, filtering and stats aren't in this version — those are
coming in the Final PoE per the brief.

## Screens

- **Home** — shows all menu items, or a message if there aren't any yet
- **Manage Menu** — the form for adding a new dish, with validation

## Getting it running

\`\`\`
npm install
npx expo install @react-navigation/native@^6.1.17 @react-navigation/native-stack@^6.9.26 react-native-screens@~3.31.1 react-native-safe-area-context@4.10.5
npx expo start
\`\`\`

Then either scan the QR code with Expo Go on your phone, or press `a` for
an Android emulator.

## Project structure

\`\`\`
App.tsx                     -- navigation setup
types.ts                    -- MenuItem type, course list
context/MenuContext.tsx     -- holds the menu items, shared between screens
screens/HomeScreen.tsx      -- menu list
screens/ManageMenuScreen.tsx -- add item form
components/MenuItemCard.tsx -- one dish, rendered in the list