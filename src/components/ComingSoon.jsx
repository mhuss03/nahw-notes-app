import { Card, CardHeader, CardContent } from "@mui/material";
import { Button } from "@mui/material";

export default function ComingSoon() {
  return (
    <>
      <main className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Coming Soon: A Feature to Track Your Progress
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our new feature will allow you to monitor your learning journey,
                assess your strengths and weaknesses, and make your learning
                process more effective. Stay tuned!
              </p>
            </div>
          </div>
        </div>
        <section className="w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardContent>
                  <h2 className="font-bold">Personalized Dashboard</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Visualize your learning journey with a personalized
                    dashboard, showing your progress and areas for improvement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="font-bold">Goal Setting</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Set your language learning objectives and track your
                    progress towards them.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="font-bold">Detailed Progress Report</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get a detailed report on your learning progress, identifying
                    areas you excel in and where you need to focus more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Notified
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up now to receive updates about the new feature launch
                  and get early access.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Sign Up
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
