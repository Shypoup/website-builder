import { NavbarSection } from "@/components/sections/NavbarSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PricingSection } from "@/components/sections/PricingSection";

export function RenderSection({ section, selected, onClick }: any) {
  if (section.type === "navbar") {
    return (
      <NavbarSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "hero") {
    return (
      <HeroSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "content") {
    return (
      <ContentSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "features") {
    return (
      <FeaturesSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "testimonials") {
    return (
      <TestimonialsSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "contact") {
    return (
      <ContactSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "pricing") {
    return (
      <PricingSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "footer") {
    return (
      <FooterSection
        props={section.props}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  return null;
}

export function RenderSectionPreview({ section }: any) {
  if (section.type === "navbar") {
    return <NavbarSection props={section.props} preview />;
  }
  if (section.type === "hero") {
    return <HeroSection props={section.props} preview />;
  }
  if (section.type === "content") {
    return <ContentSection props={section.props} preview />;
  }
  if (section.type === "features") {
    return <FeaturesSection props={section.props} preview />;
  }
  if (section.type === "testimonials") {
    return <TestimonialsSection props={section.props} preview />;
  }
  if (section.type === "contact") {
    return <ContactSection props={section.props} preview />;
  }
  if (section.type === "pricing") {
    return <PricingSection props={section.props} preview />;
  }
  if (section.type === "footer") {
    return <FooterSection props={section.props} preview />;
  }
  return null;
} 