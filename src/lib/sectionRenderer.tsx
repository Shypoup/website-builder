import { NavbarSection, NavbarSectionProps } from "@/components/sections/NavbarSection";
import { HeroSection, HeroSectionProps } from "@/components/sections/HeroSection";
import { FooterSection, FooterSectionProps } from "@/components/sections/FooterSection";
import { ContentSection, ContentSectionProps } from "@/components/sections/ContentSection";
import { FeaturesSection, FeaturesSectionProps } from "@/components/sections/FeaturesSection";
import { TestimonialsSection, TestimonialsSectionProps } from "@/components/sections/TestimonialsSection";
import { ContactSection, ContactSectionProps } from "@/components/sections/ContactSection";
import { PricingSection, PricingSectionProps } from "@/components/sections/PricingSection";

type Section = { type: string; props: Record<string, unknown> };

interface RenderSectionProps {
  section: Section;
  selected?: boolean;
  onClick?: () => void;
}

export function RenderSection({ section, selected, onClick }: RenderSectionProps) {
  if (section.type === "navbar") {
    return (
      <NavbarSection
        props={section.props as unknown as NavbarSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "hero") {
    return (
      <HeroSection
        props={section.props as unknown as HeroSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "content") {
    return (
      <ContentSection
        props={section.props as unknown as ContentSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "features") {
    return (
      <FeaturesSection
        props={section.props as unknown as FeaturesSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "testimonials") {
    return (
      <TestimonialsSection
        props={section.props as unknown as TestimonialsSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "contact") {
    return (
      <ContactSection
        props={section.props as unknown as ContactSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "pricing") {
    return (
      <PricingSection
        props={section.props as unknown as PricingSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  if (section.type === "footer") {
    return (
      <FooterSection
        props={section.props as unknown as FooterSectionProps["props"]}
        selected={selected}
        onClick={onClick}
      />
    );
  }
  return null;
}

export function RenderSectionPreview({ section }: { section: Section }) {
  if (section.type === "navbar") {
    return <NavbarSection props={section.props as unknown as NavbarSectionProps["props"]} preview />;
  }
  if (section.type === "hero") {
    return <HeroSection props={section.props as unknown as HeroSectionProps["props"]} preview />;
  }
  if (section.type === "content") {
    return <ContentSection props={section.props as unknown as ContentSectionProps["props"]} preview />;
  }
  if (section.type === "features") {
    return <FeaturesSection props={section.props as unknown as FeaturesSectionProps["props"]} preview />;
  }
  if (section.type === "testimonials") {
    return <TestimonialsSection props={section.props as unknown as TestimonialsSectionProps["props"]} preview />;
  }
  if (section.type === "contact") {
    return <ContactSection props={section.props as unknown as ContactSectionProps["props"]} preview />;
  }
  if (section.type === "pricing") {
    return <PricingSection props={section.props as unknown as PricingSectionProps["props"]} preview />;
  }
  if (section.type === "footer") {
    return <FooterSection props={section.props as unknown as FooterSectionProps["props"]} preview />;
  }
  return null;
} 