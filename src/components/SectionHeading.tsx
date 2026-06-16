import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  icon?: LucideIcon;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        {Icon ? <Icon size={16} strokeWidth={2.2} /> : null}
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
