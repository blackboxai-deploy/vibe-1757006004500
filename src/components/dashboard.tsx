"use client";

import { Sidebar } from '@/components/sidebar';
import { UnifiedInbox } from '@/components/unified-inbox';
import { MessageView } from '@/components/message-view';
import { Email } from '@/data/mock-data';

interface DashboardProps {
  emails: Email[];
  selectedMessage: Email | null;
  onSelectMessage: (email: Email) => void;
}

export function Dashboard({ emails, selectedMessage, onSelectMessage }: DashboardProps) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr]">
        <UnifiedInbox emails={emails} onSelectMessage={onSelectMessage} selectedMessage={selectedMessage} />
        <MessageView message={selectedMessage} />
      </div>
    </div>
  );
}
