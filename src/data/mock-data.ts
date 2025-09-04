export const mockEmails = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Project Alpha Update',
    content: `
Hi Team,

This is a quick update on Project Alpha. We are currently on track with the revised timeline. The budget remains unchanged. 

Please find the latest design mockups attached for your review. We need your approval on the new design by Friday.

Thanks,
John
`,
    read: false,
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'Client Meeting Follow-up',
    content: `
Hi,

Following up on our meeting with Client X last week. They were very impressed with the presentation and are eager to move forward. 

They have a few questions regarding the pricing structure. Can we schedule a quick call to discuss our response? I'm available tomorrow afternoon.

Best,
Jane
`,
    read: true,
  },
  {
    id: 3,
    sender: 'ACME Corp Newsletter',
    subject: 'Weekly Digest',
    content: `
# ACME Corp Weekly

## Top Stories

*   Our new product launch has been a massive success! 
*   Industry trends for Q3 2024.
*   A look at our charitable initiatives.

## Upcoming Events

*   Town Hall Meeting - August 25th
*   Summer Picnic - September 5th

Click here to read more.
`,
    read: false,
  },
  {
    id: 4,
    sender: 'Robert Brown',
    subject: 'Urgent: Q3 Report',
    content: `
Hi,

Please review the attached Q3 financial report. There are some discrepancies that need your immediate attention. Specifically, the revenue figures for the European market seem to be off.

I need your feedback by the end of the day.

Regards,
Robert
`,
    read: false,
  },
];

export type Email = typeof mockEmails[0];
