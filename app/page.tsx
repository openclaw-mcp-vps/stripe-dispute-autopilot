export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Fintech Automation
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Win Every Stripe Dispute —{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stripe Dispute Autopilot detects chargebacks the moment they appear, analyzes your transaction data, and generates AI-powered evidence packages — so you never lose a winnable dispute again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start Winning Disputes — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime. Connects to Stripe in minutes.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant Detection", desc: "Monitors your Stripe account 24/7 and alerts you the moment a dispute is filed." },
            { icon: "🤖", title: "AI Evidence Builder", desc: "Automatically compiles transaction history, customer data, and policy docs into a dispute-ready package." },
            { icon: "📈", title: "Higher Win Rate", desc: "Merchants using structured evidence packages win up to 3× more disputes than manual responses." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to fight chargebacks on autopilot</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited dispute monitoring",
              "AI-generated evidence packages",
              "Stripe webhook integration",
              "Customer & transaction analysis",
              "Email alerts & dispute dashboard",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does Stripe Dispute Autopilot connect to my account?",
              a: "You connect via Stripe's secure OAuth flow. We only request read access to disputes and transactions — we never touch your payouts or settings."
            },
            {
              q: "What types of disputes does it handle?",
              a: "It handles all Stripe dispute reasons including fraud, unrecognized charges, product not received, and subscription cancellations — generating tailored evidence for each type."
            },
            {
              q: "Can I review the evidence package before it's submitted?",
              a: "Yes. Every package is staged for your review first. You can edit, approve, or submit directly to Stripe with one click from your dashboard."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        © {new Date().getFullYear()} Stripe Dispute Autopilot. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  );
}
