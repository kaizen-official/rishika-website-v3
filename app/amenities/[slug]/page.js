import categoriesData from '../categories.json'
import amenitiesData from '../amenities.json'
import AccessoryCategoryClient from './amenitiesCategoryClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = categoriesData.find(cat => cat.slug === slug);

    if (!category) {
        return {
            title: 'Category Not Found | Rishika Builders',
        };
    }

    return {
        title: `${category.title} | Rishika Builders`,
        description: category.description,
        keywords: `${category.title}, amenities, ${slug}`,
        openGraph: {
            title: `${category.title} | Rishika Builders`,
            description: category.description,
            images: [category.image],
        },
    };
}

export async function generateStaticParams() {
    return categoriesData.map((category) => ({
        slug: category.slug,
    }));
}

export default async function AccessoryCategoryPage({ params }) {
    const { slug } = await params;
    const category = categoriesData.find(cat => cat.slug === slug);

    if (!category) {
        notFound();
    }

    const amenities = amenitiesData.filter(acc => acc.category === slug);

    return <AccessoryCategoryClient category={category} amenities={amenities} />;
}
