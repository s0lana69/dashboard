"use client";

import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const data = [
  { name: "Jan", views: 4000, engagement: 2400, followers: 240 },
  { name: "Feb", views: 3000, engagement: 1398, followers: 210 },
  { name: "Mar", views: 2000, engagement: 9800, followers: 290 },
  { name: "Apr", views: 2780, engagement: 3908, followers: 340 },
  { name: "May", views: 1890, engagement: 4800, followers: 380 },
  { name: "Jun", views: 2390, engagement: 3800, followers: 430 },
  { name: "Jul", views: 3490, engagement: 4300, followers: 470 },
  { name: "Aug", views: 4000, engagement: 2400, followers: 510 },
  { name: "Sep", views: 5000, engagement: 3800, followers: 520 },
  { name: "Oct", views: 6000, engagement: 4800, followers: 540 },
  { name: "Nov", views: 7000, engagement: 5800, followers: 580 },
  { name: "Dec", views: 9000, engagement: 6800, followers: 610 },
];

interface OverviewProps {
  className?: string;
}

export function Overview({ className }: OverviewProps) {
  const [activeMetric, setActiveMetric] = useState("views");

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Your content performance across platforms
          </CardDescription>
        </div>
        <div>
          <Tabs defaultValue="views" className="h-9">
            <TabsList className="grid grid-cols-3 w-fit">
              <TabsTrigger 
                value="views" 
                onClick={() => setActiveMetric("views")}
              >
                Views
              </TabsTrigger>
              <TabsTrigger 
                value="engagement" 
                onClick={() => setActiveMetric("engagement")}
              >
                Engagement
              </TabsTrigger>
              <TabsTrigger 
                value="followers" 
                onClick={() => setActiveMetric("followers")}
              >
                Followers
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-sm text-muted-foreground" />
              <YAxis className="text-sm text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--foreground))"
                }}
              />
              {activeMetric === "views" && (
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
              )}
              {activeMetric === "engagement" && (
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="hsl(var(--chart-2))"
                  fillOpacity={1}
                  fill="url(#colorEngagement)"
                />
              )}
              {activeMetric === "followers" && (
                <Area
                  type="monotone"
                  dataKey="followers"
                  stroke="hsl(var(--chart-3))"
                  fillOpacity={1}
                  fill="url(#colorFollowers)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}