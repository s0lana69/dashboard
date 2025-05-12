"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "10 Tips for Growing Your TikTok Following",
    views: "245.2K",
    engagement: "12.5K",
    platform: "TikTok",
    thumbnail: "https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=600",
    trending: true
  },
  {
    id: 2,
    title: "How to Create Viral Instagram Reels",
    views: "189.7K",
    engagement: "9.3K",
    platform: "Instagram",
    thumbnail: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=600",
    trending: true
  },
  {
    id: 3,
    title: "Content Strategy for YouTube Growth",
    views: "156.3K",
    engagement: "7.8K",
    platform: "YouTube",
    thumbnail: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
    trending: false
  },
  {
    id: 4,
    title: "Monetization Strategies for Creators",
    views: "132.5K",
    engagement: "6.4K",
    platform: "LinkedIn",
    thumbnail: "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=600",
    trending: false
  }
];

interface TopPostsProps {
  className?: string;
}

export function TopPosts({ className }: TopPostsProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Top Performing Content</CardTitle>
        <CardDescription>
          Your most successful content across platforms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center gap-4">
              <div className="relative aspect-video w-20 overflow-hidden rounded-md md:w-24 lg:w-32">
                <Image 
                  src={post.thumbnail} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium line-clamp-2">{post.title}</span>
                  {post.trending && (
                    <Badge variant="secondary" className="h-5 text-xs">Trending</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.views} views</span>
                  <span>•</span>
                  <span>{post.engagement} engagements</span>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="h-5 text-xs">
                    {post.platform}
                  </Badge>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}