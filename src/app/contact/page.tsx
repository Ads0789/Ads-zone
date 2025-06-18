import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Contact Us | Simpler',
  description: 'Get in touch with the Simpler team. We are here to help!',
};

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16 py-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </header>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-headline text-primary/90">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground/90">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground/90">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background focus:ring-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground/90">Subject</Label>
                  <Input id="subject" placeholder="Regarding..." className="bg-background focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/90">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." rows={5} className="bg-background focus:ring-accent" />
                </div>
                <Button type="submit" className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary/90">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground/90">Our Office</h3>
                    <p className="text-foreground/70">123 Simplicity Lane, Suite 100<br />Innovation City, USA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground/90">Email Us</h3>
                    <a href="mailto:hello@simpler.app" className="text-foreground/70 hover:text-primary transition-colors">hello@simpler.app</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground/90">Call Us</h3>
                    <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg bg-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary/90">Find Us On Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                 <Image 
                    src="https://placehold.co/800x400.png" 
                    alt="Map placeholder" 
                    width={800} 
                    height={400} 
                    className="w-full aspect-video object-cover"
                    data-ai-hint="city map"
                  />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
