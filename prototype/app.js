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
    circle: '<circle cx="12" cy="12" r="10"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
    minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',
    'more-vertical': '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
    paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
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
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'edit-3': '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    'mouse-pointer': '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>',
    umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>',
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>'
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
  // Appears on the dashboard lead stack (UW attention) but not in the Performance pipeline.
  pipelineOnly.push(lead({ id: 'evan', name: 'Evan Loftis', first: 'Evan', kind: 'opportunity', status: 'Opportunity', email: 'evan@email.com' }));

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

  /* ---- Researcher (UM): an internal agent that does two things for a unit manager.
     1. Reads calls and transcripts to find selling behaviors and customer responses, and turns the trends into coaching for agents.
     2. Compiles recent performance metrics and flags the trends.
     Everything it returns is simulated. Names and figures are illustrative, not real agent data. ---- */
  const RES_TOOLS = {
    insights: { label: 'Discover insights', ic: 'search' },
    defs: { label: 'Get Evaluation Definitions', ic: 'book' },
    transcripts: { label: 'Search transcripts', ic: 'phone-call' },
    metrics: { label: 'Query metrics', ic: 'trending-up' },
    read: { label: 'Read File', ic: 'file-text' },
    write: { label: 'Write File', ic: 'pencil' },
    fan: { label: 'Fan out', ic: 'users' }
  };
  const RES_STATUS = {
    new: { label: 'New', chip: 'chip-info', ic: 'plus' },
    working: { label: 'Working', chip: 'chip-info', ic: 'clock' },
    done: { label: 'Completed', chip: 'chip-positive', ic: 'check-circle' }
  };
  // A simulated step starts hidden and runs, one after another, when the researcher is asked something.
  const ns = (t, arg, out) => ({ t, arg: arg || '', out: out || 'Completed.', open: false, started: false, running: false });
  const art = (id, name, type, age, html, send) => ({ id, name, type, age, html, send: !!send, sent: false });
  const SOURCE = { name: 'SalesDPRv3 - SalesDPR', kind: 'Tableau' };
  const TRANSCRIPTS = { name: 'Call transcripts, last 7 days', kind: 'Transcripts' };

  // Sources a unit manager can attach to a conversation. The researcher grounds every turn in what is attached.
  const CTX_PROVIDERS = {
    tableau: { label: 'Tableau Server', sub: 'Published dashboards, scorecards & metric views', ic: 'database', connected: true, kind: 'Tableau', url: 'Paste Tableau view URL', ph: 'https://tableau.example.com/#/site/sales/views/...' },
    drive: { label: 'Google Drive & Docs', sub: 'Shared folders, Google Sheets & Docs', ic: 'folder', connected: true, kind: 'Google Drive', url: 'Paste Google Drive link', ph: 'https://docs.google.com/...' },
    local: { label: 'Local Deliverables', sub: 'Attach PDF reference specs or markdown files', ic: 'file-text', connected: false, kind: 'File', url: '', ph: '' }
  };
  const ctxSrc = (provider, group, tag, kind, names) => names.map((name) => ({ id: `${provider}:${group}:${name}`, provider, group, tag, kind, name }));
  const CTX_SOURCES = [].concat(
    ctxSrc('tableau', 'Sales DPR', 'Dashboards', 'Tableau', ['SalesDPRv3 - SalesDPR', 'Agent Scorecard', 'Connect Rate by Timezone', 'Prequal and Demo Rates']),
    ctxSrc('tableau', 'Watchtower', 'Goal tracking', 'Tableau', ['Watchtower Metrics 12 Weeks', 'Watchtower Trends', 'Watchtower Goal Progress', 'Watchtower Metric Definitions']),
    ctxSrc('tableau', 'Retention', 'Dashboards', 'Tableau', ['Retention Rate by Cohort', '60-Day Draft Rate', 'Attrition by Tenure', 'Rescission and NSF Trends']),
    ctxSrc('drive', 'Watchtower notations', 'Docs', 'Google Doc', ['Watchtower Notes: Week of Oct 23', 'Q4 Goal Progress Tracker', 'Watchtower Notation Guide']),
    ctxSrc('drive', 'Team metrics', 'Sheets', 'Google Sheet', ['Weekly Metrics Log', 'Agent Targets Q4', 'Close Rate Tracker']),
    ctxSrc('drive', 'Coaching', 'Docs', 'Google Doc', ['Coaching Log, October', 'Call Evaluation Rubric']),
    ctxSrc('local', 'Reference specs', 'Files', 'File', ['evaluation_definitions.md', 'metric_targets.md', 'objection_taxonomy.md'])
  );
  const CTX_QUICK = ['DPR', 'Watchtower', 'Retention', 'Close Rate', 'Connect Rate'];

  const docTable = (caption, head, rows) => `<div class="table-wrap"><table class="table">
      <caption class="sr-only">${caption}</caption>
      <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  const pos = (s) => `<span class="is-pos">${s}</span>`;
  const neg = (s) => `<span class="is-neg">${s}</span>`;
  const warn = (s) => `<span class="is-warn">${s}</span>`;

  // Researcher outputs. Agents, calls and figures are illustrative placeholders, not real agent data.
  const COACHING_HTML = `
    <h1 class="doc-title">Selling behaviors and customer responses: last 7 days</h1>
    <p class="doc-meta"><strong>Timeframe:</strong> Oct 23 to Oct 29, 2026 | <strong>Calls scored:</strong> 186 conversations and 412 voicemails across 6 agents | <strong>Audience:</strong> Unit managers | <strong>Status:</strong> Ready to share</p>
    <h2 class="doc-h">1. What the calls show</h2>
    <p>The enrollment rate across the scored conversations was 31%. Most dials never become a conversation: voicemail and full mailboxes took up the largest share of agent time, so how an agent leaves a message matters as much as how they sell. Seven behaviors separated the calls that moved forward from the rest.</p>
    ${docTable('Selling behaviors and outcomes', ['Behavior', 'Outcome', 'Calls with it', 'With', 'Without', 'Gap'], [
      ['Compared the 48-month cost of current payments to the program', 'Enrollment rate', '98', '41%', '21%', pos('+20 pts')],
      ['Kept walking through the customer\'s debts while the demo email loaded', 'Reached the demo', '64', '78%', '49%', pos('+29 pts')],
      ['Asked what caused the debt and the customer\'s main goal before presenting', 'Enrollment rate', '88', '40%', '24%', pos('+16 pts')],
      ['Offered to keep one card out for emergencies when explaining card closures', 'Enrollment rate', '39', '43%', '28%', pos('+15 pts')],
      ['Asked who else is in the financial decision before the demo', 'Enrollment rate', '61', '37%', '28%', pos('+9 pts')],
      ['Confirmed the first draft date out loud', '10-day draft rate', '41 of 58 enrolled', '85%', '59%', pos('+26 pts')],
      ['Voicemail gave a reason, a direct number and a deadline', 'Callback rate', '147 voicemails', '11%', '4%', pos('+7 pts')]
    ])}
    <h2 class="doc-h">2. How customers respond</h2>
    <p>These are the responses that came up most, and the handling that worked best.</p>
    ${docTable('Customer responses and the handling that worked', ['Customer response', 'Share of calls', 'Handling that worked', 'Result'], [
      ['"Will this hurt my credit?"', '47%', 'Answered it directly before the demo, then explained utilization against the 30% guideline', '36% enrolled, vs 17% when the answer was put off'],
      ['"Is this a loan?"', '38%', 'Explained relief versus a loan in one sentence, then showed the payment comparison', '39% enrolled, vs 26% when not addressed'],
      ['"Will my cards be closed?"', '34%', 'Said yes, then offered to keep one low-limit card out for emergencies', '43% enrolled, vs 28% when the answer stayed general'],
      ['"I need to talk to my spouse"', '33%', 'Asked early who is in the decision, then offered a three-way call or a same-day follow-up time', '52% booked a follow-up within 24 hours, vs 31% when left open'],
      ['"Please take me off the list"', '18%', 'Confirmed the removal, then asked if anything should be sent for later', '27% accepted a follow-up email, vs 9% when the call ended right away']
    ])}
    <h2 class="doc-h">3. Coaching opportunities by agent</h2>
    ${docTable('Coaching opportunities by agent', ['Agent', 'Doing well', 'Opportunity', 'Coaching focus'], [
      ['Tom Loftis', 'Compares 48-month cost on 71% of calls and walks customers through their debts while the demo email loads', 'Confirms the draft date on only 24% of enrolled calls', 'Add a draft date check to every close'],
      ['Dana Reyes', 'Offers to keep one card out for emergencies', 'Voicemails give no reason or deadline, and the 48-month comparison is skipped on high-debt calls', 'Name the reason, a direct number and a deadline on every voicemail, and use the comparison on every high-debt call'],
      ['Jordan Okafor', 'Asks what caused the debt before presenting', 'Puts off credit questions until after the demo', 'Answer the credit question first, then demo'],
      ['Mei Lin', 'Clear loan versus relief explanation', 'Ends "take me off the list" calls right away', 'Confirm the removal, then ask if anything should be sent for later'],
      ['Sam Brightwell', 'Confirms the draft date on 90% of enrolled calls', 'Rarely asks who else is in the decision', 'Ask early and offer a three-way call'],
      ['Alicia Ford', 'Steady across all seven behaviors', 'Talks over the customer during objections', 'Pause and let the customer finish before responding']
    ])}
    <h2 class="doc-h">4. Recommended next steps</h2>
    <ol>
      <li>Make the 48-month comparison the standard anchor on every high-debt call.</li>
      <li>Coach agents to keep talking through the debts while the demo email loads, and to check spam and promotions folders before resending it.</li>
      <li>Standardize voicemails: the reason for the call, a direct number and a deadline.</li>
      <li>Add "confirm the first draft date out loud" to the close checklist.</li>
      <li>Send each agent their coaching note this week.</li>
    </ol>
    <p class="doc-meta">Placeholder agents and figures for the prototype.</p>`;

  const coachNote = (name, keep, next) => `
    <h2 class="doc-h">${name}</h2>
    <p><strong>Keep doing:</strong> ${keep}</p>
    <p><strong>Try next:</strong> ${next}</p>`;
  const NOTES_HTML = `
    <h1 class="doc-title">Coaching notes for agents: week of Oct 23</h1>
    <p class="doc-meta"><strong>Based on:</strong> 186 conversations and 412 voicemails | <strong>From:</strong> Unit manager | <strong>Status:</strong> Ready to send</p>
    ${coachNote('Tom Loftis', 'You compared the 48-month cost on 71% of your calls, and you keep walking customers through their debts while the demo email loads. Both show up in your results.', 'Confirm the first draft date out loud before you end the call. You did it on 24% of your enrolled calls this week.')}
    ${coachNote('Dana Reyes', 'You offer to keep one card out for emergencies when customers worry about closures, and it lands well.', 'Use the 48-month comparison on your high-debt calls. You skipped it on most of them this week. Also, your voicemails do not give a reason or a deadline. Try: why you called, your direct number, and when you will keep their file open until.')}
    ${coachNote('Jordan Okafor', 'You ask what caused the debt and what the customer wants before you present, and it builds trust early.', 'Answer the credit question before the demo instead of after it. Customers who got an early answer enrolled about twice as often.')}
    ${coachNote('Mei Lin', 'You explain the difference between debt relief and a loan clearly.', 'When a customer asks to be taken off the list, confirm the removal and ask if anything should be sent for later before you end the call.')}
    ${coachNote('Sam Brightwell', 'You confirmed the draft date on 90% of your enrolled calls. Those clients are the most likely to draft on time.', 'Ask early who else is in the decision, and offer a three-way call when a spouse needs to join.')}
    ${coachNote('Alicia Ford', 'You use all seven behaviors consistently.', 'During objections, pause and let the customer finish before you respond. It builds trust and surfaces the real concern.')}`;

  const METRICS_HTML = `
    <h1 class="doc-title">Team performance: week ending Oct 29, 2026</h1>
    <p class="doc-meta"><strong>Timeframe:</strong> Last 4 weeks | <strong>Source:</strong> SalesDPRv3 - SalesDPR | <strong>Audience:</strong> Unit managers | <strong>Status:</strong> Ready to review</p>
    <h2 class="doc-h">1. Where the team stands</h2>
    ${docTable('Team metrics against target and last week', ['Metric', 'Target', 'This week', 'Last week', 'Change', '4-week trend'], [
      ['ACE Score', '55%', '53.1%', '55.4%', neg('-2.3 pts'), warn('Down 2 weeks')],
      ['EPA', '1.80', '1.74', '1.82', neg('-4.4%'), warn('Down 2 weeks')],
      ['Prequal', '50.0%', '44.8%', '44.1%', pos('+0.7 pts'), neg('Below target all 4 weeks')],
      ['Demo', '50.0%', '41.9%', '43.0%', neg('-1.1 pts'), neg('Below target all 4 weeks')],
      ['Connect Rate', '80.0%', '76.2%', '79.4%', neg('-3.2 pts'), neg('Down 3 weeks')],
      ['Close Rate', '24.0%', '29.6%', '28.7%', pos('+0.9 pts'), pos('Above target')],
      ['Utilization', '50.0%', '66.3%', '65.0%', pos('+1.3 pts'), pos('Above target')],
      ['ABI', '$27,000', '$26,800', '$28,100', neg('-4.6%'), warn('Down 1 week')],
      ['60-day draft rate', '81.0%', '61.2%', '63.5%', neg('-2.3 pts'), neg('Below target all 4 weeks')]
    ])}
    <h2 class="doc-h">2. Trends to review</h2>
    <ol>
      <li><strong>Connect rate is falling.</strong> It has dropped three weeks in a row, from 81.0% to 76.2%, with the biggest drop in Mountain timezone leads. Most sampled dials ended in voicemail or a full mailbox, so this may be a reach problem more than a conversation problem.</li>
      <li><strong>Fewer prequals and demos.</strong> Both have been below target all month. ABI fell 4.6% this week, which may reflect fewer demos reaching higher-debt clients.</li>
      <li><strong>First drafts are slipping.</strong> The 60-day draft rate is 19.8 points under target and has not met it in four weeks.</li>
      <li><strong>What is working.</strong> Close rate and utilization are above target, so agents who reach a customer are closing them.</li>
    </ol>
    <h2 class="doc-h">3. Agents to review</h2>
    ${docTable('Agent metrics and flags', ['Agent', 'EPA', 'ACE', 'Connect Rate', 'Flag'], [
      ['Tom Loftis', '1.9', '55.6%', '77.0%', pos('On track')],
      ['Dana Reyes', '1.6', '49.7%', '72.4%', neg('Connect rate down 6.8 pts')],
      ['Jordan Okafor', '1.8', '53.2%', '76.1%', warn('Demo rate 34%, below target')],
      ['Mei Lin', '1.5', '49.4%', '77.8%', neg('Lowest EPA on the team')],
      ['Sam Brightwell', '2.0', '57.0%', '79.6%', pos('On track')],
      ['Alicia Ford', '1.6', '53.9%', '74.3%', warn('60-day draft rate 54%')]
    ])}
    <p class="doc-meta">Placeholder agents and figures for the prototype.</p>`;

  const newThread = (id) => ({ id, age: 'Just now', status: 'new', topic: 'New research', msgs: [], progress: [], artifacts: [], context: [SOURCE, TRANSCRIPTS] });
  // The Researcher starts clean: one empty thread. Each flow below is what a request produces when the researcher runs.
  const RES_THREADS = [newThread('new')];

  const RES_CAPS = [
    { ic: 'phone-call', title: 'Find coaching opportunities in calls', text: 'Read calls and transcripts to spot selling behaviors and customer responses, then turn the trends into coaching for your agents.', prompt: 'What selling behaviors and customer responses show up in my team\'s calls this week?' },
    { ic: 'trending-up', title: 'Review recent performance', text: 'Compile your team\'s latest metrics, compare them with target and last week, and flag the trends worth your attention.', prompt: 'Compile my team\'s performance metrics for the last four weeks and show me the trends.' }
  ];

  const RES_FLOWS = {
    coaching: {
      topic: 'Selling behaviors and coaching opportunities',
      steps: () => [
        ns('insights', '', 'Matched your question to call transcripts for your six agents, Oct 23 to Oct 29.'),
        ns('defs', '', 'Loaded the evaluation definitions for selling behaviors and customer objections.'),
        ns('transcripts', 'last 7 days', '186 conversations and 412 voicemails found for 6 agents.'),
        ns('fan', 'Workstream 1', 'Scored the selling behaviors in each conversation, such as the 48-month comparison, the demo email handoff and draft date confirmation.'),
        ns('fan', 'Workstream 2', 'Tagged the customer responses and how each agent handled them, and scored each voicemail for a reason, a direct number and a deadline.'),
        ns('metrics', 'SalesDPRv3 - SalesDPR', 'Joined call outcomes to enrollment and first-draft results.'),
        ns('write', '/workspace/reports/coaching_opportunities.md', 'Created the report.')
      ],
      progress: ['Find the calls and transcripts for the last 7 days', 'Score selling behaviors and customer responses', 'Compare outcomes with and without each behavior', 'Write up the trends and coaching opportunities for each agent'],
      artifacts: () => [
        art('a' + (++seq), 'Selling behaviors and coaching opportunities', 'MD', 'Just now', COACHING_HTML),
        art('a' + (++seq), 'Scored call dataset', 'CSV', 'Just now')
      ],
      reply: 'I scored 186 conversations and 412 voicemails from the last 7 days. The clearest pattern: calls where the agent compared the 48-month cost of current payments to the program enrolled at 41%, against 21% without it. When the demo email was slow to arrive, agents who kept walking through the customer\'s debts reached the demo on 78% of calls, against 49% when they waited. Voicemails that gave a reason, a direct number and a deadline were called back almost three times as often. The report covers the trends and the coaching opportunity for each agent.',
      chips: ['Prepare coaching notes for each agent']
    },
    metrics: {
      topic: 'Team performance and trends',
      steps: () => [
        ns('insights', '', 'Matched your question to the Daily Performance Report for your team.'),
        ns('defs', '', 'Loaded the definitions for ACE, EPA, connect rate, close rate and draft rate.'),
        ns('metrics', 'SalesDPRv3 - SalesDPR', 'Pulled four weeks of team and agent metrics.'),
        ns('read', 'metric_targets.md', 'Loaded the current targets.'),
        ns('write', '/workspace/reports/team_performance.md', 'Compared each metric with target and last week, flagged the trends and created the summary.')
      ],
      progress: ['Pull the last four weeks of team and agent metrics', 'Compare each metric with target and last week', 'Flag the trends and the agents to review', 'Write the performance summary'],
      artifacts: () => [
        art('a' + (++seq), 'Team performance summary', 'MD', 'Just now', METRICS_HTML),
        art('a' + (++seq), 'Agent metrics, last 4 weeks', 'CSV', 'Just now')
      ],
      reply: 'Here is how your team did over the last four weeks. Connect rate has fallen three weeks in a row, from 81.0% to 76.2%, and ACE and EPA are down two weeks. Prequal and Demo have been below target all month. Close rate and utilization are above target. The summary lists the trends and the agents to review.',
      chips: ['Find the selling behaviors behind these trends']
    },
    notes: {
      topic: 'Coaching notes for agents',
      steps: () => [
        ns('read', 'coaching_opportunities.md', 'Loaded the coaching report.'),
        ns('write', '/workspace/reports/coaching_notes.md', 'Wrote a short note for each agent.')
      ],
      progress: ['Turn each agent\'s coaching opportunity into a short note', 'Review the notes before sending'],
      artifacts: () => [art('a' + (++seq), 'Coaching notes for agents', 'MD', 'Just now', NOTES_HTML, true)],
      reply: 'I wrote a short coaching note for each of your six agents. Review them, edit anything you like, then send them from the document.',
      chips: []
    }
  };

  // Decides which flow a request runs. Prototype only: a keyword match stands in for the agent's reasoning.
  const resIntent = (text) => {
    if (/notes|coaching.*(agent|each)/i.test(text)) return 'notes';
    if (/metric|performance|trend|kpi|dpr|connect rate|close rate|numbers/i.test(text) && !/call|transcript|behavio|coach|selling/i.test(text)) return 'metrics';
    return 'coaching';
  };

  /* ======================================================================
     State
     ====================================================================== */
  const state = {
    role: 'dc',              // prototype view: 'dc' | 'um' (set from the prototype toggle in the side nav)
    page: 'dashboard',       // 'dashboard' | 'leads' | 'performance' | 'researcher'
    navCollapsed: true,
    chatMode: { leads: 'docked', performance: 'closed', dashboard: 'docked', researcher: 'closed' },
    fab: { right: 24, bottom: 24 },
    res: { thread: 'new', filter: 'all', doc: null, docMax: false, rail: true, sec: { progress: true, artifacts: true, context: true }, draft: '', toBottom: true },
    chatLead: null,
    ctx: { open: false, menu: false, provider: 'tableau', url: '', query: '', picked: {}, opener: 'res-attach' },
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

  const TOPIC_DRAFTS = {
    deposit: (first) => `<p>Hi ${esc(first)}, it's Tom from Achieve. Your first deposit is what gets your program started, and it keeps your savings on track. Can I help you get it scheduled today?</p>`,
    statement: (first) => `<p>Hi ${esc(first)},</p>
       <p>To finish reviewing your file, we still need your most recent bank statement. You can reply to this email with a photo or PDF of it.</p>
       <p>Once I have it, I can get your file back in front of underwriting.</p>
       <p>Thanks,<br>Tom</p>`
  };
  const draftHtml = (first, type, topic) => TOPIC_DRAFTS[topic] ? TOPIC_DRAFTS[topic](first) : type === 'sms'
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
    const roleOptions = ROLES.map(([id, label]) =>
      `<option value="${id}"${state.role === id ? ' selected' : ''}>${label}</option>`).join('');
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
        <div class="sn-proto">
          <label class="sn-proto-label" for="roleSelect">View as</label>
          <div class="select-wrap"><select class="select" id="roleSelect" data-role-select aria-label="View as">${roleOptions}</select>${icon('chevron-down')}</div>
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
    const box = $('#chatMsgs');
    box.hidden = !state.chat.length;
    box.innerHTML = state.chat.map((m) => {
      if (m.kind === 'user') return `<div class="msg-user">${esc(m.text)}</div>`;
      if (m.kind === 'ava') return `<p class="msg-ava">${esc(m.text)}</p>`;
      if (m.kind === 'status') return `<p class="msg-status${m.tone === 'positive' ? ' is-positive' : ''}">${icon(m.ic, 16)}<span>${esc(m.text)}</span></p>`;
      if (m.kind === 'choices') return `<div class="choices">${m.options.map((o) => `<button class="btn btn-outlined" type="button" data-action="quick-reply" data-choice="${o.id}">${esc(o.label)}</button>`).join('')}</div>`;
      return '';
    }).join('');
    log.scrollTop = !$('#chatDay').hidden && !state.chat.length ? 0 : log.scrollHeight;
  }

  // Dashboard only: the day ahead and suggested to-dos sit at the top of the chat.
  function renderDay() {
    const day = $('#chatDay');
    const on = state.page === 'dashboard';
    day.hidden = !on;
    day.innerHTML = on ? (state.role === 'um' ? umDayAheadHtml() : dayAheadHtml()) : '';
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

  /* ---- Dashboard (DC) ---- */
  // Placeholder content that mirrors the "dashboard entry" Figma frame: metrics snapshot and lead stack on the page, day ahead in AVA.
  const DAY_AHEAD = [
    { time: '9:30 am', title: 'Patricia Moyer', link: ['View call plan', 'dash-plan', 'patricia'] },
    { time: '10:15 am', title: 'Open Queue', link: ['View suggested leads', 'dash-queue', ''] },
    { time: '11:00 am', title: 'Internal: Sales Floor All Hands' },
    { time: '12:00 pm', title: 'Block: Lunch' },
    { time: '1:20 pm', title: 'Ruth Livingston', link: ['View call plan', 'dash-plan', 'ruth'] },
    { time: '1:45 pm', title: 'Internal: 1-1 Keeley Coffey' },
    { time: '2:30 pm', title: 'Open Queue', link: ['View suggested leads', 'dash-queue', ''] }
  ];
  const TODO = [
    ['trending-up', 'Review your metrics for the day.'],
    ['users', 'Review your leads.'],
    ['compass', 'Areas to focus on improving']
  ];
  // [small label, card title, metric name in the Performance data]
  const DASH_KPIS = [
    ['Avg.', 'Connect-to-Close', 'Connect-to-Close Rate'],
    ['Overall', 'Close Rate', 'Close Rate'],
    ['Avg.', 'ACE Scoring', 'ACE Score'],
    ['Avg.', 'LPA', 'LPA']
  ];
  const LEAD_TAGS = {
    attn: ['alert-circle', 'Needs attention', 'lead-tag-attn'],
    ace: ['star', 'High ACE reward', 'lead-tag-ace'],
    dra: ['edit-3', 'DRA signed', 'lead-tag-dra'],
    demo: ['mouse-pointer', 'Ready for demo', 'lead-tag-demo'],
    top: ['star', 'Top performer', 'lead-tag-ace']
  };
  // draft: 'type:topic' starts an AVA draft when the row is chosen. ic: umbrella marks an ARP lead.
  const STACK = [
    { title: 'Need deposit', chip: 'chip-positive', leads: [
      { id: 'bechir', name: 'Bechir Clemmons', tag: 'attn', sub: 'Enrolled: 09/30 • a month ago', tip: 'Clients have higher risk to leave the longer they don’t make their first deposit.' },
      { id: 'richard', name: 'Richard Warren', sub: 'Enrolled: 10/16 • 2 weeks ago', tip: 'Prompt Richard for that first deposit. I’ve drafted an sms reminding him of the savings he can get.', draft: 'sms:deposit' },
      { id: 'abigail', name: 'Abigail Stevens', sub: 'Enrolled: 10/23 • a week ago', note: 'Enrolled a week ago and no first deposit yet.' }
    ] },
    { title: 'Close to Close', chip: 'chip-accent', leads: [
      { id: 'patricia', name: 'Patricia Moyer', tag: 'ace', sub: 'High interest, first on call list, high ACE reward' },
      { id: 'ruth', name: 'Ruth Livingston', tag: 'dra', sub: 'High interest, DRA signed' },
      { id: 'wyck', name: 'Wyck Crawford', tag: 'demo', sub: 'High interest, ready for demo' },
      { id: 'gerrie', name: 'Gerrie Doyle', ic: 'umbrella', sub: 'ARP, Gaining interest, left voicemail overnight' },
      { id: 'calvin', name: 'Calvin Morgan', tag: 'ace', sub: 'Medium interest, high ACE reward' }
    ] },
    { title: 'UW Attention', chip: 'chip-warning', wide: true, leads: [
      { id: 'evan', name: 'Evan Loftis', status: ['Not approved', 'chip-negative'], sub: 'Missing bank statement.', action: 'View drafted request.', draft: 'email:statement' },
      { id: 'pj', name: 'PJ Glanville', ic: 'umbrella', status: ['Manual review', 'chip-warning'], sub: 'Need action taken on ARP side.', action: 'View drafted request.' }
    ] }
  ];

  const metricRow = (name) => METRICS.find((r) => r[0] === name);
  const num = (s) => parseFloat(String(s).replace(/[^0-9.-]/g, ''));
  // Status is never color alone: an icon and screen-reader text say whether the value meets target.
  const kpiValue = (value, target) => {
    const ok = num(value) >= num(target);
    return `<b class="${ok ? 'is-pos' : 'is-warn'}">${icon(ok ? 'check-circle' : 'alert', 16)}${value}<span class="sr-only">${ok ? 'at or above target' : 'below target'}</span></b>`;
  };
  const joinList = (a) => (a.length < 3 ? a.join(' and ') : `${a.slice(0, -1).join(', ')}, and ${a[a.length - 1]}`);

  function dayMetricsReply() {
    const rows = DASH_KPIS.map(([, label, name]) => ({ label, r: metricRow(name) }));
    const phrase = (x) => `${x.label} (${x.r[3]} against ${x.r[2]})`;
    const above = rows.filter((x) => num(x.r[3]) >= num(x.r[2])).map(phrase);
    const below = rows.filter((x) => num(x.r[3]) < num(x.r[2])).map(phrase);
    return `${above.length ? `You are above target on ${joinList(above)}. ` : ''}${below.length ? `${joinList(below)} ${below.length > 1 ? 'are' : 'is'} below target. ` : ''}Want me to look at what is driving it?`;
  }

  function focusAreasReply() {
    const areas = METRICS.filter((r) => r[0] !== '% to MPS' && num(r[3]) < num(r[2]))
      .map((r) => ({ r, gap: (num(r[2]) - num(r[3])) / num(r[2]) }))
      .sort((a, b) => b.gap - a.gap).slice(0, 3)
      .map((x) => `${x.r[0]} (${x.r[3]} against ${x.r[2]})`);
    return `Your biggest gaps to target are ${joinList(areas)}. Want me to look at what is driving them?`;
  }

  // Shared by both dashboards. A link is [label, action, arg]; a to-do is [icon, text, arg]. The arg goes to the click handler as data-arg.
  const schedHtml = (items, label) => `<ol class="sched" aria-label="${label}">${items.map((s) => {
    const link = s.link ? `<button class="link link-md" type="button" data-action="${s.link[1]}" data-arg="${esc(s.link[2])}">${s.link[0]}</button>` : '';
    return `<li class="sched-item"><span class="sched-rail" aria-hidden="true"><i></i></span>
        <div class="sched-main"><p class="sched-line"><span class="sched-time">${s.time}</span><strong class="sched-title">${esc(s.title)}</strong></p>${link}</div></li>`;
  }).join('')}</ol>`;
  const todoHtml = (items, action) => `<ul class="todo" aria-label="Suggested to-dos">${items.map(([ic, text, arg]) =>
    `<li><button class="todo-item" type="button" data-action="${action}" data-arg="${esc(arg || text)}">${icon(ic, 16)}<span>${esc(text)}</span></button></li>`).join('')}</ul>`;

  function dayAheadHtml() {
    return `<p class="msg-ava">Here’s a look at your day ahead:</p>${schedHtml(DAY_AHEAD, 'Your schedule today')}${todoHtml(TODO, 'dash-todo')}`;
  }

  function openLead(id, tab) {
    Object.assign(state, { page: 'leads', view: 'inbox', filter: 'all', selectedId: id, tab: tab || 'communications', promptOpen: false, summaryOpen: false });
    render();
  }

  // The inside of a dashboard row: name, tags and status chip, a sub line, and an optional insight.
  function dashRowBody(l) {
    const tag = l.tag ? `<span class="lead-tag ${LEAD_TAGS[l.tag][2]}" role="img" aria-label="${LEAD_TAGS[l.tag][1]}" title="${LEAD_TAGS[l.tag][1]}">${icon(LEAD_TAGS[l.tag][0], 16)}</span>` : '';
    const arp = l.ic ? `<span class="dash-arp" role="img" aria-label="ARP" title="ARP">${icon(l.ic, 16)}</span>` : '';
    const status = l.status ? `<span class="chip chip-sm ${l.status[1]}">${l.status[0]}</span>` : '';
    const tip = l.tip ? `<span class="dash-insight">${icon('sparkles', 16)}<span>${esc(l.tip)}</span></span>` : '';
    return `<span class="dash-lead-top">${arp}<strong class="dash-lead-name">${esc(l.name)}</strong>${tag}${status}</span>
        <span class="dash-lead-sub">${esc(l.sub)}${l.action ? ` <span class="dash-act">${l.action}</span>` : ''}</span>${tip}`;
  }

  function renderDash() {
    const root = $('#pageDash');
    root.dataset.role = 'dc';
    const body = $('.page-body', root);
    const scroll = body ? body.scrollTop : 0;
    const kpis = DASH_KPIS.map(([pre, label, name]) => {
      const r = metricRow(name);
      return `<li class="kpi-card">
        <p class="kpi-head"><span class="kpi-pre">${pre}</span><span>${label}</span></p>
        <p class="kpi-now">${kpiValue(r[3], r[2])}<span>this week</span></p>
        <p class="kpi-last">${kpiValue(r[5], r[2])}<span>vs last week</span></p>
      </li>`;
    }).join('');
    const row = (l) => `<li><button class="dash-lead" type="button" data-action="dash-lead" data-id="${l.id}" data-note="${esc(l.note || l.tip || l.sub)}"${l.draft ? ` data-draft="${l.draft}"` : ''}>${dashRowBody(l)}</button></li>`;
    const cards = STACK.map((c, i) => `<section class="dash-card${c.wide ? ' dash-card-wide' : ''}" aria-labelledby="dc-${i}">
      <h3 class="chip ${c.chip}" id="dc-${i}">${c.title}</h3>
      <ul class="${c.wide ? 'dash-cols' : 'dash-list'}">${c.leads.map(row).join('')}</ul>
    </section>`).join('');
    root.innerHTML = `
      <header class="page-head"><h1 class="page-title">Welcome back, Tom</h1></header>
      <div class="page-body"><div class="dash-body">
        <section class="dash-sec" aria-labelledby="dm-h">
          <div>
            <h2 class="dash-h" id="dm-h">Your metrics</h2>
            <div class="dash-sub"><p>Here’s a look at your performance from the past week.</p><button class="link link-md" type="button" data-action="nav" data-nav="performance">View performance</button></div>
          </div>
          <ul class="kpi-row" aria-label="Metrics this week compared with last week">${kpis}</ul>
        </section>
        <section class="dash-sec" aria-labelledby="dl-h">
          <h2 class="dash-h" id="dl-h">Your lead stack</h2>
          <div class="stack">${cards}</div>
        </section>
      </div></div>`;
    $('.page-body', root).scrollTop = scroll;
  }

  /* ---- Dashboard (UM) ---- */
  // The same three callouts as the DC dashboard, at team level: a snapshot of the team's metrics, who and what to focus on, and the day ahead.
  // Placeholder data. The six agents and the figures for the week ending Oct 29 match the Researcher's reports.
  const TEAM = [
    { name: 'Tom Loftis', ace: 55.6, lpa: 20, conn: 77.0, close: 31.9 },
    { name: 'Dana Reyes', ace: 49.7, lpa: 19, conn: 72.4, close: 26.4 },
    { name: 'Jordan Okafor', ace: 53.2, lpa: 21, conn: 76.1, close: 28.0 },
    { name: 'Mei Lin', ace: 49.4, lpa: 18, conn: 77.8, close: 27.2 },
    { name: 'Sam Brightwell', ace: 57.0, lpa: 25, conn: 79.6, close: 33.6 },
    { name: 'Alicia Ford', ace: 53.9, lpa: 22, conn: 74.3, close: 30.5 }
  ];
  // [small label, card title, metric name (for its target), agent field, team value last week, unit]
  const TEAM_KPIS = [
    ['Team avg.', 'Connect Rate', 'Connect Rate', 'conn', 79.4, '%'],
    ['Team overall', 'Close Rate', 'Close Rate', 'close', 28.7, '%'],
    ['Team avg.', 'ACE Scoring', 'ACE Score', 'ace', 55.4, '%'],
    ['Team avg.', 'LPA', 'LPA', 'lpa', 21.3, '']
  ];
  // What each row or link asks the Researcher. The prototype's flows are canned, so these land on the same finished reports as the Researcher's own suggestions.
  const askCoaching = (name) => `Find coaching opportunities in ${name}\u2019s calls this week.`;
  const ASK_METRICS = RES_CAPS[1].prompt;
  const UM_DAY = [
    { time: '8:30 am', title: 'Team huddle' },
    { time: '9:30 am', title: '1-1: Dana Reyes', link: ['View coaching focus', 'dash-ask', askCoaching('Dana Reyes')] },
    { time: '11:00 am', title: 'Internal: Sales Floor All Hands' },
    { time: '12:00 pm', title: 'Block: Lunch' },
    { time: '1:00 pm', title: 'Block: Call review', link: ['View flagged calls', 'dash-goto', 'umFlagged'] },
    { time: '1:45 pm', title: '1-1: Tom Loftis', link: ['View coaching focus', 'dash-ask', askCoaching('Tom Loftis')] },
    { time: '2:30 pm', title: 'Weekly performance check-in', link: ['View team metrics', 'dash-ask', ASK_METRICS] }
  ];
  // These go to AVA in the chat, which answers at team level and offers the Researcher for anything deeper.
  const UM_TODO = [
    ['trending-up', 'Review your team\u2019s metrics for the week.'],
    ['phone-call', 'Find coaching opportunities in this week\u2019s calls.'],
    ['edit-3', 'Prepare coaching notes for your 1-1s.']
  ];
  const UM_SUGGESTION = 'Which agents should I coach first?';
  const umDayAheadHtml = () => `<p class="msg-ava">Here’s a look at your day ahead:</p>${schedHtml(UM_DAY, 'Your schedule today')}${todoHtml(UM_TODO, 'dash-todo')}`;
  // Rows use the DC row shape. act is the click handler: dash-ask opens the Researcher, res-noop says the screen is not built yet.
  const coach = (name, sub, tip) => ({ name, sub, tip, act: 'dash-ask', q: askCoaching(name) });
  const flagged = (name, chip, sub) => ({ name, status: chip, sub, action: 'Review call.', act: 'res-noop' });
  const TEAM_STACK = [
    { title: 'Coaching priorities', chip: 'chip-warning', rows: [
      Object.assign(coach('Dana Reyes', 'ACE 49.7% \u2022 Connect rate 72.4%, down 6.8 pts', 'Voicemails give no reason or deadline, and she skips the 48-month comparison on high-debt calls. Your 1-1 is at 9:30 am.'), { tag: 'attn' }),
      coach('Mei Lin', 'EPA 1.5, lowest on the team \u2022 ACE 49.4%', 'Ends \u201ctake me off the list\u201d calls right away. Coach her to confirm the removal and ask what to send for later.'),
      coach('Jordan Okafor', 'Demo rate 34%, below the 50.0% target', 'Puts credit questions off until after the demo. Customers who got an early answer enrolled about twice as often.'),
      coach('Alicia Ford', '60-day draft rate 54%, below the 81.0% target', 'Talks over customers during objections. Coach her to pause and let them finish.')
    ] },
    { title: 'Share what works', chip: 'chip-positive', rows: [
      { name: 'Sam Brightwell', tag: 'top', sub: 'ACE 57.0% \u2022 LPA 25 \u2022 EPA 2.0', tip: 'Confirms the draft date on 90% of enrolled calls. Ask him to share how he closes at your next huddle.', act: 'dash-ask', q: 'Find the selling behaviors behind Sam Brightwell\u2019s results.' },
      Object.assign(coach('Tom Loftis', 'ACE 55.6% \u2022 LPA 20 \u2022 Connect rate 77.0%', 'Compares the 48-month cost on 71% of his calls. One gap: he confirms the draft date on only 24% of enrolled calls.'), { status: ['On track', 'chip-positive'] })
    ] },
    { id: 'umFlagged', title: 'Calls flagged for review', chip: 'chip-negative', wide: true, rows: [
      flagged('Dana Reyes', ['Possible guarantee', 'chip-negative'], 'Oct 28, 10:42 am \u2022 Score 61% \u2022 \u201cProhibition Against Guarantees\u201d'),
      flagged('Alicia Ford', ['Misleading claim', 'chip-negative'], 'Oct 29, 11:30 am \u2022 Score 59% \u2022 \u201cUse of Creditors will stop calling\u201d'),
      flagged('Mei Lin', ['Missing disclosure', 'chip-warning'], 'Oct 28, 2:05 pm \u2022 Score 66% \u2022 \u201cYour credit score may be impaired\u201d not said'),
      flagged('Jordan Okafor', ['Missing disclosure', 'chip-warning'], 'Oct 29, 9:12 am \u2022 Score 68% \u2022 \u201cYou are not getting a loan\u201d not said')
    ] }
  ];

  function renderTeamDash() {
    const root = $('#pageDash');
    root.dataset.role = 'um';
    const body = $('.page-body', root);
    const scroll = body ? body.scrollTop : 0;
    const kpis = TEAM_KPIS.map(([pre, label, name, key, last, unit]) => {
      const target = metricRow(name)[2];
      const now = TEAM.reduce((sum, a) => sum + a[key], 0) / TEAM.length;
      const met = TEAM.filter((a) => a[key] >= num(target)).length;
      return `<li class="kpi-card">
        <p class="kpi-head"><span class="kpi-pre">${pre}</span><span>${label}</span></p>
        <p class="kpi-now">${kpiValue(`${now.toFixed(1)}${unit}`, target)}<span>this week</span></p>
        <p class="kpi-last">${kpiValue(`${last.toFixed(1)}${unit}`, target)}<span>vs last week</span></p>
        <p class="kpi-team">${icon('users', 16)}<span>${met} of ${TEAM.length} agents at target</span></p>
      </li>`;
    }).join('');
    const cards = TEAM_STACK.map((c, i) => `<section class="dash-card${c.wide ? ' dash-card-wide' : ''}"${c.id ? ` id="${c.id}" tabindex="-1"` : ''} aria-labelledby="tc-${i}">
      <h3 class="chip ${c.chip}" id="tc-${i}">${c.title}</h3>
      <ul class="${c.wide ? 'dash-cols' : 'dash-list'}">${c.rows.map((r) => `<li><button class="dash-lead" type="button" data-action="${r.act}" data-arg="${esc(r.q || '')}">${dashRowBody(r)}</button></li>`).join('')}</ul>
    </section>`).join('');
    root.innerHTML = `
      <header class="page-head"><h1 class="page-title">Welcome back, Keeley</h1></header>
      <div class="page-body"><div class="dash-body">
        <section class="dash-sec" aria-labelledby="tm-h">
          <div>
            <h2 class="dash-h" id="tm-h">Your team’s metrics</h2>
            <div class="dash-sub"><p>Here’s a look at your team’s performance from the past week.</p><button class="link link-md" type="button" data-action="dash-ask" data-arg="${esc(ASK_METRICS)}">Review team performance</button></div>
          </div>
          <ul class="kpi-row" aria-label="Team metrics this week compared with last week">${kpis}</ul>
        </section>
        <section class="dash-sec" aria-labelledby="tl-h">
          <div>
            <h2 class="dash-h" id="tl-h">Where to focus</h2>
            <div class="dash-sub"><p>Agents to coach and calls to review, based on this week’s scored calls and metrics.</p></div>
          </div>
          <div class="stack">${cards}</div>
        </section>
      </div></div>`;
    $('.page-body', root).scrollTop = scroll;
  }

  // AVA on the UM dashboard answers at team level. Anything that needs the calls themselves is handed to the Call Researcher.
  const teamKpiNow = ([, label, name, key, , unit]) => {
    const avg = TEAM.reduce((sum, a) => sum + a[key], 0) / TEAM.length;
    const target = metricRow(name)[2];
    return { label, avg: `${avg.toFixed(1)}${unit}`, target, ok: avg >= num(target) };
  };
  const askMore = (text, ask, label) => {
    state.chatAsk = ask;
    pushChat({ kind: 'ava', text });
    pushChat({ kind: 'choices', options: [{ id: 'research', label }] });
  };

  function umChatReply(text) {
    const agent = TEAM.find((a) => new RegExp(`\\b${a.name.split(' ')[0]}\\b`, 'i').test(text));
    if (agent) {
      const low = TEAM_KPIS.filter(([, , name, key]) => agent[key] < num(metricRow(name)[2]))
        .map(([, label, name, key, , unit]) => `${label} (${agent[key]}${unit} against ${metricRow(name)[2]})`);
      const first = agent.name.split(' ')[0];
      return askMore(`${low.length ? `${first} is below target on ${joinList(low)}.` : `${first} is at or above target on every metric.`} The calls behind it are in the Call Researcher.`, askCoaching(agent.name), `Find coaching for ${first}`);
    }
    if (/notes|1-1|one on one/i.test(text)) {
      return askMore('I can write a short coaching note for each agent from this week\u2019s scored calls. The Call Researcher does that.', 'Prepare coaching notes for each of my agents.', 'Prepare coaching notes');
    }
    if (/flag|compliance|disclosure|review.*call/i.test(text)) {
      const rows = TEAM_STACK[2].rows;
      return askMore(`${rows.length} calls were flagged this week: ${joinList(rows.map((r) => `${r.name} (${r.status[0].toLowerCase()})`))}. They are listed under Calls flagged for review.`, RES_CAPS[0].prompt, 'Find coaching in these calls');
    }
    if (/coach|first|priorit|focus|who|agent/i.test(text)) {
      const rows = TEAM_STACK[0].rows.slice(0, 3);
      return askMore(`Start with ${joinList(rows.map((r) => r.name))}. ${rows[0].name}: ${rows[0].tip}`, RES_CAPS[0].prompt, 'Find coaching opportunities in calls');
    }
    if (/metric|performance|numbers|trend|week|team/i.test(text)) {
      const k = TEAM_KPIS.map(teamKpiNow);
      const above = k.filter((x) => x.ok).map((x) => `${x.label} (${x.avg} against ${x.target})`);
      const below = k.filter((x) => !x.ok).map((x) => `${x.label} (${x.avg} against ${x.target})`);
      return askMore(`${above.length ? `Your team is at target on ${joinList(above)}. ` : ''}${below.length ? `${joinList(below)} ${below.length > 1 ? 'are' : 'is'} below target. ` : ''}The Call Researcher can show the four-week trends.`, ASK_METRICS, 'Review team performance');
    }
    pushChat({ kind: 'ava', text: 'I can summarize your team\u2019s metrics, tell you who to coach first, or point out flagged calls. For anything that needs the calls themselves, I\u2019ll open the Call Researcher.' });
  }

  // Opens a fresh Researcher thread and runs the request, so a row or to-do on the dashboard lands on a finished answer.
  function askResearcher(prompt) {
    const id = `t${++seq}`;
    RES_THREADS.unshift(newThread(id));
    Object.assign(state.res, { thread: id, filter: 'all', doc: null, docMax: false, draft: '', toBottom: true });
    state.page = 'researcher';
    render();
    resSend(prompt);
  }

  /* ---- Researcher ---- */
  const resThread = () => RES_THREADS.find((x) => x.id === state.res.thread);
  const resBusy = (th) => th.msgs.some((m) => m.kind === 'steps' && m.steps.some((s) => s.running));
  const resCount = (s) => (s === 'all' ? RES_THREADS.length : RES_THREADS.filter((x) => x.status === s).length);
  const resArtIcon = (a) => (a.type === 'HTML' ? 'code' : 'file-text');

  function resMsg(m, i) {
    if (m.kind === 'user') {
      const files = m.files ? `<div class="res-files">${m.files.map((f) => `<span class="chip chip-info">${icon('paperclip', 12)}${esc(f)}</span>`).join('')}</div>` : '';
      return `<div class="res-user">${files}<p class="msg-user">${esc(m.text)}</p></div>`;
    }
    if (m.kind === 'agent') return `<p class="msg-ava">${esc(m.text)}</p>`;
    if (m.kind === 'chips') return `<div class="res-chips">${m.options.map((o) => `<button class="chip chip-info chip-action" type="button" data-action="res-suggest" data-text="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    const shown = m.steps.filter((s) => s.started);
    const summary = m.group
      ? `<button class="step-sum" type="button" data-action="res-steps" data-b="${i}" data-fid="rb-${i}" aria-expanded="${!!m.open}">${icon('check', 16)}<span>${m.steps.length} steps completed</span><span class="step-fill"></span>${icon(m.open ? 'chevron-down' : 'chevron-right', 16)}</button>`
      : '';
    const rows = m.group && !m.open ? '' : shown.map((s, j) => {
      const tool = RES_TOOLS[s.t];
      const lead = s.running ? '<span class="spinner" role="img" aria-label="Running"></span>' : icon(tool.ic, 16);
      return `<li><button class="step" type="button" data-action="res-step" data-b="${i}" data-s="${m.steps.indexOf(s)}" data-fid="rs-${i}-${j}" aria-expanded="${!!s.open}">${lead}<span class="step-name">${tool.label}</span>${s.arg ? `<span class="step-arg">${esc(s.arg)}</span>` : ''}<span class="step-fill"></span>${icon(s.open ? 'chevron-down' : 'chevron-right', 16)}</button>${s.open ? `<p class="step-out">${esc(s.out)}</p>` : ''}</li>`;
    }).join('');
    return `<div class="steps">${summary}${rows ? `<ul class="step-list">${rows}</ul>` : ''}</div>`;
  }

  function renderResearcher() {
    const root = $('#pageRes');
    const r = state.res;
    const th = resThread();
    const tops = ['.res-log', '.res-doc-body', '.res-rail', '.inbox-list'].map((s) => { const el = $(s, root); return el ? el.scrollTop : 0; });
    const keepLog = root.dataset.thread === th.id && !r.toBottom;
    const act = document.activeElement;
    const fid = act && root.contains(act) ? act.dataset.fid : null;
    const st = RES_STATUS[th.status];
    const doc = r.doc ? th.artifacts.find((a) => a.id === r.doc) : null;
    const mode = doc ? (r.docMax ? 'max' : 'open') : 'closed';
    const busy = resBusy(th);

    const filters = [['all', 'All', 'inbox'], ['working', 'Working', 'clock'], ['done', 'Completed', 'check-circle']]
      .map(([id, label, ic]) => `<button class="toggle toggle-count" type="button" data-action="res-filter" data-f="${id}" data-fid="rf-${id}" aria-pressed="${r.filter === id}" aria-label="${label}, ${resCount(id)}" title="${label}">${icon(ic, 16)}<span>${resCount(id)}</span></button>`).join('');
    const list = RES_THREADS.filter((x) => r.filter === 'all' || x.status === r.filter);
    const items = list.map((x) => {
      const s = RES_STATUS[x.status];
      return `<li><button class="res-item" type="button" data-action="res-thread" data-id="${x.id}" data-fid="ri-${x.id}"${x.id === th.id ? ' aria-current="true"' : ''}>
        <span class="res-badge">${icon('search', 16)}</span>
        <span class="res-item-main">
          <span class="res-item-row"><span class="res-item-title">Call Researcher</span><span class="res-item-age">${x.age}</span></span>
          <span class="res-item-sub">${esc(x.topic)}</span>
          <span class="chip chip-sm ${s.chip} res-item-chip">${s.label}</span>
        </span></button></li>`;
    }).join('');
    const inbox = `<aside class="inbox res-inbox" aria-label="Agent inbox">
      <header class="panel-head">
        <div class="panel-top">
          <div><h1 class="panel-title">Agent Inbox</h1><p class="panel-count">Showing ${list.length} ${list.length === 1 ? 'thread' : 'threads'}</p></div>
          <div class="ava-actions">
            <button class="icon-btn" type="button" aria-label="New research" data-action="res-new" data-fid="res-new">${icon('plus', 16)}</button>
            <button class="icon-btn icon-btn-plain" type="button" aria-label="Refresh inbox" data-action="res-noop" data-fid="res-refresh">${icon('refresh', 16)}</button>
          </div>
        </div>
        <div class="toggle-group" role="group" aria-label="Filter threads by status">${filters}</div>
      </header>
      <ul class="inbox-list">${items || '<li class="placeholder-note">No threads with this status.</li>'}</ul>
    </aside>`;

    const empty = `<div class="res-empty">
      <span class="res-badge">${icon('search', 16)}</span>
      <h2>What do you want to research?</h2>
      <p>I can read your agents' calls and transcripts, and compile their recent performance. Start with one of these, or ask your own question.</p>
      <div class="res-caps">${RES_CAPS.map((c) => `<button class="res-cap" type="button" data-action="res-suggest" data-text="${esc(c.prompt)}">
        <span class="res-badge">${icon(c.ic, 16)}</span>
        <span class="res-cap-main"><span class="res-cap-title">${esc(c.title)}</span><span class="res-cap-text">${esc(c.text)}</span></span>
      </button>`).join('')}</div>
    </div>`;
    const thread = `<section class="res-thread" aria-label="Conversation">
      <header class="res-head">
        <span class="res-badge">${icon('search', 16)}</span>
        <div class="res-head-text"><h2 class="res-head-title">Call Researcher</h2><p class="res-head-sub">Analyze calls and compile team performance</p></div>
        <span class="chip ${st.chip}">${icon(st.ic, 12)}${st.label}</span>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="More options" data-action="res-noop" data-fid="res-more">${icon('more-vertical', 16)}</button>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="${r.rail ? 'Hide' : 'Show'} progress and artifacts" aria-pressed="${r.rail}" data-action="res-rail" data-fid="res-rail">${icon('sidebar-right', 16)}</button>
      </header>
      <div class="res-log" role="log" aria-label="Researcher conversation">${th.msgs.length ? th.msgs.map(resMsg).join('') : empty}</div>
      <form class="res-composer" data-form="res-reply" autocomplete="off">
        <div class="chat-box">
          <button class="icon-btn icon-btn-plain" type="button" aria-label="Attach context" data-action="res-ctx-open" data-fid="res-attach">${icon('paperclip', 16)}</button>
          <label class="sr-only" for="resInput">Reply to the Call Researcher</label>
          <input id="resInput" class="chat-input" type="text" data-input="res-reply" data-fid="res-input" placeholder="${th.msgs.length ? 'Reply...' : 'Ask the Call Researcher'}" value="${esc(r.draft)}"${busy ? ' disabled' : ''}>
          <button class="icon-btn" type="submit" aria-label="Send"${r.draft.trim() && !busy ? '' : ' disabled'}>${icon('send', 16)}</button>
        </div>
      </form>
    </section>`;

    const docPane = doc ? `<section class="res-doc" aria-label="${esc(doc.name)}">
      <header class="res-doc-head">
        <span class="art-ic">${icon(resArtIcon(doc), 16)}</span>
        <div class="res-head-text"><h2 class="res-head-title">${esc(doc.name)}</h2><p class="res-head-sub">${doc.type === 'MD' ? 'Document' : doc.type + ' file'}</p></div>
        ${doc.send ? `<button class="btn btn-secondary" type="button" data-action="res-send-notes" data-fid="doc-send"${doc.sent ? ' disabled' : ''}>${icon(doc.sent ? 'check' : 'send', 16)}${doc.sent ? 'Sent to agents' : 'Send to agents'}</button>` : ''}
        <button class="icon-btn icon-btn-plain" type="button" aria-label="Download ${esc(doc.name)}" data-action="res-noop" data-fid="doc-dl">${icon('download', 16)}</button>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="${r.docMax ? 'Show the conversation' : 'Expand the document'}" aria-pressed="${r.docMax}" data-action="res-doc-max" data-fid="doc-max">${icon(r.docMax ? 'minimize' : 'maximize', 16)}</button>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="Close document" data-action="res-doc-close" data-fid="doc-close">${icon('x', 16)}</button>
      </header>
      <div class="res-doc-body">${doc.html ? `<article class="doc">${doc.html}</article>` : `<p class="placeholder-note">A preview of ${esc(doc.name)} isn't part of this prototype yet.</p>`}</div>
    </section>` : '';

    const sec = (key, title, extra, body) => `<section class="rail-sec" aria-labelledby="rail-${key}">
      <div class="rail-head"><h2 class="rail-title" id="rail-${key}">${title}</h2><div class="rail-actions">${extra || ''}<button class="icon-btn icon-btn-plain" type="button" data-action="res-sec" data-key="${key}" data-fid="sec-${key}" aria-expanded="${r.sec[key]}" aria-label="${r.sec[key] ? 'Collapse' : 'Expand'} ${title}">${icon(r.sec[key] ? 'chevron-up' : 'chevron-down', 16)}</button></div></div>
      ${r.sec[key] ? body : ''}</section>`;
    const progress = th.progress.length
      ? `<ul class="progress-list">${th.progress.map((p) => `<li class="progress-item${p.done ? ' is-done' : ''}">${icon(p.done ? 'check-circle' : 'circle', 16)}<span>${p.done ? '<span class="sr-only">Done: </span>' : ''}${esc(p.t)}</span></li>`).join('')}</ul>`
      : '<p class="rail-empty">Steps appear here once the researcher starts.</p>';
    const arts = th.artifacts.length
      ? `<ul class="art-list">${th.artifacts.map((a) => `<li><button class="art" type="button" data-action="res-art" data-id="${a.id}" data-fid="art-${a.id}" aria-pressed="${r.doc === a.id}">
          <span class="art-ic">${icon(resArtIcon(a), 16)}</span>
          <span class="art-main"><span class="art-name" title="${esc(a.name)}">${esc(a.name)}</span><span class="art-meta"><span class="chip chip-sm chip-info">${a.type}</span><span aria-hidden="true">&bull;</span><span>${a.age}</span></span></span>
        </button></li>`).join('')}</ul>`
      : '<p class="rail-empty">Reports, datasets and notes the researcher writes appear here.</p>';
    const ctx = `<p class="overline">Attached sources (${th.context.length})</p>${th.context.length ? '' : '<p class="rail-empty">Attach dashboards, notes and reports with the plus button.</p>'}${th.context.map((c, i) => `<div class="source">
        <span class="art-ic">${icon('database', 16)}</span>
        <span class="art-main"><span class="art-name" title="${esc(c.name)}">${esc(c.name)}</span><span class="art-meta"><span class="chip chip-sm chip-info">${esc(c.kind)}</span></span></span>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="Open ${esc(c.name)}" data-action="res-noop">${icon('external-link', 16)}</button>
        <button class="icon-btn icon-btn-plain" type="button" aria-label="Remove ${esc(c.name)}" data-action="res-ctx-remove" data-i="${i}" data-fid="ctx-rm-${i}">${icon('x', 16)}</button>
      </div>`).join('')}`;
    const rail = r.rail ? `<aside class="res-rail" aria-label="Progress, artifacts and context">
      ${sec('progress', 'Progress', '', progress)}
      ${sec('artifacts', 'Artifacts', '', arts)}
      ${sec('context', 'Context', `<button class="icon-btn icon-btn-plain" type="button" aria-label="Attach a source" data-action="res-ctx-open" data-fid="ctx-add">${icon('plus', 16)}</button>`, ctx)}
    </aside>` : '';

    root.dataset.rail = r.rail ? 'open' : 'closed';
    root.innerHTML = `${inbox}<div class="res-work" data-doc="${mode}">${thread}${docPane}</div>${rail}`;

    const set = (sel, v) => { const el = $(sel, root); if (el) el.scrollTop = v; };
    const log = $('.res-log', root);
    if (log) log.scrollTop = keepLog ? tops[0] : log.scrollHeight;
    set('.res-doc-body', tops[1]);
    set('.res-rail', tops[2]);
    set('.inbox-list', tops[3]);
    root.dataset.thread = th.id;
    r.toBottom = false;
    if (fid) { const el = root.querySelector(`[data-fid="${fid}"]`); if (el && !el.disabled) el.focus({ preventScroll: true }); }
  }

  // Runs simulated tool steps one after another, then calls `onDone`. Prototype only: nothing is actually researched.
  function resRun(th, steps, onDone) {
    const block = { kind: 'steps', steps };
    th.msgs.push(block);
    th.status = 'working';
    let i = 0;
    const tick = () => {
      if (i > 0) block.steps[i - 1].running = false;
      if (i < block.steps.length) {
        block.steps[i].started = true;
        block.steps[i].running = true;
        i += 1;
        setTimeout(tick, 650);
      } else onDone();
      state.res.toBottom = state.res.thread === th.id;
      if (state.page === 'researcher') renderResearcher();
    };
    tick();
  }

  function resSend(text) {
    const th = resThread();
    const r = state.res;
    const msg = text.trim();
    if (!msg || resBusy(th)) return;
    const flow = RES_FLOWS[resIntent(msg)];
    th.msgs = th.msgs.filter((m) => m.kind !== 'chips');
    th.msgs.push({ kind: 'user', text: msg });
    if (!th.artifacts.length) th.topic = flow.topic;
    th.age = 'Just now';
    th.progress = flow.progress.map((t) => ({ t, done: false }));
    r.draft = '';
    r.toBottom = true;
    resRun(th, flow.steps(), () => {
      const made = flow.artifacts();
      th.artifacts = made.concat(th.artifacts);
      th.progress.forEach((p) => { p.done = true; });
      th.msgs.push({ kind: 'agent', text: flow.reply });
      if (flow.chips.length) th.msgs.push({ kind: 'chips', options: flow.chips });
      th.status = 'done';
      if (r.thread === th.id) r.doc = made[0].id;
    });
    renderResearcher();
  }

  /* ---- Attach persistent context (Researcher) ---- */
  const ctxVisible = () => {
    const c = state.ctx;
    const q = c.query.trim().toLowerCase();
    return CTX_SOURCES.filter((s) => s.provider === c.provider && (!q || `${s.name} ${s.group}`.toLowerCase().includes(q)));
  };
  const ctxAttached = (s) => resThread().context.some((x) => x.name === s.name);
  const ctxUrlOk = () => {
    if (!CTX_PROVIDERS[state.ctx.provider].url) return false;
    try { return /^https?:$/.test(new URL(state.ctx.url.trim()).protocol); } catch (err) { return false; }
  };
  const ctxUrlName = () => {
    const u = new URL(state.ctx.url.trim());
    const seg = u.pathname.split('/').filter(Boolean).pop() || u.hostname;
    try { return decodeURIComponent(seg); } catch (err) { return seg; }
  };
  const ctxCount = () => Object.keys(state.ctx.picked).length + (ctxUrlOk() ? 1 : 0);

  function ctxResults() {
    const c = state.ctx;
    const list = ctxVisible();
    if (!list.length) return '<p class="rail-empty ctx-empty">No sources match your search.</p>';
    const groups = [];
    list.forEach((s) => {
      let g = groups.find((x) => x.name === s.group);
      if (!g) { g = { name: s.group, tag: s.tag, items: [] }; groups.push(g); }
      g.items.push(s);
    });
    let n = 0;
    return groups.map((g, gi) => {
      const free = g.items.filter((s) => !ctxAttached(s));
      const all = free.length > 0 && free.every((s) => c.picked[s.id]);
      const items = g.items.map((s) => {
        const done = ctxAttached(s);
        return `<label class="ctx-item${done ? ' is-attached' : ''}"><input type="checkbox" data-ctx-pick="${esc(s.id)}" data-fid="ci-${n++}"${done || c.picked[s.id] ? ' checked' : ''}${done ? ' disabled' : ''}><span>${esc(s.name)}</span>${done ? '<span class="ctx-tag">Attached</span>' : ''}</label>`;
      }).join('');
      return `<section class="ctx-group" aria-labelledby="cg-${gi}">
        <div class="ctx-group-head"><h3 class="ctx-group-title" id="cg-${gi}">${esc(g.name)}</h3><span class="chip chip-sm chip-info">${esc(g.tag)}</span>
          <button class="link" type="button" data-action="ctx-all" data-g="${esc(g.name)}" data-fid="ca-${gi}"${free.length ? '' : ' disabled'}>${all ? 'Clear all' : 'Select all'}</button></div>
        <div class="ctx-items">${items}</div>
      </section>`;
    }).join('');
  }

  // Keeps the hint and the attach button in step with the URL field and the selection.
  function ctxSync() {
    const c = state.ctx;
    const root = $('#ctxRoot');
    const bad = !!c.url.trim() && !ctxUrlOk();
    const hint = $('#ctxHint', root);
    if (hint) hint.textContent = bad ? 'Enter a full link that starts with https://' : '';
    const url = $('#ctxUrl', root);
    if (url) url.setAttribute('aria-invalid', String(bad));
    const n = ctxCount();
    const btn = $('#ctxAttach', root);
    if (btn) btn.disabled = !n;
    const txt = $('#ctxAttachText', root);
    if (txt) txt.textContent = n ? `Attach to Conversation (${n})` : 'Attach to Conversation';
  }

  function ctxUpdateResults() {
    const root = $('#ctxRoot');
    const box = $('#ctxResults', root);
    if (!box) return;
    const act = document.activeElement;
    const fid = act && box.contains(act) ? act.dataset.fid : null;
    box.innerHTML = ctxResults();
    const q = state.ctx.query.trim().toLowerCase();
    $$('[data-action="ctx-quick"]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.q.toLowerCase() === q)));
    if (fid) { const el = box.querySelector(`[data-fid="${fid}"]`); if (el && !el.disabled) el.focus(); }
    ctxSync();
  }

  function renderCtx(focusFid) {
    const root = $('#ctxRoot');
    const c = state.ctx;
    if (!c.open) { root.innerHTML = ''; return; }
    const act = document.activeElement;
    const fid = focusFid || (act && root.contains(act) ? act.dataset.fid : null);
    const p = CTX_PROVIDERS[c.provider];
    const live = (x) => (x.connected ? '<span class="chip chip-sm chip-accent">Connected</span>' : '');
    const q = c.query.trim().toLowerCase();
    const menu = c.menu ? `<ul class="ctx-menu" role="listbox" aria-labelledby="ctxProvLabel">${Object.keys(CTX_PROVIDERS).map((id) => {
      const o = CTX_PROVIDERS[id];
      return `<li role="presentation"><button class="ctx-option" type="button" role="option" aria-selected="${id === c.provider}" data-action="ctx-provider" data-p="${id}" data-fid="cp-${id}">
        <span class="art-ic">${icon(o.ic, 16)}</span><span class="art-main"><span class="ctx-prov-name">${o.label}</span><span class="ctx-prov-sub">${o.sub}</span></span>${id === c.provider ? icon('check', 16) : ''}</button></li>`;
    }).join('')}</ul>` : '';
    const urlField = p.url ? `<div class="ctx-field">
        <label class="field-label" for="ctxUrl">${p.url}</label>
        <input id="ctxUrl" class="text-input ctx-mono" type="url" data-input="ctx-url" data-fid="ctx-url" placeholder="${esc(p.ph)}" value="${esc(c.url)}" aria-describedby="ctxHint">
        <p class="ctx-hint" id="ctxHint"></p>
      </div>
      <p class="ctx-divider"><span>Or select from published sources</span></p>` : '<p class="ctx-divider"><span>Select files</span></p>';
    root.innerHTML = `<div class="backdrop" data-action="ctx-close">
      <div class="dialog dialog-wide" role="dialog" aria-modal="true" aria-labelledby="ctxTitle">
        <div class="dialog-head">
          <span class="res-badge">${icon('sparkles', 16)}</span>
          <h2 class="dialog-title" id="ctxTitle">Attach Persistent Context</h2>
          <button class="icon-btn icon-btn-plain" type="button" aria-label="Close" data-action="ctx-close" data-fid="ctx-x">${icon('x', 20)}</button>
        </div>
        <p class="ctx-desc">Select dashboards, reports and data sources to ground the researcher in every turn of this conversation.</p>
        <div class="dialog-body">
          <div class="ctx-field">
            <p class="overline" id="ctxProvLabel">1. Select data provider</p>
            <div class="ctx-select">
              <button class="ctx-provider" type="button" aria-haspopup="listbox" aria-expanded="${c.menu}" aria-labelledby="ctxProvLabel ctxProvName" data-action="ctx-menu" data-fid="ctx-provider">
                <span class="art-ic">${icon(p.ic, 16)}</span>
                <span class="art-main"><span class="ctx-prov-name" id="ctxProvName">${p.label}${live(p)}</span><span class="ctx-prov-sub">${p.sub}</span></span>
                ${icon(c.menu ? 'chevron-up' : 'chevron-down', 16)}
              </button>${menu}
            </div>
          </div>
          ${urlField}
          <div class="ctx-search">
            <label class="sr-only" for="ctxQuery">Search sources</label>
            ${icon('search', 16)}
            <input id="ctxQuery" class="text-input" type="text" data-input="ctx-query" data-fid="ctx-query" placeholder="Search sources" value="${esc(c.query)}" autocomplete="off">
          </div>
          <div class="ctx-quick"><span>Quick picks:</span>${CTX_QUICK.map((x, i) =>
            `<button class="chip chip-info chip-action" type="button" data-action="ctx-quick" data-q="${esc(x)}" data-fid="cq-${i}" aria-pressed="${x.toLowerCase() === q}">${esc(x)}</button>`).join('')}</div>
          <div class="ctx-results" id="ctxResults">${ctxResults()}</div>
        </div>
        <div class="dialog-actions">
          <button class="btn btn-secondary" type="button" data-action="ctx-close" data-fid="ctx-cancel">Cancel</button>
          <button class="btn btn-primary" type="button" id="ctxAttach" data-action="ctx-attach" data-fid="ctx-attach">${icon('plus', 16)}<span id="ctxAttachText">Attach to Conversation</span></button>
        </div>
      </div></div>`;
    if (fid) { const el = root.querySelector(`[data-fid="${fid}"]`); if (el && !el.disabled) el.focus(); }
    ctxSync();
  }

  function closeCtx() {
    const opener = state.ctx.opener;
    state.ctx.open = false;
    renderCtx();
    const el = $(`#pageRes [data-fid="${opener}"]`);
    if (el) el.focus();
  }

  function ctxAttach() {
    const c = state.ctx;
    const th = resThread();
    let added = 0;
    const add = (name, kind) => { if (!th.context.some((x) => x.name === name)) { th.context.push({ name, kind }); added += 1; } };
    CTX_SOURCES.filter((s) => c.picked[s.id]).forEach((s) => add(s.name, s.kind));
    if (ctxUrlOk()) add(ctxUrlName(), CTX_PROVIDERS[c.provider].kind);
    state.res.sec.context = true;
    closeCtx();
    renderResearcher();
    toast({ tone: 'success', ic: 'check-circle', title: added === 1 ? '1 source attached' : `${added} sources attached`, text: 'The researcher will use them in every turn of this conversation.' });
  }

  function setRole(role) {
    if (role === state.role) return;
    state.role = role;
    state.chatMode.dashboard = 'docked'; // both dashboards keep AVA beside them
    // Land on the Dashboard when the current page does not exist in the new view.
    if (!PAGES[state.page].roles.includes(role)) state.page = 'dashboard';
    render();
    $('#roleSelect').focus();
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

    $('#pageDash').hidden = state.page !== 'dashboard';
    $('#pageLeads').hidden = state.page !== 'leads';
    $('#pagePerf').hidden = state.page !== 'performance';
    $('#pageRes').hidden = state.page !== 'researcher';
    $('#ava').hidden = mode === 'closed';

    const fab = $('#fab');
    fab.hidden = mode === 'docked' || state.page === 'researcher'; // the Researcher is the UM's agent, so AVA stays off that page
    const open = mode === 'hover';
    fab.setAttribute('aria-expanded', String(open));
    fab.setAttribute('aria-label', open ? 'Close AVA Chat' : 'Open AVA Chat');
    const dock = $('#chatDock');
    dock.setAttribute('aria-pressed', String(mode === 'docked'));
    dock.setAttribute('aria-label', mode === 'docked' ? 'Float chat over the page' : 'Dock chat to the right');
    const leadsFocus = state.page === 'performance' || state.page === 'dashboard';
    $('#chatSuggestion').textContent = state.role === 'um' ? UM_SUGGESTION : leadsFocus ? 'Which leads should I work first?' : 'Draft me an email response to this lead';
    $('#chatInput').placeholder = state.page === 'dashboard' ? 'How can I help you today?' : 'Chat with me';
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
    else if (state.page === 'researcher') renderResearcher();
    else if (state.page === 'dashboard') (state.role === 'um' ? renderTeamDash : renderDash)();
    applyLayout();
    renderDay();
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
    l.draft = { status: 'working', type, source, topic: opts.topic, html: '', subject: '', refine: '' };
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
    d.html = draftHtml(l.first, d.type, d.topic);
    d.subject = d.topic === 'statement' ? 'Bank statement needed' : ib ? ib.subject : 'Follow-Up: Debt Relief Options';
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
    if (state.role === 'um') {
      setTimeout(() => { umChatReply(text); renderChat(); }, 600);
      return;
    }
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
    } else if (/metrics for the day/i.test(text)) {
      setTimeout(() => {
        pushChat({ kind: 'ava', text: dayMetricsReply() });
        renderChat();
      }, 600);
    } else if (/areas to focus/i.test(text)) {
      setTimeout(() => {
        pushChat({ kind: 'ava', text: focusAreasReply() });
        renderChat();
      }, 600);
    } else if (/review your leads/i.test(text) || ((state.page === 'performance' || state.page === 'dashboard') && /first|priorit|focus|work|today/i.test(text))) {
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
      case 'res-thread':
        Object.assign(state.res, { thread: t.dataset.id, doc: null, docMax: false, draft: '', toBottom: true });
        renderResearcher();
        break;
      case 'res-filter':
        state.res.filter = t.dataset.f;
        renderResearcher();
        break;
      case 'res-new': {
        const id = `t${++seq}`;
        RES_THREADS.unshift(newThread(id));
        Object.assign(state.res, { thread: id, filter: 'all', doc: null, docMax: false, draft: '', toBottom: true });
        renderResearcher();
        $('#resInput').focus();
        break;
      }
      case 'res-rail':
        state.res.rail = !state.res.rail;
        renderResearcher();
        break;
      case 'res-sec':
        state.res.sec[t.dataset.key] = !state.res.sec[t.dataset.key];
        renderResearcher();
        break;
      case 'res-art':
        state.res.doc = state.res.doc === t.dataset.id ? null : t.dataset.id;
        if (!state.res.doc) state.res.docMax = false;
        renderResearcher();
        break;
      case 'res-doc-close':
        Object.assign(state.res, { doc: null, docMax: false });
        renderResearcher();
        break;
      case 'res-doc-max':
        state.res.docMax = !state.res.docMax;
        renderResearcher();
        break;
      case 'res-steps': {
        const m = resThread().msgs[Number(t.dataset.b)];
        m.open = !m.open;
        renderResearcher();
        break;
      }
      case 'res-step': {
        const s = resThread().msgs[Number(t.dataset.b)].steps[Number(t.dataset.s)];
        s.open = !s.open;
        renderResearcher();
        break;
      }
      case 'res-suggest':
        resSend(t.dataset.text);
        break;
      case 'res-ctx-open':
        Object.assign(state.ctx, { open: true, menu: false, provider: 'tableau', url: '', query: '', picked: {}, opener: t.dataset.fid || 'res-attach' });
        renderCtx('ctx-provider');
        break;
      case 'ctx-close':
        if (e.target === t || t.tagName === 'BUTTON') closeCtx();
        break;
      case 'ctx-menu':
        state.ctx.menu = !state.ctx.menu;
        renderCtx('ctx-provider');
        break;
      case 'ctx-provider':
        if (t.dataset.p !== state.ctx.provider) Object.assign(state.ctx, { provider: t.dataset.p, url: '', query: '' });
        state.ctx.menu = false;
        renderCtx('ctx-provider');
        break;
      case 'ctx-quick': {
        const same = state.ctx.query.trim().toLowerCase() === t.dataset.q.toLowerCase();
        state.ctx.query = same ? '' : t.dataset.q;
        renderCtx();
        break;
      }
      case 'ctx-all': {
        const free = ctxVisible().filter((s) => s.group === t.dataset.g && !ctxAttached(s));
        const on = free.every((s) => state.ctx.picked[s.id]);
        free.forEach((s) => { if (on) delete state.ctx.picked[s.id]; else state.ctx.picked[s.id] = true; });
        ctxUpdateResults();
        break;
      }
      case 'ctx-attach':
        if (ctxCount()) ctxAttach();
        break;
      case 'res-ctx-remove': {
        resThread().context.splice(Number(t.dataset.i), 1);
        renderResearcher();
        break;
      }
      case 'res-send-notes': {
        const doc = resThread().artifacts.find((x) => x.id === state.res.doc);
        if (!doc) break;
        doc.sent = true;
        renderResearcher();
        toast({ tone: 'success', ic: 'check-circle', title: 'Coaching notes sent', text: 'Each agent will see their note in their inbox.' });
        break;
      }
      case 'res-noop':
        toast({ tone: 'info', ic: 'info', title: 'Not in the prototype', text: 'This control is not part of the prototype yet.' });
        break;
      case 'dash-plan':
        openLead(t.dataset.arg, 'insights');
        break;
      case 'dash-queue':
        Object.assign(state, { page: 'performance' });
        state.perf.tab = 'leads';
        render();
        break;
      case 'dash-todo':
        handleChatMessage(t.dataset.arg);
        break;
      case 'dash-ask':
        askResearcher(t.dataset.arg);
        break;
      case 'dash-goto': {
        const el = document.getElementById(t.dataset.arg);
        if (el) { el.scrollIntoView({ block: 'start' }); el.focus({ preventScroll: true }); }
        break;
      }
      case 'dash-lead': {
        const target = leadById(t.dataset.id);
        if (!target) break;
        if (t.dataset.draft) {
          const [type, topic] = t.dataset.draft.split(':');
          startDraft(target, {
            type, topic, source: 'chat', keepSelection: true,
            prompt: type === 'sms' ? `Draft an SMS to ${target.first} about their first deposit.` : `Draft an email to ${target.first} asking for a bank statement.`
          });
        } else if (activeLeads.includes(target)) {
          openLead(target.id);
        } else {
          const note = t.dataset.note;
          state.chatLead = target.id;
          state.chat = state.chat.filter((m) => m.kind !== 'choices');
          pushChat({ kind: 'user', text: `What can I do with ${target.name}?` });
          renderChat();
          setTimeout(() => {
            pushChat({ kind: 'ava', text: `${note} Would you like me to draft an email?` });
            pushChat({ kind: 'choices', options: [{ id: 'chat', label: 'Here in chat' }] });
            renderChat();
          }, 600);
        }
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
        if (choice === 'research') {
          state.chat = state.chat.filter((m) => m.kind !== 'choices');
          pushChat({ kind: 'user', text: 'Open the Call Researcher' });
          askResearcher(state.chatAsk);
          break;
        }
        const target = leadById(state.chatLead) || l;
        state.chat = state.chat.filter((m) => m.kind !== 'choices');
        pushChat({ kind: 'user', text: choice === 'chat' ? 'Here in chat' : 'On the lead page' });
        if (choice === 'lead' && state.page !== 'leads') { state.page = 'leads'; state.view = 'inbox'; state.filter = 'all'; }
        startDraft(target, { source: choice === 'chat' ? 'chat' : 'lead', skipUserMessage: true, keepSelection: state.page !== 'leads' });
        break;
      }
      case 'suggestion':
        handleChatMessage(state.role === 'um' ? UM_SUGGESTION : state.page === 'performance' || state.page === 'dashboard' ? 'Which leads should I work first?' : `Draft me an email response to Lead #${LEAD_ID}`);
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
    if (kind === 'res-reply') {
      state.res.draft = t.value;
      $('button[type="submit"]', t.closest('form')).disabled = !t.value.trim();
      return;
    }
    if (kind === 'ctx-query') { state.ctx.query = t.value; ctxUpdateResults(); return; }
    if (kind === 'ctx-url') { state.ctx.url = t.value; ctxSync(); return; }
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
    } else if (which === 'res-reply') {
      resSend(state.res.draft);
    } else if (which === 'chat') {
      const input = $('#chatInput');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      handleChatMessage(text);
    }
  });

  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.dataset && t.dataset.roleSelect !== undefined) { setRole(t.value); return; }
    if (t.dataset && t.dataset.ctxPick !== undefined) {
      if (t.checked) state.ctx.picked[t.dataset.ctxPick] = true; else delete state.ctx.picked[t.dataset.ctxPick];
      ctxUpdateResults();
      return;
    }
    const key = e.target.dataset && e.target.dataset.filter;
    if (!key) return;
    state.perf[key] = e.target.value;
    renderPerf();
  });

  document.addEventListener('keydown', (e) => {
    if (state.ctx.open) {
      if (e.key === 'Escape') {
        if (state.ctx.menu) { state.ctx.menu = false; renderCtx('ctx-provider'); } else closeCtx();
        return;
      }
      if (e.key === 'Tab') {
        const f = $$('button:not(:disabled), input:not(:disabled)', $('#ctxRoot .dialog'));
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      return;
    }
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
