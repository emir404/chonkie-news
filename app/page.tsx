"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Clock } from "@/components/ui/clock";
import Logo from "@/components/ui/logo";
import { fetchHomepageArticles, fetchCities } from "@/lib/api";
import { NewsArticle, City } from "@/lib/types";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Featured article component (large title - 48px)
function FeaturedArticle({ article }: { article: NewsArticle }) {
  return (
    <article className="flex flex-col gap-6">
      <h2 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-card-foreground">
        {article.title}
      </h2>
      <div className="text-base leading-6 text-muted-foreground whitespace-pre-line">
        {article.content}
      </div>
      {article.imageUrl && (
        <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-lg bg-[rgba(230,223,199,0.25)]">
          <Image
            src={article.imageUrl}
            alt="Article illustration"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
      )}
    </article>
  );
}

// Standard article component (smaller title - 24px)
function Article({ article }: { article: NewsArticle }) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold leading-none text-card-foreground">
        {article.title}
      </h3>
      <div className="text-base leading-6 text-muted-foreground whitespace-pre-line">
        {article.content}
      </div>
      {article.imageUrl && (
        <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-lg bg-[rgba(230,223,199,0.25)]">
          <Image
            src={article.imageUrl}
            alt="Article illustration"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
      )}
    </article>
  );
}

// Custom separator with the design color
function ContentSeparator({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-[#e6dfc7] rounded-full ${className}`} />;
}

// Vertical separator component
function VerticalSeparator({ className = "" }: { className?: string }) {
  return <div className={`w-px bg-[#e6dfc7] rounded-full ${className}`} />;
}

// Loading skeleton for articles
function ArticleSkeleton({ isFeatured = false }: { isFeatured?: boolean }) {
  return (
    <article className="flex flex-col gap-4 animate-pulse">
      <div
        className={`bg-[#e6dfc7] rounded ${isFeatured ? "h-14" : "h-8"} w-3/4`}
      />
      <div className="space-y-2">
        <div className="bg-[#e6dfc7] rounded h-4 w-full" />
        <div className="bg-[#e6dfc7] rounded h-4 w-full" />
        <div className="bg-[#e6dfc7] rounded h-4 w-2/3" />
      </div>
    </article>
  );
}

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [leftColumn, setLeftColumn] = useState<NewsArticle[]>([]);
  const [rightColumn, setRightColumn] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [citiesData, articlesData] = await Promise.all([
          fetchCities(),
          fetchHomepageArticles(),
        ]);

        setCities(citiesData);
        setLeftColumn(articlesData.leftColumn);
        setRightColumn(articlesData.rightColumn);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const leftCities = cities.slice(0, 4);
  const rightCities = cities.slice(4);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1800px] px-20 py-14 lg:px-48">
        {/* Header with city clocks */}
        <motion.header
          className="mb-10 flex items-start justify-between"
          initial={fadeIn.initial}
          animate={!isLoading ? fadeIn.animate : fadeIn.initial}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Left cities */}
          {leftCities.map((city) => (
            <Clock key={city.code} code={city.code} timezone={city.timezone} />
          ))}

          {/* Center logo */}
          <Logo className="size-20" />

          {/* Right cities */}
          {rightCities.map((city) => (
            <Clock key={city.code} code={city.code} timezone={city.timezone} />
          ))}
        </motion.header>

        {/* Main content area */}
        <main className="relative">
          {/* Top horizontal separator */}
          <ContentSeparator className="w-full mb-10" />

          {/* Two column layout with vertical separator */}
          <div className="flex gap-14">
            {/* Left column */}
            <div className="flex-1 flex flex-col">
              {isLoading ? (
                <>
                  <ArticleSkeleton isFeatured />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton />
                </>
              ) : (
                leftColumn.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: "easeOut" }}
                  >
                    {article.isFeatured ? (
                      <FeaturedArticle article={article} />
                    ) : (
                      <Article article={article} />
                    )}
                    {index < leftColumn.length - 1 && (
                      <ContentSeparator className="my-10" />
                    )}
                  </motion.div>
                ))
              )}
            </div>

            {/* Vertical separator */}
            <VerticalSeparator className="self-stretch" />

            {/* Right column */}
            <div className="flex-1 flex flex-col">
              {isLoading ? (
                <>
                  <ArticleSkeleton />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton isFeatured />
                  <ContentSeparator className="my-10" />
                  <ArticleSkeleton />
                </>
              ) : (
                rightColumn.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1, ease: "easeOut" }}
                  >
                    {article.isFeatured ? (
                      <FeaturedArticle article={article} />
                    ) : (
                      <Article article={article} />
                    )}
                    {index < rightColumn.length - 1 && (
                      <ContentSeparator className="my-10" />
                    )}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
