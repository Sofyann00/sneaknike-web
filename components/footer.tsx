import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.jpg" 
                alt="Sneakerskuy Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">Sneakerskuy</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your trusted authorized Nike retailer. Discover our curated collection 
              of authentic Nike footwear and apparel. Premium quality, competitive prices, 
              and fast nationwide shipping.
            </p>
          </div>

          {/* Solutions section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/new-releases"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Latest Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/jordan"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nike Jordan
                </Link>
              </li>
              <li>
                <Link
                  href="/performance"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nike Running
                </Link>
              </li>
            </ul>
          </div>

          {/* Help section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Customer Support</p>
                <div className="space-y-2">
                  <p>
                    <a
                      href="mailto:support@Sneakerskuy.com"
                      className="hover:text-foreground transition-colors"
                    >
                      support@Sneakerskuy.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+18001234567"
                      className="hover:text-foreground transition-colors"
                    >
                      1-800-123-4567
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Store Location</p>
                <p className="leading-relaxed">
                  Komplek Perkantoran Duta Merlin Blok F13,<br />
                  Jalan Gajah Mada,<br />
                  Desa/Kelurahan Petojo Utara, Kec. Gambir,<br />
                  Kota Adm. Jakarta Pusat,<br />
                  Provinsi DKI Jakarta,<br />
                  Kode Pos: 10130
                </p>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PT SINAR TEKNOLOGI SOLUSI. Authorized Nike Retailer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
