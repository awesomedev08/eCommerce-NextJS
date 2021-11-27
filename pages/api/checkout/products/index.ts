import { NextApiRequest, NextApiResponse } from "next";
import type Prisma from "@prisma/client";
import { transformProduct } from "../../../../components/products/utils/transforms";
import { Stripe } from "stripe";
import { getEnv } from "../../../../utils/env";

const stripe = new Stripe(getEnv("STRIPE_SECRET_KEY"), {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "donate",
    payment_method_types: ["card"],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    line_items: req.body,
  });

  res.status(200).json({ id });
  res.end();
}
