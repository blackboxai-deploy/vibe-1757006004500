"use client";

import { useState } from 'react';
import { Dashboard } from '@/components/dashboard';
import { Email, mockEmails } from '@/data/mock-data';

export default function Home() {
  const [selectedMessage, setSelectedMessage] = useState<Email | null>(mockEmails[0]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Dashboard
        emails={mockEmails}
        selectedMessage={selectedMessage}
        onSelectMessage={setSelectedMessage}
      />
    </main>
  );
}