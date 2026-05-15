export default function LDolceWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f2f4] text-[#7d0c3d] font-serif">
      {/* Hero */}
      <section className="px-6 md:px-16 py-12 flex flex-col items-center text-center">
        <img
          src="/mnt/data/438099501_122106990716281239_3934765263170737335_n.png"
          alt="L'dolce"
          className="w-72 mb-8"
        />

        <h1 className="text-5xl md:text-7xl mb-4">Gelato, Klaargemaakt met Liefde</h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          Artisanal Italian gelato, handcrafted in Antwerp. Elegant flavors, unforgettable events, and premium ice bike catering.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-[#7d0c3d] text-white px-6 py-3 rounded-full">Bekijk Prijzen</button>
          <button className="border border-[#7d0c3d] px-6 py-3 rounded-full">Contacteer Ons</button>
        </div>
      </section>

      {/* Languages */}
      <section className="px-6 md:px-16 py-8 text-center border-y border-[#d8bcc7]">
        <p className="text-xl tracking-widest">NL • EN • FR • RO</p>
      </section>

      {/* Services */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl mb-4">Gelato Delivery</h3>
          <p>Freshly made artisan gelato delivered across Antwerp and surrounding areas.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl mb-4">Private Events</h3>
          <p>Weddings, birthdays, corporate events — served from our elegant ice bike.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl mb-4">Custom Flavors</h3>
          <p>Seasonal ingredients, handcrafted recipes, authentic Italian passion.</p>
        </div>
      </section>

      {/* Price List */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-4xl mb-8 text-center">Price List</h2>

        <div className="max-w-2xl mx-auto space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span>Small Cup</span>
            <span>€4.50</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Medium Cup</span>
            <span>€6.00</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Ice Bike Event Package</span>
            <span>From €350</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Private Delivery Box</span>
            <span>From €45</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-4xl text-center mb-8">Contact</h2>

        <form className="max-w-2xl mx-auto space-y-4">
          <input className="w-full p-4 rounded-xl border" placeholder="Your Name" />
          <input className="w-full p-4 rounded-xl border" placeholder="Email" />
          <textarea className="w-full p-4 rounded-xl border h-32" placeholder="Tell us about your event" />
          <button className="w-full bg-[#7d0c3d] text-white py-4 rounded-xl">
            Send Request
          </button>
        </form>
      </section>
    </div>
  );
}
