import { z } from "zod";

const guestSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  dietary: z.string().max(200).default(""),
});

export const rsvpSchema = z.object({
  guestName: z.string().min(1, "Please enter your name").max(100),
  attending: z.enum(["yes", "no"], {
    message: "Please select whether you will be attending",
  }),
  dietary: z.string().max(200).default(""),
  plusOnes: z.array(guestSchema).max(3).default([]),
});

export type RSVPData = z.infer<typeof rsvpSchema>;
