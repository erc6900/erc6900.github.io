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
            image: "./eth-foundation-light.svg",
          },
          {
            name: "Circle",
            link: "https://walletconnect.com",
            image: "./circle-logo-light.svg",
          },
          {
            name: "Quantstamp",
            link: "https://www.stripe.com",
            image: "./quantstamp-logo-light.svg",
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
            link: "https://www.stripe.com",
            image: "./trust-wallet-logo-light.svg",
          },
          {
            name: "Alchemy",
            link: "https://www.stripe.com",
            image: "./alchemy-logo-light.svg",
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
  ],
});
