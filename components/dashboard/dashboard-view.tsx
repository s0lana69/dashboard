"use client";

import { useState } from "react";
import { 
  DashboardHeader, 
  DashboardShell 
} from "@/components/dashboard/dashboard-shell";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Overview } from "@/components/dashboard/overview";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { TopPosts } from "@/components/dashboard/top-posts";
import { PlatformMetrics } from "@/components/dashboard/platform-metrics";

export function DashboardView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar 
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <DashboardShell>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PlatformMetrics />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Overview className="col-span-4" />
            <TopPosts className="lg:col-span-3" />
          </div>
          <RecentActivity />
        </DashboardShell>
      </div>
    </div>
  );
}