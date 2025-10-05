export async function SendEmail({ to, subject, body }) {
  // Placeholder integration — in production hook this to an email provider
  console.info("SendEmail called", { to, subject, body });
  return Promise.resolve({ ok: true });
}
