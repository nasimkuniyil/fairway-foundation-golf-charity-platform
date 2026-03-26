import { useEffect, useState } from "react";
import { toast } from "sonner";
import supabase from "@/lib/supabaseClient";
import { useAuthStore } from "@/store/authStore";
import Box from "@/components/Box";
import { Droplets, Radio } from "lucide-react";

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

  const pastDonations = [
    { id: 1, org: "First Tee", amount: 25, date: "Aug 15, 2025" },
    { id: 2, org: "St. Jude's", amount: 50, date: "Sep 22, 2025" },
    { id: 3, org: "Local Food Bank", amount: 35, date: "Oct 05, 2025" },
  ];

  console.log("profile home: ", profile);

  return (
    <>
      <div className="pt-10 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <section className="mb-8">
            <h1 className="text-4xl font-extrabold text-slate-800">
              Welcome{" "}
              <span className="text-brand-orange-extra-dark">
                {profile?.full_name}
              </span>
            </h1>
            <p className="text-slate-500 mb-4 max-w-1/2">
              Your swings are powering prograss.Today your play supports clean
              water for communities in need.
            </p>
          </section>
          <section className="mb-8 flex gap-4">
            <Box className="flex-2 bg-white">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-brand-teal-dark font-semibold">
                    CURRENT MISSION
                  </h3>
                  <h1 className="text-2xl font-bold">WaterAid International</h1>
                </div>
                <div>
                  <div className="bg-linear-to-tl from-brand-teal-dark to-brand-teal-light rounded-full p-2">
                    <Droplets className="text-white h-10 w-10" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-brand-teal-dark font-semibold">
                  YOUR TOTAL DONATION
                </h3>
                <h1 className="text-5xl font-bold">$110</h1>
              </div>
              <div className="mt-6">
                <h3 className="text-sm text-slate-500 font-semibold mb-3">
                  OTHER RECENT DONATIONS
                </h3>
                <ul className="flex gap-4">
                  {pastDonations?.map((donation) => (
                    <li
                      key={donation.id}
                      className="flex items-center gap-3 border border-slate-100 p-3 rounded-lg bg-brand-orange-soft"
                    >
                      <p className="font-bold text-brand-teal-dark">
                        ${donation.amount}
                      </p>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {donation.org}
                        </p>
                        <p className="text-xs text-slate-500">
                          {donation.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Box>
            <Box className="flex-1 bg-linear-to-tl to-brand-orange-extra-dark from-brand-orange-light">
              <div>
                <p className="bg-brand-orange-light/40 w-fit text-white py-1 px-4 mb-4 rounded-full">#28th Draw</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Next Major Draw</h3>
                <h1 className="text-5xl my-3 font-bold text-white">02-04-2026</h1>
              </div>
            </Box>
          </section>
          <section className="grid grid-cols-2 grid-rows-2 gap-4 ">
            <Box className="row-span-2 bg-white">
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
            <Box className="bg-linear-to-tl from-brand-purple-soft to-brand-orange-soft">
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
            <Box className="bg-linear-to-tl from-brand-purple-soft to-brand-teal-soft">
              <div className="flex items-center gap-2">
                <h3 className="text-base lg:text-lg font-bold text-slate-800">
                  Quick insights
                </h3>
              </div>
            </Box>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
