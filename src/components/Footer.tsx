export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sambit Kumar Bastia. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Senior Product Manager | Digital Innovation Leader
          </p>
        </div>
      </div>
    </footer>
  );
}
