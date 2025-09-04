"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function MessageView({ message }) {
  const [summary, setSummary] = useState('');
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!message) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Select a message</h3>
          <p className="text-sm text-gray-500">Select a message from the inbox to view its content.</p>
        </div>
      </div>
    );
  }

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    setDraft('');
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message.body }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error summarizing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDraftReply = async () => {
    setIsLoading(true);
    setSummary('');
    setDraft('');
    try {
      const response = await fetch('/api/draft-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message.body }),
      });
      const data = await response.json();
      setDraft(data.draft);
    } catch (error) {
      console.error('Error drafting reply:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{message.subject}</CardTitle>
        <CardDescription>
          From: {message.sender} ({message.senderEmail}) - {message.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Button onClick={handleSummarize} disabled={isLoading}>
            {isLoading ? 'Summarizing...' : 'Summarize'}
          </Button>
          <Button onClick={handleDraftReply} disabled={isLoading}>
            {isLoading ? 'Drafting...' : 'Draft Reply'}
          </Button>
        </div>

        {(summary || draft) && (
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">{summary ? 'Summary' : 'Draft Reply'}</h4>
            <p className="text-sm whitespace-pre-wrap">{summary || draft}</p>
          </div>
        )}

        <div className="prose max-w-none dark:prose-invert whitespace-pre-wrap">
          {message.body}
        </div>
      </CardContent>
    </Card>
  );
}
