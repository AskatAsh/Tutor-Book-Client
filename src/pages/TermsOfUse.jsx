
const TermsOfUse = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-28 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Use</h1>
      <p className="mb-4">
        Welcome to <strong>TutorBook</strong>. By using our platform, you agree to the following terms and conditions. Please read them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing and using TutorBook, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not use our platform.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Description of Services</h2>
      <p className="mb-4">
        TutorBook provides an online platform to connect students with tutors. The services offered include tutor search, booking sessions, and other related features. 
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You must provide accurate and complete information during registration.</li>
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>You agree to use the platform only for lawful purposes.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Payment and Refunds</h2>
      <p className="mb-4">
        Payments for tutoring sessions must be made in advance. Refunds are subject to our <a href="/refund-policy" className="text-green-600 hover:underline">Refund Policy</a>.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Prohibited Activities</h2>
      <p className="mb-4">
        Users must not engage in any activities that may disrupt or harm the platform, including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Using the platform for fraudulent purposes.</li>
        <li>Violating intellectual property rights.</li>
        <li>Posting inappropriate or offensive content.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account if you violate these terms or engage in any misconduct.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        TutorBook is not liable for any direct, indirect, or incidental damages arising from the use of our platform. Tutors are independent providers, and TutorBook does not guarantee the quality of their services.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Modifications</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting on our website. Continued use of the platform constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns, please contact us at <a href="mailto:support@tutorbook.com" className="text-green-600 hover:underline">support@tutorbook.com</a>.
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Last updated: January 2025
      </p>
    </section>
  );
};

export default TermsOfUse;