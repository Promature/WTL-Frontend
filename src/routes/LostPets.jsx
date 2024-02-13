import { useEffect } from "react";
import LostPetsGrid from "../components/LostPetsGrid";

export default function LostPets() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/lost-pets-background.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lost Pets</h1>
            <p className="mb-5 text-3xl">
            Losing a pet is heartbreaking. Let us help you bring them home.
            </p>
          </div>
        </div>
      </div>
      <LostPetsGrid />
    </div>
  );
}
