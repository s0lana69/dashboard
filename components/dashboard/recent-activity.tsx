"use client";

import { Clock, MessageSquare, ThumbsUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "comment",
    content: "Great video! Could you do a follow-up on audience targeting?",
    user: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    time: "2 hours ago",
    platform: "YouTube"
  },
  {
    id: 2,
    type: "like",
    content: "liked your post about content strategy",
    user: {
      name: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    time: "4 hours ago",
    platform: "Instagram"
  },
  {
    id: 3,
    type: "follow",
    content: "started following you",
    user: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    time: "Yesterday",
    platform: "TikTok"
  },
  {
    id: 4,
    type: "comment",
    content: "This is exactly what I needed! When is your next tutorial coming out?",
    user: {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/150?u=emily"
    },
    time: "Yesterday",
    platform: "LinkedIn"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          The latest interactions with your content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-medium">
                    <span>{activity.user.name}</span>
                    {activity.type === "comment" && (
                      <span className="ml-1 text-muted-foreground">commented:</span>
                    )}
                    {activity.type === "like" && (
                      <span className="ml-1 text-muted-foreground">{activity.content}</span>
                    )}
                    {activity.type === "follow" && (
                      <span className="ml-1 text-muted-foreground">{activity.content}</span>
                    )}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
                {activity.type === "comment" && (
                  <p className="text-sm text-muted-foreground">
                    "{activity.content}"
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="h-5 text-xs">
                    {activity.platform}
                  </Badge>
                  {activity.type === "comment" && <MessageSquare className="h-3 w-3" />}
                  {activity.type === "like" && <ThumbsUp className="h-3 w-3" />}
                  {activity.type === "follow" && <Users className="h-3 w-3" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}