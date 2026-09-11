"use client";

import { FormEvent, useId, useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const statusId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("ready");
  }

  const githubHref = siteConfig.social.github.href;
  const linkedinHref = siteConfig.social.linkedin.href;

  return (
    <section id="contact" className="scroll-mt-[5.5rem] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s talk about a role or a product."
              description="The form UI is ready. Until a backend is connected, email is the most reliable way to reach me."
            />

            <ScrollReveal delay={0.08}>
              <ul className="mt-8 space-y-3 text-sm">
                <li>
                  <span className="text-muted">Email</span>
                  <br />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="nav-underline text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="text-muted">LinkedIn</span>
                  <br />
                  {linkedinHref ? (
                    <a
                      href={linkedinHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-underline text-foreground"
                    >
                      linkedin.com/in/ahsan-akbar
                    </a>
                  ) : null}
                </li>
                <li>
                  <span className="text-muted">GitHub</span>
                  <br />
                  {githubHref ? (
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-underline text-foreground"
                    >
                      github.com/Ahsanfn
                    </a>
                  ) : (
                    <span className="text-muted">Profile URL coming soon</span>
                  )}
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            aria-label="Contact form"
            aria-describedby={status === "ready" ? statusId : undefined}
          >
            <Stagger className="space-y-5" delay={0.06}>
              <StaggerItem>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="A short note about the role, product, or question."
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit">Send Message</Button>
                  {status === "ready" ? (
                    <p id={statusId} className="text-sm text-muted" role="status">
                      Nothing was sent — this form is not connected yet. Email{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="nav-underline text-foreground"
                      >
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  ) : (
                    <p className="text-sm text-muted">
                      Submitting will not send a message until a backend is added.
                    </p>
                  )}
                </div>
              </StaggerItem>
            </Stagger>
          </form>
        </div>
      </Container>
    </section>
  );
}
