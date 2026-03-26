import React from 'react';
import { ArrowRight, Trophy, Users, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 shadow-sm">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.emerald.100),white)] opacity-20" />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800">
            Fairway Foundation
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Join the ultimate golf charity platform. Empower communities, support great causes, and experience the game like never before.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/register" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Join Now
            </a>
            <a href="/about" className="group text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-emerald-600 transition-colors">
              Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Impact the Green</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need for charity golf
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                { name: 'Tournaments', description: 'Organize and track charity tournaments seamlessly.', icon: Trophy },
                { name: 'Community', description: 'Connect with golfers and sponsors globally.', icon: Users },
                { name: 'Scheduling', description: 'Advanced tools to manage events.', icon: Calendar },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col relative pl-16 group hover:bg-white p-4 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
                  <dt className="text-base font-semibold leading-7 text-slate-900">
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-sm leading-7 text-slate-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
