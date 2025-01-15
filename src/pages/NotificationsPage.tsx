import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export function NotificationsPage({
  notifications = [
    {
      id: 1,
      title: 'New Internship Posted',
      message: 'A new software engineering internship has been posted.',
      type: 'info',
      timestamp: '2024-02-20T10:00:00Z',
    },
    {
      id: 2,
      title: 'Application Status Update',
      message: 'Your application has been reviewed.',
      type: 'success',
      timestamp: '2024-02-19T15:30:00Z',
    },
  ],
}) {
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info',
  });

  const handleSendNotification = () => {
    // Handle sending notification
    console.log('Sending notification:', newNotification);
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Send New Notification */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Notification</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Title</label>
                <Input
                  value={newNotification.title}
                  onChange={(e) =>
                    setNewNotification({ ...newNotification, title: e.target.value })
                  }
                  placeholder="Notification Title"
                  className="bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Message</label>
                <Textarea
                  value={newNotification.message}
                  onChange={(e) =>
                    setNewNotification({ ...newNotification, message: e.target.value })
                  }
                  placeholder="Notification Message"
                  className="bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Type</label>
                <Select
                  value={newNotification.type}
                  onValueChange={(value) =>
                    setNewNotification({ ...newNotification, type: value })
                  }
                  className="bg-white dark:bg-gray-700"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select notification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSendNotification} className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white">
                Send Notification
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Recent Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800 dark:text-white">{notification.title}</h3>
                      <Badge className={getBadgeColor(notification.type)}>
                        {notification.type}
                      </Badge>
                    </div>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{notification.message}</p>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(notification.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}