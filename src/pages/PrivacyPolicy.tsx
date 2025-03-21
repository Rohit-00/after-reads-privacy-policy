import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">After Reads Privacy Policy</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect the following information:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>
                <strong>Authentication Details:</strong> Email and password when you sign up or log in, or your Google account when you use Google sign-in.
              </li>
              <li>
                <strong>Reading List Data:</strong> The list of books you have added to your reading list.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your data solely to provide and maintain our services, manage your account, and process your requests—such as adding or removing books from your reading list.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Data Storage & Security</h2>
            <p className="text-gray-600">
              Our app uses <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Supabase</a> as its backend service. Your authentication details and reading list data are stored securely using industry-standard encryption. We do not share your data with any other company.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your personal data. You can request the deletion of your account along with all associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Account Deletion</h2>
            <p className="text-gray-600">
              We provide a secure way for you to delete your account and all associated data. When you delete your account, all your authentication details and reading list data will be permanently removed from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date and notify you of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:sup.afterreads@gmail.com" className="text-indigo-600 hover:underline">
              sup.afterreads@gmail.com  
              </a>.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/account/delete" 
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Delete Your Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
