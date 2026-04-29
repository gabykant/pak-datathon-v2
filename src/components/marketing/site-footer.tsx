import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ink-200)] bg-[var(--sand-100)]">
  <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Colonne 1 */}
      <div className="space-y-3">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">
          PAK DataThon Platform
        </p>

        <p className="text-sm leading-relaxed text-[var(--ink-700)]">
          Une plateforme d’idéation, de gouvernance et d’exécution orientée impact
          pour l’écosystème logistique et supply chain.
        </p>
      </div>

      {/* Colonne 2 */}
      <div>
        <p className="mb-3 text-sm font-bold text-[var(--ink-900)]">
          Liens
        </p>

        <ul className="space-y-2 text-sm text-[var(--ink-700)]">
          <li>
            <Link href="/programme" className="hover:text-[var(--ink-900)]">
              Programme
            </Link>
          </li>

          <li>
            <Link href="/problematiques" className="hover:text-[var(--ink-900)]">
              Problématiques
            </Link>
          </li>

          <li>
            <Link
              href="/blog/problemes-rencontres"
              className="hover:text-[var(--ink-900)]"
            >
              Blog terrain
            </Link>
          </li>

          <li>
            <Link
              href="/guide-utilisation"
              className="hover:text-[var(--ink-900)]"
            >
              Guide d&apos;utilisation
            </Link>
          </li>

          <li>
            <Link href="/glossaire" className="hover:text-[var(--ink-900)]">
              Glossaire
            </Link>
          </li>
        </ul>
      </div>

      {/* Colonne 3 */}
      <div>
        <p className="mb-3 text-sm font-bold text-[var(--ink-900)]">
          Accès & conformité
        </p>

        <ul className="space-y-2 text-sm text-[var(--ink-700)]">
          <li>
            <Link href="/auth/login" className="hover:text-[var(--ink-900)]">
              Connexion
            </Link>
          </li>

          <li>
            <Link
              href="/auth/login?next=/admin"
              className="hover:text-[var(--ink-900)]"
            >
              Connexion admin
            </Link>
          </li>

          <li>
            <Link href="/auth/register" className="hover:text-[var(--ink-900)]">
              Inscription
            </Link>
          </li>

          <li>
            <Link
              href="/conditions-generales"
              className="hover:text-[var(--ink-900)]"
            >
              Conditions générales
            </Link>
          </li>

          <li>
            <Link
              href="/confidentialite"
              className="hover:text-[var(--ink-900)]"
            >
              Confidentialité & disclaimer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    // <footer className="border-t border-[var(--ink-200)] bg-[var(--sand-100)]">
    //   <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr,1fr,1fr] lg:px-8">
    //     <div className="space-y-3">
    //       <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">PAK DataThon Platform</p>
    //       <p className="max-w-xl text-sm leading-relaxed text-[var(--ink-700)]">
    //         Une plateforme d’idéation, de gouvernance et d’exécution orientée impact pour l’écosystème logistique et
    //         supply chain.
    //       </p>
    //     </div>
    //     <div className="space-y-2 text-sm">
    //       <p className="font-bold text-[var(--ink-900)]">Liens</p>
    //       <ul className="space-y-2 text-[var(--ink-700)]">
    //         <li>
    //           <Link href="/programme" className="hover:text-[var(--ink-900)]">
    //             Programme
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/problematiques" className="hover:text-[var(--ink-900)]">
    //             Problématiques
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/blog/problemes-rencontres" className="hover:text-[var(--ink-900)]">
    //             Blog terrain
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/guide-utilisation" className="hover:text-[var(--ink-900)]">
    //             Guide d&apos;utilisation
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/glossaire" className="hover:text-[var(--ink-900)]">
    //             Glossaire
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="space-y-2 text-sm">
    //       <p className="font-bold text-[var(--ink-900)]">Accès & conformité</p>
    //       <ul className="space-y-2 text-[var(--ink-700)]">
    //         <li>
    //           <Link href="/auth/login" className="hover:text-[var(--ink-900)]">
    //             Connexion
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/auth/login?next=/admin" className="hover:text-[var(--ink-900)]">
    //             Connexion admin
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/auth/register" className="hover:text-[var(--ink-900)]">
    //             Inscription
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/conditions-generales" className="hover:text-[var(--ink-900)]">
    //             Conditions générales
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/confidentialite" className="hover:text-[var(--ink-900)]">
    //             Confidentialité & disclaimer
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
  )
}
