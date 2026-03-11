# Smart Operations Dashboard

A modern React dashboard for monitoring Field Operations (FO) performance across different regions. Built with Vite, React, Tailwind CSS, and Recharts.

## 🚀 Features

- **Regional Filtering**: Filter performance data by region (All, Jabodetabek, Jawa Barat)
- **Performance Metrics**: Real-time SLA achievement and ticket statistics
- **Interactive Charts**: Visual representations using Recharts library
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Export Functionality**: Download performance data as CSV

## 📊 Dashboard Components

- **Header Section**: Title and regional filter controls
- **Statistics Cards**: Total tickets and average SLA percentage
- **Visualization Charts**: Bar charts for SLA and line charts for efficiency
- **Data Table**: Detailed performance metrics with ranking

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project is configured for easy deployment to Netlify, Vercel, or any static hosting service.

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

## 📁 Project Structure

```
src/
├── App.jsx          # Main dashboard component
├── index.css        # Tailwind CSS directives
├── main.jsx         # React entry point
└── assets/          # Static assets
```

## 🎯 Data Format

The dashboard processes performance data with the following structure:
- Regional information
- PIC (Person in Charge) names
- SLA achievement percentages
- Ticket volumes and efficiency metrics

## 🔧 Configuration

- **Tailwind Config**: `tailwind.config.js`
- **PostCSS Config**: `postcss.config.js`
- **Vite Config**: `vite.config.js`
