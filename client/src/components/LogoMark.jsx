// Vector recreation of the super-tour.uz channel avatar (gold sun/"S" with a
// navy plane flying through it) — scalable, unlike the source raster logo.
export default function LogoMark({ className = "nav__logo-mark" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#F5A623" />
      <path d="M9 22.5L34 11l-9.5 22.5-3-10-10-3z" fill="#1B4F9C" />
    </svg>
  );
}
