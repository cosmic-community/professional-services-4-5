# Professional Services Showcase

![App Preview](https://imgix.cosmicjs.com/1dc70df0-9d7e-11f0-8dcc-651091f6a7c0-photo-1460925895917-afdab827c52f-1759182543773.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application built with Next.js 15 and Cosmic CMS that showcases professional services, team members, client testimonials, and case studies. Perfect for service-based businesses looking to establish a strong online presence.

## ✨ Features

- **Dynamic Service Portfolio** - Showcase services with detailed information, key features, and pricing
- **Team Showcase** - Professional team member profiles with photos, bios, and contact details
- **Client Testimonials** - Social proof with client reviews, ratings, and company information
- **Case Study Gallery** - Detailed project stories showing challenge, solution, and results
- **Responsive Design** - Fully responsive layout optimized for all devices
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Performance** - Server-side rendering and image optimization
- **Type-Safe** - Full TypeScript implementation with strict typing
- **Modern UI** - Clean, professional design with smooth animations

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68dafe678d0995fa5541db02&clone_repository=68daffa68d0995fa5541db23)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Content management integration
- **React 18** - Modern React features
- **Bun** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with the required content types (services, team-members, testimonials, case-studies)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const services = response.objects as Service[]
```

### Fetching Team Members

```typescript
const response = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const team = response.objects as TeamMember[]
```

### Fetching Case Studies with Related Services

```typescript
const response = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Important: includes related services

const caseStudies = response.objects as CaseStudy[]
```

## 🎨 Cosmic CMS Integration

This application uses your existing Cosmic content model with the following object types:

- **Services** - Service offerings with features, pricing, and descriptions
- **Team Members** - Staff profiles with photos, bios, and contact information
- **Testimonials** - Client reviews with ratings and company details
- **Case Studies** - Project stories with challenge, solution, and results

The app leverages object relationships (metadata fields) to display related services within case studies, providing a seamless content experience.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->