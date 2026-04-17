# KeenKeeper

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
</p>

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a personal relationship management app that helps you stay connected with the friends who matter most. Track your interactions, set relationship goals, and visualize your friendship maintenance patterns.

---

## 🚀 Key Features

### 1. Friend Management Dashboard

Keep all your important relationships in one place. View your friends' profiles with their contact history, relationship status, and next due dates. The dashboard provides a quick overview of your social wellness with stats showing total friends, those on track, and those needing attention.

### 2. Interaction Logging

Easily log how you've connected with friends through quick check-ins—Call, Text, or Video. Each interaction is timestamped and saved to your personal timeline, helping you maintain meaningful connections without the mental overhead of remembering last contact.

### 3. Analytics & Timeline

Gain insights into your relationship maintenance patterns with visual analytics. The Stats page features an interactive pie chart showing your interaction distribution by type. The Timeline provides a chronological feed of all your check-ins, filterable by interaction type.

---

## 🛠️ Technologies Used

| Category       | Technology         |
| -------------- | ------------------ |
| **Framework**  | Next.js 16.2.3     |
| **UI Library** | React 19.2.4       |
| **Language**   | TypeScript         |
| **Styling**    | Tailwind CSS 4.2.2 |
| **Components** | DaisyUI 5.5.19     |
| **Charts**     | Recharts           |
| **Icons**      | Lucide React       |

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/keenkeeper.git
cd keenkeeper
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
keenkeeper/
├── app/                    # Next.js App Router pages
│   ├── friend/[id]/       # Individual friend profile page
│   ├── stats/             # Analytics dashboard
│   ├── timeline/          # Interaction history timeline
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home/dashboard page
├── components/            # Reusable UI components
│   ├── Banner.tsx         # Hero section with stats
│   ├── Footer.tsx         # Site footer
│   ├── FriendsGrid.tsx    # Friends list grid
│   └── Navbar.tsx         # Navigation bar
├── data/                  # Static data files
│   └── friends.json       # Sample friend data
├── public/                # Static assets
└── package.json           # Dependencies
```

---

## 📱 Pages

| Route          | Description                                   |
| -------------- | --------------------------------------------- |
| `/`            | Dashboard with friend grid and stats overview |
| `/friend/[id]` | Individual friend profile with quick check-in |
| `/timeline`    | Chronological list of all interactions        |
| `/stats`       | Analytics charts showing interaction patterns |

---
