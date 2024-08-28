import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center font-bold bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Designed And Developed By -
            <span className="text-orange-500 font-extrabold">Mr. Pravin M Bale</span>
          </p>
        </aside>
      </footer>
    </div>
  );
}
