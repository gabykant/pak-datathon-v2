import { redirect } from 'next/navigation'
import { AuthLayout } from '@/components/auth/auth-layout'
import { LoginForm } from '@/components/auth/login-form'
import { getCurrentUser } from '@/lib/auth'

type LoginPageProps = {
  searchParams?: Promise<{
    next?: string
  }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedSearchParams = (await searchParams) || {}
  const nextPath = resolvedSearchParams.next || '/dashboard'
  const isAdminLogin = nextPath === '/admin'
  const user = await getCurrentUser()
  if (user) {
    redirect(nextPath)
  }

  return (
    <AuthLayout
      title={isAdminLogin ? 'Connexion administrateur' : 'Connexion'}
      subtitle={
        isAdminLogin
          ? 'Connectez-vous avec un compte ADMIN ou MODERATOR pour accéder à la gouvernance de la plateforme.'
          : 'Accédez à votre espace pour suivre les problèmes, données et solutions en cours.'
      }
    >
      <LoginForm />
    </AuthLayout>
  )
}
