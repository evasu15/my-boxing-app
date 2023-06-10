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

// Article.create({
 //  title: "Advanced Level",
 //  videoUrl: "https://player.vimeo.com/video/835059477?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  // content: "This video consists of long boxing combinations mixed with head movement and footwork drills. HIIT workouts are added in between combinations for a better workout. Equipment needed for this workout includes: Boxing Gloves and Boxing Bag.",
   //access: "Advanced",
//  }); 

  //<iframe src="https://player.vimeo.com/video/835059477?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Advance Program Video 2 With Equipment"></iframe>
 // <iframe src="https://player.vimeo.com/video/835055775?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Advance Boxing Program"></iframe>
  //This video consists of long boxing combinations mixed with head movement and footwork drills. HIIT workouts are added in between combinations for a better workout.

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

