export default function FooterPage() {
  const year = new Date().getFullYear();
  return (
    <footer className="font-sans">
      <div className="flex justify-between items-center ">
        <p>&copy;{year}</p>
      </div>
    </footer>
  );
}
