import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-background to-secondary/30 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6 tracking-tight">
            Welcome to Simpler
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Discover a new way to manage your digital life with elegance and ease. Simpler helps you focus on what truly matters.
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12 text-primary/90">
          Why Choose Simpler?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="h-10 w-10 text-primary" />,
              title: "Intuitive Design",
              description: "Experience a clean, minimalist interface designed for focus and productivity.",
              image: "https://placehold.co/600x400.png",
              aiHint: "minimalist abstract"
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
              title: "Effortless Organization",
              description: "Seamlessly manage your tasks, notes, and projects all in one place.",
              image: "https://placehold.co/600x400.png",
              aiHint: "organized desk"
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Collaborate Simply",
              description: "Share and work together with your team without the usual complexity.",
              image: "https://placehold.co/600x400.png",
              aiHint: "team collaboration"
            },
          ].map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-card">
              <CardHeader className="items-center text-center pb-4">
                {feature.icon}
                <CardTitle className="mt-4 text-2xl font-headline text-primary/90">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={600} 
                  height={400} 
                  className="rounded-md mb-4 aspect-[3/2] object-cover"
                  data-ai-hint={feature.aiHint} 
                />
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dynamic Content Placeholder Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-card rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12 text-primary/90">
          Latest Updates
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image 
                src={`https://placehold.co/600x350.png`} 
                alt={`Dynamic content ${item}`} 
                width={600} 
                height={350} 
                className="w-full aspect-video object-cover"
                data-ai-hint="news article"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-2 text-primary/80">Dynamic Item Title {item}</h3>
                <p className="text-foreground/70 mb-4">
                  This is a placeholder for dynamic content fetched from Firestore. It could be a blog post, product, or any other update.
                </p>
                <Button variant="link" className="p-0 text-primary hover:underline">Read More &rarr;</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" asChild className="shadow-sm hover:shadow-md transition-shadow">
            <Link href="/updates">View All Updates</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 text-center py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
          Ready to Simplify Your Life?
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-8">
          Join Simpler today and experience the difference a truly simple tool can make.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Link href="/signup">Get Started for Free</Link>
        </Button>
      </section>
    </div>
  );
}
