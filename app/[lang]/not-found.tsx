// app/not-found.tsx (or app/[lang]/not-found.tsx if localized)

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 text-lg">Sorry, the page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
}
