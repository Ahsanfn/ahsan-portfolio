import { siteConfig } from "@/data/site";
import { navItems } from "@/data/navigation";
import { SocialLinks } from "@/components/social-links";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/ui/nav-link";
import { Stagger, StaggerItem } from "@/components/ui/scroll-reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-10">
        <Stagger className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <StaggerItem>
            <p className="text-sm font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
          </StaggerItem>

          <StaggerItem>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </StaggerItem>

          <StaggerItem>
            <SocialLinks showEmail />
          </StaggerItem>
        </Stagger>
      </Container>

      <Container className="border-t border-border py-6">
        <Stagger>
          <StaggerItem>
            <p className="text-xs text-muted">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </StaggerItem>
        </Stagger>
      </Container>
    </footer>
  );
}
