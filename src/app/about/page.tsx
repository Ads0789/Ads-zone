import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BookOpen, Users, Award } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Us | Simpler',
  description: 'Learn more about Simpler, our mission, and our team.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16 py-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
          About Simpler
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          We believe in the power of simplicity to unlock productivity and peace of mind.
        </p>
      </header>

      <section className="container mx-auto px-4">
        <Card className="shadow-lg overflow-hidden bg-card">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Our Story illustration" 
                width={800} 
                height={600}
                className="object-cover h-full w-full"
                data-ai-hint="journey path"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center text-primary mb-2">
                  <BookOpen className="h-8 w-8 mr-3" />
                  <CardTitle className="text-3xl font-headline">Our Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/75 mb-4">
                  Simpler was born from a desire to cut through the clutter of modern digital tools. We noticed that as applications became more feature-rich, they often became more complex and overwhelming. Our founders, a group of designers and developers passionate about user experience, set out to create a suite of tools that are powerful yet intuitive, sophisticated yet simple.
                </p>
                <p className="text-foreground/75">
                  We started with a simple question: "What if software could feel as calming and organized as a perfectly minimalist workspace?" This question drives our design philosophy and our commitment to creating products that genuinely improve people's lives by reducing stress and enhancing focus.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      <section className="container mx-auto px-4">
         <Card className="shadow-lg overflow-hidden bg-card">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Our Mission illustration" 
                width={800} 
                height={600}
                className="object-cover h-full w-full"
                data-ai-hint="target goal"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center text-primary mb-2">
                  <Target className="h-8 w-8 mr-3" />
                  <CardTitle className="text-3xl font-headline">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/75 mb-4">
                  Our mission is to empower individuals and teams to achieve more by doing less. We strive to build software that is not only functional but also a joy to use. We aim to simplify complex tasks, promote clarity, and foster a sense of calm in a digitally noisy world.
                </p>
                <p className="text-foreground/75">
                  We are committed to continuous improvement, guided by user feedback and a relentless pursuit of simplicity. We believe that the best tools are those that get out of your way, allowing you to concentrate on what's truly important.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>
      
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary/90 mb-10">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "User-Centricity", description: "Our users are at the heart of everything we design and build.", icon: <Users className="h-8 w-8 text-accent" /> },
            { title: "Elegant Simplicity", description: "We believe true sophistication lies in simplicity and clarity.", icon: <Award className="h-8 w-8 text-accent" /> },
            { title: "Continuous Improvement", description: "We are always learning, iterating, and striving to be better.", icon: <Lightbulb className="h-8 w-8 text-accent" /> },
          ].map(value => (
            <Card key={value.title} className="bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary/90 mb-10">
          Meet the Team (Placeholder)
        </h2>
        <p className="text-lg text-foreground/75 max-w-xl mx-auto">
          We are a passionate group of innovators, designers, and thinkers dedicated to making technology simpler and more accessible for everyone. More details about our amazing team members will be here soon!
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col items-center">
              <Image 
                src={`https://placehold.co/200x200.png`} 
                alt={`Team member ${i}`}
                width={150}
                height={150}
                className="rounded-full mb-3 shadow-md"
                data-ai-hint="person portrait"
              />
              <h4 className="font-semibold text-primary/80">Team Member {i}</h4>
              <p className="text-sm text-muted-foreground">Role/Title</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
