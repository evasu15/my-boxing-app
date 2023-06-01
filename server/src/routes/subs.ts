import express from "express";
import User from "../models/user"
import Article from "../models/article"
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";
import ReactPlayer from "react-player";

const router = express.Router(); 

router.get("/prices", checkAuth, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.post("/session", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });

 Article.create({
   title: "Intermediate Level",
   imageUrl: "https://www.youtube.com/embed/CRVHDeaRYqM",
   content: "Learn intermediate level boxing combinations and get in great shape with my intermediate boxing program!",
   access: "Intermediate",
  }); 

//<iframe width="560" height="315" src="https://www.youtube.com/embed/_4GBbfsoxQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/articles",
      cancel_url: "http://localhost:3000/article-plans",
      customer: user?.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export default router;

