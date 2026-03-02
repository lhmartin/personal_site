import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      {/* Gradient accent bar pinned to the top of the viewport */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 print:hidden" />

      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6 print:bg-white">
        {/* Hero card */}
        <div className="animate-fade-in rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="bg-gradient-to-r from-slate-900 to-teal-700 bg-clip-text text-2xl font-bold text-transparent print:text-slate-900">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8 transition-all hover:border-teal-500 hover:text-teal-600"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8 transition-all hover:border-teal-500 hover:text-teal-600"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8 transition-all hover:border-teal-500 hover:text-teal-600"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">{RESUME_DATA.contact.email}</span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28 ring-2 ring-teal-500/20 ring-offset-2">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Section className="animate-fade-in-delay-1">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="inline-block h-5 w-1 rounded-full bg-teal-500" />
            About
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section className="animate-fade-in-delay-2">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="inline-block h-5 w-1 rounded-full bg-teal-500" />
            Work Experience
          </h2>
          <div className="relative space-y-3">
            {/* Vertical timeline line */}
            <div className="absolute left-[7px] top-5 h-[calc(100%-28px)] w-0.5 bg-gradient-to-b from-teal-500/60 via-teal-500/30 to-transparent print:hidden" />
            {RESUME_DATA.work.map((work) => {
              return (
                <div
                  key={`${work.company}-${work.title}`}
                  className="relative pl-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-4 size-3.5 rounded-full border-2 border-teal-500 bg-white print:hidden" />
                  <Card className="transition-shadow duration-200 hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <a className="hover:underline" href={work.link}>
                            {work.company}
                          </a>

                          <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          {work.start} - {work.end}
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none text-teal-700">
                        {work.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="mt-2 text-xs">
                      {work.description}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </Section>

        <Section className="animate-fade-in-delay-3">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="inline-block h-5 w-1 rounded-full bg-teal-500" />
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card
                key={education.school}
                className="transition-shadow duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="animate-fade-in-delay-4">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="inline-block h-5 w-1 rounded-full bg-teal-500" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  className="cursor-default bg-slate-900 text-white transition-colors duration-150 hover:bg-teal-700"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section className="animate-fade-in-delay-5 print-force-new-page scroll-mb-16">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span className="inline-block h-5 w-1 rounded-full bg-teal-500" />
            Projects
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  projectPage={"projectPage" in project ? project.projectPage : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
