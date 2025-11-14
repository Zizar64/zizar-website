import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4">
              ZIZAR
            </h3>
            <p className="text-sm text-muted-foreground">
              Ingénierie audiovisuelle et systèmes IP
              <br />
              Consulting • Projets • Opérations
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#competences"
                  className="text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:contact@zizar.fr"
                className="p-2 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zizar. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
