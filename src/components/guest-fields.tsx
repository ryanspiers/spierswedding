"use client";

interface GuestFieldsProps {
  prefix: string;
  label: string;
  onRemove?: () => void;
}

export function GuestFields({ prefix, label, onRemove }: GuestFieldsProps) {
  return (
    <div className="space-y-4 rounded-lg border border-stone-300/60 bg-white/50 p-4">
      <div className="flex items-center justify-between">
        <span className="font-serif text-sm text-stone-500">{label}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-sm text-stone-500 underline underline-offset-2 hover:text-stone-800"
          >
            Remove
          </button>
        )}
      </div>

      <div>
        <label htmlFor={`${prefix}-name`} className="block text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          id={`${prefix}-name`}
          name={`${prefix}-name`}
          required
          className="w-full h-12 border-b border-stone-300 bg-transparent px-1 text-base outline-none focus:border-gold transition-colors"
          placeholder="Guest name"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-dietary`} className="block text-sm mb-1">
          Dietary requirements
        </label>
        <input
          type="text"
          id={`${prefix}-dietary`}
          name={`${prefix}-dietary`}
          className="w-full h-12 border-b border-stone-300 bg-transparent px-1 text-base outline-none focus:border-gold transition-colors"
          placeholder="e.g. vegetarian, gluten-free, none"
        />
      </div>
    </div>
  );
}
