// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Service interface
export interface Service extends CosmicObject {
  type: 'services'
  metadata: {
    service_name: string
    description: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    key_features?: string[]
    starting_price?: string
  }
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members'
  metadata: {
    full_name: string
    job_title: string
    photo?: {
      url: string
      imgix_url: string
    }
    bio?: string
    linkedin_url?: string
    email?: string
  }
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    client_name: string
    company: string
    position?: string
    quote: string
    client_photo?: {
      url: string
      imgix_url: string
    }
    rating?: {
      key: string
      value: string
    }
  }
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type: 'case-studies'
  metadata: {
    project_name: string
    client_name: string
    industry?: string
    challenge: string
    solution: string
    results: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    related_services?: Service[]
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
}