import { useEffect, useState } from "react";
import { toast } from "sonner";
import supabase from "@/lib/supabaseClient";
import { useAuthStore } from "@/store/authStore";
import HomePageHeader from "@/components/HomePageHeader";
import Box from "@/components/Box";

function HomePage() {
  const { profile } = useAuthStore();
  const [winnings, setWinnings] = useState([
    { id: 1, amount: 20, draw: "october 2025" },
    { id: 2, amount: 40, draw: "november 2025" },
    { id: 3, amount: 50, draw: "december 2025" },
  ]);

  const scores = [
    {
      id: 1,
      score: 34,
      course: "Pine valley GC",
      date: "Oct 12, 2025",
    },
    {
      id: 2,
      score: 20,
      course: "Pine valley GC",
      date: "Oct 12, 2025",
    },
    {
      id: 3,
      score: 28,
      course: "Pine valley GC",
      date: "Oct 12, 2025",
    },
  ];

  console.log("profile home: ", profile);

  return (
    <>
      <HomePageHeader />
      <div className="pt-24 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Hi{" "}
              <span className="text-brand-orange-dark">
                {profile?.full_name}
              </span>
              ,
            </h1>
            <h2 className="text-xl text-slate-500 mb-4">
              Welcome back to the Fairway Foundation!
            </h2>
          </div>
          <div className="flex gap-4 ">
            <Box>
              <div className="mb-4">
                <h3 className="text-base lg:text-lg font-bold text-slate-800">
                  Recent score
                </h3>
              </div>
              <ul className="space-y-3">
                {scores?.map((score) => (
                  <li
                    key={score.id}
                    className="w-full bg-brand-purple-soft p-3 flex gap-3 rounded-full"
                  >
                    <h2 className="rounded-full w-10 h-10 flex items-center justify-center font-bold bg-white">
                      {score.score}
                    </h2>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {score.course}
                      </h3>
                      <p className="text-xs text-slate-500">{score.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Box>
            <Box>
              <div className="mb-4">
                <h3 className="text-base lg:text-lg font-bold text-slate-800">
                  Your winnings
                </h3>
              </div>
              <div>
                {winnings.length == 0 ? (
                  <p className="text-center text-slate-500">No winnings yet</p>
                ) : (
                  <div>
                    <div className="mb-4">
                      <p className="text-slate-500">Total winnings</p>
                      <h1 className="text-5xl font-extrabold text-slate-800">
                        ${winnings.reduce((a, b) => a + b.amount, 0)}
                      </h1>
                    </div>
                    <ul className="">
                      {winnings?.map((w) => (
                        <li key={w.id} className="flex justify-between">
                          <p className="text-slate-500">{w.draw}</p>
                          <p className="text-brand-teal-dark">${w.amount} +</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
