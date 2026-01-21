import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="relative bg-white border-2 border-[#E1E5EF] rounded-xl p-6 h-full transition-all duration-300 hover:border-sardine-purple/50 hover:shadow-lg">
        <div className="flex flex-col items-start space-y-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-sardine-purple/10 to-sardine-purple-bright/10 border border-sardine-purple/20">
            <Icon className="w-6 h-6 text-sardine-purple" />
          </div>
          <div>
            <h3 className="text-[#0B0C0E] text-lg font-semibold mb-2">{title}</h3>
            <p className="text-[#7E8DAA] text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
