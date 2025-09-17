import express, { Request, Response } from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import path from "path";
import cors from "cors";
import "dotenv/config";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const PORT =  5000;
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

//
// types
interface AdviceRequestBody {
  query: string;
  language: string;
}
interface AdviceResponse {
  advice: string;
}

// Firebase init (optional)
if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  }
}

// ye saara firebase ka cred bnana padega tujhe khudse

// Rule-based fallback
function ruleAdvisor(query: string): string | null {
  const text = query.toLowerCase();
  if (text.includes("pest") || text.includes("insect"))
    return "Check leaves for holes; try neem oil spray in morning.";
  if (text.includes("water") || text.includes("irrigat"))
    return "Water deeply once every 3–4 days.";
  if (text.includes("fertil") || text.includes("nitrogen"))
    return "Apply balanced fertilizer (NPK) as per crop stage.";
  return null;
}

// API endpoint
app.post(
  "/api/advice",
  async (
    req: Request<{}, {}, AdviceRequestBody>,
    res: Response<AdviceResponse>
  ) => {
    const { query, language } = req.body;

    if (!query) return res.status(400).json({ advice: "No query provided" });

    let advice: string | null = ruleAdvisor(query);

    // AI fallback if OpenAI API is configured
    // bkl atleast backend to khudse likh leta
    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: advice
                  ? `Refine advice: ${query}. Answer only in ${language}`
                  : `Give farming advice: ${query}. Answer only in ${language}`,
              },
            ],
          },
        ],
      };

      const r = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.GOOGLE_API_KEY || "",
          },
          body: JSON.stringify(payload),
        }
      );
      const j = (await r.json()) as any;
      advice = j?.candidates[0].content?.parts?.[0]?.text?.trim() || null;
    } catch (err) {
      console.error("AI call failed", err);
    }
    if (!advice) {
      advice = "Sorry—I don’t have an answer. Contact your local agri officer.";
    }

    // log in Firestore (if enabled)
    if (admin.apps.length > 0) {
      try {
        await admin.firestore().collection("queries").add({
          query,
          advice,
          language,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      } catch (err) {
        console.warn("Firestore log failed", err);
      }
    }

    res.json({ advice });
  }
);

const clientBuildPath = path.join(__dirname, "../../frontend/dist/client");

// fallback route → serve frontend in production
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);

app.get("/", (req: Request, res: Response) => {
  res.send("Farmer Advisor API is running 🚜");
});

//  isme me dekh raha tha ki api call hoti hai ya nhi agr ho jati to yahi code usme paste kr deta.
