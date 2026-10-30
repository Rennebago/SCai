(function () {
  'use strict';

  /* ======================================================================
     Icons (Feather-style, 24px grid)
     ====================================================================== */
  const PHONE = '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>';
  const ICONS = {
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    archive: '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
    'phone-call': '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94"/>' + PHONE,
    'phone-incoming': '<polyline points="16 2 16 8 22 8"/><line x1="23" y1="1" x2="16" y2="8"/>' + PHONE,
    'phone-outgoing': '<polyline points="23 7 23 1 17 1"/><line x1="16" y1="8" x2="23" y2="1"/>' + PHONE,
    voicemail: '<circle cx="5.5" cy="11.5" r="4.5"/><circle cx="18.5" cy="11.5" r="4.5"/><line x1="5.5" y1="16" x2="18.5" y2="16"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    'chevron-up': '<polyline points="18 15 12 9 6 15"/>',
    'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    pencil: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
    sparkles: '<path d="M10 3l1.9 5.1L17 10l-5.1 1.9L10 17l-1.9-5.1L3 10l5.1-1.9z" fill="currentColor" stroke-width="1"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor" stroke-width="1"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>',
    'sidebar-right': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="15" y1="3" x2="15" y2="21"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    'arrow-up': '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
    'arrow-down': '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>',
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  };
  const icon = (name, size = 16) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  /* ======================================================================
     Data (placeholder content, mirrors the Figma frames)
     ====================================================================== */
  const AGENT = { name: 'Tom Loftis', email: 't.loftis@achieve.com' };
  const LEAD_ID = '83z04548-p028-621u-804t-18b3ad00no33';
  const LAST_CONTACT = { date: 'Aug 6, 2026', time: '2:15 pm' };
  const SENT_AT = { date: 'Dec 3, 2025', time: '4:32 pm' };
  const SCORES = { s: 85, cb: 45, ps: 25 };

  const callSummary = (name) =>
    `This sales call was initiated by ${name}, an AFGE member, who received a flyer about Freedom Debt Relief's services for reducing high-interest debt. The agent, ${AGENT.name}, explained how the company works with creditors to reduce debt and consolidate payments.`;

  const PATRICIA_BODY = `
    <p>Could you please clarify the following for me:</p>
    <ol>
      <li>Is the $37,344 the maximum amount I would have to deposit to successfully complete the program, or is it only an estimate? If settlements end up costing more than the projected $25,107, could my $778 monthly payment increase, could the program extend beyond 48 months, or could I be required to contribute additional money?</li>
      <li>What happens if one of the seven creditors enrolled in my program refuses to settle or will only accept a settlement substantially higher than what was estimated? Would that affect my monthly payment, program length, or total cost?</li>
      <li>I also noticed my Personal Cash Flow Statement lists $0 under “Non-Enrolled Debt Expenses.” I intentionally left some accounts outside of the Freedom program and will continue making those payments myself. Should those monthly payments be included in that section before I sign?</li>
      <li>My cash-flow statement lists $5,500 as my monthly net employment income. My reliable take-home income without overtime is closer to $5,000 per month, with anything above that depending on overtime. I would prefer the affordability calculation to be based on my reliable income rather than overtime. Can we update that before I sign?</li>
    </ol>
    <p>Thanks,<br>Patricia</p>`;

  const RUTH_BODY = `
    <p>Hi Tom,</p>
    <p>Thank you for the call earlier. Could you send me the program summary again and let me know what the next steps are for enrollment?</p>
    <p>Thanks,<br>Ruth</p>`;

  const email = (o) => Object.assign({ type: 'email', dir: 'in', to: AGENT.email, date: 'Dec 3, 2025', time: '2:15 pm', open: false }, o);
  const call = (o) => Object.assign({ type: 'call', dir: 'in', duration: '32:33', date: 'Dec 3, 2025', time: '2:15 pm', wrap: 'wrapupcode', open: false }, o);

  const lead = (o) => Object.assign({
    kind: 'lead', icon: 'mail', priority: null, badge: null, unread: false,
    status: 'New Lead', phone: '(888) 444-3343', comms: [], sent: [], draft: null, rejected: false
  }, o);

  const activeLeads = [
    lead({
      id: 'patricia', name: 'Patricia Moyer', first: 'Patricia', priority: 'High', unread: true,
      email: 'p.moyer@widowsbaycourt.com',
      comms: [
        email({ id: 'e1', subject: 'RE: Your program details - Patricia', from: 'p.moyer@widowsbaycourt.com', body: PATRICIA_BODY, open: true, thread: true }),
        call({ id: 'c1', summary: callSummary('Patricia Moyer') })
      ]
    }),
    lead({
      id: 'ruth', name: 'Ruth Livingston', first: 'Ruth', priority: 'High', unread: true,
      email: 'Ruth.Livingston@email.com',
      comms: [
        email({ id: 'e1', subject: 'RE: Your program details - Ruth', from: 'Ruth.Livingston@email.com', body: RUTH_BODY, open: true, thread: true }),
        call({ id: 'c1', summary: callSummary('Ruth Livingston'), open: true })
      ]
    }),
    lead({
      id: 'wyck', name: 'Wyck Crawford', first: 'Wyck', icon: 'phone-outgoing', priority: 'Medium',
      email: 'w.crawford@email.com',
      comms: [call({ id: 'c1', dir: 'out', summary: callSummary('Wyck Crawford') })]
    }),
    lead({ id: 'gerrie', name: 'Gerrie Doyle', first: 'Gerrie', icon: 'voicemail', priority: 'Medium', email: 'g.doyle@email.com' }),
    lead({
      id: 'calvin', name: 'Calvin Morgan', first: 'Calvin', kind: 'opportunity', badge: { text: 'agreement ready', tone: 'info' },
      status: 'Opportunity', email: 'c.morgan@email.com',
      comms: [email({
        id: 'e1', dir: 'out', subject: 'Your agreement is ready', from: AGENT.email, to: 'c.morgan@email.com',
        body: '<p>Hi Calvin,</p><p>Your agreement is ready for your review.</p><p>Thanks,<br>Tom</p>'
      })]
    }),
    lead({
      id: 'bechir', name: 'Bechir Clemmons', first: 'Bechir', icon: 'phone-incoming', kind: 'opportunity', badge: { text: 'enrolled', tone: 'positive' },
      status: 'Opportunity - Enrolled', email: 'b.clemmons@email.com',
      comms: [call({ id: 'c1', summary: callSummary('Bechir Clemmons') })]
    })
  ];

  // Wyck already has an AVA draft waiting (matches the "email draft" chip in the design).
  activeLeads[2].draft = { status: 'ready', type: 'email', source: 'lead', subject: 'Follow-Up: Debt Relief Options', html: '', refine: '' };

  const archivedComms = (first, mail) => [
    email({ id: 'a1', subject: 'RE: Your program details', from: mail, body: `<p>Hi Tom,</p><p>Thank you for the information.</p><p>${first}</p>` }),
    email({ id: 'a2', dir: 'out', subject: 'RE: Your program details', from: AGENT.email, to: mail, time: '12:22 pm', body: `<p>Hi ${first},</p><p>Happy to help. Let me know if you have questions.</p><p>Tom</p>` }),
    call({ id: 'a3', summary: callSummary(first) }),
    call({ id: 'a4', dir: 'out', duration: '-', date: 'Dec 1, 2025', time: '11:43 am', wrap: 'LVM • D2A2', summary: 'Left a voicemail.' }),
    call({ id: 'a5', dir: 'out', duration: '-', date: 'Dec 1, 2025', time: '9:34 am', wrap: 'LVM • D2A1', summary: 'Left a voicemail.' })
  ];
  const archived = (id, name, o) => {
    const first = name.split(' ')[0];
    const mail = `${first.toLowerCase()}@email.com`;
    return lead(Object.assign({
      id, name, first, email: mail, phone: '(•••) •••-3343', comms: archivedComms(first, mail)
    }, o));
  };
  const archivedLeads = [
    archived('ryan', 'Ryan Atwood', { kind: 'opportunity', badge: { text: 'enrolled', tone: 'positive' }, status: 'Archived - Enrolled' }),
    archived('marissa', 'Marissa Cooper', { badge: { text: 'enrolled', tone: 'positive' }, status: 'Archived - Enrolled' }),
    archived('seth', 'Seth Cohen', { icon: 'phone-incoming', badge: { text: 'unassigned', tone: 'info' }, status: 'Archived - Unassigned' }),
    archived('summer', 'Summer Roberts', { badge: { text: 'unassigned', tone: 'info' }, status: 'Archived - Unassigned' }),
    archived('sandy', 'Sandy Cohen', { kind: 'opportunity', badge: { text: 'unassigned', tone: 'info' }, status: 'Archived - Unassigned' }),
    archived('kirsten', 'Kirsten Cohen', { icon: 'phone-incoming', kind: 'opportunity', badge: { text: 'enrolled', tone: 'positive' }, status: 'Archived - Enrolled' })
  ];

  const pipelineOnly = []; // leads that only appear in the Performance pipeline
  const allLeads = () => activeLeads.concat(archivedLeads, pipelineOnly);
  const leadById = (id) => allLeads().find((l) => l.id === id);

  /* ---- Performance: pipeline (mirrors the Performance > Leads frame) ---- */
  // r = reserved, age = days reserved (of 30). Rows past the first ten are filler so the stage counts add up.
  const pipe = (o) => Object.assign({ r: false, arp: false, ca: false, stip: null, stipTone: 'negative', uw: 'Submitted', uwTone: '', age: null, ok: false }, o);
  const PIPE = [
    pipe({ id: 'bechir', r: true, src: 'Email', st: 'FL', debt: '$29,700', stage: 'Enrolled', tone: 'positive', days: '19d', uw: 'Approved', uwTone: 'is-pos', age: 25, pri: 'high', insight: 'Enrolled 19d ago, no first draft yet, call today', group: 'draft' }),
    pipe({ id: 'richard', name: 'Richard Warren', r: true, src: 'Email', st: 'FL', debt: '$29,700', stage: 'Enrolled', tone: 'positive', days: '22d', uw: 'Approved', uwTone: 'is-pos', stip: 'Pre-note failure', age: 24, pri: 'high', insight: 'Enrolled 5d ago, no first draft yet, email reminder', group: 'draft' }),
    pipe({ id: 'wyck', r: true, src: 'Direct mail', st: 'TX', debt: '$52,800', stage: 'DRA sent', tone: 'info', days: '4d', age: 16, pri: 'high', insight: 'DRA out 4d, follow up to close', group: 'uw' }),
    pipe({ id: 'pj', name: 'PJ Glanville', r: true, arp: true, src: 'Paid search', st: 'AZ', debt: '$33,200', stage: 'Closed', tone: 'positive', days: '7d', uw: 'Approved', stip: 'ARP rejected', age: 10, pri: 'high', insight: 'ARP rejected, review options and re-submit or move to standard program', group: 'signed' }),
    pipe({ id: 'ruth', r: true, src: 'Paid search', st: 'AZ', debt: '$47,000', stage: 'DRA sent', tone: 'info', days: '4d', age: 16, pri: 'high', insight: 'DRA out 4d, check in on signing', group: 'uw' }),
    pipe({ id: 'sandra', name: 'Sandra Whitlock', r: true, arp: true, src: 'Direct mail', st: 'AZ', debt: '$38,400', stage: 'Closed', tone: 'positive', days: '7d', uw: 'Approved', stip: 'Pending ARP review', stipTone: 'warning', age: 10, pri: 'med', insight: 'ARP review pending, check status with underwriting', group: 'signed' }),
    pipe({ id: 'patricia', r: true, src: 'Partner', st: 'FL', debt: '$59,900', stage: 'Connect', tone: 'accent', days: '5d', uw: 'Not started', uwTone: 'is-muted', age: 2, pri: 'med', insight: 'DRA out 4d, follow up to close', group: 'connect' }),
    pipe({ id: 'abigail', name: 'Abigail Stevens', r: true, src: 'Direct mail', st: 'TX', debt: '$52,800', stage: 'Enrolled', tone: 'positive', days: '10d', stip: 'Statement needed', age: 16, pri: 'med', insight: 'Statement needed, send email to request.', group: 'uw' }),
    pipe({ id: 'gerrie', arp: true, src: 'Email', st: 'FL', debt: '$24,900', stage: 'UW submitted', tone: 'info', days: '12d', uw: 'Manual review', uwTone: 'is-warn', pri: 'med', insight: 'Manual UW review in progress, check for stipulations', group: 'uw' }),
    pipe({ id: 'calvin', r: true, ca: true, src: 'Paid search', st: 'AZ', debt: '$47,000', stage: 'DRA sent', tone: 'info', days: '4d', age: 16, pri: 'low', insight: 'Strong segment (Eastern), work early', group: 'uw' }),
    pipe({ id: 'dana', name: 'Dana Whitfield', src: 'Email', st: 'FL', debt: '$18,400', stage: 'Connect', tone: 'accent', days: '2d', uw: 'Not started', uwTone: 'is-muted', pri: 'low', insight: 'New connect, call within the hour', group: 'connect' }),
    pipe({ id: 'marcus', name: 'Marcus Hale', src: 'Paid search', st: 'AZ', debt: '$36,100', stage: 'Connect', tone: 'accent', days: '3d', uw: 'Not started', uwTone: 'is-muted', pri: 'low', insight: 'Strong segment (Mountain), work early', group: 'connect' }),
    pipe({ id: 'irene', name: 'Irene Castillo', src: 'Direct mail', st: 'TX', debt: '$41,250', stage: 'Connect', tone: 'accent', days: '6d', uw: 'Not started', uwTone: 'is-muted', pri: 'med', insight: 'No contact in 6d, try a different channel', group: 'connect' }),
    pipe({ id: 'theo', name: 'Theo Barnes', src: 'Partner', st: 'TX', debt: '$22,800', stage: 'UW submitted', tone: 'info', days: '8d', pri: 'low', insight: 'UW submitted 8d ago, check status', group: 'uw' }),
    pipe({ id: 'lena', name: 'Lena Ortiz', arp: true, src: 'Email', st: 'FL', debt: '$31,500', stage: 'DRA sent', tone: 'info', days: '5d', pri: 'low', insight: 'DRA out 5d, follow up to close', group: 'uw' })
  ];
  // Link pipeline rows to lead records. Leads already in the inbox reuse that record.
  PIPE.forEach((p) => {
    const existing = activeLeads.find((l) => l.id === p.id);
    if (existing) { p.name = existing.name; return; }
    pipelineOnly.push(lead({
      id: p.id, name: p.name, first: p.name.split(' ')[0], kind: 'opportunity', status: 'Opportunity',
      email: `${p.name.split(' ')[0].toLowerCase()}@email.com`
    }));
  });

  const STAGES = [
    { id: 'connect', title: 'Connected to UW Ready', unit: 'leads', sub: [] },
    { id: 'uw', title: 'UW Submitted to DRA Signed', unit: 'opportunities', sub: [['Manual UW review', 1], ['Failed UW', 0], ['Statement needed', 1]] },
    { id: 'signed', title: 'Signed to Enrolled', unit: 'opportunities', sub: [['Pending ARP review', 1], ['ARP failed', 1, true], ['CA 3-day sign needed', 0], ['Pending WC', 0]] },
    { id: 'draft', title: 'Enrolled to First-Draft', unit: 'clients', sub: [['Pre-note failure', 1, true], ['NSF', 0], ['Rescission', 1, true]] }
  ];
  const RESERVE_CAP = 25;
  const RESERVE_DAYS = 30;

  /* ---- Performance: metrics (mirrors the Performance > Data frame; values are placeholders) ---- */
  const METRIC_SECTIONS = [
    { name: 'Effectiveness', note: 'How leads are being worked', rows: [
      ['ACE Score', '', '55%', '56.6%', '+1.6', '54.2%', '+2.4 pts', '57.3%', '-0.7 pts'],
      ['LPA', '', '22', '20', '-2', '21', '-1', '24.0%', '-7.1 pts']
    ] },
    { name: 'Activity', note: 'How your time is spent. % to MPS is always month-to-date', rows: [
      ['% to MPS', 'Month-to-date enrolled debt vs. $900K minimum standard', '100%', '16.8%', '-83.2 pts', '18.5%', '-1.7 pts', '24.0%', '-7.1 pts'],
      ['EPA', 'Enrollments per 8 hours logged', '1.80', '2.13', '+18.4%', '1.96', '+8.7%', '1.96', '+8.7%'],
      ['Prequal', 'Calls where you ran the loan prequalification', '50.0%', '44.0%', '-6.0 pts', '46.5%', '-2.5 pts', '42.9%', '+1.2 pts'],
      ['Demo', 'Calls where you performed the demo', '50.0%', '42.2%', '-7.8 pts', '45.1%', '-2.9 pts', '50.8%', '-8.6 pts'],
      ['Utilization', 'Time on an active call vs. unavailable', '50.0%', '68.2%', '+18.2 pts', '64.5%', '+3.7 pts', '69.5%', '-1.3 pts']
    ] },
    { name: 'Conversion', note: 'How fast leads connect and close vs. expected', rows: [
      ['TVLS LP2C', 'Lead potential to close', '24.0%', '31.9%', '+7.9 pts', '29.4%', '+2.5 pts', '29.3%', '+2.6 pts'],
      ['Connect Rate', 'Leads connected in the window', '80.0%', '78.3%', '-1.7 pts', '77.2%', '+1.1 pts', '81.3%', '-3.1 pts'],
      ['Connect-to-Close Rate', 'Connected leads that closed', '30.0%', '40.7%', '+10.7 pts', '38.2%', '+2.5 pts', '36.1%', '+4.7 pts'],
      ['Close Rate', 'Leads closed in the window', '24.0%', '31.9%', '+7.9 pts', '29.5%', '+2.4 pts', '29.3%', '+2.6 pts']
    ] },
    { name: 'Enrollment Rates', note: 'Debt enrollment', rows: [
      ['Total Enrolled debt', '', '$27,000', '$28,174', '+4.3%', '$26,420', '+$1,754', '$34,184', '-17.6%'],
      ['ABI', 'Avg. enrolled debt per unit', '$27,000', '$28,174', '+4.3%', '$25,980', '+$2,194', '$34,184', '-17.6%'],
      ['Enrolled units', 'Leads enrolled', '13', '19', '+43.9%', '16', '+3', '19', '0.0%']
    ] },
    { name: 'Draft rate', note: 'Timeframe for clients to complete a successful first draft', rows: [
      ['60-day draft rate', 'Enrolled clients complete first-draft within 60 days', '81.0%', '57.9%', '-4.1 pts', '62.0%', '-4.1 pts', '68.4%', '-10.5 pts'],
      ['20-day draft rate', 'Enrolled clients complete first-draft within 20 days', '70.0%', '68.4%', '-11.6 pts', '72.2%', '-2.2 pts', '84.2%', '-15.8 pts'],
      ['10-day draft rate', 'Enrolled clients complete first-draft within 10 days', '22.0%', '89.5%', '+7.5 pts', '81.0%', '+8.5 pts', '94.7%', '-5.3 pts']
    ] }
  ];
  const METRICS = [];
  METRIC_SECTIONS.forEach((s) => s.rows.forEach((r) => METRICS.push(r)));

  const FILTER_OPTIONS = {
    state: ['FL', 'TX', 'AZ'],
    tz: ['Eastern', 'Central', 'Mountain', 'Pacific'],
    channel: ['Email', 'Direct mail', 'Paid search', 'Partner'],
    source: ['Inbound call', 'Web form', 'Partner']
  };
  const FILTER_LABELS = { state: 'State', tz: 'Timezone', channel: 'Marketing channel', source: 'Source' };

  // `roles` lists the prototype views that show the page in the nav. The Dashboard exists in both and will differ per role.
  const ROLES = [['dc', 'DC'], ['um', 'UM']];
  const PAGES = {
    dashboard: { label: 'Dashboard', icon: 'monitor', roles: ['dc', 'um'] },
    leads: { label: 'Leads', icon: 'users', roles: ['dc'] },
    performance: { label: 'Performance', icon: 'trending-up', roles: ['dc'] },
    researcher: { label: 'Researcher', icon: 'tool', roles: ['um'] }
  };

  /* ======================================================================
     State
     ====================================================================== */
  const state = {
    role: 'dc',              // prototype view: 'dc' | 'um' (set from the prototype toggle in the side nav)
    page: 'leads',           // 'dashboard' | 'leads' | 'performance' | 'researcher'
    navCollapsed: false,
    chatMode: { leads: 'docked', performance: 'closed', dashboard: 'closed', researcher: 'closed' },
    fab: { right: 24, bottom: 24 },
    chatLead: null,
    perf: { tab: 'data', window: 'actual', arp: 'all', traffic: 'all', state: '', tz: '', channel: '', source: '', range: '', stage: null },
    view: 'inbox',          // 'inbox' | 'archived'
    filter: 'all',          // 'all' | 'lead' | 'opportunity'
    selectedId: 'patricia',
    tab: 'communications',
    promptOpen: false,
    promptText: '',
    open: {},               // card open/closed overrides, keyed "leadId:commId"
    threadOpen: {},
    summaryOpen: false,
    insightTab: 'goals',
    goal: 0,
    chat: [],
    modalLead: null,
    previewLead: null
  };
  let seq = 0;
  let toastSeq = 0;

  /* ======================================================================
     Helpers
     ====================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const currentList = () => {
    const list = state.view === 'archived' ? archivedLeads : activeLeads;
    return state.filter === 'all' ? list : list.filter((l) => l.kind === state.filter);
  };
  const selectedLead = () => leadById(state.selectedId);
  function showView(view) {
    state.view = view;
    state.filter = 'all';
    state.selectedId = currentList()[0].id;
    state.tab = 'communications';
    state.promptOpen = false;
    render();
  }
  const commsFor = (l) => l.sent.concat(l.comms);
  const latestInbound = (l) => commsFor(l).find((c) => c.type === 'email' && c.dir === 'in');
  const draftVisible = (l) => l.draft && l.draft.status !== 'working';
  const cardKey = (l, c) => `${l.id}:${c.id}`;
  const isOpen = (l, c) => (cardKey(l, c) in state.open ? state.open[cardKey(l, c)] : !!c.open);

  const draftHtml = (first, type) => type === 'sms'
    ? `<p>Hi ${esc(first)}, it's Tom from Achieve. Thanks for your questions about the program. I'm happy to walk through them on a quick call. What time works best for you today?</p>`
    : `<p>Hi ${esc(first)},</p>
       <p>I hope this email finds you well.</p>
       <p>I wanted to follow up on our recent conversation about your credit card debt and the options we discussed to help you.</p>
       <p>We explored how our debt relief program could address your household's <strong>total debt of $22,672**</strong>, potentially <strong>saving you around **$5,008</strong> with an estimated <strong>monthly deposit of $368 over 48 months.</strong></p>
       <p>We also considered the possibility of a loan as an alternative path once your employment situation stabilizes.</p>
       <p>I understand you were planning to discuss these options with your family. I'm here to provide any additional information or answer any questions that may have come up during your conversation. My goal is to ensure you have all the details needed to make an informed decision about managing your debt effectively.</p>
       <p>Please don't hesitate to reach out if you'd like to chat further or if there's a better time for us to connect.</p>`;

  activeLeads[2].draft.html = draftHtml('Wyck', 'email');

  /* ======================================================================
     Renderers
     ====================================================================== */
  function renderSidenav() {
    const collapsed = state.navCollapsed;
    const items = Object.keys(PAGES).filter((id) => PAGES[id].roles.includes(state.role)).map((id) => {
      const p = PAGES[id];
      const active = state.page === id;
      return `<li><button class="nav-item${active ? ' is-active' : ''}" type="button" data-action="nav" data-nav="${id}"${active ? ' aria-current="page"' : ''}>
        <span class="nav-icon">${icon(p.icon, 16)}</span><span class="nav-text">${p.label}</span>
      </button></li>`;
    }).join('');
    const roleToggles = ROLES.map(([id, label]) =>
      `<button class="toggle" type="button" data-action="role" data-role="${id}" aria-pressed="${state.role === id}" aria-label="${label} view">${label}</button>`).join('');
    $('#sidenav').innerHTML = `
      <div class="sn-top">
        <div class="sn-brand">
          <span class="sn-logo">Achieve</span>
          <button class="sn-toggle" type="button" data-action="toggle-nav" aria-expanded="${!collapsed}" aria-label="${collapsed ? 'Expand navigation' : 'Collapse navigation'}">${icon('sidebar', 16)}</button>
        </div>
        <div class="sn-section">
          <p class="sn-label" id="snLabel">Workflow</p>
          <ul class="sn-menu" aria-labelledby="snLabel">${items}</ul>
        </div>
      </div>
      <div class="sn-bottom">
        <div class="sn-proto" role="group" aria-label="Prototype view">
          <p class="sn-proto-label" aria-hidden="true">Prototype view</p>
          <div class="toggle-group">${roleToggles}</div>
        </div>
        <div class="sn-foot">
          <div class="sn-user">
            <span class="avatar" role="img" aria-label="Tom L."><span aria-hidden="true">TL</span><span class="avatar-badge"></span></span>
            <span class="sn-name">Tom L.</span>
          </div>
          <span class="chip chip-sm chip-positive sn-chip">Available</span>
        </div>
      </div>`;
  }

  function leadChips(l) {
    // Left chip + dot next to the name
    let left = '';
    let dot = '';
    if (draftVisible(l)) {
      left = '<span class="chip chip-draft">email draft</span>';
      dot = '<span class="dot dot-draft"></span>';
    } else if (l.unread) {
      left = '<span class="chip chip-positive">new email</span>';
      dot = '<span class="dot"></span>';
    }
    const busy = l.draft && l.draft.status === 'working' ? '<span class="spinner" role="img" aria-label="AVA is drafting"></span>' : '';
    // Right chip
    let right = '';
    if (l.priority) right = `<span class="chip ${l.priority === 'High' ? 'chip-positive' : 'chip-warning'}">${l.priority}</span>`;
    else if (l.badge) right = `<span class="chip chip-${l.badge.tone}">${l.badge.text}</span>`;
    return { left, dot, busy, right };
  }

  function renderInbox() {
    const archivedView = state.view === 'archived';
    const list = currentList();
    const toggles = [['all', 'All'], ['lead', 'Leads'], ['opportunity', 'Opportunities']]
      .map(([v, label]) => `<button class="toggle" type="button" data-action="filter" data-filter="${v}" aria-pressed="${state.filter === v}">${label}</button>`)
      .join('');
    const cards = list.map((l) => {
      const c = leadChips(l);
      const sel = l.id === state.selectedId;
      return `<li><button class="lead-card" type="button" data-action="select-lead" data-id="${l.id}"${sel ? ' aria-current="true"' : ''}>
        <div class="lead-row">
          <div class="lead-name-wrap">
            <span class="lead-icon">${icon(l.icon)}${c.dot}</span>
            <span class="lead-name">${esc(l.name)}</span>${c.left}${c.busy}
          </div>${c.right}
        </div>
        <div class="lead-row">
          <div class="lead-last"><span>Last Contact Date:</span><span class="when">${LAST_CONTACT.date} <span>${LAST_CONTACT.time}</span></span></div>
          <span class="lead-kind">${l.kind}</span>
        </div>
      </button></li>`;
    }).join('');
    $('#inbox').innerHTML = `
      <header class="panel-head">
        <div class="panel-top">
          <div>
            <h1 class="panel-title">${archivedView ? 'Archived leads' : 'Leads'}</h1>
            <p class="panel-count">Showing ${list.length} ${list.length === 1 ? 'lead' : 'leads'}</p>
          </div>
          <button class="btn btn-text" type="button" data-action="toggle-archived">${archivedView ? 'Back to leads' : 'View archived'}</button>
        </div>
        <div class="toolbar">
          <div class="toggle-group" role="group" aria-label="Filter leads by type">${toggles}</div>
          ${archivedView ? '' : `<button class="filter-btn" type="button" aria-label="More filters" aria-pressed="false" data-action="more-filters">${icon('filter')}</button>`}
        </div>
      </header>
      <ul class="inbox-list">${cards}</ul>`;
  }

  const scoreChips = () => `<div class="score-chips" aria-label="Scores">
      <span class="chip chip-sm chip-positive">S:&nbsp;<b>${SCORES.s}%</b></span>
      <span class="chip chip-sm chip-warning">CB:&nbsp;<b>${SCORES.cb}%</b></span>
      <span class="chip chip-sm chip-negative">PS:&nbsp;<b>${SCORES.ps}%</b></span>
    </div>`;

  function renderMiddle() {
    const l = selectedLead();
    if (!l) { $('#middle').innerHTML = ''; return; }
    const hasDot = l.unread || !!l.draft;
    const tabs = [['insights', 'Insights'], ['communications', 'Communications'], ['details', 'Lead Details'], ['playbooks', 'Playbooks']]
      .map(([id, label]) => `<button class="tab" type="button" role="tab" id="tab-${id}" aria-selected="${state.tab === id}" aria-controls="tabpanel" data-action="tab" data-tab="${id}">${label}${id === 'communications' && hasDot ? '<span class="tab-dot" role="img" aria-label="New activity"></span>' : ''}</button>`)
      .join('');
    let panel = '';
    if (state.tab === 'communications') panel = renderComms(l);
    else if (state.tab === 'insights') panel = renderInsights(l);
    else panel = `<p class="placeholder-note">${state.tab === 'details' ? 'Lead Details' : 'Playbooks'} isn't part of this prototype yet.</p>`;

    $('#middle').innerHTML = `
      <header class="lead-head">
        <div class="lead-head-top"><h2 class="lead-head-name">${esc(l.name)}</h2>${scoreChips()}</div>
        <div class="lead-head-meta">
          <span>${esc(l.status)}</span><i class="vr"></i><span>${esc(l.phone)}</span><i class="vr"></i><span class="muted">${LEAD_ID}</span>
        </div>
      </header>
      <div class="tabs" role="tablist" aria-label="Lead sections">${tabs}</div>
      <div class="tab-panel" id="tabpanel" role="tabpanel" aria-labelledby="tab-${state.tab}">${panel}</div>`;
  }

  /* ---- Communications ---- */
  const pair = (k, v) => `<span class="pair"><span class="k">${k}</span><span>${v}</span></span>`;
  const pairTime = (k, d, t) => `<span class="pair"><span class="k">${k}</span><span>${d}</span><span class="t">${t}</span></span>`;

  function renderComms(l) {
    let html = `<div class="comm-actions"><button class="btn btn-secondary" type="button" data-action="toggle-prompt" aria-expanded="${state.promptOpen}">${icon('sparkles')}Draft with AVA</button></div>`;
    if (state.promptOpen) html += promptPanel();

    const comms = commsFor(l);
    const d = l.draft;
    const cards = [];
    if (d && d.status !== 'working' && d.source === 'lead') cards.push(draftCard(l));
    if (d && d.status === 'working' && d.source === 'lead' && !latestInbound(l)) cards.push(workingCard(l));
    comms.forEach((c) => cards.push(c.type === 'call' ? callCard(l, c) : emailCard(l, c)));

    if (!cards.length) {
      html += `<p class="empty-note">${icon('sparkles')}<span>This is a newly assigned lead, you have no communications with them yet. Get them on a call to get started.</span></p>`;
    } else {
      html += `<div class="cards">${cards.join('')}</div>`;
    }
    return html;
  }

  function promptPanel() {
    const chips = [
      ['Email response', 'Write an email response to the last communication from the lead.'],
      ['SMS response', 'Write an SMS response to the last communication from the lead.'],
      ['Prompt selection', 'Summarize the last communication from the lead.'],
      ['Prompt selection', 'Suggest next steps for this lead.']
    ].map(([label, text]) => `<button class="chip chip-info chip-action" type="button" data-action="prompt-chip" data-text="${esc(text)}">${label}</button>`).join('');
    return `<form class="prompt-panel" data-form="prompt" autocomplete="off">
      <div class="prompt-row">
        <label class="sr-only" for="promptInput">What would you like to draft with AVA?</label>
        <input id="promptInput" class="text-input" type="text" data-input="prompt" placeholder="What would you like to draft with AVA?" value="${esc(state.promptText)}">
        <button class="icon-btn" type="submit" aria-label="Send prompt"${state.promptText.trim() ? '' : ' disabled'}>${icon('send')}</button>
      </div>
      <div class="prompt-chips">${chips}</div>
    </form>`;
  }

  function emailCard(l, c) {
    const inbound = c.dir === 'in';
    const open = isOpen(l, c);
    const isLatest = latestInbound(l) === c;
    const working = isLatest && l.draft && l.draft.status === 'working' && l.draft.source === 'lead';
    const label = c.type === 'sms' ? 'SMS' : 'Email';
    const subject = c.type === 'sms' ? '' : `<div class="comm-meta"><span class="field-label">Subject</span><span class="field-value">${esc(c.subject)}</span></div>`;
    const addr = c.type === 'sms'
      ? `<div class="meta-row">${pair('To:', esc(l.phone))}</div>`
      : `<div class="meta-row">${pair('From:', esc(c.from))}<i class="vr"></i>${pair('To:', esc(c.to))}</div>`;

    let body = '';
    if (open) {
      const rejected = isLatest && l.rejected ? `<div class="alert-negative" role="alert">${icon('alert', 20)}Draft rejected</div>` : '';
      const placeholder = working ? `<div class="placeholder-box">${icon('pencil')}<span>your email will show here when ready.</span></div>` : '';
      let action = '';
      if (working) action = `<div class="comm-row-end"><span class="chip chip-working"><span class="spinner" aria-hidden="true"></span>AI draft working</span></div>`;
      else if (isLatest && !l.draft) action = `<div class="comm-row-end"><button class="btn btn-secondary" type="button" data-action="draft-response">${icon('sparkles')}Draft a response</button></div>`;
      body = `<div class="comm-body">${rejected}${placeholder}<div class="comm-text">${c.body}</div>${action}</div>`;
      if (c.thread) {
        const t = !!state.threadOpen[cardKey(l, c)];
        body += `<div class="thread">
          <button class="thread-summary" type="button" data-action="toggle-thread" data-key="${cardKey(l, c)}" aria-expanded="${t}"><span>Reply to thread</span><span class="chev">${icon(t ? 'chevron-up' : 'chevron-down')}</span></button>
          ${t ? `<div class="thread-meta"><div class="comm-meta"><span class="field-label">Subject</span><span class="field-value">${esc(c.subject)}</span></div>
            <div class="meta-row">${pair('From:', esc(c.to))}<i class="vr"></i>${pair('To:', esc(c.from))}</div>
            <div class="meta-row">${pairTime('Received:', c.date, c.time)}</div>
            <div><button class="link" type="button" data-action="noop">View email</button></div></div>` : ''}
        </div>`;
      }
    }
    return `<article class="comm-card">
      <div class="comm-head">
        <div class="comm-title">${icon('mail')}<span>${inbound ? 'Inbound' : 'Outbound'}:</span><strong>${label}</strong></div>
        ${subject}${addr}
        <div class="meta-row">${pairTime(inbound ? 'Received:' : 'Sent:', c.date, c.time)}</div>
      </div>${body}
      <div class="comm-foot"><button class="link" type="button" data-action="toggle-card" data-key="${cardKey(l, c)}" aria-expanded="${open}">${open ? 'Show less' : 'Show more'}</button></div>
    </article>`;
  }

  function callCard(l, c) {
    const open = isOpen(l, c);
    const inbound = c.dir === 'in';
    return `<article class="comm-card">
      <div class="comm-head">
        <div class="comm-title">${icon(inbound ? 'phone-incoming' : 'phone-outgoing')}<span>${inbound ? 'Inbound' : 'Outbound'}:</span><strong>Call</strong>${scoreChips()}</div>
        <div class="meta-row">${pair('Duration:', c.duration)}<i class="vr"></i>${pairTime('Date:', c.date, c.time)}<i class="vr"></i>${pair('Wrap up:', esc(c.wrap))}</div>
      </div>
      ${open ? `<div class="comm-body"><div class="comm-text"><h3 class="field-label">Summary</h3><p>${esc(c.summary)}</p></div></div>` : ''}
      <div class="comm-foot"><button class="link" type="button" data-action="toggle-card" data-key="${cardKey(l, c)}" aria-expanded="${open}">${open ? 'Show less' : 'Show more'}</button></div>
    </article>`;
  }

  function workingCard(l) {
    return `<article class="comm-card">
      <div class="comm-head"><div class="comm-title">${icon('mail')}<span>Outbound:</span><strong>${l.draft.type === 'sms' ? 'SMS' : 'Email'}</strong></div></div>
      <div class="comm-body">
        <div class="placeholder-box">${icon('pencil')}<span>your ${l.draft.type === 'sms' ? 'message' : 'email'} will show here when ready.</span></div>
        <div class="comm-row-end"><span class="chip chip-working"><span class="spinner" aria-hidden="true"></span>AI draft working</span></div>
      </div>
    </article>`;
  }

  function draftCard(l) {
    const d = l.draft;
    const busy = d.status === 'refining';
    const sms = d.type === 'sms';
    return `<article class="comm-card comm-draft">
      <div class="comm-head">
        <div class="comm-title">${icon('mail')}<span>Outbound:</span><strong>${sms ? 'SMS' : 'Email'}</strong><span class="chip chip-draft">${sms ? 'sms draft' : 'email draft'}</span></div>
        ${sms ? `<div class="meta-row">${pair('To:', esc(l.phone))}</div>` : `
        <div class="draft-subject">
          <label class="field-label" for="draftSubject">Subject</label>
          <input id="draftSubject" class="text-input" type="text" data-input="subject" value="${esc(d.subject)}"${busy ? ' disabled' : ''}>
        </div>
        <div class="meta-row">${pair('From:', AGENT.email)}<i class="vr"></i>${pair('To:', esc(l.email))}</div>`}
        <div class="meta-row">${pairTime('Drafted:', SENT_AT.date, SENT_AT.time)}</div>
      </div>
      <div class="comm-body">
        <div class="draft-box" role="textbox" aria-multiline="true" aria-label="${sms ? 'SMS' : 'Email'} draft" contenteditable="${busy ? 'false' : 'true'}" aria-busy="${busy}" data-input="draftbody">${d.html}</div>
        ${sms ? '' : '<p class="sig-note">Signature will autofill - view in preview</p>'}
        <div class="draft-actions">
          <button class="btn btn-outlined-error" type="button" data-action="reject">Reject</button>
          <span class="spacer"></span>
          ${sms ? '' : '<button class="btn btn-text" type="button" data-action="preview">Preview</button>'}
          <button class="btn btn-secondary" type="button" data-action="approve"${busy ? ' disabled' : ''}>${icon('check')}Approve &amp; Send</button>
        </div>
      </div>
      ${refineForm(d, busy, 'refine-card')}
    </article>`;
  }

  function refineForm(d, busy, id) {
    const has = d.refine && d.refine.trim();
    return `<form class="${id === 'refine-card' ? 'refine' : 'modal-refine'}" data-form="refine" autocomplete="off">
      <label class="sr-only" for="${id}">How would you like to refine this draft?</label>
      <input id="${id}" class="text-input" type="text" data-input="refine" placeholder="Type how you'd like to refine this email here." value="${esc(d.refine || '')}"${busy ? ' disabled' : ''}>
      <button class="btn btn-secondary" type="submit"${has && !busy ? '' : ' disabled'}>${busy ? '<span class="spinner" aria-hidden="true"></span>' : ''}Refine</button>
    </form>`;
  }

  /* ---- Insights ---- */
  function renderInsights(l) {
    const first = esc(l.first);
    const full = `${esc(callSummary(l.name))}`;
    const tail = ` ${first} initially expressed skepticism about the process and its impact on their credit.`;
    const summary = state.summaryOpen ? full + tail : full + ' ' + first + ' initially expressed skepticism about the process and its impact on their…';
    const goals = state.insightTab === 'goals'
      ? `${first}'s primary goal is credit improvement, driven by their age and desire for financial relief. They aim to provide financial support to their family.`
      : `${first}'s main concerns are how the program will affect their credit in the short term and how the monthly deposit fits into their budget.`;
    const subtab = (id, label) => `<button class="subtab" type="button" role="tab" aria-selected="${state.insightTab === id}" data-action="insight-tab" data-tab="${id}">${label}</button>`;
    const chip = (i, label) => `<button class="chip-toggle" type="button" data-action="goal" data-i="${i}" aria-pressed="${state.goal === i}">${label}</button>`;
    const select = (n) => `<div class="select-wrap"><label class="sr-only" for="cit${n}">Citation ${n}</label><select class="select" id="cit${n}"><option>Citation ${n}</option><option>Citation ${n + 2}</option></select>${icon('chevron-down')}</div>`;
    return `
      <section class="section-card" aria-labelledby="sum-h">
        <h3 class="section-title" id="sum-h">Summary</h3>
        <p>${summary}</p>
        <div><button class="link link-md" type="button" data-action="toggle-summary" aria-expanded="${state.summaryOpen}">${state.summaryOpen ? 'Show less' : 'View full summary'}</button></div>
      </section>
      <section class="section-card" aria-labelledby="ci-h">
        <h3 class="section-title" id="ci-h">Customer Insights</h3>
        <div class="subtabs" role="tablist" aria-label="Customer insights">${subtab('goals', 'Goals')}${subtab('concerns', 'Concerns')}</div>
        <p>${goals}</p>
        <div class="insight-grid">
          <div class="fpo"><div class="fpo-circle">Chart FPO</div><div class="legend"><i></i>Chart label</div></div>
          <div>
            <div class="concern-chips">${chip(0, 'Credit Improvement')}${chip(1, 'Debt Freedom')}</div>
            ${select(1)}${select(2)}
          </div>
        </div>
      </section>
      <section class="section-card" aria-labelledby="io-h">
        <h3 class="section-title" id="io-h">Intent over time</h3>
        <p>Showing intent progression across # interactions.</p>
        <div class="fpo-rect">Intent chart FPO</div>
      </section>`;
  }

  /* ---- Chat ---- */
  function renderChat() {
    const log = $('#chatLog');
    log.innerHTML = state.chat.map((m) => {
      if (m.kind === 'user') return `<div class="msg-user">${esc(m.text)}</div>`;
      if (m.kind === 'ava') return `<p class="msg-ava">${esc(m.text)}</p>`;
      if (m.kind === 'status') return `<p class="msg-status${m.tone === 'positive' ? ' is-positive' : ''}">${icon(m.ic, 16)}<span>${esc(m.text)}</span></p>`;
      if (m.kind === 'choices') return `<div class="choices">${m.options.map((o) => `<button class="btn btn-outlined" type="button" data-action="quick-reply" data-choice="${o.id}">${esc(o.label)}</button>`).join('')}</div>`;
      return '';
    }).join('');
    log.scrollTop = log.scrollHeight;
  }

  function renderOverlay() {
    const root = $('#chatOverlay');
    const l = state.modalLead ? leadById(state.modalLead) : null;
    if (!l || !draftVisible(l)) { root.hidden = true; root.innerHTML = ''; return; }
    const d = l.draft;
    const busy = d.status === 'refining';
    const wasHidden = root.hidden;
    root.hidden = false;
    root.innerHTML = `<div class="ava-modal" role="dialog" aria-modal="true" aria-labelledby="emTitle">
      <div class="modal-head">
        <h3 class="modal-title" id="emTitle">${d.type === 'sms' ? 'SMS Draft' : 'Email Draft'}</h3>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="Close and keep draft" data-action="close-chat-modal">${icon('x', 20)}</button>
      </div>
      <div class="modal-scroll">
        <div class="addr">
          <p><span class="k">To:</span>${esc(d.type === 'sms' ? l.phone : l.email)}</p>
          ${d.type === 'sms' ? '' : `<p><span class="k">Subject:</span>${esc(d.subject)}</p>`}
        </div>
        <div class="draft-box" role="textbox" aria-multiline="true" aria-label="Draft body" contenteditable="${busy ? 'false' : 'true'}" aria-busy="${busy}" data-input="draftbody">${d.html}</div>
      </div>
      ${refineForm(d, busy, 'refine-modal')}
      <div class="modal-foot">
        <button class="btn btn-error" type="button" data-action="reject">Reject</button>
        <button class="btn btn-primary" type="button" data-action="approve"${busy ? ' disabled' : ''}>${icon('send')}Send</button>
      </div>
    </div>`;
    if (wasHidden) $('[data-action="close-chat-modal"]', root).focus();
  }

  function renderPreview() {
    const root = $('#dialogRoot');
    const l = state.previewLead ? leadById(state.previewLead) : null;
    if (!l || !l.draft) { root.innerHTML = ''; return; }
    root.innerHTML = `<div class="backdrop" data-action="close-preview">
      <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="pvTitle">
        <div class="dialog-head"><h2 class="dialog-title" id="pvTitle">Email preview</h2>
          <button class="icon-btn icon-btn-plain" type="button" aria-label="Close preview" data-action="close-preview" id="pvClose">${icon('x', 20)}</button></div>
        <div class="dialog-body">
          <div class="addr"><p><span class="k">To:</span>${esc(l.email)}</p><p><span class="k">Subject:</span>${esc(l.draft.subject)}</p></div>
          <div class="draft-box">${l.draft.html}</div>
          <p class="signature">${esc(AGENT.name)}</p>
        </div>
        <div class="dialog-actions">
          <button class="btn btn-outlined" type="button" data-action="close-preview">Close</button>
          <button class="btn btn-primary" type="button" data-action="approve-preview">Approve &amp; Send</button>
        </div>
      </div></div>`;
    $('#pvClose').focus();
  }

  /* ---- Performance ---- */
  const signClass = (s) => (/^\+/.test(s) ? 'is-pos' : /^-/.test(s) ? 'is-neg' : 'is-muted');
  const delta = (s) => {
    const c = signClass(s);
    const ic = c === 'is-pos' ? 'arrow-up' : c === 'is-neg' ? 'arrow-down' : '';
    return `<span class="delta ${c}">${ic ? icon(ic, 16) : ''}<span>${esc(s)}</span></span>`;
  };

  const pipeRows = () => {
    const p = state.perf;
    return PIPE.filter((r) => {
      if (p.stage && r.group !== p.stage) return false;
      if (p.arp === 'arp' && !r.arp) return false;
      if (p.arp === 'non' && r.arp) return false;
      if (p.state && r.st !== p.state) return false;
      if (p.channel && r.src !== p.channel) return false;
      return true;
    });
  };

  function perfFilters() {
    const p = state.perf;
    const select = (key) => `<div class="select-wrap">
      <label class="sr-only" for="pf-${key}">${FILTER_LABELS[key]}</label>
      <select class="select" id="pf-${key}" data-filter="${key}" data-fid="pf-${key}">
        <option value="">${FILTER_LABELS[key]}</option>${FILTER_OPTIONS[key].map((o) => `<option${p[key] === o ? ' selected' : ''}>${o}</option>`).join('')}
      </select>${icon('chevron-down')}</div>`;
    const group = (key, label, opts) => `<div class="toggle-group tg-inline" role="group" aria-label="${label}">${opts.map(([v, l]) =>
      `<button class="toggle" type="button" data-action="perf-toggle" data-key="${key}" data-value="${v}" data-fid="tg-${key}-${v}" aria-pressed="${p[key] === v}">${l}</button>`).join('')}</div>`;
    return `<div class="perf-filters">
      <div class="perf-filters-main">
        ${select('state')}${select('tz')}${select('channel')}${select('source')}
        ${group('arp', 'Program', [['all', 'All'], ['arp', 'ARP'], ['non', 'Non-ARP']])}
        ${group('traffic', 'Traffic', [['all', 'All traffic'], ['loan', 'Loan-first']])}
      </div>
      <div class="select-wrap">
        <label class="sr-only" for="pf-range">Date range</label>
        <select class="select" id="pf-range" data-filter="range" data-fid="pf-range">
          <option value="">Date Range</option>${['Today', 'Last 7 days', 'Last 30 days', 'Month to date'].map((o) => `<option${p.range === o ? ' selected' : ''}>${o}</option>`).join('')}
        </select>${icon('calendar')}
      </div>
    </div>`;
  }

  function perfData() {
    const p = state.perf;
    const windows = [['actual', 'Actual'], ['same', 'Same day'], ['three', '3-day'], ['seven', '7-day']];
    let idx = 0;
    const body = METRIC_SECTIONS.map((s) => {
      const head = `<tr class="section-row"><td colspan="9"><strong>${esc(s.name)}</strong> · ${esc(s.note)}</td></tr>`;
      const rows = s.rows.map((r) => {
        const [m, desc, t, a, d, lw, lwc, lm, lmc] = r;
        const i = idx++;
        return `<tr>
          <th scope="row" class="metric-cell"><span class="cell-stack"><span class="cell-strong">${esc(m)}</span>${desc ? `<span class="cell-sub">${esc(desc)}</span>` : ''}</span></th>
          <td class="cell-strong col-num">${t}</td>
          <td class="col-num ${desc ? signClass(d) : ''}">${a}</td>
          <td class="col-num ${signClass(d)}">${d}</td>
          <td class="col-num">${lw}</td><td class="col-num">${delta(lwc)}</td>
          <td class="col-num">${lm}</td><td class="col-num">${delta(lmc)}</td>
          <td><button class="icon-btn icon-btn-ava" type="button" data-action="ava-metric" data-i="${i}" aria-label="Ask AVA about ${esc(m)}">${icon('sparkles', 16)}</button></td>
        </tr>`;
      }).join('');
      return head + rows;
    }).join('');
    return `<div class="perf-content">
      <div class="perf-bar">
        <span class="perf-bar-label" id="convLabel">Conversion window</span>
        <div class="toggle-group tg-inline" role="group" aria-labelledby="convLabel">${windows.map(([v, l]) =>
          `<button class="toggle" type="button" data-action="perf-toggle" data-key="window" data-value="${v}" data-fid="tg-window-${v}" aria-pressed="${p.window === v}">${l}</button>`).join('')}</div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <caption class="sr-only">Performance metrics against target, last week and last month</caption>
          <thead><tr>
            <th scope="col">Metric</th><th scope="col">Target</th><th scope="col">Actual</th><th scope="col">Difference</th>
            <th scope="col">vs LW</th><th scope="col">Change</th><th scope="col">vs LM</th><th scope="col">Change</th><th scope="col">AVA</th>
          </tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>`;
  }

  const reserveCount = () => PIPE.filter((r) => r.r).length;

  function perfLeads() {
    const p = state.perf;
    const rows = pipeRows();
    const expiring = PIPE.filter((r) => r.r && RESERVE_DAYS - r.age <= 5).length;
    const stageCards = STAGES.map((s) => {
      const n = PIPE.filter((r) => r.group === s.id).length;
      const sub = s.sub.length ? `<span class="stage-sub">${s.sub.map(([label, v, neg]) =>
        `<span class="row"><span>${label}</span><b class="${v === 0 ? 'is-zero' : neg ? 'is-neg' : ''}">${v}</b></span>`).join('')}</span>` : '';
      return `<button class="stage-card" type="button" data-action="perf-stage" data-stage="${s.id}" data-fid="stage-${s.id}" aria-pressed="${p.stage === s.id}">
        <span class="stage-title">${s.title}</span>
        <span class="stage-count"><span class="count-pill">${n}</span><span class="unit">${s.unit}</span></span>${sub}
      </button>`;
    }).join('');

    const toneChip = { positive: 'chip-positive', info: 'chip-info', accent: 'chip-accent' };
    const priChip = { high: 'chip-negative', med: 'chip-warning', low: 'chip-info' };
    const tableRows = rows.map((r) => {
      const l = leadById(r.id);
      const left = r.age === null ? null : RESERVE_DAYS - r.age;
      const ageTone = left === null ? '' : left <= 7 ? 'is-neg' : left <= 14 ? 'is-warn' : '';
      const reserve = r.age === null ? '<span class="is-muted">-</span>'
        : `<span class="age-text">${r.age}d · ${left}d left</span><div class="age-bar ${ageTone}" aria-hidden="true"><i style="width:${Math.round((r.age / RESERVE_DAYS) * 100)}%"></i></div>`;
      const stip = r.stip ? `<span class="chip chip-${r.stipTone}">${r.stip}</span>` : '<span>-</span>';
      const working = l.draft && l.draft.status === 'working';
      const sent = l.sent[0];
      const label = working ? 'drafting' : draftVisible(l) ? 'view draft' : sent ? 'draft follow-up' : 'draft email';
      const kind = (l.draft && l.draft.type === 'sms') || (!l.draft && sent && sent.type === 'sms') ? 'sms' : 'email';
      const status = [];
      if (working) status.push(`<span class="chip chip-working"><span class="spinner" aria-hidden="true"></span>AI ${kind} drafting</span>`);
      else if (draftVisible(l)) status.push(`<span class="chip chip-draft">${icon('pencil', 12)}${kind} draft ready to review</span>`);
      if (sent && !working) status.push(`<span class="chip chip-positive">${icon('check-circle', 12)}${sent.type === 'sms' ? 'SMS' : 'email'} sent${l.sent.length > 1 ? ` (${l.sent.length})` : ''}</span>`);
      if (l.avaAsked) status.push(`<span class="chip chip-info">${icon('sparkles', 12)}asked AVA</span>`);
      const statusRow = status.length ? `<div class="row-status" role="status">${status.join('')}</div>` : '';
      const rowClass = working || draftVisible(l) ? ' class="row-draft"' : sent ? ' class="row-sent"' : '';
      return `<tr${rowClass}>
        <th scope="row"><div class="cell-stack">
          <span class="lead-name-line"><span class="cell-strong">${esc(l.name)}</span>${r.r ? '<span class="chip chip-badge chip-reserved" title="Reserved lead">R</span>' : ''}${r.arp ? '<span class="chip chip-badge chip-info">ARP</span>' : ''}${r.ca ? '<span class="chip chip-badge chip-accent">CA</span>' : ''}</span>
          <span class="cell-sub">${r.src} · ${r.st}</span></div></th>
        <td class="col-num">${r.debt}</td>
        <td><span class="chip ${toneChip[r.tone]}">${r.stage}</span></td>
        <td class="col-num">${r.days}</td>
        <td class="${r.uwTone}">${r.uw}</td>
        <td>${stip}</td>
        <td>${reserve}</td>
        <td><div class="cell-stack"><div class="insight"><span class="chip ${priChip[r.pri]}">${r.pri}</span><span>${esc(r.insight)}</span></div>${statusRow}</div></td>
        <td><div class="row-actions">
          <button class="btn btn-secondary" type="button" data-action="draft-lead" data-id="${r.id}"${working ? ' disabled' : ''}>${working ? '<span class="spinner" aria-hidden="true"></span>' : ''}${label}</button>
          <button class="icon-btn icon-btn-ava" type="button" data-action="ava-lead" data-id="${r.id}" aria-label="Ask AVA about ${esc(l.name)}">${icon('sparkles', 16)}</button>
        </div></td>
      </tr>`;
    }).join('');

    const filtered = rows.length !== PIPE.length;
    const caption = `<div class="list-caption" aria-live="polite"><span>Showing ${rows.length} of ${PIPE.length} leads</span>${filtered ? '<button class="link link-md" type="button" data-action="perf-clear">Clear filters</button>' : ''}</div>`;

    return `<div class="perf-content">
      <div class="pipe-head">
        <div>
          <h2 class="pipe-title">Your Pipeline</h2>
          <p class="pipe-sub">Ranked by debt, stage, time stalled and AVA priority</p>
        </div>
        <div class="reserved-box">
          <div class="reserved-label"><strong>Reserved leads</strong><span>Held up to ${RESERVE_DAYS} days each</span></div>
          <div class="reserved-count"><strong>${reserveCount()}</strong><span>of ${RESERVE_CAP}</span><span class="meter" aria-hidden="true"><i style="width:${Math.round((reserveCount() / RESERVE_CAP) * 100)}%"></i></span></div>
          ${expiring ? `<span class="chip chip-negative">${icon('alert', 16)}${expiring} expiring within 5 days</span>` : ''}
        </div>
      </div>
      <div class="stages">${stageCards}</div>
      ${caption}
      <div class="table-wrap">
        <table class="table">
          <caption class="sr-only">Pipeline leads ranked by priority</caption>
          <thead><tr>
            <th scope="col">Lead</th><th scope="col">Debt</th><th scope="col">Stage</th><th scope="col">Days</th><th scope="col">UW</th>
            <th scope="col">Stipulations</th><th scope="col">Reserve age</th><th scope="col">AVA insight</th><th scope="col">Actions</th>
          </tr></thead>
          <tbody>${tableRows || '<tr><td colspan="9" class="is-muted">No leads match these filters.</td></tr>'}</tbody>
        </table>
      </div>
    </div>`;
  }

  function renderPerf() {
    const root = $('#pagePerf');
    const body = $('.page-body', root);
    const scroll = body ? body.scrollTop : 0;
    const active = document.activeElement;
    const fid = active && root.contains(active) ? active.dataset.fid : null;
    const p = state.perf;
    const tabs = [['data', 'Data'], ['leads', 'Leads']]
      .map(([id, label]) => `<button class="tab" type="button" role="tab" id="ptab-${id}" aria-selected="${p.tab === id}" aria-controls="ptabpanel" data-action="perf-tab" data-tab="${id}" data-fid="ptab-${id}">${label}</button>`).join('');
    root.innerHTML = `
      <header class="page-head"><h1 class="page-title">Performance</h1></header>
      <div class="page-body">
        ${perfFilters()}
        <div class="tabs perf-tabs" role="tablist" aria-label="Performance sections">${tabs}</div>
        <div id="ptabpanel" role="tabpanel" aria-labelledby="ptab-${p.tab}">${p.tab === 'data' ? perfData() : perfLeads()}</div>
      </div>`;
    $('.page-body', root).scrollTop = scroll;
    if (fid) { const el = root.querySelector(`[data-fid="${fid}"]`); if (el) el.focus({ preventScroll: true }); }
  }

  function renderStub() {
    const label = PAGES[state.page].label;
    $('#pageStub').innerHTML = `
      <header class="page-head"><h1 class="page-title">${label}</h1></header>
      <p class="placeholder-note">The ${state.role.toUpperCase()} ${label} isn't part of this prototype yet.</p>`;
  }

  /* ---- Layout: pages and AVA chat mode ---- */
  const chatMode = () => state.chatMode[state.page];

  function applyLayout() {
    const app = $('#app');
    const mode = chatMode();
    app.dataset.nav = state.navCollapsed ? 'collapsed' : 'expanded';
    app.dataset.chat = mode;
    app.dataset.page = state.page;
    app.style.setProperty('--fab-r', `${state.fab.right}px`);
    app.style.setProperty('--fab-b', `${state.fab.bottom}px`);
    const panelB = Math.max(8, Math.min(state.fab.bottom + 64, window.innerHeight - 560 - 8));
    app.style.setProperty('--panel-b', `${panelB}px`);

    $('#pageLeads').hidden = state.page !== 'leads';
    $('#pagePerf').hidden = state.page !== 'performance';
    $('#pageStub').hidden = state.page !== 'dashboard' && state.page !== 'researcher';
    $('#ava').hidden = mode === 'closed';

    const fab = $('#fab');
    fab.hidden = mode === 'docked';
    const open = mode === 'hover';
    fab.setAttribute('aria-expanded', String(open));
    fab.setAttribute('aria-label', open ? 'Close AVA Chat' : 'Open AVA Chat');
    const dock = $('#chatDock');
    dock.setAttribute('aria-pressed', String(mode === 'docked'));
    dock.setAttribute('aria-label', mode === 'docked' ? 'Float chat over the page' : 'Dock chat to the right');
    $('#chatSuggestion').textContent = state.page === 'performance' ? 'Which leads should I work first?' : 'Draft me an email response to this lead';
    $('#chatSuggestion').hidden = state.role === 'um'; // the suggestion is lead-specific, so it is a DC prompt
    document.title = `SCai | ${PAGES[state.page].label}`;
  }

  function setChatMode(mode, focusInput) {
    state.chatMode[state.page] = mode;
    applyLayout();
    renderChat();
    if (focusInput && mode === 'hover') $('#chatInput').focus({ preventScroll: true });
  }

  function render() {
    renderSidenav();
    if (state.page === 'leads') { renderInbox(); renderMiddle(); }
    else if (state.page === 'performance') renderPerf();
    else renderStub();
    applyLayout();
    renderChat();
    renderOverlay();
  }

  /* ======================================================================
     Chat + toasts
     ====================================================================== */
  function pushChat(m) { m.id = ++seq; state.chat.push(m); return m.id; }
  function replaceChat(id, m) {
    const i = state.chat.findIndex((x) => x.id === id);
    m.id = id;
    if (i >= 0) state.chat[i] = m; else state.chat.push(m);
  }
  function removeChat(id) { state.chat = state.chat.filter((x) => x.id !== id); }

  function toast({ tone = 'info', ic = 'info', title, text }) {
    const id = `t${++toastSeq}`;
    const el = document.createElement('div');
    el.className = `toast toast-${tone}`;
    el.id = id;
    el.innerHTML = `${icon(ic, 20)}<div><strong>${esc(title)}</strong>${esc(text)}</div>
      <button class="toast-close" type="button" aria-label="Dismiss notification" data-action="dismiss-toast">${icon('x', 16)}</button>`;
    $('#toasts').appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }

  /* ======================================================================
     Drafting flow
     ====================================================================== */
  function startDraft(l, opts = {}) {
    const type = opts.type || 'email';
    const source = opts.source || 'lead';
    if (l.draft && l.draft.timer) clearTimeout(l.draft.timer);
    l.rejected = false;
    l.draft = { status: 'working', type, source, html: '', subject: '', refine: '' };
    if (!opts.keepSelection) {
      state.selectedId = l.id;
      state.tab = 'communications';
      state.promptOpen = false;
      state.promptText = '';
    }
    if (source === 'chat' && chatMode() === 'closed') state.chatMode[state.page] = 'hover';
    const ib = latestInbound(l);
    if (ib && source === 'lead') state.open[cardKey(l, ib)] = true;
    if (!opts.skipUserMessage) pushChat({ kind: 'user', text: opts.prompt || `Draft a response to ${l.first} for me.` });
    l.draft.statusId = pushChat({ kind: 'status', ic: 'pencil', text: type === 'sms' ? 'drafting SMS...' : 'drafting email...' });
    render();
    l.draft.timer = setTimeout(() => finishDraft(l), 3200);
  }

  function finishDraft(l) {
    const d = l.draft;
    if (!d || d.status !== 'working') return;
    const ib = latestInbound(l);
    d.status = 'ready';
    d.html = draftHtml(l.first, d.type);
    d.subject = ib ? ib.subject : 'Follow-Up: Debt Relief Options';
    replaceChat(d.statusId, { kind: 'ava', text: `Your draft to ${l.first} is ready to review.` });
    if (ib) state.open[cardKey(l, ib)] = false;
    if (d.source === 'chat') state.modalLead = l.id;
    toast({ tone: 'info', ic: 'info', title: d.type === 'sms' ? 'SMS draft ready' : 'Email draft ready', text: `Draft for ${l.name} ready to review` });
    render();
  }

  function refineDraft(l) {
    const d = l.draft;
    if (!d || d.status !== 'ready' || !(d.refine || '').trim()) return;
    const note = d.refine.trim();
    pushChat({ kind: 'user', text: note });
    const sid = pushChat({ kind: 'status', ic: 'pencil', text: 'refining draft...' });
    d.refine = '';
    d.status = 'refining';
    render();
    setTimeout(() => {
      if (!l.draft || l.draft.status !== 'refining') return;
      l.draft.html = applyRefinement(l.draft.html, note, l.first);
      l.draft.status = 'ready';
      replaceChat(sid, { kind: 'ava', text: `I've updated your draft to ${l.first}.` });
      render();
    }, 1800);
  }

  // Prototype only: simulates a rewrite with a few canned behaviours.
  function applyRefinement(html, note, first) {
    const n = note.toLowerCase();
    if (/short|brief|concise/.test(n)) {
      return `<p>Hi ${esc(first)},</p><p>I wanted to follow up on our conversation about your credit card debt and the options we discussed. I'm happy to answer any questions you have. Please reach out whenever works best for you.</p>`;
    }
    if (/formal/.test(n)) {
      return html.replace(`Hi ${esc(first)},`, `Dear ${esc(first)},`) + '<p>Sincerely,</p>';
    }
    return html + '<p>Please let me know if there is anything else I can clarify.</p>';
  }

  function rejectDraft(l) {
    if (!l.draft) return;
    clearTimeout(l.draft.timer);
    l.draft = null;
    l.rejected = true;
    l.unread = false;
    state.modalLead = null;
    const ib = latestInbound(l);
    if (ib) state.open[cardKey(l, ib)] = true;
    pushChat({ kind: 'ava', text: `Your draft to ${l.first} has been removed. You can prompt me to create a new draft.` });
    render();
  }

  function sendDraft(l) {
    const d = l.draft;
    if (!d || d.status !== 'ready') return;
    const ib = latestInbound(l);
    l.sent.unshift({
      id: `s${++seq}`, type: d.type === 'sms' ? 'sms' : 'email', dir: 'out', subject: d.subject,
      from: AGENT.email, to: d.type === 'sms' ? l.phone : l.email, date: SENT_AT.date, time: SENT_AT.time, body: d.html, open: false
    });
    if (ib) state.open[cardKey(l, ib)] = false;
    l.draft = null;
    l.unread = false;
    l.rejected = false;
    state.modalLead = null;
    state.previewLead = null;
    pushChat({ kind: 'status', ic: 'check-circle', tone: 'positive', text: d.type === 'sms' ? 'SMS successfully sent' : 'email successfully sent' });
    render();
    renderPreview();
  }

  /* ======================================================================
     Chat input handling
     ====================================================================== */
  const findNamedLead = (text) => activeLeads.concat(pipelineOnly).find((x) => new RegExp(`\\b${x.first}\\b`, 'i').test(text));
  const openChatHover = () => { if (chatMode() === 'closed') setChatMode('hover'); };

  function handleChatMessage(text) {
    pushChat({ kind: 'user', text });
    renderChat();
    const target = findNamedLead(text) || (state.page === 'leads' ? selectedLead() : null);
    if (/draft|email|write|respond|reply/i.test(text)) {
      setTimeout(() => {
        if (!target) {
          pushChat({ kind: 'ava', text: 'Which lead should I draft for? Tell me their name, or use "draft email" on a lead in your pipeline.' });
        } else {
          state.chatLead = target.id;
          const options = [{ id: 'chat', label: 'Here in chat' }];
          if (state.page === 'leads' || activeLeads.includes(target)) options.push({ id: 'lead', label: 'On the lead page' });
          pushChat({ kind: 'ava', text: 'Where would you like to work on this draft?' });
          pushChat({ kind: 'choices', options });
        }
        renderChat();
      }, 600);
    } else if (state.page === 'performance' && /first|priorit|focus|work|today/i.test(text)) {
      setTimeout(() => {
        const top = PIPE.filter((r) => r.pri === 'high' && r.age !== null)
          .sort((a, b) => b.age - a.age).slice(0, 3);
        const names = top.map((r) => leadById(r.id).name);
        pushChat({ kind: 'ava', text: `Start with ${names.join(', ')}. ${names[0]}'s reservation ends in ${RESERVE_DAYS - top[0].age} days.` });
        renderChat();
      }, 600);
    } else {
      setTimeout(() => {
        pushChat({ kind: 'ava', text: 'I can help draft emails or SMS responses for a lead. Try asking me to draft a response.' });
        renderChat();
      }, 600);
    }
  }

  /* ======================================================================
     Events
     ====================================================================== */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    const a = t.dataset.action;
    const l = selectedLead();

    switch (a) {
      case 'nav': {
        const nav = t.dataset.nav;
        if (nav === 'leads' && state.page === 'leads' && state.view === 'archived') showView('inbox');
        else { state.page = nav; render(); }
        break;
      }
      case 'role': {
        if (t.dataset.role === state.role) break;
        state.role = t.dataset.role;
        // Land on the Dashboard when the current page does not exist in the new view.
        if (!PAGES[state.page].roles.includes(state.role)) state.page = 'dashboard';
        render();
        $(`[data-role="${state.role}"]`).focus();
        break;
      }
      case 'toggle-archived':
        showView(state.view === 'archived' ? 'inbox' : 'archived');
        break;
      case 'toggle-nav':
        state.navCollapsed = !state.navCollapsed;
        renderSidenav();
        applyLayout();
        $('.sn-toggle').focus();
        break;
      case 'chat-toggle':
        if (suppressFabClick) { suppressFabClick = false; break; }
        setChatMode(chatMode() === 'hover' ? 'closed' : 'hover', true);
        break;
      case 'chat-close':
        setChatMode('closed');
        if (!$('#fab').hidden) $('#fab').focus();
        break;
      case 'chat-dock':
        setChatMode(chatMode() === 'docked' ? 'hover' : 'docked');
        $('#chatDock').focus();
        break;
      case 'perf-tab':
        state.perf.tab = t.dataset.tab;
        renderPerf();
        break;
      case 'perf-toggle':
        state.perf[t.dataset.key] = t.dataset.value;
        renderPerf();
        break;
      case 'perf-stage':
        state.perf.stage = state.perf.stage === t.dataset.stage ? null : t.dataset.stage;
        renderPerf();
        break;
      case 'perf-clear':
        Object.assign(state.perf, { stage: null, arp: 'all', state: '', channel: '' });
        renderPerf();
        break;
      case 'ava-metric': {
        const m = METRICS[Number(t.dataset.i)];
        openChatHover();
        pushChat({ kind: 'user', text: `Tell me about my ${m[0]}.` });
        renderChat();
        setTimeout(() => {
          pushChat({ kind: 'ava', text: `${m[0]} is ${m[3]} against a target of ${m[2]} (${m[4]}). Versus last week it is ${m[6]}, and versus last month ${m[8]}. Want me to look at what is driving it?` });
          renderChat();
        }, 600);
        break;
      }
      case 'ava-lead': {
        const target = leadById(t.dataset.id);
        const row = PIPE.find((r) => r.id === target.id);
        target.avaAsked = true;
        openChatHover();
        state.chatLead = target.id;
        state.chat = state.chat.filter((m) => m.kind !== 'choices');
        pushChat({ kind: 'user', text: `What can I do with ${target.name}?` });
        renderChat();
        setTimeout(() => {
          pushChat({ kind: 'ava', text: `${row.insight}. Would you like me to draft an email?` });
          pushChat({ kind: 'choices', options: [{ id: 'chat', label: 'Here in chat' }] });
          renderChat();
        }, 600);
        if (state.page === 'performance') renderPerf();
        break;
      }
      case 'draft-lead': {
        const target = leadById(t.dataset.id);
        openChatHover();
        if (draftVisible(target)) {
          target.draft.source = 'chat';
          state.modalLead = target.id;
          render();
        } else {
          startDraft(target, { source: 'chat', keepSelection: true });
        }
        break;
      }
      case 'filter':
        state.filter = t.dataset.filter;
        if (!currentList().some((x) => x.id === state.selectedId) && currentList().length) {
          state.selectedId = currentList()[0].id;
        }
        render();
        break;
      case 'more-filters': {
        const on = t.getAttribute('aria-pressed') === 'true';
        t.setAttribute('aria-pressed', String(!on));
        break;
      }
      case 'select-lead':
        state.selectedId = t.dataset.id;
        state.promptOpen = false;
        state.summaryOpen = false;
        render();
        break;
      case 'tab':
        state.tab = t.dataset.tab;
        renderMiddle();
        break;
      case 'insight-tab':
        state.insightTab = t.dataset.tab;
        renderMiddle();
        break;
      case 'goal':
        state.goal = Number(t.dataset.i);
        renderMiddle();
        break;
      case 'toggle-summary':
        state.summaryOpen = !state.summaryOpen;
        renderMiddle();
        break;
      case 'toggle-prompt':
        state.promptOpen = !state.promptOpen;
        renderMiddle();
        if (state.promptOpen) $('#promptInput').focus();
        break;
      case 'prompt-chip':
        state.promptText = t.dataset.text;
        renderMiddle();
        $('#promptInput').focus();
        break;
      case 'draft-response':
        startDraft(l);
        break;
      case 'toggle-card': {
        const key = t.dataset.key;
        const [id, cid] = key.split(':');
        const owner = leadById(id);
        const c = commsFor(owner).find((x) => x.id === cid);
        state.open[key] = !isOpen(owner, c);
        renderMiddle();
        break;
      }
      case 'toggle-thread':
        state.threadOpen[t.dataset.key] = !state.threadOpen[t.dataset.key];
        renderMiddle();
        break;
      case 'reject': {
        const target = state.modalLead ? leadById(state.modalLead) : l;
        rejectDraft(target);
        break;
      }
      case 'approve': {
        const target = state.modalLead ? leadById(state.modalLead) : l;
        sendDraft(target);
        break;
      }
      case 'preview':
        state.previewLead = l.id;
        renderPreview();
        break;
      case 'approve-preview':
        sendDraft(l);
        break;
      case 'close-preview':
        if (e.target === t || t.tagName === 'BUTTON') { state.previewLead = null; renderPreview(); }
        break;
      case 'close-chat-modal': {
        const target = leadById(state.modalLead);
        if (target && target.draft) target.draft.source = 'lead';
        state.modalLead = null;
        render();
        break;
      }
      case 'quick-reply': {
        const choice = t.dataset.choice;
        const target = leadById(state.chatLead) || l;
        state.chat = state.chat.filter((m) => m.kind !== 'choices');
        pushChat({ kind: 'user', text: choice === 'chat' ? 'Here in chat' : 'On the lead page' });
        if (choice === 'lead' && state.page !== 'leads') { state.page = 'leads'; state.view = 'inbox'; state.filter = 'all'; }
        startDraft(target, { source: choice === 'chat' ? 'chat' : 'lead', skipUserMessage: true, keepSelection: state.page !== 'leads' });
        break;
      }
      case 'suggestion':
        handleChatMessage(state.page === 'performance' ? 'Which leads should I work first?' : `Draft me an email response to Lead #${LEAD_ID}`);
        break;
      case 'new-chat':
        state.chat = [];
        renderChat();
        break;
      case 'dismiss-toast':
        t.closest('.toast').remove();
        break;
      default:
        break;
    }
  });

  document.addEventListener('input', (e) => {
    const t = e.target;
    const kind = t.dataset && t.dataset.input;
    if (!kind) return;
    const l = selectedLead();
    const target = state.modalLead ? leadById(state.modalLead) : l;
    if (kind === 'prompt') {
      state.promptText = t.value;
      const btn = $('button[type="submit"]', t.closest('form'));
      btn.disabled = !t.value.trim();
    } else if (kind === 'refine' && target && target.draft) {
      target.draft.refine = t.value;
      $('button[type="submit"]', t.closest('form')).disabled = !t.value.trim();
    } else if (kind === 'subject' && target && target.draft) {
      target.draft.subject = t.value;
    } else if (kind === 'draftbody' && target && target.draft) {
      target.draft.html = t.innerHTML;
    }
  });

  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-form]');
    if (!form) return;
    e.preventDefault();
    const which = form.dataset.form;
    const l = selectedLead();
    if (which === 'prompt') {
      const text = state.promptText.trim();
      if (!text) return;
      startDraft(l, { prompt: text, type: /sms|text message/i.test(text) ? 'sms' : 'email' });
    } else if (which === 'refine') {
      refineDraft(state.modalLead ? leadById(state.modalLead) : l);
    } else if (which === 'chat') {
      const input = $('#chatInput');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      handleChatMessage(text);
    }
  });

  document.addEventListener('change', (e) => {
    const key = e.target.dataset && e.target.dataset.filter;
    if (!key) return;
    state.perf[key] = e.target.value;
    renderPerf();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (state.previewLead) { state.previewLead = null; renderPreview(); return; }
    if (state.modalLead) {
      const target = leadById(state.modalLead);
      if (target && target.draft) target.draft.source = 'lead';
      state.modalLead = null;
      render();
    }
  });

  /* ======================================================================
     Floating chat button: drag to move, click to open/close
     ====================================================================== */
  let suppressFabClick = false;
  (function enableFabDrag() {
    const fab = $('#fab');
    let drag = null;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    fab.addEventListener('pointerdown', (e) => {
      drag = { x: e.clientX, y: e.clientY, r: state.fab.right, b: state.fab.bottom, moved: false };
      fab.setPointerCapture(e.pointerId);
    });
    fab.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 5) return;
      drag.moved = true;
      state.fab.right = clamp(drag.r - dx, 8, window.innerWidth - 56 - 8);
      state.fab.bottom = clamp(drag.b - dy, 8, window.innerHeight - 56 - 8);
      applyLayout();
    });
    const end = () => { if (drag && drag.moved) suppressFabClick = true; drag = null; };
    fab.addEventListener('pointerup', end);
    fab.addEventListener('pointercancel', end);
  })();
  window.addEventListener('resize', applyLayout);

  /* ======================================================================
     Init
     ====================================================================== */
  $$('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon, Number(el.dataset.iconSize) || 16); });
  render();
})();
