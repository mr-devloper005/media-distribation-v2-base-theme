import { EditableTaskArchiveRoute, taskMetadata } from '@/editable/pages/TaskArchivePage'
export const revalidate = 3
export const generateMetadata = () => taskMetadata('mediaDistribution', '/updates')
export default async function MediaDistributionPage({ searchParams }: { searchParams?: Promise<{ category?: string; page?: string }> }) { return <EditableTaskArchiveRoute task="mediaDistribution" searchParams={searchParams} basePath="/updates" /> }
