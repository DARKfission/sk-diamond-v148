import PhotoStorageGuide from "@/components/photo-storage-guide"
import PageHeader from "@/components/page-header"

export default function PhotoStoragePage() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader
        title="Photo Storage Guide"
        description="Learn how to efficiently store and manage photos for your website"
      />
      <PhotoStorageGuide />
    </main>
  )
}
