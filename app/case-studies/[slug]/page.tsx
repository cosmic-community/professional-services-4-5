// app/case-studies/[slug]/page.tsx
import { getCaseStudy } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const typedCaseStudy = caseStudy as CaseStudy

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{typedCaseStudy.metadata.project_name}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <span className="font-semibold">{typedCaseStudy.metadata.client_name}</span>
            {typedCaseStudy.metadata.industry && (
              <>
                <span>•</span>
                <span>{typedCaseStudy.metadata.industry}</span>
              </>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {typedCaseStudy.metadata.featured_image && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={`${typedCaseStudy.metadata.featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={typedCaseStudy.metadata.project_name}
              width="800"
              height="400"
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">The Challenge</h2>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: typedCaseStudy.metadata.challenge }}
            />
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Solution</h2>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: typedCaseStudy.metadata.solution }}
            />
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">The Results</h2>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: typedCaseStudy.metadata.results }}
            />
          </section>
        </div>

        {/* Related Services */}
        {typedCaseStudy.metadata.related_services && typedCaseStudy.metadata.related_services.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {typedCaseStudy.metadata.related_services.map((service) => (
                <div key={service.id} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{service.metadata.service_name}</h3>
                  <div
                    className="text-gray-600 mb-4 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: service.metadata.description }}
                  />
                  {service.metadata.starting_price && (
                    <p className="text-primary font-semibold">
                      Starting at {service.metadata.starting_price}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}