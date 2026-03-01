import { notFound } from 'next/navigation';
import ProjectCategoryClient from './projectCategoryClient';
import categoriesData from '../categories.json';
import projectsData from '../projects.json';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categoriesData.find(cat => cat.slug === slug);

  if (!category) {
    return {
      title: 'Project Not Found | Rishika Builders',
    };
  }

  return {
    title: `${category.title} - Premium Real Estate Projects | Rishika Builders`,
    description: category.description,
    keywords: `${category.title}, real estate projects, properties, ${category.slug}, RERA approved`,
    openGraph: {
      title: `${category.title} - Premium Real Estate Projects | Rishika Builders`,
      description: category.description,
      url: `https://www.rishikabuilders.com/projects/${category.slug}`,
      siteName: 'Rishika Builders',
      images: [
        {
          url: `https://www.rishikabuilders.com${category.image}`,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} - Premium Real Estate Projects | Rishika Builders`,
      description: category.description,
      images: [`https://www.rishikabuilders.com${category.image}`],
    },
    alternates: {
      canonical: `https://www.rishikabuilders.com/projects/${category.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return categoriesData.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = categoriesData.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProjects = projectsData.filter(product =>
    category.projects.includes(product.slug)
  );

  return <ProjectCategoryClient category={category} projects={categoryProjects} />;
}
