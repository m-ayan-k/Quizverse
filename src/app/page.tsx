import SignIn from '@/components/SignIn'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizverse</CardTitle>
          <CardDescription>
            Quizverse is a platform for creating quizzes using AI!. Get started
            by loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  )
}
