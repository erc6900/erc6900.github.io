import { defineConfig } from "vocs";

const version = "v0.8.0";

export default defineConfig({
  title: "ERC-6900",
  description: "Interfaces for composable smart accounts",
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
      name: " ",
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
      ],
    },
    {
      name: " ",
      height: 120,
      items: [
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
