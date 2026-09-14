"use client";

import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from "./ui/StaggeredMenu";

interface NavbarProps {
  onOpenSpocModal: () => void;
  onOpenGuidelinesModal: () => void;
}

export default function Navbar({ onOpenSpocModal, onOpenGuidelinesModal }: NavbarProps) {
  const menuItems: StaggeredMenuItem[] = [
    { label: "The Arena", link: "#arena", ariaLabel: "Software vs Hardware Arena" },
    { label: "Process Roadmap", link: "#journey", ariaLabel: "6-Phase National Process" },
    { label: "16 Themes", link: "#themes", ariaLabel: "16 Innovation Domains" },
    { label: "Nodal Radar", link: "#radar", ariaLabel: "75+ Pan-India Hubs" },
    { label: "Leadership", link: "#leadership", ariaLabel: "Vision & Governance" },
    { label: "Find College SPOC", link: "#", ariaLabel: "Find College SPOC", onClick: onOpenSpocModal },
    { label: "Download Idea PPT", link: "#", ariaLabel: "Download Idea Presentation Format", onClick: onOpenGuidelinesModal },
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: "AICTE Portal", link: "https://aicte-india.org" },
    { label: "MIC Innovation", link: "https://mic.gov.in" },
    { label: "SIH Alumni", link: "https://alumni.mic.gov.in" },
    { label: "Official SIH", link: "https://sih.gov.in" },
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      colors={["#FF8A00", "#059669", "#121316"]}
      accentColor="#FF7700"
      isFixed={true}
      closeOnClickAway={true}
      onOpenSpocModal={onOpenSpocModal}
    />
  );
}
