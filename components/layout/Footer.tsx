const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 shadow-md mt-8">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Alx Listing App
      </div>
    </footer>
  );
};

export default Footer;
