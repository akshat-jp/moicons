"use client";

import { useState } from "react";

const packageManagers = [
  { id: "pnpm", command: "pnpm add motion" },
  { id: "npm", command: "npm install motion" },
  { id: "yarn", command: "yarn add motion" },
  { id: "bun", command: "bun add motion" },
] as const;

type PackageManager = (typeof packageManagers)[number]["id"];

type HeroProps = {
  onBrowse: () => void;
};

export function Hero({ onBrowse }: HeroProps) {
  const [selected, setSelected] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const selectedPackage =
    packageManagers.find((manager) => manager.id === selected) ??
    packageManagers[1];

  const copyCommand = async () => {
    await navigator.clipboard.writeText(selectedPackage.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="manrope selection:bg-neutral-900 selection:text-white relative flex w-full flex-col items-center justify-center gap-18 border-b border-neutral-200 px-4 py-20 sm:px-6 lg:py-24">
      <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-normal text-neutral-950 sm:text-5xl">
            Beautiful Animated Icons
          </h1>
          <p className="text-xl font-bold text-neutral-900 sm:text-2xl">
            <button
              type="button"
              onClick={onBrowse}
              className="rounded-md bg-neutral-200 px-2 py-0.5 transition duration-200 hover:bg-neutral-300 cursor-pointer"
            >
              Browse
            </button>{" "}
            animations with copy-ready code.
          </p>
        </div>

        <p className="max-w-2xl text-base font-semibold leading-7 text-neutral-500 sm:text-lg">
          A collection of smooth animated icons for your next project, free to
          use and easy to customize. Feel free to use them and give feedback.
        </p>
      </div>

      <button
        type="button"
        onClick={onBrowse}
        className="cursor-pointer flex w-full max-w-[260px] items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-[17px] font-semibold text-neutral-950 shadow-[0_14px_40px_rgba(17,17,26,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-50"
      >
        <CodeIcon />
        Browse Icons
      </button>

      <div className="flex w-full max-w-[460px] flex-col gap-2 pt-3 ">
        <div className="flex flex-wrap gap-2 text-[15px] font-semibold ">
          {packageManagers.map((manager) => (
            <button
              key={manager.id}
              type="button"
              onClick={() => setSelected(manager.id)}
              className={
                selected === manager.id
                  ? "rounded-md bg-neutral-800 px-3 py-1 text-white transition duration-200"
                  : "rounded-md bg-neutral-200 px-3 py-1 text-neutral-700 transition duration-200 hover:bg-neutral-300"
              }
            >
              {manager.id}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
          <code className="min-w-0 truncate manrope text-neutral-600 sm:text-base">
            {selectedPackage.command}
          </code>

          <button
            type="button"
            onClick={copyCommand}
            aria-label="Copy install command"
            className="flex size-9 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 transition duration-200 hover:bg-neutral-200"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>

      <CraftedWithMotion />
    </section>
  );
}

function CraftedWithMotion() {
  return (
    <div className="w-full max-w-[520px] rounded-lg border border-neutral-200 bg-white/90 px-4 py-3 shadow-[0_14px_40px_rgba(17,17,26,0.08)] backdrop-blur manrope">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50">
            <span className="absolute size-6 rounded-full border border-neutral-400" />
            <span className="absolute size-2 rounded-full bg-neutral-950 opacity-20 animate-ping" />
            <span className="size-1.5 rounded-full bg-neutral-950" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-bold text-neutral-950">
              Crafted with <span className="text-neutral-600 border border-transparent hover:border-neutral-200 rounded-sm px-1 hover:bg-neutral-100 transition duration:200 ">Motion</span>
            </p>
            <a
              href="https://x.com/akshat_jp"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-neutral-500 transition duration-200 hover:text-neutral-950"
            >
              by @akshat_jp
            </a>
          </div>
        </div>

        <a
          href="https://github.com/akshat-jp/moicons"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-800"
        >
          <GitHubIcon />
          Contribute
        </a>
      </div>
    </div>
  );
}

function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-600"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}
