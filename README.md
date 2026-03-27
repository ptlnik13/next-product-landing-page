# Product Discovery Catalog

A small product catalog built with Next.js and Contentful. It supports audience-based pricing and CMS-driven display mappings, as required in the assignment.
---

## Live Demo

- **Deployed App:** 
- **Repository:** 

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind, CSS (custom styling)
- **CMS:** Contentful (Headless CMS)
- **Deployment:** Vercel

### Why I chose this stack

I chose **Next.js, Contentful, and Vercel** because this combination fits the assignment requirements well without adding unnecessary complexity.

- **Next.js** helped with the most important technical requirement: pricing had to be determined on the server for the current audience. It also made it easy to handle routing, server-side data fetching, cookie-based audience logic, and image optimization in one app.

- **Contentful** was a good fit because the task required display mapping to come from the CMS instead of being hardcoded in the frontend. By modeling both products and mappings in Contentful, I could keep the UI behavior content-driven and make mapping changes without changing application code.

- **Vercel** was the simplest way to deploy a public Next.js app quickly. It works especially well for take-home projects because deployment is fast, environment variables are easy to manage, and the final app can be shared immediately through a public URL.

I picked this stack because it directly supports the key requirements of the task (server-side pricing and CMS-driven mapping) while keeping the implementation simple. I also chose tools I’m comfortable with so I could focus more on correctness and UI rather than setup complexity within the time limit.

---

## Features

### Catalog Page
- Displays a grid of products with:
    - title
    - image
    - price
    - category
    - attributes

### Role-Based Content & Pricing
- **Guest (not logged in):**
    - Only sees Set A items
    - Sees guest pricing
- **Member (logged in):**
    - Sees Set A + Set B items
    - Sees member pricing

### Server-Side Pricing
- Audience (guest/member) is determined using cookies on the server
- The correct price is selected before rendering
- Only the final price is sent to the client

### Display Mapping
- Mapping configurations are defined in Contentful
- Example mappings:
    - `price_first`
    - `specs_first`
- Users can switch mappings from the UI
- Mapping changes update the UI instantly without page reload

### Filtering & Search
- Filter by category
- Text search across:
    - title
    - category
    - attributes

### Persistence
- Selected mapping is stored in localStorage
- Restored after refresh on the client side
- This can cause a brief UI flicker before hydration (can be improved by moving persistence to cookies)

### UX Enhancements
- Skeleton loading states
- Empty state for no results
- Optimized images using Next.js Image component

---

## CMS Structure
Content is split into two types so that both product data and UI behavior (mapping) can be managed from the CMS.

### Content Type: `catalogItem`

Fields:
- `title` (Text)
- `image` (Media)
- `priceLoggedOut` (Number)
- `priceLoggedIn` (Number)
- `category` (Text)
- `attributes` (Object / JSON)
- `cardSet` (Symbol: A or B)

---

### Content Type: `displayMapping`

Fields:
- `id` (Text)
- `name` (Text)
- `headerField` (Text)
- `subtitleField` (Text)
- `badgeFields` (Array of attribute keys)
- `hidePrice` (Boolean)

---

## How Display Mapping Works

Mappings are defined in the CMS and control how each product card is rendered.

Examples:

- **price_first**
    - emphasizes price prominently
    - shows attributes as secondary badges

- **specs_first**
    - emphasizes attributes (specs)
    - reduces or hides price visibility

The card layout changes based on the selected mapping, making the difference between mappings clearly visible.

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

create a `.env.local` file in the root directory with the following content:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
```
### 3. Run the App.
```bash
npm run dev
```
