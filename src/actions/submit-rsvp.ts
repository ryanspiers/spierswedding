"use server";

import { rsvpSchema } from "@/lib/schema";
import { appendRow } from "@/lib/google-sheets";
import { redirect } from "next/navigation";

export type FormState = {
  errors?: Record<string, string>;
  success?: boolean;
};

export async function submitRSVP(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const attending = formData.get("attending") as string;
  const guestName = formData.get("guestName") as string;
  const dietary = formData.get("dietary") as string;

  // Parse plus-ones from indexed fields
  const plusOnes: { name: string; dietary: string }[] = [];
  for (let i = 0; i < 3; i++) {
    const name = formData.get(`plusone-${i}-name`) as string;
    if (name) {
      plusOnes.push({
        name,
        dietary: (formData.get(`plusone-${i}-dietary`) as string) || "",
      });
    }
  }

  const parsed = rsvpSchema.safeParse({
    guestName,
    attending,
    dietary: attending === "yes" ? dietary : "",
    plusOnes: attending === "yes" ? plusOnes : [],
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      fieldErrors[key] = issue.message;
    }
    return { errors: fieldErrors };
  }

  const data = parsed.data;

  // Build flat row: Timestamp, Name, Attending, Dietary, PlusOne1Name, PlusOne1Dietary, ...
  const row: string[] = [
    new Date().toISOString(),
    data.guestName,
    data.attending,
    data.dietary,
  ];

  for (let i = 0; i < 3; i++) {
    if (data.plusOnes[i]) {
      row.push(data.plusOnes[i].name, data.plusOnes[i].dietary);
    } else {
      row.push("", "");
    }
  }

  try {
    await appendRow(row);
  } catch {
    return {
      errors: { form: "Something went wrong. Please try again." },
    };
  }

  redirect("/thank-you");
}
