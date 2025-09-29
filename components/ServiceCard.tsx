import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {service.metadata.featured_image && (
        <div className="h-48 overflow-hidden">
          <img
            src={`${service.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            width="400"
            height="200"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{service.metadata.service_name}</h3>
        
        <div
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: service.metadata.description }}
        />
        
        {service.metadata.key_features && service.metadata.key_features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {service.metadata.key_features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {service.metadata.starting_price && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-primary font-bold text-lg">
              Starting at {service.metadata.starting_price}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}