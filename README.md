# Chef's Menu Manager -- Part 2 (PoE)

A React Native (Expo + TypeScript) app that lets Christoffel add dishes
(name, description, course, price) and see them appear on the menu,
built to match the Home Screen / Manage Menu Screen navigation flow
planned in Part 1 (Figures 1, 2 and 4).

## Project structure

```
ChefMenuManager/
├── App.tsx                       # navigation stack + MenuProvider
├── types.ts                      # MenuItem type, Course values, nav param types
├── context/
│   └── MenuContext.tsx           # shared menu array + addItem, used by both screens
├── screens/
│   ├── HomeScreen.tsx            # read-only menu overview (Figure 1, minus stats -- deferred)
│   └── ManageMenuScreen.tsx      # add form + validation (Figure 2, minus remove -- deferred)
├── components/
│   └── MenuItemCard.tsx          # single item's display card, used as FlatList row
├── app.json / package.json / tsconfig.json / babel.config.js
```

Note: your Part 1 scenario table said "Starter, Main Course, Dessert" but
the wireframes (Figures 1-3) show "Starters, Mains, Dessert" -- this build
follows the wireframes since that's what's visually on record.

## 1. Open in VS Code

Unzip this folder, then in VS Code: **File → Open Folder** → select
`ChefMenuManager`.

## 2. Install dependencies

```powershell
npm install
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

(The second command makes sure the native navigation packages match
your installed Expo SDK version exactly.)

## 3. Run the app

```powershell
npx expo start
```

- Press `a` for Android emulator
- Scan the QR code with **Expo Go** on your phone for the quickest test
- For web: `npx expo install react-native-web react-dom @expo/metro-runtime`, then press `w`

## 4. Push to GitHub

```powershell
git init
git add .
git commit -m "Part 2: Home + Manage Menu screens with navigation"
git branch -M main
git remote add origin https://github.com/popodev24/YOUR-REPO-NAME.git
git push -u origin main
```

## 5. Record your video (3-5 min)

1. Show the Home Screen -- title, empty-state message
2. Tap "Manage Menu (Add Item)" -- show the form
3. Submit with an empty field -- show the validation error
4. Fill in a valid dish -- show the "Added!" confirmation
5. Go back to Home -- show the item now appears, item count updated
6. Add 2-3 more items (different courses) to show the list updates automatically each time
7. Briefly note the layout is consistent across both screens

Upload to YouTube as **Unlisted**, grab the link.

## 6. Submission document

Word/PDF with: GitHub repo link, YouTube link, and screenshots of --
empty Home state, the Manage Menu form filled in, a validation error
showing, and Home with the populated menu list.

## How this maps to the rubric

| Requirement | Where it's handled |
|---|---|
| App title, RN components, readable text, spacing, layout (30) | `HomeScreen.tsx` + `ManageMenuScreen.tsx`, `StyleSheet` throughout |
| Capture dish name, description, course, price (25) | `ManageMenuScreen.tsx` -- `TextInput` x2, `Picker`, `TextInput` (numeric) |
| Add multiple items, view all, auto-update (25) | `MenuContext.tsx` shared state + `FlatList` in `HomeScreen.tsx` |
| Validation, error messages, success confirmation, empty-state message, consistent layout (20) | `ManageMenuScreen.tsx` `validate()` + inline errors + `Alert`; `HomeScreen.tsx` empty state |

## How this maps to Part 1's design

| Part 1 planning | Part 2 implementation |
|---|---|
| Home Screen (Figure 1) | `HomeScreen.tsx` -- stats row omitted, since Part 2's brief explicitly defers menu statistics to the Final PoE |
| Manage Menu Screen (Figure 2) | `ManageMenuScreen.tsx` -- remove (×) button omitted, since Part 2's brief explicitly defers deleting to the Final PoE |
| Filter by Course Screen (Figure 3) | Not built yet -- deferred to Final PoE per both the brief and Figure 4's flow |
| Navigation flow (Figure 4) | `App.tsx` -- `@react-navigation/native-stack`, Home <-> Manage Menu |
| Component plan (Section 4) | `<Text>` headings, `<TextInput>` (plain + multiline + numeric), `<Picker>`, `<TouchableOpacity>`, `<FlatList>` -- used exactly as planned |
