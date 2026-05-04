"use client";

import { useActionState, useState, useCallback } from "react";
import { submitRSVP, type FormState } from "@/actions/submit-rsvp";
import { PlusOneSection } from "./plus-one-section";
import { SubmitButton } from "./submit-button";

export function RSVPForm() {
  const [state, formAction] = useActionState<FormState, FormData>(submitRSVP, {});
  const [attending, setAttending] = useState<string | null>(null);
  const [plusOnes, setPlusOnes] = useState<number[]>([]);
  const [nextId, setNextId] = useState(0);

  const addPlusOne = useCallback(() => {
    setPlusOnes((prev) => [...prev, nextId]);
    setNextId((id) => id + 1);
  }, [nextId]);

  const removePlusOne = useCallback((index: number) => {
    setPlusOnes((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <form action={formAction} className="space-y-8">
      {/* Guest Name */}
      <div>
        <label htmlFor="guestName" className="block text-sm mb-1">
          Your name
        </label>
        <input
          type="text"
          id="guestName"
          name="guestName"
          required
          className="w-full h-12 border-b border-stone-300 bg-transparent px-1 text-base outline-none focus:border-gold transition-colors"
          placeholder="Full name"
        />
        {state.errors?.guestName && (
          <p className="mt-1 text-sm text-red-600">{state.errors.guestName}</p>
        )}
      </div>

      {/* Attending */}
      <fieldset>
        <legend className="block text-sm mb-3">Will you be attending?</legend>
        <div className="flex gap-4">
          <label
            className={`flex-1 h-12 flex items-center justify-center rounded-md border text-base cursor-pointer transition-colors ${
              attending === "yes"
                ? "border-sage bg-sage-light/40 text-sage-dark"
                : "border-stone-300 hover:border-sage"
            }`}
          >
            <input
              type="radio"
              name="attending"
              value="yes"
              className="sr-only"
              onChange={() => setAttending("yes")}
            />
            Joyfully accepts
          </label>
          <label
            className={`flex-1 h-12 flex items-center justify-center rounded-md border text-base cursor-pointer transition-colors ${
              attending === "no"
                ? "border-stone-500 bg-stone-300/30 text-stone-800"
                : "border-stone-300 hover:border-stone-500"
            }`}
          >
            <input
              type="radio"
              name="attending"
              value="no"
              className="sr-only"
              onChange={() => setAttending("no")}
            />
            Respectfully declines
          </label>
        </div>
        {state.errors?.attending && (
          <p className="mt-1 text-sm text-red-600">{state.errors.attending}</p>
        )}
      </fieldset>

      {/* Dietary (shown when attending) */}
      {attending === "yes" && (
        <div className="animate-fade-in">
          <label htmlFor="dietary" className="block text-sm mb-1">
            Dietary requirements
          </label>
          <input
            type="text"
            id="dietary"
            name="dietary"
            className="w-full h-12 border-b border-stone-300 bg-transparent px-1 text-base outline-none focus:border-gold transition-colors"
            placeholder="e.g. vegetarian, gluten-free, none"
          />
        </div>
      )}

      {/* Plus Ones (shown when attending) */}
      {attending === "yes" && (
        <div className="animate-fade-in space-y-4">
          <p className="text-sm text-stone-500">
            Bringing anyone along? Add them below.
          </p>
          <PlusOneSection
            plusOnes={plusOnes}
            onAdd={addPlusOne}
            onRemove={removePlusOne}
          />
        </div>
      )}

      {/* Form-level error */}
      {state.errors?.form && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-600">
          {state.errors.form}
        </div>
      )}

      {/* Submit */}
      {attending !== null && (
        <div className="animate-fade-in pt-4">
          <SubmitButton />
        </div>
      )}
    </form>
  );
}
