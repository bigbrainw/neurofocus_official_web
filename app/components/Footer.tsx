import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/eeg-chips">EEG Chips</Link>
              </li>
              <li>
                <Link href="/programs">Engagement Programs</Link>
              </li>
              <li>
                <Link href="/custom-solutions">Custom Solutions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} EEG Startup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
