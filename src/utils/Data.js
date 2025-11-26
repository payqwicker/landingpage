
export const accordionData = [
  {
    title: "General Questions",
    content: [
      {
        question: "What is PayQwicker?",
        answer:
          "PayQwicker is a digital payment platform that allows users to send, receive, and manage money seamlessly. Whether you're paying bills, transferring funds, or managing business transactions, PayQwicker makes it simple, secure, and fast.",
      },
      {
        question: "Who can use PayQwicker?",
        answer:
          "Anyone! PayQwicker is designed for individuals, freelancers, and businesses looking for an easy way to handle transactions without the friction of traditional banking.",
      },
      {
        question: "How is PayQwicker different from other payment platforms",
        answer:
          "PayQwicker focuses on speed, security, and ease of use. Unlike traditional banking services, we offer instant transactions, simple account setup, and a seamless experience without hidden fees.",
      },
    ],
  },
  {
    title: "Account & Security",
    content: [
      {
        question: "How do I sign up for PayQwicker?",
        answer: (
          <ul className="list-decimal list-inside space-y-2">
            <h1 className="font-semibold">Signing up is easy</h1>
            <li>1. Click “Sign Up” on our homepage.</li>
            <li>2. Enter your details and verify your identity.</li>
            <li>
              3. Set up your PayQwicker Tag (your unique username for payments).
            </li>
            <li>4. Start sending and receiving money instantly.</li>
          </ul>
        ),
      },
      {
        question: "Is PayQwicker secure?",
        answer:
          "Yes! Security is our top priority. We use bank-grade encryption to keep your transactions safe.",
      },
      {
        question: "What is a PayQwicker Tag, and how do i create one?",
        answer:
          "A PayQwicker Tag is your unique username that allows you to send and receive payments easily without sharing personal banking details. You can create one in your account settings.",
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          "Simply click “Forgot Password?” on the login page, and follow the steps to reset it. ",
      },
      {
        question: "Can I use PayQwicker on multiple devices?",
        answer:
          "Yes! You can log in securely from any device using your credentials.",
      },
    ],
  },
  {
    title: "Transactions & Payments",
    content: [
      {
        question: "How do I send money with PayQwicker?",
        answer: (
          <ul className="list-decimal list-inside space-y-2">
            <li>1. Log in to your PayQwicker account.</li>
            <li>
              2. Enter the recipient’s PayQwicker Tag, phone number, or email.
            </li>
            <li>
              3. Set up your PayQwicker Tag (your unique username for payments).
            </li>
            <li>4. Input the amount and confirm the transaction.</li>
          </ul>
        ),
      },
      {
        question: "How fast are transactions on PayQwicker?",
        answer:
          "Most transactions are instant. However, some may take up to a few minutes, depending on network conditions and security checks.",
      },
      {
        question: "Are there any transaction limits?",
        answer:
          "Yes, there are limits and you can view that on your account settings page",
      },
      {
        question: "Can I cancel a transaction after sending money?",
        answer:
          "Once a transaction is completed, it cannot be reversed. Always double-check recipient details before confirming.",
      },
      {
        question: "What types of payments can I make with PayQwicker?",
        answer: (
          <ul className="list-decimal list-inside space-y-2">
            <h3 className="font-semibold">You can:</h3>
            <li>1. Send money to friends and family</li>
            <li>2. Pay bills</li>
            <li>3. Make business payments.</li>
            <li>4. Transfer funds between PayQwicker accounts</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Fees & Charges",
    content: [
      {
        question: "Does PayQwicker charge fees for transactions?",
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <li>
              1. <b>Personal transactions:</b> Free between PayQwicker accounts
            </li>
            <li>
              2. <b>Business transactions:</b> A small processing fee may apply
              for merchant payments.
            </li>
            <li>
              3. <b>Withdrawals:</b> Fees vary depending on the amount.
            </li>
          </ul>
        ),
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No! We believe in transparent pricing. You’ll always see any applicable fees after confirming a transaction.",
      },
    ],
  },
  {
    title: "Withdrawals & Deposits",
    content: [
      {
        question: "How do I withdraw money from PayQwicker?",
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <h2 className="font-semibold">You can withdraw funds to:</h2>
            <li>- A supported mobile wallet</li>
          </ul>
        ),
      },
      {
        question: "How long do withdrawals take?",
        answer: "withdrawals are instant",
      },
      {
        question: "Can I add money to my PayQwicker account?",
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <h2 className="font-semibold">Yes! You can add funds via:</h2>
            <li>1. Bank transfer</li>
            <li>2. Peer-to-peer transfers from other PayQwicker users</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Support & Troubleshooting",
    content: [
      {
        question: "What should I do if my transaction is delayed?",
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <h2 className="font-semibold">Most payments are instant, but if you experience a delay:</h2>
            <li>1. Check your transaction status in the Activity section.</li>
            <li>2. Ensure your recipient’s details are correct.</li>
            <li>3. Contact support if the issue persists.</li>
          </ul>
        ),
      },
      {
        question: "How do I contact PayQwicker support?",
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <h2 className="font-semibold">You can reach us via:</h2>
            <li>1. Email support (support@payqwicker.com)</li>
            <li>2. Help Center FAQs</li>
          </ul>
        ),
      },
      {
        question: "Can I report suspicious activity?",
        answer:
          "Absolutely! If you notice any unauthorized transactions, report it immediately via the app, and we’ll take action.",
      },
    ],
  },
];
