import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MediaNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Media Gallery Coming Soon</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We're currently working on our media gallery. Please check back later for updates.
      </p>
      <Link href="/">
        <Button className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </Link>
    </div>
  )
}
