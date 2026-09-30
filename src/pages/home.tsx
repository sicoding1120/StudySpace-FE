import '../App.css'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-left text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5 font-bold text-slate-800 no-underline">
            <span className="grid size-9 place-items-center rounded-lg bg-emerald-700 text-lg text-white">S</span>
            <span>StudySpace</span>
          </a>
          <nav className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#home" className="text-emerald-800 no-underline">Beranda</a>
            <a href="#agenda" className="no-underline hover:text-emerald-800">Agenda</a>
            <span className="grid size-9 place-items-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900" aria-label="Profil Jamie">JD</span>
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-5 py-9 sm:px-8 sm:py-12">
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">Rabu, 30 September</p>
            <h1 className="!m-0 !text-3xl !font-bold !tracking-normal text-slate-900 sm:!text-4xl">Halo, Jamie!</h1>
            <p className="mt-2 text-slate-500">Siap melanjutkan progres belajarmu hari ini?</p>
          </div>
          <a href="#agenda" className="inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-emerald-800">
            Lihat agenda <span aria-hidden="true">→</span>
          </a>
        </section>
        </main>
        <section aria-label="Ringkasan belajar" className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Waktu belajar minggu ini</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">4,5 <span className="text-base font-medium text-slate-500">/ 6 jam</span></p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Target belajar mingguan" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full w-3/4 rounded-full bg-emerald-600" />
            </div>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Kursus aktif</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">3 <span className="text-base font-medium text-slate-500">kursus</span></p>
            <p className="mt-3 text-sm text-slate-500">Tetap konsisten, sedikit demi sedikit.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-slate-500">Hari beruntun belajar</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">4 <span className="text-base font-medium text-slate-500">hari</span></p>
            <p className="mt-3 text-sm text-slate-500">Kebiasaan baik sedang terbentuk.</p>
          </article>
        </section>

        <section id="agenda" className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="!m-0 !text-xl !font-bold !tracking-normal text-slate-900">Agenda hari ini</h2>
                <p className="mt-1 text-sm text-slate-500">Tiga langkah kecil untuk hari ini.</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">1 dari 3 selesai</span>
            </div>
            <div className="divide-y divide-slate-100">
              <label className="flex cursor-pointer items-center gap-3 py-4">
                <input type="checkbox" defaultChecked className="size-4 accent-emerald-700" />
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-800">Baca bab 4</span><span className="mt-1 block text-xs text-slate-500">Sastra Modern · 20 menit</span></span>
                <span className="text-xs text-slate-500">09.00</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 py-4">
                <input type="checkbox" className="size-4 accent-emerald-700" />
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-800">Ulangi catatan kuliah</span><span className="mt-1 block text-xs text-slate-500">Biologi Manusia · 30 menit</span></span>
                <span className="text-xs text-slate-500">10.30</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 py-4">
                <input type="checkbox" className="size-4 accent-emerald-700" />
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-slate-800">Buat kerangka esai</span><span className="mt-1 block text-xs text-slate-500">Sastra Modern · 45 menit</span></span>
                <span className="text-xs text-slate-500">13.00</span>
              </label>
            </div>
          </div>

          <aside className="rounded-xl bg-emerald-800 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Fokus hari ini</p>
            <h2 className="!mb-0 !mt-3 !text-2xl !font-semibold !tracking-normal text-white">Mulai dari satu hal.</h2>
            <p className="mt-3 text-sm leading-6 text-emerald-100">Pilih satu tugas dari agendamu, lalu berikan perhatian penuh selama 25 menit.</p>
            <a href="#agenda" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 no-underline hover:bg-emerald-50">
              Mulai belajar <span aria-hidden="true">→</span>
            </a>
          </aside>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-400">Belajar dengan ritmemu sendiri.</footer>
    </div>
  )
}

export default Home
