export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Henry Mba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}