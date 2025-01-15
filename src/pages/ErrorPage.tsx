import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
        <p className="text-xl text-gray-600">Sorry, an unexpected error has occurred.</p>
        
        <p className="text-gray-500">
          {error?.statusText || error?.message || 'Something went wrong'}
        </p>

        <div className="pt-6">
          <Link to="/">
            <Button variant="default">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
