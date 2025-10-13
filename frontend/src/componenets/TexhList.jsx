import { techBadges } from "../../utils/techList";

export default function TechList({ tech = [], size }) {
  if (!tech?.length) return null;
  return (
    <div>
      {tech.map((t) => {
        const src = techBadges[t];
        return src ? (
          <img
            key={t}
            src={src}
            alt={t}
            loading="lazy"
            height={size} /* tweak size to taste */
            style={{ marginRight: 5 }}
          />
        ) : null;
      })}
    </div>
  );
}
