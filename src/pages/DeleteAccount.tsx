import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function DeleteAccount() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const userId  = (await supabase.auth.getUser()).data.user?.id;
    
    console.log(userId)
    try {
      setIsDeleting(true);
      const access_token = (await supabase.auth.getSession()).data.session?.access_token;
      setError(null);
       const { data, error } = await supabase.functions.invoke("delete_user", {
        headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
      
      console.log(data)

      if (error) throw error;

      // Sign out after marking the account as deleted
      await supabase.auth.signOut();
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete account');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 text-red-600 mb-6">
          <Trash2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Delete Account</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="font-medium text-red-800">Warning: This action cannot be undone</p>
            </div>
            <p className="mt-2 text-sm text-red-700">
              Deleting your account will permanently remove all your data, including:
            </p>
            <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
              <li>Reading history</li>
              <li>Notes and highlights</li>
              <li>Personal information</li>
              <li>Account settings</li>
            </ul>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isDeleting ? 'Deleting Account...' : 'Confirm Account Deletion'}
            </button>

            <button
              onClick={async () => {await supabase.auth.signOut(); navigate(-1)}}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md 
                       hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}