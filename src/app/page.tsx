"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DCash Affiliate | Welcome to our affiliate program</title>
        <meta
          name="description"
          content="Join our market-leading partnership programs to prioritize high conversion rates, flexible remuneration, and outstanding marketing and operational support."
        />
      </Head>

      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DCash</span>
                <Image
                  className="h-12 w-auto"
                  src="/images/logo.svg"
                  alt=""
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <div className="flex lg:hidden gap-3">
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="ml-2 bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/register">Apply Now</Link>
              </Button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="ml-2 bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/register">Apply Now</Link>
              </Button>
            </div>
          </nav>
        </header>

        <div className="relative isolate pt-14">
          {/* background grid svg */}
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          <div className="flex min-h-screen items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:gap-x-10 lg:px-8">
              <div className="mx-auto max-w-2xl">
                <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                  <span className="inline-block">Welcome to our </span>
                  <span className="relative whitespace-nowrap text-indigo-600">
                    <Image
                      src="/images/underline.svg"
                      className="absolute left-0 top-2/3 h-[0.58em] w-full fill-indigo-300/70"
                      alt=""
                      width={500}
                      height={16}
                    />
                    <span className="relative">affiliate</span>
                  </span>{" "}
                  <span className="inline-block">program</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join our market-leading partnership programs to prioritize high
                  conversion rates, flexible remuneration, and outstanding marketing
                  and operational support.
                </p>

                <div className="items-center justify-center gap-x-6">
                  <Link
                    href="/register"
                    title=""
                    className="mt-8 inline-flex items-center rounded-full bg-indigo-600 px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-indigo-700 lg:mt-16"
                  >
                    Apply now
                    <svg
                      className="-mr-2 ml-8 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>

                  <p className="mt-5 text-gray-600">
                    Already joined us?{" "}
                    <Link
                      href="/login"
                      className="text-indigo-600 transition-all duration-200 hover:underline"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
