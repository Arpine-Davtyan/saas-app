import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  return (
    <div>
      CompanionSession
    </div>
  )
}

export default CompanionSession
