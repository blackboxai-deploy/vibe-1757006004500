"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockEmails } from '@/data/mock-data';

export function UnifiedInbox({ onSelectMessage }) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Inbox</CardTitle>
        <CardDescription>A unified view of your communications.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sender</TableHead>
              <TableHead className="hidden sm:table-cell">Subject</TableHead>
              <TableHead className="hidden md:table-cell">Preview</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEmails.map((email) => (
              <TableRow key={email.id} className="cursor-pointer" onClick={() => onSelectMessage(email)}>
                <TableCell>
                  <div className="font-medium">{email.sender}</div>
                  <div className="hidden text-sm text-gray-500 md:inline">{email.senderEmail}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{email.subject}</TableCell>
                <TableCell className="hidden md:table-cell">{email.preview}</TableCell>
                <TableCell className="text-right">{email.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
