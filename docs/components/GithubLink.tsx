import * as React from "react";

export default function GithubLink({
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const repo = href.split("github.com/")[1];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-6 px-7 py-4 border border-gray-200 rounded-md shadow-sm hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
    >
      <img
        src={"/github-logo-light.svg"}
        alt={"Github Logo"}
        className="w-8 h-8"
      />
      <img
        src={"/github-logo-dark.svg"}
        alt={"Github Logo"}
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <span className="text-base font-semibold text-[#0969DA]">{repo}</span>
        <span className="text-sm text-gray-500">Github</span>
      </div>
    </a>
  );
}
