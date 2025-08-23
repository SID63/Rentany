# Rent Any

A modern rental platform built with Next.js, designed to connect renters with property owners seamlessly.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Type Safety**: Full TypeScript implementation for robust development
- **Performance Optimized**: Built with Next.js 15 and App Router for optimal performance
- **SEO Ready**: Comprehensive meta tags and sitemap generation
- **Developer Experience**: ESLint, Prettier, and comprehensive tooling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd rent-any
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your specific configuration:

```env
NEXT_PUBLIC_APP_NAME=Rent Any
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@rentany.com
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run type-check` - Run TypeScript type checking

### Building
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run preview` - Build and start production server locally
- `npm run build:analyze` - Build with bundle analyzer
- `npm run vercel-build` - Build command used by Vercel

### Code Quality
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

## 🏗️ Project Structure

```
rent-any/
├── .next/                 # Next.js build output
├── .vercel/              # Vercel deployment config
├── public/               # Static assets
│   ├── favicon.ico       # Rent Any branded favicon
│   ├── logo.svg          # Rent Any logo
│   └── images/           # Application images
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   └── contact/      # Contact page
│   ├── components/       # Reusable components
│   │   ├── ui/           # Base UI components
│   │   └── layout/       # Layout components
│   └── lib/              # Utility functions
├── .env.local            # Local environment variables
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vercel.json           # Vercel deployment configuration
```

## 🚀 Deployment

### Vercel (Recommended)

This application is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your application

The application includes a `vercel.json` configuration file for optimal deployment settings.

### Manual Deployment

For other platforms:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_NAME` | Application name displayed in UI | Yes |
| `NEXT_PUBLIC_APP_URL` | Base URL of the application | Yes |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email for the application | Yes |

### Tailwind CSS

The application uses Tailwind CSS v4 with a custom configuration. Brand colors and typography are defined in `tailwind.config.js`.

### TypeScript

Strict TypeScript configuration is enabled for better code quality and developer experience.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style (enforced by ESLint and Prettier)
- Write meaningful commit messages
- Add appropriate comments for complex logic

## 📝 License

This project is private and proprietary.

## 📞 Support

For support, email contact@rentany.com or create an issue in the repository.

## 🔄 Version History

- **v0.1.0** - Initial release with Rent Any branding
  - Modern Next.js 15 application
  - Responsive design with Tailwind CSS
  - TypeScript implementation
  - Vercel deployment optimization

---

Built with ❤️ by the Rent Any team