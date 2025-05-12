"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PlatformMetrics() {
  const metrics = [
    {
      title: "Total Views",
      value: "1.2M",
      change: "+14.5%",
      trending: "up",
      description: "From last month"
    },
    {
      title: "Engagement Rate",
      value: "4.3%",
      change: "+2.1%",
      trending: "up",
      description: "From last month"
    },
    {
      title: "New Followers",
      value: "12.5K",
      change: "-3.2%",
      trending: "down",
      description: "From last month"
    },
    {
      title: "Average Watch Time",
      value: "4:32",
      change: "0%",
      trending: "neutral",
      description: "No change"
    }
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            {metric.trending === "up" && (
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            )}
            {metric.trending === "down" && (
              <TrendingDown className="h-4 w-4 text-rose-500" />
            )}
            {metric.trending === "neutral" && (
              <Minus className="h-4 w-4 text-muted-foreground" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={
                metric.trending === "up" 
                  ? "text-emerald-500" 
                  : metric.trending === "down" 
                    ? "text-rose-500" 
                    : ""
              }>
                {metric.change}
              </span> {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}