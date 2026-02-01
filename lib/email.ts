interface SendVerificationEmailParams {
  email: string;
  fullName: string;
  verificationToken: string;
  eventSlug: string;
}

/**
 * Send verification email via API route
 * This function calls the server-side API to avoid importing Resend in client bundles
 */
export async function sendVerificationEmail(params: SendVerificationEmailParams) {
  const response = await fetch('/api/send-verification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to send verification email');
  }

  return response.json();
}
