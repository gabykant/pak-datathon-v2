'use client'

export function LogoutButton() {
  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/auth/login'
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg px-3 py-2 text-[var(--danger-500)] hover:bg-red-50"
    >
      Déconnexion
    </button>
  )
}