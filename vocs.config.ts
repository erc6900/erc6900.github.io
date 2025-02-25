import { defineConfig } from "vocs";

const version = "v0.8.0";

export default defineConfig({
  title: "ERC-6900",
  description:
    "Interfaces for smart contract accounts and modules, optionally supporting upgradability and introspection.",
  topNav: [
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/erc6900/reference-implementation/releases",
        },
      ],
    },
  ],
  sidebar: [
    {
      text: "Introduction",
      link: "/",
    },
    {
      text: "Accounts",
      link: "/accounts",
    },
    {
      text: "Modules",
      link: "/modules",
    },
    {
      text: "Tooling",
      link: "/tooling",
    },
    {
      text: "Perk Programs",
      link: "/perks",
    },
    {
      text: "Resources",
      collapsed: true,
      items: [
        {
          text: "Terminology",
          link: "/terminology",
        },
        {
          text: "Technical Resources",
          link: "/technical-resources",
        },
        {
          text: "Articles",
          link: "/articles",
        },
        {
          text: "Videos",
          link: "/videos",
        },
      ],
    },
  ],
  sponsors: [
    {
      name: "Authors and Contributors",
      height: 120,
      items: [
        [
          {
            name: "Ethereum Foundation",
            link: "https://ethereum.org/en/",
            image: "./eth-foundation.svg",
          },
          {
            name: "Circle",
            link: "https://circle.com",
            image: "./circle-logo.svg",
          },
          {
            name: "Quantstamp",
            link: "https://www.quantstamp.com",
            image: "./quantstamp-logo.svg",
          },
        ],
        [
          {
            name: "Trust Wallet",
            link: "https://trustwallet.com",
            image: "./trust-wallet-logo.svg",
          },
          {
            name: "Alchemy",
            link: "https://alchemy.com",
            image: "./alchemy-logo.svg",
          },
          {
            name: "Exactly Protocol",
            link: "https://exact.ly/",
            image: "./exactly-logo.svg",
          },
        ],
        [
          {
            name: "Maple Finance",
            link: "https://maple.finance/",
            image: "./maple-logo.webp",
          },
          {
            name: "Libree",
            link: "https://www.libree.xyz/",
            image: "./libree-logo.png",
          },
          {
            name: "Axiom",
            link: "https://www.axiom.xyz/",
            image: "./axiom-logo.png",
          },
        ],
      ],
    },
  ],
  socials: [
    {
      link: "https://github.com/erc6900/reference-implementation",
      icon: "github",
    },
    {
      link: "https://x.com/erc6900",
      icon: "x",
    },
    {
      link: "https://t.me/modular_account_standards",
      icon: "telegram",
    },
  ],
});
