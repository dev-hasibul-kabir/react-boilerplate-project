export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}
