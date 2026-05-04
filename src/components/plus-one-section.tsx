"use client";

import { GuestFields } from "./guest-fields";

const MAX_PLUS_ONES = 3;

interface PlusOneSectionProps {
  plusOnes: number[];
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export function PlusOneSection({
  plusOnes,
  onAdd,
  onRemove,
}: PlusOneSectionProps) {
  return (
    <div className="space-y-4">
      {plusOnes.map((id, index) => (
        <GuestFields
          key={id}
          prefix={`plusone-${index}`}
          label={`Additional Guest ${index + 1}`}
          onRemove={() => onRemove(index)}
        />
      ))}

      {plusOnes.length < MAX_PLUS_ONES && (
        <button
          type="button"
          onClick={onAdd}
          className="w-full h-12 rounded-md border border-dashed border-sage text-sage-dark text-sm hover:bg-sage-light/30 transition-colors"
        >
          + Add another guest
        </button>
      )}
    </div>
  );
}
