# Fix Nodemailer "No recipients defined" Error

- [x] Step 1: Create TODO.md 
- [x] Step 2: Edit server/configs/nodemailer.js to accept object {to, subject, body} + validation (fixed createTransporter → createTransport typo)
- [x] Step 3: Edit server/inngest/index.js: Fix bookedSeats.forEach(seat), movie.title
- [x] Step 4: Update TODO.md with completions
- [ ] Step 5: Test: Create booking, pay via Stripe, check no error & email sends; verify seat release if unpaid after 10min
- [ ] Step 6: Restart server / Vercel deploy
