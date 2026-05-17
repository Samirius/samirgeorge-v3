const footerLinks = [
  { label: 'myHR', href: 'https://hr.sabbk.com' },
  { label: 'Sabbk', href: 'https://sabbk.com' },
  { label: 'Email', href: 'mailto:samir@sabbk.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm text-secondary">
              &copy; {currentYear} Samir George
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hidden md:inline text-sm text-secondary/50">
              Cairo, Egypt
            </span>
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-secondary/30">
            Built with structure. Shipped with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
