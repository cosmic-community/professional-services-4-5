import { CaseStudy } from '@/types'
import Link from 'next/link'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
        {caseStudy.metadata.featured_image && (
          <div className="h-64 overflow-hidden">
            <img
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_name}
              width="600"
              height="300"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span className="font-semibold">{caseStudy.metadata.client_name}</span>
            {caseStudy.metadata.industry && (
              <>
                <span>•</span>
                <span>{caseStudy.metadata.industry}</span>
              </>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {caseStudy.metadata.project_name}
          </h3>
          
          <div
            className="text-gray-600 line-clamp-2 mb-4"
            dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
          />
          
          {caseStudy.metadata.related_services && caseStudy.metadata.related_services.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {caseStudy.metadata.related_services.map((service) => (
                <span
                  key={service.id}
                  className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                >
                  {service.metadata.service_name}
                </span>
              ))}
            </div>
          )}
          
          <div className="mt-4 flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            Read Case Study
            <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}