import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SettingsPage() {
  const [settings, setSettings] = useState({
    defaultLocation: 'all',
    defaultJobType: 'all',
    defaultSalaryRange: 'all',
    emailNotifications: true,
    maintenanceMode: false,
    theme: 'light',
  });

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
  };

  const handleSettingChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleChangePassword = () => {
    console.log('Change password');
  };

  const resetSettings = () => {
    setSettings({
      defaultLocation: 'all',
      defaultJobType: 'all',
      defaultSalaryRange: 'all',
      emailNotifications: true,
      maintenanceMode: false,
      theme: 'light',
    });
  };

  const saveSettings = () => {
    console.log('Save settings:', settings);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Settings
          </h1>

          <div className="space-y-6">
            {/* Search Preferences */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Default Search Filters
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Default Location
                  </label>
                  <Select
                    value={settings.defaultLocation}
                    onValueChange={(value) =>
                      handleSettingChange('defaultLocation', value)
                    }
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="remote">Remote Only</SelectItem>
                      <SelectItem value="onsite">On-site Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Default Job Type
                  </label>
                  <Select
                    value={settings.defaultJobType}
                    onValueChange={(value) =>
                      handleSettingChange('defaultJobType', value)
                    }
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Default Salary Range
                  </label>
                  <Select
                    value={settings.defaultSalaryRange}
                    onValueChange={(value) =>
                      handleSettingChange('defaultSalaryRange', value)
                    }
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default salary range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ranges</SelectItem>
                      <SelectItem value="0-1000">$0 - $1000</SelectItem>
                      <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
                      <SelectItem value="2000+">$2000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Notification Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email Notifications
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Receive email notifications for new internships and updates
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) =>
                      handleSettingChange('emailNotifications', checked)
                    }
                    className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Platform Settings */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Platform Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Maintenance Mode
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Enable maintenance mode to temporarily disable the platform
                    </p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) =>
                      handleSettingChange('maintenanceMode', checked)
                    }
                    className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Theme Settings */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Theme Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Theme Mode
                  </label>
                  <Select
                    value={settings.theme}
                    onValueChange={(value) => handleSettingChange('theme', value)}
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Save Changes */}
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={resetSettings}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-gray-200 dark:border-gray-600"
              >
                Reset to Default
              </Button>
              <Button
                onClick={saveSettings}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsPage };