import AmenitiesPageClient from './amenitiesClient'

export const metadata = {
    title: 'Amenities | Rishika Builders',
    description: 'Explore world-class amenities at Rishika Builders — clubhouse, swimming pool, fitness center, landscaped gardens, smart security, and sustainable living features.',
    keywords: 'amenities, clubhouse, swimming pool, fitness center, landscaped gardens, smart security, sustainable living, real estate amenities',
    openGraph: {
        title: 'Amenities | Rishika Builders',
        description: 'Explore world-class amenities at Rishika Builders — clubhouse, swimming pool, fitness center, and more.',
        type: 'website',
    },
}

export default function AmenitiesPage() {
    return <AmenitiesPageClient />
}
